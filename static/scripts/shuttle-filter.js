// Used by SiliconProvenProjects component

document.querySelector('#shuttle-filter').addEventListener('change', (event) => {
  const filter = event.target.value;
  document.querySelectorAll('tbody tr').forEach((row) => {
    const rowShuttle = row.dataset.shuttle;
    const display = filter === '' || rowShuttle === filter;
    row.style.display = display ? '' : 'none';
  });
});
