'use: strict';

import './index.scss';
import Model from './jsmodules/model.js';
import View from './jsmodules/view.js';

class Controller {
  constructor(model, view) {
    this.Model = model;
    this.View = view;
    this.init();
  }
  applySmoothScroll() {
    document
      .querySelector('.navbar__navlist')
      .addEventListener('click', function (e) {
        console.log(e.target);
        if (
          e.target.classList.contains('navbar__link') &&
          e.target.textContent !== 'home'
        ) {
          e.preventDefault();
          const id = e.target.getAttribute('href');
          document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
        }
      });
  }
  displayElements() {
    document.body.append(this.View.header);
    document.body.append(this.View.main);
    document.body.append(this.View.footer);
  }

  eventHandlers() {
    document
      .querySelector('.navbar__navlist')
      .addEventListener('mouseover', this.View.handleHover.bind(0.3));
    document
      .querySelector('.navbar__navlist')
      .addEventListener('mouseout', this.View.handleHover.bind(1));
    document
      .querySelector('.icon--burger')
      .addEventListener('click', this.View.toggleNav);
  }
  init() {
    this.View.buildPage(this.Model);
    this.displayElements();
    this.applySmoothScroll();
    this.eventHandlers();
  }
}

const model = new Model();
const view = new View();
const controller = new Controller(model, view);
