// Interactive logic table: edit a truth table, see the reduced logic as gates,
// and copy the circuit to the clipboard to paste straight into a Wokwi project.
// Used by the {{< logic-table >}} shortcode.

import {
  MAX_INPUTS,
  MAX_OUTPUTS,
  buildNetlist,
  fromLutJson,
  gateCounts,
  inputBit,
  inputValue,
  layoutDiagram,
  inputsUsed,
  planAll,
  resizeTable,
  SEGMENTS,
  simulate,
  toLutJson,
  toWokwi,
} from './logic-table/core.js';

// Truth table columns given as one string per row: '1', '0' or 'x' (don't care) per output.
function fromRows(rows) {
  const m = rows[0].length;
  return Array.from({ length: m }, (_, o) =>
    rows.map((row) => (row[o] === 'x' ? null : row[o] === '1')),
  );
}

// Output cells cycle 0 -> 1 -> x (don't care) -> 0.
const nextCell = (v) => (v === false ? true : v === true ? null : false);
const cellText = (v) => (v === null ? 'x' : v ? '1' : '0');
const cellName = (v) => (v === null ? "x (don't care)" : v ? '1' : '0');

const EXAMPLES = {
  'full-adder': {
    label: 'Full adder',
    inNames: ['A', 'B', 'C'],
    outNames: ['S', 'Cout'],
    columns: fromRows(['00', '10', '10', '01', '10', '01', '01', '11']),
  },
  'half-adder': {
    label: 'Half adder',
    inNames: ['A', 'B'],
    outNames: ['S', 'C'],
    columns: fromRows(['00', '10', '10', '01']),
  },
  mux: {
    label: '2:1 multiplexer',
    inNames: ['S', 'A', 'B'],
    outNames: ['Y'],
    columns: fromRows(['0', '0', '1', '1', '0', '1', '0', '1']),
  },
  'seven-segment': {
    label: 'BCD to 7-segment',
    inNames: ['w', 'x', 'y', 'z'],
    outNames: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
    columns: fromRows([
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
      // 10 to 15 aren't BCD digits, so we don't care what the display shows.
      'xxxxxxx',
      'xxxxxxx',
      'xxxxxxx',
      'xxxxxxx',
      'xxxxxxx',
      'xxxxxxx',
    ]),
  },
};

const GATE_LABELS = { not: 'NOT', and: 'AND', nand: 'NAND', or: 'OR', xor: 'XOR' };

// Gate symbols in Wokwi's 96 x 38.4 box, so the drawing matches the paste: inputs on the left
// edge at 9.6 and 28.8 (a NOT's at 19.2), the output on the right edge at 19.2. Each body is a
// classic symbol drawn in a 44 x 32 box (a NOT's 40 x 24), scaled up and centred, with leads out
// to the edges: [body, x where the input leads meet it, x where the output lead leaves it].
const GATE_BODY = {
  and: ['<path d="M6 3 H22 A13 13 0 0 1 22 29 H6 Z"/>', 6, 35],
  nand: ['<path d="M6 3 H20 A13 13 0 0 1 20 29 H6 Z"/><circle cx="36" cy="16" r="3"/>', 6, 39],
  or: ['<path d="M5 3 Q23 3 37 16 Q23 29 5 29 Q12 16 5 3 Z"/>', 9, 37],
  xor: [
    '<path class="open" d="M2 3 Q9 16 2 29"/><path d="M7 3 Q25 3 37 16 Q25 29 7 29 Q14 16 7 3 Z"/>',
    10,
    37,
  ],
  not: ['<path d="M6 3 L25 12 L6 21 Z"/><circle cx="28" cy="12" r="3"/>', 6, 31],
};

function gateSvg(kind) {
  const [body, inX, outX] = GATE_BODY[kind];
  const k = 1.2;
  const left = (96 - (kind === 'not' ? 40 : 44) * k) / 2;
  const top = kind === 'not' ? 19.2 - 12 * k : 0;
  const x = (v) => +(left + v * k).toFixed(1);
  const ins = kind === 'not' ? [19.2] : [9.6, 28.8];
  const leads = ins.map((y) => `M0 ${y} H${x(inX)}`).join(' ') + ` M${x(outX)} 19.2 H96`;
  return `<path class="open" d="${leads}"/><g transform="translate(${+left.toFixed(1)} ${+top.toFixed(1)}) scale(${k})">${body}</g>`;
}

// The layout is in Wokwi's pixels; the drawing is shown smaller.
const DRAWING_SCALE = 0.7;

const bitName = (i, n) =>
  `Bit ${n - 1 - i}${n > 1 && i === 0 ? ' (MSB)' : ''}${n > 1 && i === n - 1 ? ' (LSB)' : ''}`;

function esc(s) {
  return String(s).replace(
    /[&<>"']/g,
    (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c],
  );
}

function literalHtml(name, neg) {
  return neg ? `<span class="tt-lt-over">${esc(name)}</span>` : esc(name);
}

function expressionHtml(plan, inNames) {
  if (plan.kind === 'const') return String(plan.value);
  let body;
  if (plan.kind === 'xor') {
    body = plan.vars.map((i) => esc(inNames[i])).join(' ⊕ ');
  } else {
    body = plan.terms
      .map((t) => t.lits.map((l) => literalHtml(inNames[l.i], l.neg)).join('·'))
      .join(' + ');
  }
  return plan.inv ? `<span class="tt-lt-over">${body}</span>` : body;
}

// high: set of pin keys whose signal is 1, from the "Try it" inputs.
function diagramSvg(d, high, inNames) {
  const parts = [];
  d.segs.forEach((s) =>
    parts.push(`<line class="w" x1="${s.x1}" y1="${s.y1}" x2="${s.x2}" y2="${s.y2}"/>`),
  );
  d.gates.forEach((g) =>
    parts.push(`<g class="g" transform="translate(${g.x} ${g.y})">${gateSvg(g.kind)}</g>`),
  );
  d.tags.forEach((t) =>
    parts.push(
      `<g class="tag" transform="translate(${t.x} ${t.y})"><rect width="38.4" height="19.2" rx="3"/><text x="19.2" y="14.5">${esc(t.text)}</text></g>`,
    ),
  );
  d.dots.forEach((p) => parts.push(`<circle class="dot" cx="${p.x}" cy="${p.y}" r="4.5"/>`));
  d.pins.forEach((p) => {
    const cls = `pin${p.unused ? ' unused' : ''}${high.has(p.key) ? ' high' : ''}`;
    if (p.key.startsWith('in:')) {
      // Input pins can be clicked to flip that input, like the buttons above the diagram.
      const i = Number(p.key.slice(3));
      parts.push(
        `<g class="pin-hit" data-level="${i}"><title>Flip ${esc(inNames[i])}</title><circle cx="${p.x}" cy="${p.y}" r="15" fill="transparent"/><circle class="${cls}" cx="${p.x}" cy="${p.y}" r="7"/></g>`,
      );
    } else {
      parts.push(`<circle class="${cls}" cx="${p.x}" cy="${p.y}" r="7"/>`);
    }
  });
  d.labels.forEach((l) => {
    const over = l.over ? ' text-decoration="overline"' : '';
    parts.push(
      `<text class="lbl${l.unused ? ' unused' : ''}" x="${l.x}" y="${l.y + 6}" text-anchor="${l.anchor}"${over}>${esc(l.text)}</text>`,
    );
  });
  const k = DRAWING_SCALE;
  return `<svg class="tt-lt-svg" width="${Math.round(d.w * k)}" height="${Math.round((d.h + 10) * k)}" viewBox="0 -10 ${d.w} ${d.h + 10}" role="img" aria-label="Gate diagram of the reduced logic">${parts.join('')}</svg>`;
}

// A single digit 7-segment display lit by the outputs (output 0 is segment A, … output 7 is DP),
// drawn like Wokwi's.
const SEGMENT_SHAPES = [
  '2 0 8 0 9 1 8 2 2 2 1 1',
  '10 2 10 8 9 9 8 8 8 2 9 1',
  '10 10 10 16 9 17 8 16 8 10 9 9',
  '8 18 2 18 1 17 2 16 8 16 9 17',
  '0 16 0 10 1 9 2 10 2 16 1 17',
  '0 8 0 2 1 1 2 2 2 8 1 9',
  '2 8 8 8 9 9 8 10 2 10 1 9',
];

function sevenSegmentSvg(outValues) {
  const lit = (o) => (outValues[o] ? ' class="on"' : '');
  const segs = SEGMENT_SHAPES.map((pts, o) => `<polygon points="${pts}"${lit(o)}/>`).join('');
  return `<svg class="tt-lt-seg7" viewBox="-1 -1 15 20" width="45" height="60" role="img" aria-label="7-segment display"><rect x="-1" y="-1" width="15" height="20" rx="1"/><g transform="skewX(-8) translate(2 0)">${segs}</g><circle cx="12.4" cy="17" r="0.9"${lit(7)}/></svg>`;
}

async function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return;
  }
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.setAttribute('readonly', '');
  ta.style.position = 'fixed';
  ta.style.opacity = '0';
  document.body.appendChild(ta);
  ta.select();
  const ok = document.execCommand('copy');
  document.body.removeChild(ta);
  if (!ok) throw new Error('copy failed');
}

function mount(root) {
  const start = EXAMPLES[root.dataset.example] ? root.dataset.example : 'full-adder';
  let state = null;
  let status = '';
  let ioStatus = '';
  let ioError = false;
  let ioDraft = null; // text the user typed into the import box, kept across re-renders
  let levels = []; // "Try it" input values, 0 or 1 per input
  let sevenSeg = start === 'seven-segment'; // wire the outputs to a 7-segment display
  const open = { wokwi: false, io: false }; // <details> open state, kept across re-renders

  const load = (key) => {
    const ex = EXAMPLES[key];
    if (key === 'seven-segment') sevenSeg = true;
    state = {
      example: key,
      inNames: ex.inNames.slice(),
      outNames: ex.outNames.slice(),
      columns: ex.columns.map((c) => c.slice()),
    };
  };

  // Keeps the table: see resizeTable in core.js.
  const resize = (n, m) => {
    state = { example: '', ...resizeTable(state, n, m) };
  };

  const render = (focusKey) => {
    const { inNames, outNames, columns } = state;
    const n = inNames.length;
    const m = outNames.length;
    const rows = 1 << n;
    const plans = planAll(columns, n);
    const netlist = buildNetlist(plans, inNames, outNames);
    const counts = gateCounts(netlist);
    // The drawing follows the 7-segment box: room for LEDs on the outputs, or packed closer for
    // the stack. Its space is always the taller of the two, so ticking the box moves nothing.
    const layout = layoutDiagram(plans, inNames, outNames, { leds: !sevenSeg });
    const otherH = layoutDiagram(plans, inNames, outNames, { leds: sevenSeg }).h;
    const diagramH = Math.round((Math.max(layout.h, otherH) + 10) * DRAWING_SCALE);
    const wokwiJson = JSON.stringify(toWokwi(netlist, layout, { stacked: sevenSeg }), null, 2);
    root._wokwiJson = wokwiJson;
    const tableJson = JSON.stringify(
      toLutJson(state, state.example ? EXAMPLES[state.example].label : ''),
      null,
      2,
    ).replace(
      /\[\s*([^\[\]]*?)\s*\]/g,
      (_, inner) => '[' + inner.split(/\s*,\s*/).join(', ') + ']',
    );
    root._tableJson = tableJson;

    // "Try it": the current input values pick a row; the outputs come from simulating the
    // circuit itself, so a don't-care cell shows what the gates really do.
    levels = inNames.map((_, i) => (levels[i] ? 1 : 0));
    const active = inputValue(levels);
    const outValues = simulate(netlist, levels);
    const high = new Set();
    levels.forEach((v, i) => v && high.add(`in:${i}`));
    outValues.forEach((v, o) => v && high.add(`o:${o}:out`));
    const tryIns = inNames
      .map(
        (nm, i) =>
          `<button type="button" class="lvl${levels[i] ? ' high' : ''}" data-level="${i}" aria-pressed="${!!levels[i]}" aria-label="Input ${esc(nm)} (bit ${n - 1 - i}) is ${levels[i]}. Click to flip" title="${bitName(i, n)}">${esc(nm)} <b>${levels[i]}</b></button>`,
      )
      .join('');
    const tryOuts = outNames
      .map(
        (nm, o) =>
          `<span class="lvl out${outValues[o] ? ' high' : ''}">${esc(nm)} <b>${outValues[o] ? 1 : 0}</b></span>`,
      )
      .join('');

    // The first input is the MSB: each row's inputs read as a binary number, shown in the # column.
    // Every header has a note line (often blank) so the names all sit at the same height.
    const sub = (t) => `<small class="sub">${t ? esc(t) : '&nbsp;'}</small>`;
    const head =
      `<th scope="col" class="num" title="Row number: the inputs as a decimal number">#${sub('')}</th>` +
      inNames
        .map(
          (nm, i) =>
            `<th scope="col" class="in" title="${bitName(i, n)}">${esc(nm)}${sub(n > 1 && i === 0 ? 'MSB' : n > 1 && i === n - 1 ? 'LSB' : '')}</th>`,
        )
        .join('') +
      outNames
        .map(
          (nm, o) =>
            `<th scope="col" class="out${o === 0 ? ' first' : ''}"${sevenSeg ? ` title="Segment ${SEGMENTS[o]}"` : ''}>${esc(nm)}${sub(sevenSeg ? SEGMENTS[o] : '')}</th>`,
        )
        .join('');
    const body = [];
    for (let r = 0; r < rows; r++) {
      const ins =
        `<td class="num" data-row="${r}">${r}</td>` +
        inNames.map((_, i) => `<td class="in" data-row="${r}">${inputBit(r, i, n)}</td>`).join('');
      const outs = outNames
        .map((nm, o) => {
          const v = columns[o][r];
          const cls = v === null ? ' dc' : v ? ' on' : '';
          return `<td class="out${o === 0 ? ' first' : ''}"><button type="button" class="cell${cls}" data-cell="${o}:${r}" aria-label="${esc(nm)} in row ${r} is ${cellName(v)}. Click to change">${cellText(v)}</button></td>`;
        })
        .join('');
      body.push(`<tr${r === active ? ' class="active"' : ''}>${ins}${outs}</tr>`);
    }

    const exprs = plans
      .map(
        (p, o) =>
          `<div class="expr"><b>${esc(outNames[o])}</b> = ${expressionHtml(p, inNames)}</div>`,
      )
      .join('');
    const chips = Object.keys(GATE_LABELS)
      .filter((k) => counts[k])
      .map((k) => `<span class="chip">${counts[k]} × ${GATE_LABELS[k]}</span>`)
      .join('');
    const notes = [];
    if (plans.every((p) => p.kind === 'const')) {
      notes.push('Every output is always 0 or always 1, so no gates are needed.');
    } else {
      const unused = inNames.filter((_, i) => !inputsUsed(plans, n)[i]);
      if (unused.length) {
        notes.push(
          `${unused.join(', ')} ${unused.length === 1 ? "doesn't" : "don't"} change any output, so ${unused.length === 1 ? "it isn't" : "they aren't"} connected.`,
        );
      }
    }
    const options = Object.entries(EXAMPLES)
      .map(
        ([k, ex]) =>
          `<option value="${k}"${state.example === k ? ' selected' : ''}>${esc(ex.label)}</option>`,
      )
      .join('');

    root.innerHTML = `
      <div class="tt-lt-toolbar">
        <div class="stepper" role="group" aria-label="Inputs">
          <span class="lbl">Inputs</span>
          <button type="button" data-act="in-" aria-label="Remove an input" ${n <= 1 ? 'disabled' : ''}>−</button>
          <span class="num">${n}</span>
          <button type="button" data-act="in+" aria-label="Add an input" ${n >= MAX_INPUTS ? 'disabled' : ''}>+</button>
        </div>
        <div class="stepper" role="group" aria-label="Outputs">
          <span class="lbl">Outputs</span>
          <button type="button" data-act="out-" aria-label="Remove an output" ${m <= 1 ? 'disabled' : ''}>−</button>
          <span class="num">${m}</span>
          <button type="button" data-act="out+" aria-label="Add an output" ${m >= MAX_OUTPUTS ? 'disabled' : ''}>+</button>
        </div>
        <label class="example">Example
          <select data-act="example"><option value=""${state.example ? '' : ' selected'}>Custom</option>${options}</select>
        </label>
        <button type="button" class="clear" data-act="clear">Clear table</button>
      </div>
      <div class="tt-lt-main">
        <div class="tt-lt-table">
          <table>
            <thead><tr>${head}</tr></thead>
            <tbody>${body.join('')}</tbody>
          </table>
          <p class="hint">Click an output cell to change it: 0 → 1 → x (don't care). Click an input value to try that row.</p>
        </div>
        <div class="tt-lt-logic">
          <h4>Reduced logic</h4>
          <div class="exprs">${exprs}</div>
          <div class="chips">${chips || '<span class="chip">no gates</span>'}</div>
          ${notes.map((t) => `<p class="note">${esc(t)}</p>`).join('')}
          <div class="try" role="group" aria-label="Try it">
            <span class="lbl">Try it</span>
            <span class="lvls">${tryIns}</span>
            <span class="value" title="The inputs as a decimal number">= ${active}</span>
            <span class="arrow" aria-hidden="true">→</span>
            <span class="lvls" role="status" aria-label="Outputs">${tryOuts}</span>
          </div>
          <div class="seg-row">
            <label class="seg-opt"><input type="checkbox" data-act="seven-seg"${sevenSeg ? ' checked' : ''}> Show the outputs on a 7-segment display</label>
            ${sevenSeg ? sevenSegmentSvg(outValues) : ''}
          </div>
          <div class="diagram" style="min-height: ${diagramH}px">${diagramSvg(layout, high, inNames)}</div>
        </div>
      </div>
      <div class="tt-lt-export">
        <button type="button" class="copy" data-act="copy">Copy for Wokwi</button>
        <span class="status" role="status">${esc(status)}</span>
        <details data-open="wokwi"${open.wokwi ? ' open' : ''}>
          <summary>Show Wokwi JSON</summary>
          <pre>${esc(wokwiJson)}</pre>
        </details>
        <details data-open="io" class="io"${open.io ? ' open' : ''}>
          <summary>Import or export the table</summary>
          <p class="hint">Uses the JSON format of
            <a href="https://github.com/maehw/wokwi-lookup-table-generator" target="_blank" rel="noopener">wokwi-lookup-table-generator</a>.
            Paste a table and click <b>Load table</b>. Don't-care cells are written as <code>"x"</code>.</p>
          <textarea data-io spellcheck="false" aria-label="Truth table JSON" rows="10">${esc(ioDraft !== null ? ioDraft : tableJson)}</textarea>
          <div class="io-actions">
            <button type="button" class="clear" data-act="io-load">Load table</button>
            <button type="button" class="clear" data-act="io-copy">Copy table JSON</button>
            <span class="status${ioError ? ' err' : ''}" role="status">${esc(ioStatus)}</span>
          </div>
        </details>
      </div>`;

    if (focusKey) {
      const el = root.querySelector(focusKey);
      if (el && !el.disabled) el.focus();
    }
  };

  root.addEventListener('click', async (e) => {
    const lvl = e.target.closest('[data-level]');
    if (lvl) {
      const i = Number(lvl.dataset.level);
      levels[i] = levels[i] ? 0 : 1;
      const fromButton = lvl.tagName === 'BUTTON';
      render(fromButton ? `button[data-level="${i}"]` : null);
      return;
    }
    const rowCell = e.target.closest('td[data-row]');
    if (rowCell) {
      const r = Number(rowCell.dataset.row);
      const n = state.inNames.length;
      levels = state.inNames.map((_, i) => inputBit(r, i, n));
      render();
      return;
    }
    const cell = e.target.closest('[data-cell]');
    if (cell) {
      const [o, r] = cell.dataset.cell.split(':').map(Number);
      state.columns[o][r] = nextCell(state.columns[o][r]);
      state.example = '';
      status = '';
      ioStatus = '';
      render(`[data-cell="${o}:${r}"]`);
      return;
    }
    const btn = e.target.closest('button[data-act]');
    if (!btn) return;
    const act = btn.dataset.act;
    const n = state.inNames.length;
    const m = state.outNames.length;
    status = '';
    ioStatus = '';
    ioError = false;
    if (act === 'in-') resize(n - 1, m);
    else if (act === 'in+') resize(n + 1, m);
    else if (act === 'out-') resize(n, m - 1);
    else if (act === 'out+') resize(n, m + 1);
    else if (act === 'clear') {
      // Same size, all 0, default names (A, B, … and Y0, Y1, …), and the 7-segment display off.
      state = { example: '', ...resizeTable({ inNames: [], outNames: [], columns: [] }, n, m) };
      sevenSeg = false;
    } else if (act === 'copy') {
      try {
        await copyText(root._wokwiJson);
        status = `Copied! In Wokwi, click on the diagram, press Ctrl+V (⌘+V on a Mac), then press F to zoom to fit if you can't see it. ${sevenSeg ? "The outputs are stacked like the output block's pins, ready to wire to uo_out and its 7-segment display." : 'Each output lights an LED so you can try it straight away.'}`;
      } catch (err) {
        status = 'Could not copy automatically. Open "Show Wokwi JSON" and copy the text by hand.';
      }
    } else if (act === 'io-load') {
      const text = root.querySelector('[data-io]').value;
      try {
        const t = fromLutJson(text);
        state = { example: '', inNames: t.inNames, outNames: t.outNames, columns: t.columns };
        ioDraft = null;
        ioStatus = `Loaded ${t.inNames.length} inputs and ${t.outNames.length} outputs.`;
      } catch (err) {
        ioDraft = text;
        ioError = true;
        ioStatus = 'Could not load: ' + err.message;
      }
    } else if (act === 'io-copy') {
      ioDraft = null;
      try {
        await copyText(root._tableJson);
        ioStatus = 'Table JSON copied.';
      } catch (err) {
        ioError = true;
        ioStatus = 'Could not copy automatically. Select the text and copy it by hand.';
      }
    }
    // Keep focus on the control that was used; if it just became disabled, use its partner.
    render(`[data-act="${act}"]`);
    const used = root.querySelector(`[data-act="${act}"]`);
    if (used && used.disabled) {
      const other = act.endsWith('-') ? act.slice(0, -1) + '+' : act.slice(0, -1) + '-';
      const partner = root.querySelector(`[data-act="${other}"]`);
      if (partner) partner.focus();
    }
  });

  root.addEventListener('input', (e) => {
    if (e.target.matches('[data-io]')) ioDraft = e.target.value;
  });

  // <details> toggles don't bubble, so listen in the capture phase.
  root.addEventListener(
    'toggle',
    (e) => {
      const key = e.target.dataset && e.target.dataset.open;
      if (key) open[key] = e.target.open;
    },
    true,
  );

  root.addEventListener('change', (e) => {
    if (e.target.matches('input[data-act="seven-seg"]')) {
      sevenSeg = e.target.checked;
      status = '';
      render('input[data-act="seven-seg"]');
      return;
    }
    if (e.target.matches('select[data-act="example"]') && EXAMPLES[e.target.value]) {
      load(e.target.value);
      status = '';
      ioStatus = '';
      ioDraft = null;
      render('select[data-act="example"]');
    }
  });

  load(start);
  render();
}

function init() {
  document.querySelectorAll('.tt-lt').forEach((el) => {
    if (!el.dataset.ready) {
      el.dataset.ready = '1';
      mount(el);
    }
  });
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
else init();
