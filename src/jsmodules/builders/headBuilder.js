'use: strict';

export default class Headbuilder {
  buildHeadElement(navbar) {
    const headerElement = document.createElement('header');
    headerElement.classList.add('header');
    headerElement.append(navbar);
    document.body.prepend(headerElement);
    this.headerElement = document.querySelector('.header');
  }
  buildHeadHome() {
    this.buildHeadElement();
  }
}
