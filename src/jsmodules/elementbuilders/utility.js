'use: strict';

import sprite from '../../assets/sprite.svg';

export default class Utils {
  capitalise(string) {
    const capitalised = string.charAt(0).toUpperCase() + string.slice(1);
    return capitalised;
  }
  create(...args) {
    const [element, ...styles] = args;
    const createdElement = document.createElement(element);
    styles.forEach((style) => createdElement.classList.add(style));
    return createdElement;
  }
  createSVG(...args) {
    const [icon, ...styles] = args;
    const w3ns = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(w3ns, 'svg');
    const use = document.createElementNS(w3ns, 'use');
    use.setAttribute('href', `${sprite}#icon-${icon}`);
    styles.forEach((style) => svg.classList.add(style));
    svg.append(use);
    return svg;
  }
  createSection(section) {
    const element = this.create('section', 'section');
    element.id = section;
    return element;
  }
  createContainer(heading = null) {
    const container = this.create('div', 'container');
    if (heading !== null) {
      const header = this.create('h2', 'section__heading');
      header.textContent = this.capitalise(heading);
      container.append(header);
    }
    return container;
  }
}
