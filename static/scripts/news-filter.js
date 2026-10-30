document.addEventListener('DOMContentLoaded', function () {
  const tagFilterButtons = document.querySelectorAll('.tag-filter');
  const dateFilterButtons = document.querySelectorAll('.date-filter');
  const allFilterButtons = document.querySelectorAll('.tag-filter, .date-filter');

  // convert to array for filtering later
  const newsEntries = Array.from(document.querySelectorAll('.news-entry'));

  // default filter settings
  var filterValue = 'all-tags';
  var dateValue = 'all-dates';

  allFilterButtons.forEach((button) => {
    button.addEventListener('click', function () {
      // determine which filter was clicked
      const isTagFilter = this.dataset.filter != null;
      const isDateFilter = this.dataset.date != null;

      // update tag filter button styling
      if (isTagFilter) {
        tagFilterButtons.forEach((btn) => {
          btn.classList.remove('button');
          btn.classList.add('button-secondary');
        });
        this.classList.remove('button-secondary');
        this.classList.add('button');
        filterValue = this.dataset.filter;
      }

      // update date filter button styling
      if (isDateFilter) {
        dateFilterButtons.forEach((btn) => {
          btn.classList.remove('button');
          btn.classList.add('button-secondary');
        });
        this.classList.remove('button-secondary');
        this.classList.add('button');
        dateValue = this.dataset.date;
      }

      // if filter is unset, treat it the same as 'all-{dates, tags}' - return untouched array
      const dateFilteredEntries =
        dateValue == 'all-dates'
          ? newsEntries
          : newsEntries.filter((entry) => entry.dataset.date.includes(dateValue));
      const tagFilteredEntries =
        filterValue == 'all-tags'
          ? dateFilteredEntries
          : dateFilteredEntries.filter((entry) => entry.dataset.filter.includes(filterValue));

      // hide all articles
      newsEntries.forEach((entry) => {
        entry.style.display = 'none';
      });

      // only show filtered articles
      tagFilteredEntries.forEach((entry) => {
        entry.style.display = 'block';
      });
    });
  });
});
