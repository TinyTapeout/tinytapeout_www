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
  layoutDiagram,
  planAll,
  toLutJson,
  toWokwi,
} from './logic-table/core.js';

const DEFAULT_IN = ['A', 'B', 'C', 'D'];
const defaultOut = (m) => Array.from({ length: m }, (_, o) => 'Y' + o);

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

// Gate symbols, drawn in a 44x32 box (NOT: 40x24) with inputs at y=8/24 and output at y=16.
const GATE_SVG = {
  and: '<path d="M0 8 H6 M0 24 H6 M35 16 H44"/><path d="M6 3 H22 A13 13 0 0 1 22 29 H6 Z"/>',
  nand: '<path d="M0 8 H6 M0 24 H6 M39 16 H44"/><path d="M6 3 H20 A13 13 0 0 1 20 29 H6 Z"/><circle cx="36" cy="16" r="3"/>',
  or: '<path d="M0 8 H9 M0 24 H9 M37 16 H44"/><path d="M5 3 Q23 3 37 16 Q23 29 5 29 Q12 16 5 3 Z"/>',
  xor: '<path d="M0 8 H10 M0 24 H10 M37 16 H44"/><path class="open" d="M2 3 Q9 16 2 29"/><path d="M7 3 Q25 3 37 16 Q25 29 7 29 Q14 16 7 3 Z"/>',
  not: '<path d="M0 12 H6 M31 12 H40"/><path d="M6 3 L25 12 L6 21 Z"/><circle cx="28" cy="12" r="3"/>',
};

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

function diagramSvg(d) {
  const parts = [];
  d.segs.forEach((s) =>
    parts.push(`<line class="w" x1="${s.x1}" y1="${s.y1}" x2="${s.x2}" y2="${s.y2}"/>`),
  );
  d.gates.forEach((g) =>
    parts.push(`<g class="g" transform="translate(${g.x} ${g.y})">${GATE_SVG[g.kind]}</g>`),
  );
  d.tags.forEach((t) =>
    parts.push(
      `<g class="tag" transform="translate(${t.x} ${t.y})"><rect width="44" height="22" rx="3"/><text x="22" y="15">${esc(t.text)}</text></g>`,
    ),
  );
  d.dots.forEach((p) => parts.push(`<circle class="dot" cx="${p.x}" cy="${p.y}" r="3.5"/>`));
  d.pins.forEach((p) => parts.push(`<circle class="pin" cx="${p.x}" cy="${p.y}" r="4"/>`));
  d.labels.forEach((l) => {
    const over = l.over ? ' text-decoration="overline"' : '';
    parts.push(
      `<text class="lbl" x="${l.x}" y="${l.y + 4}" text-anchor="${l.anchor}"${over}>${esc(l.text)}</text>`,
    );
  });
  return `<svg class="tt-lt-svg" width="${d.w}" height="${d.h}" viewBox="0 -6 ${d.w} ${d.h + 6}" role="img" aria-label="Gate diagram of the reduced logic">${parts.join('')}</svg>`;
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
  const open = { wokwi: false, io: false }; // <details> open state, kept across re-renders

  const load = (key) => {
    const ex = EXAMPLES[key];
    state = {
      example: key,
      inNames: ex.inNames.slice(),
      outNames: ex.outNames.slice(),
      columns: ex.columns.map((c) => c.slice()),
    };
  };

  const resize = (n, m) => {
    n = Math.max(1, Math.min(MAX_INPUTS, n));
    m = Math.max(1, Math.min(MAX_OUTPUTS, m));
    const rows = 1 << n;
    const sameInputs = n === state.inNames.length;
    state = {
      example: '',
      inNames: sameInputs ? state.inNames : DEFAULT_IN.slice(0, n),
      outNames: Array.from({ length: m }, (_, o) => state.outNames[o] || defaultOut(m)[o]),
      // Changing the number of inputs changes every row, so start that table afresh.
      columns: Array.from({ length: m }, (_, o) =>
        sameInputs && state.columns[o] ? state.columns[o] : Array(rows).fill(false),
      ),
    };
  };

  const render = (focusKey) => {
    const { inNames, outNames, columns } = state;
    const n = inNames.length;
    const m = outNames.length;
    const rows = 1 << n;
    const plans = planAll(columns, n);
    const netlist = buildNetlist(plans, inNames, outNames);
    const counts = gateCounts(netlist);
    const wokwiJson = JSON.stringify(toWokwi(netlist), null, 2);
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

    const head =
      inNames.map((nm) => `<th scope="col" class="in">${esc(nm)}</th>`).join('') +
      outNames
        .map((nm, o) => `<th scope="col" class="out${o === 0 ? ' first' : ''}">${esc(nm)}</th>`)
        .join('');
    const body = [];
    for (let r = 0; r < rows; r++) {
      const ins = inNames.map((_, i) => `<td class="in">${inputBit(r, i, n)}</td>`).join('');
      const outs = outNames
        .map((nm, o) => {
          const v = columns[o][r];
          const cls = v === null ? ' dc' : v ? ' on' : '';
          return `<td class="out${o === 0 ? ' first' : ''}"><button type="button" class="cell${cls}" data-cell="${o}:${r}" aria-label="${esc(nm)} in row ${r} is ${cellName(v)}. Click to change">${cellText(v)}</button></td>`;
        })
        .join('');
      body.push(`<tr>${ins}${outs}</tr>`);
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
          <p class="hint">Click an output cell to change it: 0 → 1 → x (don't care).</p>
        </div>
        <div class="tt-lt-logic">
          <h4>Reduced logic</h4>
          <div class="exprs">${exprs}</div>
          <div class="chips">${chips || '<span class="chip">no gates</span>'}</div>
          <div class="diagram">${diagramSvg(layoutDiagram(plans, inNames, outNames))}</div>
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
      state.columns = state.columns.map((c) => c.map(() => false));
      state.example = '';
    } else if (act === 'copy') {
      try {
        await copyText(root._wokwiJson);
        status = 'Copied! In Wokwi, click on the diagram and press Ctrl+V (⌘+V on a Mac).';
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
