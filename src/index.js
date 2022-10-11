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

  init() {
    this.view.getElements(this.model);
    this.view.buildPage(this.model);
    this.view.displayElements();
    this.view.eventHandlers();
  }
}

const controller = new Controller();
