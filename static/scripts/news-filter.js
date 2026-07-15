document.addEventListener('DOMContentLoaded', function () {
  const tagFilterButtons = document.querySelectorAll('.tag-filter');
  const newsEntries = document.querySelectorAll('.news-entry');

  tagFilterButtons.forEach((button) => {
    button.addEventListener('click', function () {
      const filterValue = this.dataset.filter;

      // when a button is clicked, style every button as a secondary button
      tagFilterButtons.forEach((btn) => {
        btn.classList.remove('button');
        btn.classList.add('button-secondary');
      });

      // then on the button just clicked, add the primary button styling
      this.classList.remove('button-secondary');
      this.classList.add('button');

      // filter the news entries given the clicked button
      newsEntries.forEach((entry) => {
        if (filterValue === 'all') {
          entry.style.display = 'block';
        } else if (entry.dataset.filter.includes(filterValue)) {
          entry.style.display = 'block';
        } else {
          entry.style.display = 'none';
        }
      });
    });
  });
});
