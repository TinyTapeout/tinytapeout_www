// @vitest-environment jsdom
// Click-through tests of the logic table page widget (assets/scripts/logic-table.js).

import { beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';

let root;
let clipboard = '';

const $ = (sel) => root.querySelector(sel);
const $$ = (sel) => Array.from(root.querySelectorAll(sel));
const click = (sel) => {
  const el = typeof sel === 'string' ? $(sel) : sel;
  if (!el) throw new Error('no element for ' + sel);
  el.dispatchEvent(new MouseEvent('click', { bubbles: true })); // SVG elements have no .click()
};
const exprs = () => $$('.expr').map((e) => e.textContent.trim().replace(/\s+/g, ' '));
const counts = () => ({
  inputs: Number($$('.stepper .num')[0].textContent),
  outputs: Number($$('.stepper .num')[1].textContent),
  rows: $$('tbody tr').length,
});
const headers = () => $$('thead th').map((th) => th.textContent);
const cells = () =>
  $$('.cell')
    .map((c) => c.textContent)
    .join('');
const wires = () => $$('.tt-lt-svg line').length;
const flush = () => new Promise((r) => setTimeout(r, 0));

beforeAll(async () => {
  Object.defineProperty(window, 'isSecureContext', { value: true });
  Object.defineProperty(navigator, 'clipboard', {
    value: { writeText: vi.fn(async (t) => (clipboard = t)) },
  });
  document.body.innerHTML = '<div class="tt-lt" data-example="full-adder"></div>';
  root = document.querySelector('.tt-lt');
  await import('../logic-table.js');
});

beforeEach(() => {
  // Start every test from the full adder example.
  const select = $('select[data-act="example"]');
  select.value = 'full-adder';
  select.dispatchEvent(new Event('change', { bubbles: true }));
});

describe('logic table widget', () => {
  it('starts with the full adder', () => {
    expect(counts()).toEqual({ inputs: 3, outputs: 2, rows: 8 });
    expect(headers()).toEqual(['A', 'B', 'C', 'S', 'Cout']);
    expect(exprs()).toEqual(['S = A ⊕ B ⊕ C', 'Cout = A·B + A·C + B·C']);
    expect(wires()).toBeGreaterThan(0);
  });

  it('keeps the table when an input is added and removed again', () => {
    const before = { exprs: exprs(), cells: cells() };
    click('[data-act="in+"]');
    expect(counts()).toEqual({ inputs: 4, outputs: 2, rows: 16 });
    expect(headers()).toEqual(['A', 'B', 'C', 'D', 'S', 'Cout']);
    expect(exprs()).toEqual(before.exprs);
    expect($('.note').textContent).toMatch(/^D doesn't change any output/);
    click('[data-act="in-"]');
    expect(counts()).toEqual({ inputs: 3, outputs: 2, rows: 8 });
    expect(cells()).toBe(before.cells);
    expect(exprs()).toEqual(before.exprs);
    expect(wires()).toBeGreaterThan(0);
  });

  it('removing an input keeps the rows where it was 0', () => {
    click('[data-act="in-"]');
    expect(headers()).toEqual(['A', 'B', 'S', 'Cout']);
    expect(exprs()).toEqual(['S = A ⊕ B', 'Cout = A·B']); // the half adder
  });

  it('keeps the other outputs when outputs are added and removed', () => {
    click('[data-act="out+"]');
    expect(headers()).toEqual(['A', 'B', 'C', 'S', 'Cout', 'Y0']);
    expect(exprs().slice(0, 2)).toEqual(['S = A ⊕ B ⊕ C', 'Cout = A·B + A·C + B·C']);
    expect(exprs()[2]).toBe('Y0 = 0');
    click('[data-act="out-"]');
    click('[data-act="out-"]');
    expect(exprs()).toEqual(['S = A ⊕ B ⊕ C']);
  });

  it('stops at the limits and keeps focus on a usable button', () => {
    for (let i = 0; i < 5; i++) if (!$('[data-act="in+"]').disabled) click('[data-act="in+"]');
    expect(counts().inputs).toBe(4);
    expect($('[data-act="in+"]').disabled).toBe(true);
    for (let i = 0; i < 5; i++) if (!$('[data-act="in-"]').disabled) click('[data-act="in-"]');
    expect(counts().inputs).toBe(1);
    expect(document.activeElement).toBe($('[data-act="in+"]'));
  });

  it('cycles a cell 0 -> 1 -> x -> 0', () => {
    const cell = () => $('[data-cell="1:0"]');
    expect(cell().textContent).toBe('0');
    click(cell());
    expect(cell().textContent).toBe('1');
    expect(exprs()[1]).not.toBe('Cout = A·B + A·C + B·C');
    click(cell());
    expect(cell().textContent).toBe('x');
    expect(exprs()[1]).toBe('Cout = A·B + A·C + B·C'); // don't care: same as 0 here
    click(cell());
    expect(cell().textContent).toBe('0');
    expect(document.activeElement).toBe(cell());
  });

  it('explains an empty circuit after clearing the table', () => {
    click('[data-act="clear"]');
    expect(headers()).toEqual(['A', 'B', 'C', 'Y0', 'Y1']);
    expect(exprs()).toEqual(['Y0 = 0', 'Y1 = 0']);
    expect($('.note').textContent).toMatch(/no gates are needed/);
    expect($$('.tt-lt-svg .pin.unused').length).toBe(3);
  });

  it('copies valid Wokwi JSON to the clipboard', async () => {
    click('[data-act="copy"]');
    await flush();
    const json = JSON.parse(clipboard);
    expect(json.parts.some((p) => p.type === 'wokwi-gate-xor-2')).toBe(true);
    expect(json.connections.length).toBeGreaterThan(0);
    expect($('.tt-lt-export .status').textContent).toMatch(/^Copied!/);
  });

  it('loads a table from JSON and reports bad input', () => {
    const box = () => $('[data-io]');
    box().value = JSON.stringify({ inputs: ['a', 'b'], outputs: { Y: [0, 0, 0, 1] } });
    box().dispatchEvent(new Event('input', { bubbles: true }));
    click('[data-act="io-load"]');
    expect(exprs()).toEqual(['Y = a·b']);
    box().value = '{"inputs":["a"],"outputs":{"Y":[0,1,1]}}';
    box().dispatchEvent(new Event('input', { bubbles: true }));
    click('[data-act="io-load"]');
    expect($('.io .status').textContent).toMatch(/needs 2 values/);
    expect(box().value).toBe('{"inputs":["a"],"outputs":{"Y":[0,1,1]}}');
    expect(exprs()).toEqual(['Y = a·b']); // table unchanged
  });

  it('loads every example without errors', () => {
    const values = Array.from($('select[data-act="example"]').options)
      .map((o) => o.value)
      .filter(Boolean);
    expect(values.length).toBe(4);
    values.forEach((value) => {
      const select = $('select[data-act="example"]'); // re-rendered after each change
      select.value = value;
      select.dispatchEvent(new Event('change', { bubbles: true }));
      expect($('select[data-act="example"]').value).toBe(value);
      expect(exprs().length).toBe(counts().outputs);
    });
  });

  describe('try it', () => {
    const levels = () => $$('button.lvl').map((b) => b.textContent.replace(/\s+/g, ''));
    const outs = () => $$('.try span.lvl').map((b) => b.textContent.replace(/\s+/g, ''));
    const activeRow = () => $$('tbody tr').findIndex((tr) => tr.classList.contains('active'));
    const reset = () => {
      // Set all inputs to 0 by clicking the first row's input cell.
      click($$('td.in[data-row="0"]')[0]);
    };

    it('starts on row 0 with every output low', () => {
      reset();
      expect(levels()).toEqual(['A0', 'B0', 'C0']);
      expect(activeRow()).toBe(0);
      expect(outs()).toEqual(['S0', 'Cout0']);
    });

    it('flipping inputs moves the highlighted row and updates the outputs', () => {
      reset();
      click('button.lvl[data-level="0"]'); // A = 1
      expect(activeRow()).toBe(4);
      expect(outs()).toEqual(['S1', 'Cout0']);
      expect(document.activeElement).toBe($('button.lvl[data-level="0"]'));
      click('button.lvl[data-level="2"]'); // C = 1
      expect(activeRow()).toBe(5);
      expect(outs()).toEqual(['S0', 'Cout1']);
      expect($$('.tt-lt-svg .pin.high').length).toBe(3); // A, C and Cout
    });

    it("clicking a row's input values selects that row", () => {
      click($$('td.in[data-row="7"]')[1]);
      expect(levels()).toEqual(['A1', 'B1', 'C1']);
      expect(activeRow()).toBe(7);
      expect(outs()).toEqual(['S1', 'Cout1']);
    });

    it('clicking an input pin in the diagram flips it', () => {
      reset();
      click($('.tt-lt-svg [data-level="1"]'));
      expect(levels()).toEqual(['A0', 'B1', 'C0']);
      expect(activeRow()).toBe(2);
    });

    it("shows what the circuit really does for a don't-care cell", () => {
      reset();
      click('[data-cell="1:0"]'); // Cout row 0: 0 -> 1
      click('[data-cell="1:0"]'); // -> x
      expect(outs()).toEqual(['S0', 'Cout0']); // the gates still give 0 there
    });

    it('keeps the input values when inputs are added and removed', () => {
      click($$('td.in[data-row="5"]')[0]); // A=1 B=0 C=1
      click('[data-act="in+"]');
      expect(levels()).toEqual(['A1', 'B0', 'C1', 'D0']);
      expect(outs()).toEqual(['S0', 'Cout1']);
      click('[data-act="in-"]');
      expect(levels()).toEqual(['A1', 'B0', 'C1']);
      expect(activeRow()).toBe(5);
    });
  });
});
