// Used by SiliconProvenProjects component

const select = document.querySelector('#shuttle-filter');

function applyFilter(filter) {
  document.querySelectorAll('tbody tr').forEach((row) => {
    const rowShuttle = row.dataset.shuttle;
    const display = filter === '' || rowShuttle === filter;
    row.style.display = display ? '' : 'none';
  });
}

function shuttleFromHash() {
  const candidate = decodeURIComponent(location.hash.slice(1)).toLowerCase();
  const isValid = Array.from(select.options).some((opt) => opt.value === candidate);
  return isValid ? candidate : '';
}

function syncFromHash() {
  const shuttle = shuttleFromHash();
  select.value = shuttle;
  applyFilter(shuttle);
}

select.addEventListener('change', (event) => {
  const filter = event.target.value;
  const newUrl = location.pathname + location.search + (filter ? `#${filter}` : '');
  history.replaceState(null, '', newUrl);
  applyFilter(filter);
});

window.addEventListener('hashchange', syncFromHash);

syncFromHash();
