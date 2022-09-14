'use: strict';

import './index.scss';
import Model from './jsmodules/model.js';
import View from './jsmodules/view.js';

class Controller {
  constructor(model, view) {
    this.model = new Model();
    this.view = new View();
    this.init();
  }
  applySmoothScroll() {
    document
      .querySelector('.navbar__navlist')
      .addEventListener('click', function (e) {
        if (
          e.target.classList.contains('navbar__link') &&
          e.target.dataset.smoothscroll === true
        ) {
          e.preventDefault();
          const id = e.target.getAttribute('href');
          document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
        }
      });
  }
  displayElements() {
    document.body.append(
      this.view.pageElements.header,
      this.view.pageElements.main,
      this.view.pageElements.footer
    );
  }
  handleClick(event) {
    event.preventDefault();
    const target = event.target.textContent;
    console.log(target);
    controller.view.setBuildType(target);
    controller.clearPage();
    controller.init();
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
      .forEach((link) => link.addEventListener('click', this.handleClick));
  }

  init() {
    // this.View.initElements(this.Model);
    this.view.getElements(this.model);
    this.view.buildPage(this.model);
    this.displayElements();
    this.applySmoothScroll();
    this.eventHandlers();
  }
}

const controller = new Controller();
