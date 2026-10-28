import { describe, expect, it } from 'vitest';
import {
  buildNetlist,
  evalPlan,
  fromLutJson,
  toLutJson,
  wireColor,
  gateCounts,
  inputBit,
  layoutDiagram,
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
  // The drawing shows exactly the gates that get pasted into Wokwi.
  const drawn = layoutDiagram(plans, inNames, outNames).gates.length;
  const total = Object.values(gateCounts(net)).reduce((a, b) => a + b, 0);
  expect(drawn).toBe(total);
  return { plans, net };
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
      const wokwi = toWokwi(buildNetlist(planAll(columns, n), inNames, outNames));
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
      };
      const typeOf = new Map(wokwi.parts.map((p) => [p.id, p.type]));
      const inputPins = new Set();
      wokwi.connections.forEach(([from, to]) => {
        [from, to].forEach((ref) => {
          const [id, pin] = ref.split(':');
          expect(pins[typeOf.get(id)]).toContain(pin);
        });
        expect(inputPins.has(to)).toBe(false); // each gate input driven once
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

  it('colours wires by what they connect', () => {
    const columns = [[false, true, true, false, true, true, false, true]];
    const net = buildNetlist(planAll(columns, 3), ['A', 'B', 'C'], ['Y']);
    const wokwi = toWokwi(net);
    const colours = new Set(wokwi.connections.map((c) => c[2]));
    colours.forEach((c) =>
      expect(['red', 'black', 'cyan', 'brown', 'blue', 'green', 'purple', 'orange']).toContain(c),
    );
    expect(colours.has('cyan')).toBe(true);
    expect(wireColor({ kind: 'not', role: 'inverter' }, { kind: 'and' })).toBe('blue');
    expect(wireColor({ kind: 'and' }, { kind: 'or' })).toBe('purple');
  });

  describe('resizeTable', () => {
    const fullAdder = {
      inNames: ['A', 'B', 'C'],
      outNames: ['S', 'Cout'],
      columns: [
        [0, 1, 1, 0, 1, 0, 0, 1].map(Boolean),
        [0, 0, 0, 1, 0, 1, 1, 1].map(Boolean),
      ],
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

    it('keeps don\'t-cares and avoids clashing names', () => {
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
