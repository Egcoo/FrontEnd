import icons from 'url:../../img/icons.svg';

export default class View {
  _data;

  /**
   * Renders the recevied object to the DOM
   *
   * @param {Object | Object[]} data - The data to be rendered. (e.g. recipe or search result)
   * @return {boolean} [render=true] - If false, will create the markup instead of rendering to the DOM
   * @returns {undefined | string} A markup string is returned if render=false
   * @this {Object} View instance
   * @author Jonas Schmedtmann
   * @todo Finish implementation
   */
  render(data, render = true) {
    if (!data || (Array.isArray(data) && data.length === 0)) {
      return this.renderError();
    }

    this._data = data;
    const markup = this._generateMarkup();

    if (!render) {
      return markup;
    }

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  /**
   * Updates the data of the component instead of re-rendering the entire component
   *
   * @param {recipe} data - The new data to be updated.
   */
  update(data) {
    /*
    to guaratee the sidebar does not display the error message when there is no data in the searchbar
    if (!data || (Array.isArray(data) && data.length === 0)) {
      return this.renderError();
    }*/

    this._data = data;
    const newMarkup = this._generateMarkup();
    const newDOM = document.createRange().createContextualFragment(newMarkup);
    const newElements = Array.from(newDOM.querySelectorAll('*'));
    const curElements = Array.from(this._parentElement.querySelectorAll('*'));
    newElements.forEach((newEl, i) => {
      const curEl = curElements[i];
      // Updates changed TEXT
      if (
        !newEl.isEqualNode(curEl) &&
        newEl.firstChild?.nodeValue.trim() !== ''
      ) {
        curEl.textContent = newEl.textContent;
      }

      // Updates changed ATTRIBUTES
      if (!newEl.isEqualNode(curEl)) {
        Array.from(newEl.attributes).forEach(attr => {
          curEl.setAttribute(attr.name, attr.value);
        });
      }
    });
  }

  /**
   * Clears the inner HTML of the parent element.
   *
   */
  _clear() {
    this._parentElement.innerHTML = '';
  }

  /**
   * Renders a spinner element.
   *
   * @param {type} paramName - description of parameter
   * @return {type} description of return value
   */
  renderSpinner() {
    const markup = `
    <div class="spinner">
      <svg>
        <use href="${icons}#icon-loader"></use>
      </svg>
    </div>`;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  /**
   * Renders an error message on the page.
   *
   * @param {string} [message=this._errorMessage] - The error message to be displayed.
   * @return {undefined} This function does not return a value.
   */
  renderError(message = this._errorMessage) {
    const markup = `
    <div class="error">
      <div>
        <svg>
          <use href="${icons}#icon-alert-triangle"></use>
        </svg>
      </div>
      <p>${message}</p>
    </div>
  `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  /**
   * Render the message with the given text.
   *
   * @param {string} message - The text of the message to be rendered. Defaults to the value of this._message.
   * @return {undefined} This function does not return a value.
   */
  renderMessage(message = this._message) {
    const markup = `
    <div class="message">
      <div>
        <svg>
          <use href="${icons}#icon-smile"></use>
        </svg>
      </div>
      <p>${message}</p>
    </div>`;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
}
