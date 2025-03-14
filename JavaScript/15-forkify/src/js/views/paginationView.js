import View from './View.js';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  /**
   * Adds a click event handler to the parent element. Publisher-subscriber pattern
   *
   * @param {function} handler - The callback function to be executed when the click event occurs.
   * @return {undefined} This function does not return a value.
   */
  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      console.log(btn);
      if (!btn) return;

      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }

  /**
   * Generates the markup for the pagination buttons based on the current page
   * and the number of pages.
   *
   * @return {string} The generated HTML markup for the pagination buttons.
   */
  _generateMarkup() {
    const curPage = this._data.page;
    console.log(curPage);

    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    // Page 1, and there are other pages
    if (curPage === 1 && numPages > 1) {
      return `
      <button data-goto="${
        curPage + 1
      }" class="btn--inline pagination__btn--next">
        <span>Page ${curPage + 1}</span>
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-right"></use>
        </svg>
      </button>
      `;
    }
    // last page
    if (curPage === numPages && numPages > 1) {
      return `
      <button data-goto="${
        curPage - 1
      }" class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-left"></use>
        </svg>
        <span>Page ${curPage - 1}</span>
      </button>
      `;
    }
    // other pages
    if (curPage < numPages) {
      return `
      <button data-goto="${
        curPage - 1
      }" class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-left"></use>
        </svg>
        <span>Page ${curPage - 1}</span>
      </button>
      <button data-goto="${
        curPage + 1
      }" class="btn--inline pagination__btn--next">
        <span>Page ${curPage + 1}</span>
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-right"></use>
        </svg>
      </button>
      `;
    }
    // Page 1, and there are no other pages
    if (curPage === 1 && numPages === 1) {
      return '';
    }
  }
}

export default new PaginationView();
