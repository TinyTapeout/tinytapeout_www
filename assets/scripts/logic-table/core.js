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
  junction: { type: 'wokwi-junction', ins: ['J'], out: 'J' },
};

// The 7-segment display's segments, in the order the Tiny Tapeout template wires uo_out[0..7]
// to them.
export const SEGMENTS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'DP'];

// The value of the inputs as a number; the first input is the MSB.
export function inputValue(bits) {
  return bits.reduce((acc, v) => acc * 2 + (v ? 1 : 0), 0);
}

export const GATE_KINDS = ['not', 'and', 'nand', 'or', 'xor'];

export function safeId(name) {
  return String(name).replace(/[^A-Za-z0-9_]/g, '_') || 'x';
}

// Pair up items, then the pairs, and so on, into a balanced tree of 2-input gates, so a sum of
// many terms needs few gates in a row. Returns the gates in the order they're made, as [a, b]
// indexes: 0 .. count-1 are the items and count + j is gate j.
export function pairTree(count) {
  const gates = [];
  let level = Array.from({ length: count }, (_, k) => k);
  while (level.length > 1) {
    const up = [];
    for (let k = 0; k + 1 < level.length; k += 2) {
      gates.push([level[k], level[k + 1]]);
      up.push(count + gates.length - 1);
    }
    if (level.length % 2) up.push(level[level.length - 1]);
    level = up;
  }
  return gates;
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
      const nets = termNets.slice();
      pairTree(termNets.length).forEach(([a, b], j) => {
        nets.push(add('or', [nets[a], nets[b]], { key: `o:${o}:or:${j}` }));
      });
      src = nets[nets.length - 1];
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

// Wires are green like the drawing on the page, apart from power: red from VCC, black to GND.
export function wireColor(src, dst) {
  if (src.kind === 'vcc') return 'red';
  if (src.kind === 'gnd' || (dst && dst.kind === 'gnd')) return 'black';
  return 'green';
}

// Wokwi snaps parts and wires to a 0.1 inch grid of 9.6px. Parts pasted off the grid get
// snapped, but their wires are drawn for the old position until a part is moved, so every
// part position, pin and wire corner here is kept on the grid.
const GRID = 9.6;

// Geometry of Wokwi's gate and buffer parts, measured from pastes into Wokwi: 96px (ten grid
// steps) wide, inputs on the left edge, output on the right edge two grid steps below the top,
// with the A and B inputs one grid step above and below it.
const PART_W = 96;
const PIN_MID = 2 * GRID;
const PIN_GAP = GRID;
// A junction is a dot with one pin, J, in the middle of a 9.6px square, so Wokwi keeps it half a
// grid step off the grid with its pin on the grid. In the paste the inputs and outputs are
// junctions: one pin to wire ui_in or uo_out to, which every wire on that signal shares.
const JUNCTION = GRID / 2;

// The LED on each output, arranged by hand in Wokwi: the LED stands above the output with its
// anode (25, 42 from its corner, from @wokwi/elements) straight above the output's junction, and
// its cathode goes left to a ground symbol turned to point left. Where a turned ground symbol's
// pin ends up isn't known, so it goes exactly where it was put by hand, relative to the LED.
const LED_A = { x: 25, y: 42 };
const LED_RISE = 4 * GRID; // from the output up to the LED's anode
const LED_GND = { left: -22.7, top: 23.3 };
const round1 = (v) => Math.round(v * 10) / 10;
const round2 = (v) => Math.round(v * 100) / 100;
const snap = (v) => round1(Math.round(v / GRID) * GRID);
const move = (dir, d) => (Math.abs(d) < 0.005 ? null : dir + round2(d));

// A wire through a list of points, from the source pin to the target pin.
const routeThrough = (points) => {
  const moves = [];
  for (let k = 1; k < points.length; k++) {
    moves.push(move('h', points[k].x - points[k - 1].x), move('v', points[k].y - points[k - 1].y));
  }
  return [...moves.filter(Boolean), '*'];
};

// How tangled are these wires? Each wire is a list of points. Wires on the same net (nets[k],
// if given) may share a path, so they're never counted against each other. A clash (two wires running along
// each other, or one ending on another) looks like a connection, so it's much worse than a
// crossing.
export function wireTangles(wires, nets = []) {
  const runs = wires.map((pts) =>
    pts.slice(1).map((p, k) => {
      const q = pts[k];
      return Math.abs(q.y - p.y) < 0.01
        ? { h: true, at: p.y, lo: Math.min(p.x, q.x), hi: Math.max(p.x, q.x) }
        : { h: false, at: p.x, lo: Math.min(p.y, q.y), hi: Math.max(p.y, q.y) };
    }),
  );
  const inside = (v, r, e) => v > r.lo + e && v < r.hi - e;
  let crossings = 0;
  let clashes = 0;
  for (let a = 0; a < runs.length; a++) {
    for (let b = a + 1; b < runs.length; b++) {
      if (nets[a] !== undefined && nets[a] === nets[b]) continue;
      for (const s of runs[a]) {
        for (const t of runs[b]) {
          if (s.h === t.h) {
            if (Math.abs(s.at - t.at) < 0.5 && Math.min(s.hi, t.hi) - Math.max(s.lo, t.lo) > -0.5)
              clashes++;
          } else if (inside(t.at, s, -0.5) && inside(s.at, t, -0.5)) {
            if (inside(t.at, s, 0.5) && inside(s.at, t, 0.5)) crossings++;
            else clashes++;
          }
        }
      }
    }
  }
  return { crossings, clashes };
}

// Swap pairs of items in the lists while that tangles the wires less. wiresFor() gives the wires
// for the lists as they are now (null for a wire that doesn't count), on the given nets.
// Returns the final cost: clashes count far more than crossings.
function untangle(lists, wiresFor, nets) {
  const cost = () => {
    const wires = wiresFor();
    const keep = wires.map((w, k) => k).filter((k) => wires[k]);
    const t = wireTangles(
      keep.map((k) => wires[k]),
      keep.map((k) => nets[k]),
    );
    return t.clashes * 1000 + t.crossings;
  };
  let c = cost();
  for (let improved = true; improved; ) {
    improved = false;
    lists.forEach((list) => {
      for (let i = 0; i < list.length; i++) {
        for (let j = i + 1; j < list.length; j++) {
          [list[i], list[j]] = [list[j], list[i]];
          const c2 = cost();
          if (c2 < c) {
            c = c2;
            improved = true;
          } else {
            [list[i], list[j]] = [list[j], list[i]];
          }
        }
      }
    });
  }
  return c;
}

// Wokwi parts are placed where the drawing (layoutDiagram) puts them, and the wires follow
// the drawing's routes, so the pasted circuit looks like the one on the page: inputs on the
// left feeding one vertical rail each, outputs on the right. Every output lights an LED, so the
// circuit can be tried out straight after pasting. With opts.stacked (for the 7-segment display)
// the outputs instead end in a stack of buffers spaced like the Tiny Tapeout output block's
// pins, output 0 at the top, ready to wire straight across to uo_out[0..7] and the template's
// display.
export function toWokwi(netlist, layout, opts = {}) {
  const byId = new Map(netlist.parts.map((p) => [p.id, p]));
  const at = new Map();
  layout.gates.forEach((g) => at.set(g.key, { left: g.x, top: g.y }));
  layout.tags.forEach((t) => at.set(t.key, { left: t.x, top: t.y }));
  // Inputs and outputs are junctions on the drawing's pins.
  layout.pins.forEach((p) => at.set(p.key, { pin: { x: p.x, y: p.y } }));
  const kindOf = (p) => (p.role === 'input' || p.role === 'output' ? 'junction' : p.kind);

  const parts = [];
  const pos = new Map();
  const partOf = new Map();
  netlist.parts.forEach((p) => {
    const where = at.get(p.key);
    if (!where) throw new Error('no position for ' + p.key);
    const left = where.pin ? round1(snap(where.pin.x) - JUNCTION) : snap(where.left);
    const top = where.pin ? round1(snap(where.pin.y) - JUNCTION) : snap(where.top);
    pos.set(p.id, { left, top });
    const part = { type: WOKWI[kindOf(p)].type, id: p.id, top, left, attrs: {} };
    partOf.set(p.id, part);
    parts.push(part);
    if (p.role === 'input') {
      // The bit number says which ui_in pin to wire it to: bit 0 is the LSB.
      const bit = netlist.inputs.length - 1 - netlist.inputs.indexOf(p.id);
      const text = `${p.name} (bit ${bit})`;
      parts.push({
        type: 'wokwi-text',
        id: 'label_' + p.id,
        top: snap(top + JUNCTION - GRID),
        left: snap(left - 8 - text.length * 10),
        attrs: { text },
      });
    }
  });

  const junctionPin = (id) => ({
    x: round1(pos.get(id).left + JUNCTION),
    y: round1(pos.get(id).top + JUNCTION),
  });
  const outPin = (id) =>
    kindOf(byId.get(id)) === 'junction'
      ? junctionPin(id)
      : { x: pos.get(id).left + PART_W, y: pos.get(id).top + PIN_MID };
  const inPin = (part, j) => {
    if (kindOf(part) === 'junction') return junctionPin(part.id);
    const { left, top } = pos.get(part.id);
    const two = WOKWI[part.kind].ins.length === 2;
    return { x: left, y: top + PIN_MID + (two ? (j ? PIN_GAP : -PIN_GAP) : 0) };
  };
  const railOf = (src) => {
    const i = Number(src.key.split(':')[1]);
    const r = layout.rails[i];
    return snap(src.role === 'input' ? r.pos : r.neg);
  };

  // A wire's path from the source pin to the point `to`, or null for a straight line.
  // From an input: along the input's row to its rail, down the rail, then across.
  // Between gates: across to just before the target, then down or up to it.
  // Into an input's NOT gate: down from the junction, then across.
  const pathFor = (src, to) => {
    if (src.kind === 'vcc' || src.kind === 'gnd') return null;
    const from = outPin(src.id);
    if (Math.abs(to.y - from.y) < 0.05) return [from, to];
    const turnX = src.role === 'input' || src.role === 'inverter' ? railOf(src) : to.x - GRID;
    return [from, { x: turnX, y: from.y }, { x: turnX, y: to.y }, to];
  };

  // Wire routes in Wokwi's mini-language: moves from the source pin, then '*'. The whole path
  // is given from the source side and ends exactly on the target pin: when pasting, Wokwi
  // doesn't draw the last segment into the target pin (whether that's its own join or a move
  // after '*') until a part is moved, so leave it nothing to draw.
  const routeFor = (src, dst, j) => {
    if (dst.role === 'inverter') {
      const from = outPin(src.id);
      const to = inPin(dst, j);
      return routeThrough([from, { x: from.x, y: to.y }, to]);
    }
    if (stackedPaths.has(dst.id)) {
      const path = stackedPaths.get(dst.id);
      return path ? routeThrough(path) : [];
    }
    const path = pathFor(src, inPin(dst, j));
    return path && path.length > 2 ? routeThrough(path) : [];
  };

  // Stack the output buffers one grid step apart, like the output block's pins, to the right of
  // where they're drawn. Each output's wire carries on from where its buffer is drawn, turns up
  // or down in its own column and goes into its buffer in the stack. The columns and the height
  // of the stack are chosen to tangle the wires as little as possible.
  const stackedPaths = new Map();
  const stackOutputs = () => {
    const outs = netlist.parts.filter((p) => p.role === 'output');
    const m = outs.length;
    const via = outs.map((p) => junctionPin(p.id));
    const base = outs.map((p, o) => pathFor(byId.get(p.ins[0]), via[o]));
    const x0 = via[0].x;
    const stackX = round1(x0 + (m + 1) * GRID);
    const mid = via.reduce((acc, v) => acc + v.y, 0) / m;
    const top0 = snap(mid - ((m - 1) * GRID) / 2);
    const build = (top, order) =>
      outs.map((_, o) => {
        if (!base[o]) return null;
        const col = round1(x0 + (order[o] + 1) * GRID);
        const row = round1(top + o * GRID);
        return [
          ...base[o].slice(0, -1),
          { x: col, y: via[o].y },
          { x: col, y: row },
          { x: stackX, y: row },
        ];
      });
    let best = null;
    for (let k = 0; k <= 12; k++) {
      const top = round1(top0 + (k % 2 ? 1 : -1) * Math.ceil(k / 2) * GRID);
      const order = outs.map((_, o) => o);
      const c = untangle(
        [order],
        () => build(top, order),
        outs.map((p) => p.ins[0]),
      );
      if (!best || c < best.c) best = { c, top, wires: build(top, order) };
      if (c === 0) break;
    }
    outs.forEach((p, o) => {
      const where = {
        left: round1(stackX - JUNCTION),
        top: round1(best.top + o * GRID - JUNCTION),
      };
      pos.set(p.id, where);
      Object.assign(partOf.get(p.id), where);
      stackedPaths.set(p.id, best.wires[o]);
    });
    parts.push({
      type: 'wokwi-text',
      id: 'label_outputs',
      top: snap(best.top - 3 * GRID),
      left: stackX,
      attrs: {
        text: `${outs.map((p) => p.name).join(' ')} → uo_out[0${m > 1 ? '..' + (m - 1) : ''}]`,
      },
    });
  };
  if (opts.stacked) stackOutputs();

  const connections = [];
  netlist.parts.forEach((p) => {
    p.ins.forEach((src, j) => {
      const sp = byId.get(src);
      connections.push([
        `${src}:${WOKWI[kindOf(sp)].out}`,
        `${p.id}:${WOKWI[kindOf(p)].ins[j]}`,
        wireColor(sp, p),
        routeFor(sp, p, j),
      ]);
    });
  });

  // An LED on every output, standing above it, and the output's name to its right.
  const outputs = netlist.parts.filter((p) => p.role === 'output');
  if (!opts.stacked) {
    outputs.forEach((p) => {
      const out = outPin(p.id);
      const a = { x: out.x, y: out.y - LED_RISE };
      const led = 'led_' + p.id;
      const gnd = led + '_gnd';
      const ledAt = { left: round2(a.x - LED_A.x), top: round2(a.y - LED_A.y) };
      parts.push({ type: 'wokwi-led', id: led, ...ledAt, attrs: { color: 'red' } });
      parts.push({
        type: 'wokwi-gnd',
        id: gnd,
        top: round2(ledAt.top + LED_GND.top),
        left: round2(ledAt.left + LED_GND.left),
        rotate: 90,
        attrs: {},
      });
      parts.push({
        type: 'wokwi-text',
        id: 'label_' + p.id,
        top: snap(out.y - GRID),
        left: snap(out.x + 3 * GRID),
        attrs: { text: p.name },
      });
      connections.push([`${led}:A`, `${p.id}:J`, 'green', routeThrough([a, out])]);
      connections.push([`${gnd}:GND`, `${led}:C`, 'black', ['v0']]);
    });
  }

  return {
    version: 1,
    author: 'Tiny Tapeout logic table',
    editor: 'wokwi',
    parts,
    connections,
  };
}

// ---------------------------------------------------------------------------
// Schematic layout, on Wokwi's grid and in Wokwi's own coordinates: the drawing on the page is
// exactly the circuit that gets pasted. Inputs run down vertical rails on the left; each output
// is a column of AND chains feeding a tree of OR gates, with an optional NOT at the end.

// Which inputs the reduced logic actually uses (an output can ignore some inputs).
export function inputsUsed(plans, n) {
  const used = Array(n).fill(false);
  plans.forEach((p) => {
    if (p.kind === 'xor') p.vars.forEach((i) => (used[i] = true));
    if (p.kind === 'sop') p.terms.forEach((t) => t.lits.forEach((l) => (used[l.i] = true)));
  });
  return used;
}

// Sizes in grid steps. Every gate (NOT too) is 10 x 4 steps: inputs on the left edge 1 and 3
// steps down (a NOT's at 2), output on the right edge 2 steps down.
const GW = 10;
const STEP = GW + 2; // column pitch: one step either side for wires to turn in
export const TAG_W = 4; // VCC / GND tag
export const TAG_H = 2;

// opts.leds (the default) leaves room between the outputs for the LEDs the paste puts on them;
// without it (for the 7-segment display's stacked outputs) the outputs are packed closer.
export function layoutDiagram(plans, inNames, outNames, opts = {}) {
  const leds = opts.leds !== false;
  // Least distance between output rows: each LED stands about 8 rows above its output, clear
  // of the gate below it, so the next output's LED and ground need 11 rows.
  const outPitch = leds ? 11 : 0;
  const outGap = leds ? 3 : 2; // rows between one output's gates and the next's
  const n = inNames.length;
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

  const outs = plans.map((p, o) => {
    if (p.kind === 'const') return { konst: p.value, terms: [], xor: false, inv: false };
    if (p.kind === 'xor') {
      return {
        konst: null,
        terms: [{ lits: p.vars.map((i) => ({ i, neg: false })) }],
        xor: true,
        inv: p.inv,
      };
    }
    return { konst: null, terms: p.terms, xor: false, inv: p.inv };
  });
  // Inverted XORs and inverted sums get a NOT on the output; inverted single products use a NAND.
  outs.forEach((o) => {
    o.outNot = o.konst === null && o.inv && (o.xor || o.terms.length > 1);
    o.ors = pairTree(o.terms.length);
    // How many OR gates deep the tree is.
    const depth = o.terms.map(() => 0);
    o.ors.forEach(([a, b]) => depth.push(1 + Math.max(depth[a], depth[b])));
    o.depth = depth;
    o.orDepth = depth.length ? depth[depth.length - 1] : 0;
  });
  const needNot = Array(n).fill(false);
  const needPos = Array(n).fill(false);
  outs.forEach((o) =>
    o.terms.forEach((t) => t.lits.forEach((l) => ((l.neg ? needNot : needPos)[l.i] = true))),
  );

  // Inputs: a junction each, the last input (bit 0, the LSB) at the top like ui_in[0] in the
  // Tiny Tapeout template, so wiring the pasted inputs top to top gives the right bit order.
  // An inverted input also feeds a NOT gate tucked under its row. Each input has a rail (and an
  // inverted rail) running up and down beside the gates, as far as the gates need it; the top
  // input's rails are the rightmost. The gates start at the top, beside the inputs, so an
  // input's wire to its rail can cross the rails of the inputs below it.
  const maxIn = Math.max(1, ...inNames.map((s) => String(s).length));
  const X0 = Math.ceil(maxIn * 1.25) + 2;
  const row = [];
  let y = 2;
  for (let i = n - 1; i >= 0; i--) {
    row[i] = y;
    y += needNot[i] ? 8 : 3;
  }
  const inBottom = y - 2;
  const rail = [];
  let x = X0 + (needNot.some(Boolean) ? GW + 3 : 2);
  for (let i = 0; i < n; i++) {
    const r = {
      y: row[i],
      neg: null,
      pos: null,
      negMin: row[i] + 3,
      negMax: row[i] + 3,
      posMin: row[i],
      posMax: row[i],
    };
    if (needNot[i]) r.neg = x++;
    if (needPos[i]) r.pos = x++;
    rail[i] = r;
  }
  const L = x + 1; // first column of gates
  const railX = (l) => (l.neg ? rail[l.i].neg : rail[l.i].pos);

  // Columns of gates, STEP apart. Each output's gates (AND chains, then the OR tree, then any
  // NOT) are right aligned to end next to the output pins, so the circuit is only as wide as the
  // output with the most gates in a row.
  outs.forEach((o) => {
    o.chain = Math.max(0, ...o.terms.map((t) => t.lits.length - 1));
    o.cols = o.chain + o.orDepth + (o.outNot ? 1 : 0);
  });
  const C = Math.max(1, ...outs.map((o) => o.cols));
  const colX = (c) => L + c * STEP;
  const OUTX = colX(C);

  // Place one output with its top row at `top`; everything goes into `sink`.
  const placeOutput = (o, oi, top) => {
    const sink = { segs: [], dots: [], gates: [], tags: [], taps: [] };
    const save = { segs: segs.length, dots: dots.length, gates: gates.length, tags: tags.length };
    const tap = (l, ty) => {
      dots.push({ x: railX(l), y: ty });
      sink.taps.push({ l, y: ty });
    };
    const conn = (s, x2, y2, bx) => {
      if (s.lit) tap(s.lit, s.y);
      route(s.lit ? railX(s.lit) : s.x, s.y, x2, y2, bx);
    };
    let bottom = top;
    let out;
    // This output's columns: its NOT last, its OR tree before that and its chains before that.
    const orCol = (d) => C - (o.outNot ? 1 : 0) - o.orDepth + d - 1;
    const andEnd = colX(orCol(1)) - 2;
    if (o.konst !== null) {
      tags.push({
        x: OUTX - 2 - TAG_W,
        y: top,
        text: o.konst ? 'VCC' : 'GND',
        key: `o:${oi}:const`,
      });
      out = { x: OUTX - 2, y: top + 1 };
      bottom = top + TAG_H;
    } else {
      // Terms, one under another: a single literal is a wire from its rail; a product is a
      // chain of gates, each two steps lower than the last so the next literal passes under it.
      const items = [];
      let cur = top;
      let last = -Infinity;
      o.terms.forEach((t, ti) => {
        const k = t.lits.length;
        if (k === 1) {
          const r = Math.max(cur, last + 3);
          items.push({ lit: t.lits[0], y: r });
          last = r;
          cur = r + 1;
          bottom = Math.max(bottom, r);
          return;
        }
        const m0 = Math.max(cur + 2, last + 3 - 2 * (k - 2));
        const ax = (j) => andEnd - GW - (k - 2 - j) * STEP;
        for (let j = 0; j < k - 1; j++) {
          const m = m0 + 2 * j;
          const isLast = j === k - 2;
          const kind = o.xor ? 'xor' : o.inv && isLast && o.terms.length === 1 ? 'nand' : 'and';
          gates.push({ kind, x: ax(j), y: m - 2, key: `o:${oi}:t:${ti}:${j}` });
          if (j === 0) conn({ lit: t.lits[0], y: m - 1 }, ax(j), m - 1, 0);
          else route(ax(j - 1) + GW, m - 2, ax(j), m - 1, ax(j) - 1);
          conn({ lit: t.lits[j + 1], y: m + 1 }, ax(j), m + 1, 0);
        }
        const mLast = m0 + 2 * (k - 2);
        items.push({ x: andEnd, y: mLast });
        last = mLast;
        cur = mLast + 3;
        bottom = Math.max(bottom, mLast + 2);
      });
      // The OR tree: each gate sits level with its lower input, and the upper one turns down
      // into it just before the gate.
      const nodes = items.slice();
      o.ors.forEach(([a, b], j) => {
        const gx = colX(orCol(o.depth[o.terms.length + j]));
        const yb = nodes[b].y;
        gates.push({ kind: 'or', x: gx, y: yb - 3, key: `o:${oi}:or:${j}` });
        conn(nodes[a], gx, yb - 2, gx - 1);
        conn(nodes[b], gx, yb, 0);
        nodes.push({ x: gx + GW, y: yb - 1 });
        bottom = Math.max(bottom, yb + 1);
      });
      out = nodes[nodes.length - 1];
      if (o.outNot) {
        const nx = colX(C - 1);
        conn(out, nx, out.y, 0);
        gates.push({ kind: 'not', x: nx, y: out.y - 2, key: `o:${oi}:not` });
        out = { x: nx + GW, y: out.y };
      }
    }
    conn(out, OUTX, out.y, 0);
    // Hand back what was drawn, so the caller can keep it or try again lower down.
    sink.segs = segs.splice(save.segs);
    sink.dots = dots.splice(save.dots);
    sink.gates = gates.splice(save.gates);
    sink.tags = tags.splice(save.tags);
    return { out: out.y, bottom, sink };
  };

  // Rows where an input's wire runs to its rail (or its NOT gate's wire to the inverted rail):
  // a wire from a rail to a gate mustn't share one, or it would run along that wire.
  const inputRows = new Set();
  rail.forEach((r) => {
    inputRows.add(r.y);
    if (r.neg !== null) inputRows.add(r.y + 3);
  });
  let top = 1;
  let prevOut = -Infinity;
  outs.forEach((o, oi) => {
    // Move the output down until it's far enough below the last one and clear of input rows.
    let placed;
    for (let shift = 0; ; ) {
      placed = placeOutput(o, oi, top + shift);
      if (placed.out < prevOut + outPitch) shift += prevOut + outPitch - placed.out;
      else if (placed.sink.taps.some((t) => inputRows.has(t.y))) shift++;
      else break;
    }
    const { sink } = placed;
    segs.push(...sink.segs);
    dots.push(...sink.dots);
    gates.push(...sink.gates);
    tags.push(...sink.tags);
    sink.taps.forEach(({ l, y: ty }) => {
      const r = rail[l.i];
      if (l.neg) {
        r.negMin = Math.min(r.negMin, ty);
        r.negMax = Math.max(r.negMax, ty);
      } else {
        r.posMin = Math.min(r.posMin, ty);
        r.posMax = Math.max(r.posMax, ty);
      }
    });
    pins.push({ x: OUTX, y: placed.out, key: `o:${oi}:out` });
    labels.push({ x: OUTX + 1, y: placed.out, text: outNames[oi], over: false, anchor: 'start' });
    prevOut = placed.out;
    top = placed.bottom + outGap;
  });

  const used = inputsUsed(plans, n);
  rail.forEach((r, i) => {
    pins.push({ x: X0, y: r.y, unused: !used[i], key: `in:${i}` });
    labels.push({
      x: X0 - 1,
      y: r.y,
      text: inNames[i],
      over: false,
      anchor: 'end',
      unused: !used[i],
    });
    if (r.pos !== null) {
      hs(X0, r.pos, r.y);
      vs(r.pos, r.posMin, r.posMax);
      if (r.posMin < r.y && r.posMax > r.y) dots.push({ x: r.pos, y: r.y });
    }
    if (r.neg !== null) {
      // Down from the junction into the NOT gate under the input's row, then on to its rail.
      vs(X0, r.y, r.y + 3);
      hs(X0, X0 + 2, r.y + 3);
      gates.push({ kind: 'not', x: X0 + 2, y: r.y + 1, key: `in:${i}:not` });
      hs(X0 + 2 + GW, r.neg, r.y + 3);
      vs(r.neg, r.negMin, r.negMax);
      if (r.negMin < r.y + 3 && r.negMax > r.y + 3) dots.push({ x: r.neg, y: r.y + 3 });
      labels.push({
        x: X0 + 2 + GW + 0.5,
        y: r.y + 2,
        text: inNames[i],
        over: true,
        anchor: 'start',
      });
    }
  });

  // Everything so far is in grid steps: scale to Wokwi's pixels.
  const g = (v) => round1(v * GRID);
  const maxLabel = Math.max(1, ...outNames.map((s) => String(s).length));
  const rails = rail.map((r) => ({
    pos: r.pos === null ? null : g(r.pos),
    neg: r.neg === null ? null : g(r.neg),
  }));
  return {
    w: g(OUTX + 2 + maxLabel * 1.25),
    h: g(Math.max(top, inBottom + 2)),
    segs: segs.map((sg) => ({ x1: g(sg.x1), y1: g(sg.y1), x2: g(sg.x2), y2: g(sg.y2) })),
    dots: dots.map((d) => ({ x: g(d.x), y: g(d.y) })),
    pins: pins.map((p) => ({ ...p, x: g(p.x), y: g(p.y) })),
    gates: gates.map((gt) => ({ ...gt, x: g(gt.x), y: g(gt.y) })),
    labels: labels.map((l) => ({ ...l, x: g(l.x), y: g(l.y) })),
    tags: tags.map((t) => ({ ...t, x: g(t.x), y: g(t.y) })),
    rails,
  };
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
