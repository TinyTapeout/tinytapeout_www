// Logic table core: truth table -> minimised logic -> gate netlist -> Wokwi clipboard JSON.
// Pure functions only (no DOM), so they can be unit tested with vitest.
//
// Conventions:
// - n inputs, rows 0 .. 2^n - 1. Input i (0 = leftmost column) in row r is (r >> (n - 1 - i)) & 1.
// - A truth table column is an array of 2^n cells, one per row: true (1), false (0)
//   or null (x, don't care: the minimiser may treat it as 0 or 1, whichever is cheaper).

export const MAX_INPUTS = 4;
export const MAX_OUTPUTS = 8;

export function inputBit(r, i, n) {
  return (r >> (n - 1 - i)) & 1;
}

// ---------------------------------------------------------------------------
// Minimisation (Quine-McCluskey prime implicants + minimum-cost cover)

function primeImplicants(minterms, n) {
  let cur = new Map();
  minterms.forEach((m) => cur.set(m.toString(2).padStart(n, '0'), [m]));
  const primes = [];
  while (cur.size) {
    const next = new Map();
    const used = new Set();
    const keys = Array.from(cur.keys());
    for (let i = 0; i < keys.length; i++) {
      for (let j = i + 1; j < keys.length; j++) {
        const a = keys[i];
        const b = keys[j];
        let diff = -1;
        let count = 0;
        for (let k = 0; k < n; k++) {
          if (a[k] !== b[k]) {
            if (a[k] === '-' || b[k] === '-') {
              count = 2;
              break;
            }
            count++;
            diff = k;
          }
        }
        if (count === 1) {
          const merged = a.slice(0, diff) + '-' + a.slice(diff + 1);
          if (!next.has(merged)) {
            next.set(merged, Array.from(new Set(cur.get(a).concat(cur.get(b)))));
          }
          used.add(a);
          used.add(b);
        }
      }
    }
    keys.forEach((k) => {
      if (!used.has(k)) primes.push({ bits: k, cov: cur.get(k) });
    });
    cur = next;
  }
  return primes;
}

function literalCount(p) {
  let c = 0;
  for (const ch of p.bits) if (ch !== '-') c++;
  return c;
}

function combinations(arr, k, start, acc, cb) {
  if (acc.length === k) {
    cb(acc.slice());
    return;
  }
  for (let i = start; i < arr.length; i++) {
    acc.push(arr[i]);
    combinations(arr, k, i + 1, acc, cb);
    acc.pop();
  }
}

function selectCover(primes, minterms) {
  // Essential prime implicants first, then the cheapest combination of the rest.
  const chosen = [];
  minterms.forEach((m) => {
    const covering = primes.filter((p) => p.cov.includes(m));
    if (covering.length === 1 && !chosen.includes(covering[0])) chosen.push(covering[0]);
  });
  const remaining = minterms.filter((m) => !chosen.some((p) => p.cov.includes(m)));
  if (!remaining.length) return chosen;
  const rest = primes.filter(
    (p) => !chosen.includes(p) && p.cov.some((m) => remaining.includes(m)),
  );
  let best = null;
  for (let size = 1; size <= rest.length && !best; size++) {
    combinations(rest, size, 0, [], (combo) => {
      if (remaining.every((m) => combo.some((p) => p.cov.includes(m)))) {
        const cost = combo.reduce((s, p) => s + literalCount(p), 0);
        if (!best || cost < best.cost) best = { combo, cost };
      }
    });
  }
  return chosen.concat(best ? best.combo : []);
}

// Sum-of-products terms covering the minterms, free to also cover the don't-cares.
// Returns [{ lits: [{ i, neg }] }]
function sopTerms(minterms, n, dontCares = []) {
  return selectCover(primeImplicants(minterms.concat(dontCares), n), minterms)
    .map((p) => p.bits)
    .sort(
      (a, b) =>
        a.replace(/-/g, '').length - b.replace(/-/g, '').length || (a < b ? 1 : a > b ? -1 : 0),
    )
    .map((bits) => {
      const lits = [];
      for (let i = 0; i < n; i++) if (bits[i] !== '-') lits.push({ i, neg: bits[i] === '0' });
      return { lits };
    });
}

// Approximate gate count: 2-input ANDs + input inverters + 2-input ORs.
function sopCost(terms) {
  const negs = new Set();
  let c = 0;
  terms.forEach((t) => {
    t.lits.forEach((l) => {
      if (l.neg) negs.add(l.i);
    });
    c += Math.max(0, t.lits.length - 1);
  });
  return c + negs.size + Math.max(0, terms.length - 1);
}

// Is the column the parity (XOR) of two or more inputs, or its inverse?
// Don't-care rows match either way. Prefers the fewest inputs.
function findXor(column, n) {
  const rows = 1 << n;
  const masks = [];
  for (let mask = 1; mask < 1 << n; mask++) masks.push(mask);
  const bitCount = (x) => x.toString(2).replace(/0/g, '').length;
  masks.sort((a, b) => bitCount(a) - bitCount(b) || b - a);
  for (const mask of masks) {
    const vars = [];
    for (let i = 0; i < n; i++) if (mask & (1 << (n - 1 - i))) vars.push(i);
    if (vars.length < 2) continue;
    let same = true;
    let opposite = true;
    for (let r = 0; r < rows; r++) {
      let p = 0;
      vars.forEach((i) => {
        p ^= inputBit(r, i, n);
      });
      if (column[r] === null || column[r] === undefined) continue;
      if (column[r] !== (p === 1)) same = false;
      else opposite = false;
    }
    if (same) return { vars, inv: false };
    if (opposite) return { vars, inv: true };
  }
  return null;
}

// Plan for one output column:
//   { kind: 'const', value: 0 | 1 }
//   { kind: 'xor', vars: [i, ...], inv }          Y = (x0 ^ x1 ^ ...), inverted if inv
//   { kind: 'sop', terms: [{ lits }], inv }       Y = sum of products, inverted if inv
export function planOutput(column, n) {
  const rows = 1 << n;
  const ones = [];
  const zeros = [];
  const dcs = [];
  for (let r = 0; r < rows; r++) {
    if (column[r] === null || column[r] === undefined) dcs.push(r);
    else (column[r] ? ones : zeros).push(r);
  }
  if (!ones.length) return { kind: 'const', value: 0 };
  if (!zeros.length) return { kind: 'const', value: 1 };

  let best = { kind: 'sop', terms: sopTerms(ones, n, dcs), inv: false };
  let bestCost = sopCost(best.terms);

  // Implementing the zeros and inverting can be cheaper. An inverted single product
  // ends in a NAND; an inverted sum needs a NOT after the last OR.
  const cterms = sopTerms(zeros, n, dcs);
  const singleLiteral = cterms.length === 1 && cterms[0].lits.length === 1;
  const invCost = sopCost(cterms) + (cterms.length > 1 ? 1 : 0);
  if (!singleLiteral && invCost < bestCost) {
    best = { kind: 'sop', terms: cterms, inv: true };
    bestCost = invCost;
  }

  // A chain of XOR gates (plus a NOT if inverted) wins ties: it's the clearer circuit.
  const xor = findXor(column, n);
  if (xor && xor.vars.length - 1 + (xor.inv ? 1 : 0) <= bestCost) {
    return { kind: 'xor', vars: xor.vars, inv: xor.inv };
  }
  return best;
}

export function planAll(columns, n) {
  return columns.map((col) => planOutput(col, n));
}

// Evaluate a plan directly (used to check the minimiser).
export function evalPlan(plan, bits) {
  if (plan.kind === 'const') return plan.value === 1;
  if (plan.kind === 'xor') {
    let p = 0;
    plan.vars.forEach((i) => {
      p ^= bits[i];
    });
    return (p === 1) !== plan.inv;
  }
  const v = plan.terms.some((t) => t.lits.every((l) => (bits[l.i] === 1) !== l.neg));
  return v !== plan.inv;
}

// ---------------------------------------------------------------------------
// Netlist built only from gates Wokwi provides: 2-input AND / OR / XOR / NAND, NOT, buffer.

const WOKWI = {
  and: { type: 'wokwi-gate-and-2', ins: ['A', 'B'], out: 'OUT' },
  or: { type: 'wokwi-gate-or-2', ins: ['A', 'B'], out: 'OUT' },
  xor: { type: 'wokwi-gate-xor-2', ins: ['A', 'B'], out: 'OUT' },
  nand: { type: 'wokwi-gate-nand-2', ins: ['A', 'B'], out: 'OUT' },
  not: { type: 'wokwi-gate-not', ins: ['IN'], out: 'OUT' },
  buf: { type: 'wokwi-gate-buffer', ins: ['IN'], out: 'OUT' },
  vcc: { type: 'wokwi-vcc', ins: [], out: 'VCC' },
  gnd: { type: 'wokwi-gnd', ins: [], out: 'GND' },
};

export const GATE_KINDS = ['not', 'and', 'nand', 'or', 'xor'];

export function safeId(name) {
  return String(name).replace(/[^A-Za-z0-9_]/g, '_') || 'x';
}

// parts: [{ id, kind, ins: [sourcePartId, ...], role?, name? }] in topological order.
export function buildNetlist(plans, inNames, outNames) {
  const parts = [];
  const counters = {};
  const used = new Set();
  const uniqueId = (base) => {
    let id = base;
    let k = 2;
    while (used.has(id)) id = base + '_' + k++;
    used.add(id);
    return id;
  };
  const add = (kind, ins, extra = {}) => {
    counters[kind] = (counters[kind] || 0) + 1;
    const id = uniqueId(extra.id || kind + counters[kind]);
    parts.push({ ...extra, id, kind, ins });
    return id;
  };

  // Every part gets a `key` naming its place in the circuit. layoutDiagram uses the same
  // keys, so the pasted Wokwi circuit can be laid out exactly like the drawing.
  const inIds = inNames.map((name, i) =>
    add('buf', [], { id: 'in_' + safeId(name), role: 'input', name, key: `in:${i}` }),
  );
  const notIds = [];
  const literal = (l) => {
    if (!l.neg) return inIds[l.i];
    if (!notIds[l.i])
      notIds[l.i] = add('not', [inIds[l.i]], {
        id: 'not_' + safeId(inNames[l.i]),
        role: 'inverter',
        key: `in:${l.i}:not`,
      });
    return notIds[l.i];
  };

  plans.forEach((plan, o) => {
    const name = outNames[o];
    let src;
    if (plan.kind === 'const') {
      src = add(plan.value ? 'vcc' : 'gnd', [], {
        id: (plan.value ? 'vcc_' : 'gnd_') + safeId(name),
        key: `o:${o}:const`,
      });
    } else if (plan.kind === 'xor') {
      src = inIds[plan.vars[0]];
      for (let j = 1; j < plan.vars.length; j++) {
        src = add('xor', [src, inIds[plan.vars[j]]], { key: `o:${o}:t:0:${j - 1}` });
      }
      if (plan.inv) src = add('not', [src], { key: `o:${o}:not` });
    } else {
      const single = plan.terms.length === 1;
      const termNets = plan.terms.map((t, ti) => {
        let acc = literal(t.lits[0]);
        for (let j = 1; j < t.lits.length; j++) {
          const last = j === t.lits.length - 1;
          acc = add(plan.inv && single && last ? 'nand' : 'and', [acc, literal(t.lits[j])], {
            key: `o:${o}:t:${ti}:${j - 1}`,
          });
        }
        return acc;
      });
      src = termNets[0];
      for (let j = 1; j < termNets.length; j++) {
        src = add('or', [src, termNets[j]], { key: `o:${o}:or:${j - 1}` });
      }
      if (plan.inv && !single) src = add('not', [src], { key: `o:${o}:not` });
    }
    add('buf', [src], { id: 'out_' + safeId(name), role: 'output', name, key: `o:${o}:out` });
  });

  return {
    parts,
    inputs: inIds,
    outputs: parts.filter((p) => p.role === 'output').map((p) => p.id),
  };
}

export function gateCounts(netlist) {
  const counts = {};
  netlist.parts.forEach((p) => {
    if (GATE_KINDS.includes(p.kind)) counts[p.kind] = (counts[p.kind] || 0) + 1;
  });
  return counts;
}

// Simulate the netlist. bits: array of 0/1 per input. Returns array of booleans per output.
export function simulate(netlist, bits) {
  const v = {};
  netlist.parts.forEach((p) => {
    const a = p.ins.map((id) => v[id]);
    switch (p.kind) {
      case 'buf':
        v[p.id] = p.role === 'input' ? !!bits[netlist.inputs.indexOf(p.id)] : a[0];
        break;
      case 'not':
        v[p.id] = !a[0];
        break;
      case 'and':
        v[p.id] = a[0] && a[1];
        break;
      case 'nand':
        v[p.id] = !(a[0] && a[1]);
        break;
      case 'or':
        v[p.id] = a[0] || a[1];
        break;
      case 'xor':
        v[p.id] = a[0] !== a[1];
        break;
      case 'vcc':
        v[p.id] = true;
        break;
      case 'gnd':
        v[p.id] = false;
        break;
      default:
        throw new Error('unknown part kind ' + p.kind);
    }
    if (v[p.id] === undefined) throw new Error('unconnected input on ' + p.id);
  });
  return netlist.outputs.map((id) => v[id]);
}

// ---------------------------------------------------------------------------
// Wokwi clipboard JSON (same shape as diagram.json: parts + connections).

const WIRE_ROUTE = ['h10', '*', 'h-10'];

// Wire colours by what they connect, following wokwi-lookup-table-generator's scheme, so
// bigger circuits are easier to follow in Wokwi.
export function wireColor(src, dst) {
  if (src.kind === 'vcc') return 'red';
  if (src.kind === 'gnd') return 'black';
  if (dst.role === 'output') return 'cyan';
  if (src.role === 'input') return 'brown';
  if (src.role === 'inverter') return 'blue';
  if (dst.kind === 'or') return src.kind === 'or' ? 'green' : 'purple';
  if (src.kind === 'or') return 'green'; // sum into its output inverter
  return 'orange'; // gate to gate inside a product or XOR chain
}

// Wokwi parts are bigger than the gates in the drawing, so drawing coordinates are scaled up.
export const WOKWI_SCALE = 2;

// Wokwi parts are placed where the drawing (layoutDiagram) puts them, so the pasted circuit
// looks like the one on the page: inputs on the left, outputs on the right.
export function toWokwi(netlist, layout) {
  const byId = new Map(netlist.parts.map((p) => [p.id, p]));
  const at = new Map();
  layout.gates.forEach((g) => at.set(g.key, { x: g.x, y: g.y }));
  layout.tags.forEach((t) => at.set(t.key, { x: t.x, y: t.y }));
  // Pins mark where a wire ends; inputs sit just left of theirs, outputs just right.
  layout.pins.forEach((p) => {
    const input = p.key.startsWith('in:');
    at.set(p.key, { x: input ? p.x - 34 : p.x + 6, y: p.y - 12 });
  });

  const S = WOKWI_SCALE;
  const parts = [];
  netlist.parts.forEach((p) => {
    const pos = at.get(p.key);
    if (!pos) throw new Error('no position for ' + p.key);
    const left = Math.round(pos.x * S);
    const top = Math.round(pos.y * S);
    parts.push({ type: WOKWI[p.kind].type, id: p.id, top, left, attrs: {} });
    if (p.role === 'input' || p.role === 'output') {
      const textLeft = p.role === 'input' ? left - 16 - String(p.name).length * 10 : left + 80;
      parts.push({
        type: 'wokwi-text',
        id: 'label_' + p.id,
        top: top + 14,
        left: textLeft,
        attrs: { text: p.name },
      });
    }
  });

  const connections = [];
  netlist.parts.forEach((p) => {
    p.ins.forEach((src, j) => {
      const s = byId.get(src);
      connections.push([
        `${src}:${WOKWI[s.kind].out}`,
        `${p.id}:${WOKWI[p.kind].ins[j]}`,
        wireColor(s, p),
        WIRE_ROUTE,
      ]);
    });
  });

  return {
    version: 1,
    author: 'Tiny Tapeout logic table',
    editor: 'wokwi',
    parts,
    connections,
  };
}

// ---------------------------------------------------------------------------
// Schematic layout for the on-page drawing. Inputs run down vertical rails on the left,
// each output is a column of AND chains feeding an OR chain, with an optional NOT at the end.

// Which inputs the reduced logic actually uses (an output can ignore some inputs).
export function inputsUsed(plans, n) {
  const used = Array(n).fill(false);
  plans.forEach((p) => {
    if (p.kind === 'xor') p.vars.forEach((i) => (used[i] = true));
    if (p.kind === 'sop') p.terms.forEach((t) => t.lits.forEach((l) => (used[l.i] = true)));
  });
  return used;
}

export function layoutDiagram(plans, inNames, outNames) {
  const n = inNames.length;
  const GW = 44;
  const NW = 40;
  const segs = [];
  const dots = [];
  const pins = [];
  const gates = [];
  const labels = [];
  const tags = [];
  const hs = (x1, x2, y) => {
    if (x1 !== x2) segs.push({ x1: Math.min(x1, x2), y1: y, x2: Math.max(x1, x2), y2: y });
  };
  const vs = (x, y1, y2) => {
    if (y1 !== y2) segs.push({ x1: x, y1: Math.min(y1, y2), x2: x, y2: Math.max(y1, y2) });
  };
  const route = (x1, y1, x2, y2, bx) => {
    if (y1 === y2) {
      hs(x1, x2, y1);
      return;
    }
    hs(x1, bx, y1);
    vs(bx, y1, y2);
    hs(bx, x2, y2);
  };
  const dot = (x, y) => dots.push({ x, y });

  const outs = plans.map((p, o) => {
    if (p.kind === 'const')
      return { name: outNames[o], konst: p.value, terms: [], xor: false, inv: false };
    if (p.kind === 'xor') {
      return {
        name: outNames[o],
        konst: null,
        terms: [{ lits: p.vars.map((i) => ({ i, neg: false })) }],
        xor: true,
        inv: p.inv,
      };
    }
    return { name: outNames[o], konst: null, terms: p.terms, xor: false, inv: p.inv };
  });
  // Inverted XORs and inverted sums get a NOT on the output; inverted single products use a NAND.
  outs.forEach((o) => {
    o.outNot = o.konst === null && o.inv && (o.xor || o.terms.length > 1);
  });

  const needNot = Array(n).fill(false);
  outs.forEach((o) =>
    o.terms.forEach((t) =>
      t.lits.forEach((l) => {
        if (l.neg) needNot[l.i] = true;
      }),
    ),
  );
  // Inputs come in from the left, one row each (A at the top). Each input feeds a vertical
  // rail, and an inverted input also goes through a NOT gate to a second rail. Rails are
  // placed right to left (A's rightmost) so no input wire has to cross another input's rail.
  const maxIn = Math.max(1, ...inNames.map((s) => String(s).length));
  const PINX = 14 + maxIn * 9;
  const inY = (i) => 16 + i * 30;
  const rail = [];
  let x = PINX + 28;
  for (let i = n - 1; i >= 0; i--) {
    const y = inY(i);
    const r = { y, pos: x, neg: null, posMax: y, negMax: y };
    if (needNot[i]) {
      r.neg = x + 18 + NW + 18;
      x = r.neg + 28;
    } else {
      x += 28;
    }
    rail[i] = r;
  }
  const gx0 = x + 8;
  const maxChain = Math.max(
    0,
    ...outs.map((o) => Math.max(0, ...o.terms.map((t) => t.lits.length - 1))),
  );
  const ox0 = gx0 + maxChain * (GW + 24) + 24;
  const maxOr = Math.max(0, ...outs.map((o) => Math.max(0, o.terms.length - 1)));
  const anyOutNot = outs.some((o) => o.outNot);
  const notX = ox0 + maxOr * (GW + 28) + 16;
  const OUTX = anyOutNot ? notX + NW + 24 : ox0 + maxOr * (GW + 28) + 20;

  const sx = (s) => (s.lit ? (s.lit.neg ? rail[s.lit.i].neg : rail[s.lit.i].pos) : s.x);
  const conn = (s, x2, y2, bx) => {
    if (s.lit) {
      const r = rail[s.lit.i];
      dot(sx(s), s.y);
      if (s.lit.neg) r.negMax = Math.max(r.negMax, s.y);
      else r.posMax = Math.max(r.posMax, s.y);
    }
    route(sx(s), s.y, x2, y2, bx);
  };

  let y = inY(n - 1) + 36;
  outs.forEach((o, oi) => {
    if (oi > 0) y += 20;
    let out;
    if (o.konst !== null) {
      const yy = y + 14;
      tags.push({ x: gx0, y: yy - 11, text: o.konst ? 'VCC' : 'GND', key: `o:${oi}:const` });
      out = { x: gx0 + 44, y: yy };
      y += 40;
    } else {
      const T = [];
      o.terms.forEach((t, ti) => {
        const k = t.lits.length;
        if (k === 1) {
          T.push({ lit: t.lits[0], y: y + 12 });
          y += 36;
          return;
        }
        const yl = [];
        for (let j = 0; j < k; j++) yl.push(y + 12 + j * 16);
        for (let j = 0; j < k - 1; j++) {
          const gx = gx0 + j * (GW + 24);
          const c = yl[j + 1] - 8;
          const last = j === k - 2;
          const kind = o.xor ? 'xor' : o.inv && last && o.terms.length === 1 ? 'nand' : 'and';
          gates.push({ kind, x: gx, y: c - 16, key: `o:${oi}:t:${ti}:${j}` });
          if (j === 0) conn({ lit: t.lits[0], y: yl[0] }, gx, yl[0], 0);
          else route(gx0 + (j - 1) * (GW + 24) + GW, yl[j] - 8, gx, yl[j], gx - 10);
          conn({ lit: t.lits[j + 1], y: yl[j + 1] }, gx, yl[j + 1], 0);
        }
        T.push({ x: gx0 + (k - 2) * (GW + 24) + GW, y: yl[k - 1] - 8 });
        y = yl[k - 1] + 24;
      });
      if (T.length === 1) out = T[0];
      else {
        let prev = T[0];
        for (let j = 0; j < T.length - 1; j++) {
          const gx = ox0 + j * (GW + 28);
          const c = T[j + 1].y - 8;
          gates.push({ kind: 'or', x: gx, y: c - 16, key: `o:${oi}:or:${j}` });
          conn(prev, gx, c - 8, gx - 12);
          conn(T[j + 1], gx, c + 8, 0);
          prev = { x: gx + GW, y: c };
        }
        out = prev;
      }
      if (o.outNot) {
        conn(out, notX, out.y, 0);
        gates.push({ kind: 'not', x: notX, y: out.y - 12, key: `o:${oi}:not` });
        out = { x: notX + NW, y: out.y };
      }
    }
    conn(out, OUTX, out.y, 0);
    pins.push({ x: OUTX, y: out.y, key: `o:${oi}:out` });
    labels.push({ x: OUTX + 10, y: out.y, text: o.name, over: false, anchor: 'start' });
  });

  const used = inputsUsed(plans, n);
  rail.forEach((r, i) => {
    pins.push({ x: PINX, y: r.y, unused: !used[i], key: `in:${i}` });
    labels.push({
      x: PINX - 10,
      y: r.y,
      text: inNames[i],
      over: false,
      anchor: 'end',
      unused: !used[i],
    });
    if (!used[i]) return;
    hs(PINX, r.neg !== null ? r.pos + 18 : r.pos, r.y);
    vs(r.pos, r.y, r.posMax);
    if (r.neg !== null) {
      if (r.posMax > r.y) dot(r.pos, r.y);
      gates.push({ kind: 'not', x: r.pos + 18, y: r.y - 12, key: `in:${i}:not` });
      hs(r.pos + 18 + NW, r.neg, r.y);
      vs(r.neg, r.y, r.negMax);
      labels.push({ x: r.neg + 4, y: r.y - 10, text: inNames[i], over: true, anchor: 'start' });
    }
  });

  const maxLabel = Math.max(1, ...outNames.map((s) => String(s).length));
  return { w: OUTX + 24 + maxLabel * 9, h: y + 8, segs, dots, pins, gates, labels, tags };
}

// ---------------------------------------------------------------------------
// Truth tables in wokwi-lookup-table-generator's JSON format
// (https://github.com/maehw/wokwi-lookup-table-generator):
//   { "version": 1, "inputs": ["a", "b"], "outputs": { "S": [0, 1, 1, 0], ... } }
// Don't-care cells are written as "x"; that generator itself only accepts 0 and 1.

export function toLutJson(table, description) {
  const outputs = {};
  table.outNames.forEach((name, o) => {
    outputs[name] = table.columns[o].map((v) => (v === null || v === undefined ? 'x' : v ? 1 : 0));
  });
  const json = { version: 1 };
  if (description) json.description = description;
  json.inputs = table.inNames.slice();
  json.outputs = outputs;
  return json;
}

function parseCell(v, where) {
  if (v === 1 || v === true || v === '1') return true;
  if (v === 0 || v === false || v === '0') return false;
  if (v === null || (typeof v === 'string' && ['x', 'X', '-', '?'].includes(v))) return null;
  throw new Error(`${where}: expected 0, 1 or "x" but found ${JSON.stringify(v)}`);
}

export function fromLutJson(json) {
  const obj = typeof json === 'string' ? JSON.parse(json) : json;
  if (!obj || typeof obj !== 'object') throw new Error('Expected a JSON object');
  const inNames = obj.inputs;
  if (!Array.isArray(inNames) || inNames.length < 1 || inNames.length > MAX_INPUTS) {
    throw new Error(`"inputs" must list 1 to ${MAX_INPUTS} input names`);
  }
  inNames.forEach((name) => {
    if (typeof name !== 'string' || !name.trim()) throw new Error('Input names must be text');
  });
  if (new Set(inNames).size !== inNames.length) throw new Error('Input names must be different');
  if (!obj.outputs || typeof obj.outputs !== 'object' || Array.isArray(obj.outputs)) {
    throw new Error('"outputs" must be an object of output name to list of values');
  }
  const outNames = Object.keys(obj.outputs);
  if (outNames.length < 1 || outNames.length > MAX_OUTPUTS) {
    throw new Error(`"outputs" must have 1 to ${MAX_OUTPUTS} outputs`);
  }
  const rows = 1 << inNames.length;
  const columns = outNames.map((name) => {
    const values = obj.outputs[name];
    if (!Array.isArray(values) || values.length !== rows) {
      throw new Error(`Output "${name}" needs ${rows} values, one per row`);
    }
    return values.map((v, r) => parseCell(v, `Output "${name}", row ${r}`));
  });
  return { inNames: inNames.map(String), outNames, columns };
}

// ---------------------------------------------------------------------------
// Changing the size of a table without losing what the user typed in.
// A new input becomes the rightmost column; the outputs don't depend on it yet, so each
// old row becomes two rows with the same outputs. Removing an input removes the rightmost
// column and keeps the rows where it was 0. New outputs start as all 0.

function nextName(used, candidates, prefix) {
  const free = candidates.find((c) => !used.includes(c));
  if (free) return free;
  let k = 0;
  while (used.includes(prefix + k)) k++;
  return prefix + k;
}

export function resizeTable(table, n, m) {
  n = Math.max(1, Math.min(MAX_INPUTS, n));
  m = Math.max(1, Math.min(MAX_OUTPUTS, m));
  const inNames = table.inNames.slice();
  const outNames = table.outNames.slice();
  let columns = table.columns.map((c) => c.slice());
  while (inNames.length < n) {
    inNames.push(nextName(inNames, ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'], 'I'));
    columns = columns.map((c) => c.flatMap((v) => [v, v]));
  }
  while (inNames.length > n) {
    inNames.pop();
    columns = columns.map((c) => c.filter((_, r) => r % 2 === 0));
  }
  const rows = 1 << n;
  while (outNames.length < m) {
    outNames.push(nextName(outNames, [], 'Y'));
    columns.push(Array(rows).fill(false));
  }
  outNames.length = m;
  columns.length = m;
  return { inNames, outNames, columns };
}
