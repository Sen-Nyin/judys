'use: strict';

import './index.scss';
import Model from './jsmodules/model.js';
import View from './jsmodules/view.js';

class Controller {
  constructor() {
    this.model = new Model();
    this.view = new View();
    this.init();
  }
  displayElements() {
    document.body.append(
      this.view.pageElements.header,
      this.view.pageElements.main,
      this.view.pageElements.footer
    );
  }
  handleClick(event) {
    const target = event.target;
    if (target.dataset.smoothscroll !== 'true') {
      const page = target.textContent;
      event.preventDefault();
      this.view.page = page;
      this.clearPage();
      this.init();
    }
  }
  clearPage() {
    while (document.body.firstChild) {
      document.body.firstChild.remove();
    }
  }
  eventHandlers() {
    document
      .querySelector('.navbar__navlist')
      .addEventListener('mouseover', this.view.handleHover.bind(0.3));
    document
      .querySelector('.navbar__navlist')
      .addEventListener('mouseout', this.view.handleHover.bind(1));
    document
      .querySelector('.icon--burger')
      .addEventListener('click', this.view.toggleNav);
    document
      .querySelectorAll('.navbar__link')
      .forEach((link) =>
        link.addEventListener('click', this.handleClick.bind(this))
      );
  }

  init() {
    this.view.getElements(this.model);
    this.view.buildPage(this.model);
    this.displayElements();
    this.eventHandlers();
  }
}

const controller = new Controller();
