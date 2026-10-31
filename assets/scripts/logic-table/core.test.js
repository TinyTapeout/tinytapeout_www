import { describe, expect, it } from 'vitest';
import {
  buildNetlist,
  evalPlan,
  GATE_KINDS,
  fromLutJson,
  toLutJson,
  wireColor,
  gateCounts,
  inputBit,
  inputValue,
  layoutDiagram,
  wireTangles,
  planAll,
  resizeTable,
  simulate,
  toWokwi,
} from './core.js';

const IN = ['A', 'B', 'C', 'D'];

function names(n, m) {
  return { inNames: IN.slice(0, n), outNames: Array.from({ length: m }, (_, o) => 'Y' + o) };
}

function bitsOf(r, n) {
  return Array.from({ length: n }, (_, i) => inputBit(r, i, n));
}

// Deterministic PRNG so failures are reproducible.
function rng(seed) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 2 ** 32;
  };
}

// Gates in the drawing never overlap, and in Wokwi every input sits left of every gate and
// every output right of every gate.
function checkPlacement(layout, wokwi) {
  // The drawing uses Wokwi's own sizes: every gate is 96 x 38.4, a VCC / GND tag 38.4 x 19.2.
  const boxes = [
    ...layout.gates.map((g) => ({ x: g.x, y: g.y, w: 96, h: 38.4 })),
    ...layout.tags.map((t) => ({ x: t.x, y: t.y, w: 38.4, h: 19.2 })),
  ];
  for (let a = 0; a < boxes.length; a++) {
    for (let b = a + 1; b < boxes.length; b++) {
      const p = boxes[a];
      const q = boxes[b];
      const apart = p.x + p.w <= q.x || q.x + q.w <= p.x || p.y + p.h <= q.y || q.y + q.h <= p.y;
      expect(apart).toBe(true);
    }
  }
  // No wire in the drawing runs through a gate: wires only meet gates at the pins on their edges.
  const through = [];
  layout.segs.forEach((sg) => {
    layout.gates.forEach((g) => {
      if (
        Math.max(sg.x1, g.x + 1) < Math.min(sg.x2, g.x + 95) &&
        Math.max(sg.y1, g.y + 1) <= Math.min(sg.y2, g.y + 37.4)
      ) {
        through.push(`wire ${JSON.stringify(sg)} through ${g.key}`);
      }
    });
  });
  expect(through).toEqual([]);
  // ...and no two wires run along each other, which would look like a connection.
  const along = [];
  layout.segs.forEach((p, a) => {
    layout.segs.slice(a + 1).forEach((q) => {
      const flat = p.y1 === p.y2 && q.y1 === q.y2 && p.y1 === q.y1;
      const upright = p.x1 === p.x2 && q.x1 === q.x2 && p.x1 === q.x1;
      const lap = flat
        ? Math.min(p.x2, q.x2) - Math.max(p.x1, q.x1)
        : upright
          ? Math.min(p.y2, q.y2) - Math.max(p.y1, q.y1)
          : 0;
      if (lap > 0.5) along.push(`${JSON.stringify(p)} along ${JSON.stringify(q)}`);
    });
  });
  expect(along).toEqual([]);
  const real = wokwi.parts.filter((p) => p.type !== 'wokwi-text');
  // LEDs (and their grounds) sit to the right of the outputs.
  const shown = (p) => p.id.startsWith('led_');
  const ins = real.filter((p) => p.id.startsWith('in_'));
  const outs = real.filter((p) => p.id.startsWith('out_'));
  const gates = real.filter(
    (p) => !p.id.startsWith('in_') && !p.id.startsWith('out_') && !shown(p),
  );
  // Each LED stands above its output and its ground symbol points left beside it: neither may
  // sit on a gate. (The turned ground symbol's box is roughly where it was seen in Wokwi.)
  const gateBoxes = real
    .filter((p) => p.type.startsWith('wokwi-gate'))
    .map((p) => ({ x: p.left, y: p.top, w: 96, h: 38.4 }));
  const onGate = real
    .filter(shown)
    .map((p) =>
      p.type === 'wokwi-led'
        ? { id: p.id, x: p.left, y: p.top, w: 40, h: 50 }
        : { id: p.id, x: p.left - 10, y: p.top + 8, w: 40, h: 22 },
    )
    .filter((b) =>
      gateBoxes.some(
        (g) => b.x < g.x + g.w && g.x < b.x + b.w && b.y < g.y + g.h && g.y < b.y + b.h,
      ),
    )
    .map((b) => b.id);
  expect(onGate).toEqual([]);
  const maxIn = Math.max(...ins.map((p) => p.left));
  gates.forEach((g) => expect(g.left).toBeGreaterThan(maxIn));
  if (gates.length) {
    const maxGate = Math.max(...gates.map((p) => p.left));
    outs.forEach((o) => expect(o.left).toBeGreaterThan(maxGate));
  }
  // Every Wokwi part sits on Wokwi's 9.6px grid, so Wokwi doesn't move it on paste. LEDs,
  // grounds and the display sit at their own offsets from the grid, which put a pin on it.
  const onGrid = (v, off = 0) => {
    const k = (v - off) / 9.6;
    return Math.abs(k - Math.round(k)) < 1e-6;
  };
  const offsets = {
    'wokwi-led': [3.8, 6],
    'wokwi-gnd': [0.3, 0.5],
  };
  wokwi.parts.forEach((p) => {
    const [dx, dy] =
      p.type === 'wokwi-junction' ? [4.8, 4.8] : (shown(p) && offsets[p.type]) || [0, 0];
    expect(onGrid(p.left, dx), `${p.id} left ${p.left}`).toBe(true);
    expect(onGrid(p.top, dy), `${p.id} top ${p.top}`).toBe(true);
  });
  // Wokwi gates (96x38.4) don't overlap either.
  const sized = real.filter((p) => p.type.startsWith('wokwi-gate'));
  for (let a = 0; a < sized.length; a++) {
    for (let b = a + 1; b < sized.length; b++) {
      const p = sized[a];
      const q = sized[b];
      const apart =
        p.left + 96 <= q.left ||
        q.left + 96 <= p.left ||
        p.top + 38.4 <= q.top ||
        q.top + 38.4 <= p.top;
      expect(apart, `${p.id} overlaps ${q.id}`).toBe(true);
    }
  }
  // Wire routes only use Wokwi's mini-language: hN / vN moves, then '*'.
  wokwi.connections.forEach((c) => {
    expect(Array.isArray(c[3])).toBe(true);
    c[3].forEach((step) => expect(step).toMatch(/^(\*|[hv]-?\d+(\.\d\d?)?)$/));
    // Routed wires spell out the whole path and end with '*' on the target pin, apart from
    // each LED's ground wire, which is copied as it was drawn by hand in Wokwi.
    const handDrawn = c[0].endsWith('_gnd:GND');
    if (c[3].length && !handDrawn) expect(c[3][c[3].length - 1]).toBe('*');
    // ...and every move between gates is a whole number of grid steps, so wire corners stay on
    // the grid. (Pins of LEDs and the display aren't all on the grid.)
    if (!c[1].startsWith('led_')) {
      c[3].filter((m) => m !== '*').forEach((m) => expect(onGrid(Number(m.slice(1)))).toBe(true));
    }
  });
  // Inputs bottom to top in table order: the last input (bit 0, the LSB) is at the top, like
  // ui_in[0] in the Tiny Tapeout template.
  ins.forEach((p, i) => i && expect(p.top).toBeLessThan(ins[i - 1].top));
}

function checkTable(columns, n) {
  const { inNames, outNames } = names(n, columns.length);
  const plans = planAll(columns, n);
  const net = buildNetlist(plans, inNames, outNames);
  for (let r = 0; r < 1 << n; r++) {
    const bits = bitsOf(r, n);
    // Don't-care cells (null) may come out either way.
    const cared = (vals) => vals.map((v, o) => (columns[o][r] === null ? null : v));
    const expected = columns.map((c) => c[r]);
    expect(cared(plans.map((p) => evalPlan(p, bits)))).toEqual(expected);
    expect(cared(simulate(net, bits))).toEqual(expected);
  }
  // The drawing shows exactly the parts that get pasted into Wokwi, one for one.
  const layout = layoutDiagram(plans, inNames, outNames);
  const drawnGates = new Map(layout.gates.map((g) => [g.key, g.kind]));
  expect(drawnGates.size).toBe(layout.gates.length);
  const netGates = net.parts.filter((p) => GATE_KINDS.includes(p.kind));
  expect(new Map(netGates.map((p) => [p.key, p.kind]))).toEqual(drawnGates);
  const drawnKeys = [...layout.gates, ...layout.pins, ...layout.tags].map((e) => e.key).sort();
  expect(drawnKeys).toEqual(net.parts.map((p) => p.key).sort());
  checkPlacement(layout, toWokwi(net, layout));
  const packed = layoutDiagram(plans, inNames, outNames, { leds: false });
  checkPlacement(packed, toWokwi(net, packed, { stacked: true }));
  return { plans, net, layout };
}

describe('logic table', () => {
  it('implements every 2-input function', () => {
    for (let f = 0; f < 16; f++) {
      checkTable([[0, 1, 2, 3].map((r) => !!((f >> r) & 1))], 2);
    }
  });

  it('implements every 3-input function', () => {
    for (let f = 0; f < 256; f++) {
      checkTable([Array.from({ length: 8 }, (_, r) => !!((f >> r) & 1))], 3);
    }
  });

  it('implements random multi-output tables with 1 to 4 inputs', () => {
    const rand = rng(1234);
    for (let t = 0; t < 400; t++) {
      const n = 1 + Math.floor(rand() * 4);
      const m = 1 + Math.floor(rand() * 8);
      const density = rand();
      const columns = Array.from({ length: m }, () =>
        Array.from({ length: 1 << n }, () => rand() < density),
      );
      checkTable(columns, n);
    }
  });

  it('turns a full adder into XOR and AND/OR gates', () => {
    const sum = [0, 1, 1, 0, 1, 0, 0, 1].map(Boolean);
    const carry = [0, 0, 0, 1, 0, 1, 1, 1].map(Boolean);
    const { plans, net } = checkTable([sum, carry], 3);
    expect(plans[0]).toEqual({ kind: 'xor', vars: [0, 1, 2], inv: false });
    expect(gateCounts(net)).toEqual({ xor: 2, and: 3, or: 2 });
  });

  it('produces Wokwi JSON with valid part references', () => {
    const rand = rng(99);
    for (let t = 0; t < 100; t++) {
      const n = 1 + Math.floor(rand() * 4);
      const m = 1 + Math.floor(rand() * 8);
      const columns = Array.from({ length: m }, () =>
        Array.from({ length: 1 << n }, () => rand() < 0.5),
      );
      const { inNames, outNames } = names(n, m);
      const plans = planAll(columns, n);
      const wokwi = toWokwi(
        buildNetlist(plans, inNames, outNames),
        layoutDiagram(plans, inNames, outNames),
        { stacked: t % 2 === 1 },
      );
      const ids = wokwi.parts.map((p) => p.id);
      expect(new Set(ids).size).toBe(ids.length);
      const pins = {
        'wokwi-gate-and-2': ['A', 'B', 'OUT'],
        'wokwi-gate-or-2': ['A', 'B', 'OUT'],
        'wokwi-gate-xor-2': ['A', 'B', 'OUT'],
        'wokwi-gate-nand-2': ['A', 'B', 'OUT'],
        'wokwi-gate-not': ['IN', 'OUT'],
        'wokwi-gate-buffer': ['IN', 'OUT'],
        'wokwi-vcc': ['VCC'],
        'wokwi-gnd': ['GND'],
        'wokwi-led': ['A', 'C'],
        'wokwi-junction': ['J'],
      };
      const typeOf = new Map(wokwi.parts.map((p) => [p.id, p.type]));
      const inputPins = new Set();
      wokwi.connections.forEach(([from, to]) => {
        [from, to].forEach((ref) => {
          const [id, pin] = ref.split(':');
          expect(pins[typeOf.get(id)]).toContain(pin);
        });
        // Each gate input is driven once (a junction can have many wires).
        if (!to.endsWith(':J')) expect(inputPins.has(to)).toBe(false);
        inputPins.add(to);
      });
      // No two parts on top of each other.
      const spots = wokwi.parts
        .filter((p) => p.type !== 'wokwi-text')
        .map((p) => p.left + ',' + p.top);
      expect(new Set(spots).size).toBe(spots.length);
    }
  });

  it("implements random tables with don't-care cells", () => {
    const rand = rng(777);
    for (let t = 0; t < 400; t++) {
      const n = 1 + Math.floor(rand() * 4);
      const m = 1 + Math.floor(rand() * 4);
      const density = rand();
      const dcRate = rand() * 0.6;
      const columns = Array.from({ length: m }, () =>
        Array.from({ length: 1 << n }, () => (rand() < dcRate ? null : rand() < density)),
      );
      checkTable(columns, n);
    }
  });

  it("every 2-input table with don't-cares (all 81)", () => {
    for (let f = 0; f < 81; f++) {
      let x = f;
      const col = [0, 1, 2, 3].map(() => {
        const v = x % 3;
        x = Math.floor(x / 3);
        return v === 2 ? null : v === 1;
      });
      checkTable([col], 2);
    }
  });

  it("uses don't-cares to shrink the BCD to 7-segment decoder", () => {
    const rows = [
      '1111110',
      '0110000',
      '1101101',
      '1111001',
      '0110011',
      '1011011',
      '0011111',
      '1110000',
      '1111111',
      '1110011',
    ];
    const blank = (dc) =>
      Array.from({ length: 7 }, (_, o) =>
        Array.from({ length: 16 }, (_, r) => (r < 10 ? rows[r][o] === '1' : dc ? null : false)),
      );
    const count = (columns) => {
      const { net } = checkTable(columns, 4);
      return Object.values(gateCounts(net)).reduce((a, b) => a + b, 0);
    };
    const withZeros = count(blank(false));
    const withDontCares = count(blank(true));
    // 65 gates down to 38 at the time of writing.
    expect(withDontCares).toBeLessThan(withZeros * 0.7);
  });

  it('reads and writes wokwi-lookup-table-generator JSON', () => {
    const half = {
      version: 1,
      description: 'half adder',
      inputs: ['a', 'b'],
      outputs: { S: [0, 1, 1, 0], C: [0, 0, 0, 1] },
    };
    const table = fromLutJson(JSON.stringify(half));
    expect(table.inNames).toEqual(['a', 'b']);
    expect(table.outNames).toEqual(['S', 'C']);
    expect(table.columns[1]).toEqual([false, false, false, true]);
    expect(toLutJson(table, 'half adder')).toEqual(half);

    const dc = fromLutJson({ inputs: ['a'], outputs: { Y: ['x', 1] } });
    expect(dc.columns[0]).toEqual([null, true]);
    expect(toLutJson(dc).outputs.Y).toEqual(['x', 1]);

    expect(() => fromLutJson({ inputs: ['a', 'b'], outputs: { Y: [0, 1, 1] } })).toThrow(
      /4 values/,
    );
    expect(() => fromLutJson({ inputs: ['a'], outputs: { Y: [0, 2] } })).toThrow(/row 1/);
    expect(() => fromLutJson({ inputs: [], outputs: { Y: [0] } })).toThrow(/inputs/);
    expect(() => fromLutJson('{not json')).toThrow();
  });

  it('colours wires green, apart from power', () => {
    const columns = [[false, true, true, false, true, true, false, true]];
    const net = buildNetlist(planAll(columns, 3), ['A', 'B', 'C'], ['Y']);
    const wokwi = toWokwi(net, layoutDiagram(planAll(columns, 3), ['A', 'B', 'C'], ['Y']));
    // Everything is green except the LED's wire to ground.
    expect(new Set(wokwi.connections.map((c) => c[2]))).toEqual(new Set(['green', 'black']));
    expect(wireColor({ kind: 'vcc' }, { kind: 'buf' })).toBe('red');
    expect(wireColor({ kind: 'gnd' }, { kind: 'buf' })).toBe('black');
    expect(wireColor({ kind: 'not', role: 'inverter' }, { kind: 'and' })).toBe('green');
  });

  describe('LEDs and stacked outputs', () => {
    const table = (m) => {
      const columns = Array.from({ length: m }, (_, o) =>
        Array.from({ length: 8 }, (_, r) => ((r + o) & 1) === 1),
      );
      const { inNames, outNames } = names(3, m);
      const plans = planAll(columns, 3);
      return [buildNetlist(plans, inNames, outNames), layoutDiagram(plans, inNames, outNames)];
    };
    const byTarget = (w, ref) => w.connections.find((c) => c[1] === ref);

    it('lights an LED from every output, its cathode wired to ground', () => {
      const w = toWokwi(...table(3));
      const at = new Map(w.parts.map((p) => [p.id, p]));
      const leds = w.parts.filter((p) => p.type === 'wokwi-led');
      expect(leds.map((p) => p.id)).toEqual(['led_out_Y0', 'led_out_Y1', 'led_out_Y2']);
      leds.forEach((led) => {
        // The anode drops straight down onto the output's junction.
        const anode = w.connections.find((c) => c[0] === `${led.id}:A`);
        expect(anode[1]).toBe(led.id.slice(4) + ':J');
        const out = at.get(led.id.slice(4));
        expect(led.left + 25).toBeCloseTo(out.left + 4.8, 6);
        expect(anode[3]).toEqual(['v38.4', '*']);
        // The cathode goes to a ground symbol turned to point left.
        const cathode = w.connections.find((c) => c[1] === `${led.id}:C`);
        const gnd = at.get(cathode[0].split(':')[0]);
        expect(gnd.type).toBe('wokwi-gnd');
        expect(gnd.rotate).toBe(90);
      });
    });

    it('spreads the outputs out for LEDs, and packs them closer for the stack', () => {
      const columns = Array.from({ length: 4 }, (_, o) =>
        Array.from({ length: 8 }, (_, r) => r === o),
      );
      const { inNames, outNames } = names(3, 4);
      const plans = planAll(columns, 3);
      const rows = (opts) =>
        layoutDiagram(plans, inNames, outNames, opts)
          .pins.filter((p) => p.key.endsWith(':out'))
          .map((p) => p.y);
      const gaps = (ys) => ys.slice(1).map((y, k) => y - ys[k]);
      gaps(rows()).forEach((g) => expect(g).toBeGreaterThanOrEqual(10 * 9.6 - 1e-6));
      expect(Math.max(...rows({ leds: false }))).toBeLessThan(Math.max(...rows()));
    });

    it('makes the inputs and outputs junctions', () => {
      const w = toWokwi(...table(2));
      const ends = w.parts.filter((p) => p.id.startsWith('in_') || p.id.startsWith('out_'));
      expect(ends.map((p) => p.type)).toEqual(Array(5).fill('wokwi-junction'));
      expect(w.parts.some((p) => p.type === 'wokwi-gate-buffer')).toBe(false);
    });

    it('stacks the outputs one grid step apart, like the output block pins', () => {
      for (let m = 1; m <= 8; m++) {
        const w = toWokwi(...table(m), { stacked: true });
        expect(w.parts.filter((p) => p.type === 'wokwi-led')).toEqual([]);
        const outs = w.parts.filter((p) => p.id.startsWith('out_'));
        outs.forEach((p) => expect(p.type).toBe('wokwi-junction'));
        expect(outs.map((p) => p.id)).toEqual(Array.from({ length: m }, (_, o) => `out_Y${o}`));
        outs.forEach((p, o) => {
          expect(p.left).toBe(outs[0].left);
          expect(p.top).toBeCloseTo(outs[0].top + o * 9.6, 6);
        });
      }
    });

    it('routes the wires into the stack without any running into each other', () => {
      for (let m = 1; m <= 8; m++) {
        const w = toWokwi(...table(m), { stacked: true });
        const at = new Map(w.parts.map((p) => [p.id, p]));
        // Follow each wire into the stack from its source pin.
        const into = w.connections.filter((c) => c[1].startsWith('out_') && c[3].length);
        const wires = into.map((c) => {
          const src = at.get(c[0].split(':')[0]);
          const pts = [
            src.type === 'wokwi-junction'
              ? { x: src.left + 4.8, y: src.top + 4.8 }
              : { x: src.left + 96, y: src.top + 19.2 },
          ];
          c[3]
            .filter((s) => s !== '*')
            .forEach((s) => {
              const d = Number(s.slice(1));
              const p = pts[pts.length - 1];
              pts.push(s[0] === 'h' ? { x: p.x + d, y: p.y } : { x: p.x, y: p.y + d });
            });
          // ...ending on the output's junction.
          const dst = at.get(c[1].split(':')[0]);
          const end = pts[pts.length - 1];
          expect(end.x).toBeCloseTo(dst.left + 4.8, 6);
          expect(end.y).toBeCloseTo(dst.top + 4.8, 6);
          return pts;
        });
        const nets = into.map((c) => c[0]);
        expect(wireTangles(wires, nets).clashes, `${m} outputs`).toBe(0);
      }
    });

    it('counts clashes and crossings between wires', () => {
      const h = (y, x1, x2) => [
        { x: x1, y },
        { x: x2, y },
      ];
      const v = (x, y1, y2) => [
        { x, y: y1 },
        { x, y: y2 },
      ];
      expect(wireTangles([h(0, 0, 10), v(5, -5, 5)])).toEqual({ crossings: 1, clashes: 0 });
      expect(wireTangles([h(0, 0, 10), h(0, 5, 15)])).toEqual({ crossings: 0, clashes: 1 });
      expect(wireTangles([h(0, 0, 10), v(10, 0, 5)])).toEqual({ crossings: 0, clashes: 1 });
      expect(wireTangles([h(0, 0, 10), h(1, 0, 10)])).toEqual({ crossings: 0, clashes: 0 });
      // Wires on the same net may share a path.
      expect(wireTangles([h(0, 0, 10), h(0, 5, 15)], ['n', 'n'])).toEqual({
        crossings: 0,
        clashes: 0,
      });
    });

    it('labels each input with its bit number', () => {
      const w = toWokwi(...table(1));
      const label = (id) => w.parts.find((p) => p.id === 'label_' + id).attrs.text;
      expect([label('in_A'), label('in_B'), label('in_C')]).toEqual([
        'A (bit 2)',
        'B (bit 1)',
        'C (bit 0)',
      ]);
      expect(inputValue([0, 1, 0, 1])).toBe(5);
    });
  });

  describe('resizeTable', () => {
    const fullAdder = {
      inNames: ['A', 'B', 'C'],
      outNames: ['S', 'Cout'],
      columns: [[0, 1, 1, 0, 1, 0, 0, 1].map(Boolean), [0, 0, 0, 1, 0, 1, 1, 1].map(Boolean)],
    };

    it('adding an input keeps every output the same (the new input is ignored)', () => {
      const t = resizeTable(fullAdder, 4, 2);
      expect(t.inNames).toEqual(['A', 'B', 'C', 'D']);
      for (let r = 0; r < 16; r++) {
        expect(t.columns[0][r]).toBe(fullAdder.columns[0][r >> 1]);
        expect(t.columns[1][r]).toBe(fullAdder.columns[1][r >> 1]);
      }
      expect(planAll(t.columns, 4)).toEqual(planAll(fullAdder.columns, 3));
    });

    it('adding then removing an input gives back the same table', () => {
      expect(resizeTable(resizeTable(fullAdder, 4, 2), 3, 2)).toEqual(fullAdder);
      const one = resizeTable(fullAdder, 1, 2);
      expect(resizeTable(resizeTable(one, 4, 2), 1, 2)).toEqual(one);
    });

    it('removing an input keeps the rows where it was 0', () => {
      const t = resizeTable(fullAdder, 2, 2);
      expect(t.inNames).toEqual(['A', 'B']);
      expect(t.columns[0]).toEqual([0, 1, 1, 0].map(Boolean)); // rows where C = 0
    });

    it('adds and removes outputs without touching the others', () => {
      const more = resizeTable(fullAdder, 3, 4);
      expect(more.outNames).toEqual(['S', 'Cout', 'Y0', 'Y1']);
      expect(more.columns.slice(0, 2)).toEqual(fullAdder.columns);
      expect(more.columns[3]).toEqual(Array(8).fill(false));
      expect(resizeTable(more, 3, 2)).toEqual(fullAdder);
    });

    it("keeps don't-cares and avoids clashing names", () => {
      const t = { inNames: ['A', 'C'], outNames: ['Y0'], columns: [[null, true, false, null]] };
      const r = resizeTable(t, 3, 2);
      expect(r.inNames).toEqual(['A', 'C', 'B']);
      expect(r.outNames).toEqual(['Y0', 'Y1']);
      expect(r.columns[0]).toEqual([null, null, true, true, false, false, null, null]);
    });

    it('clamps to the allowed sizes and never changes its argument', () => {
      const copy = JSON.parse(JSON.stringify(fullAdder));
      const r = resizeTable(fullAdder, 9, 0);
      expect(r.inNames.length).toBe(4);
      expect(r.outNames.length).toBe(1);
      expect(fullAdder).toEqual(copy);
    });
  });
});
