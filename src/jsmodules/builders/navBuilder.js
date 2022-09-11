'use: strict';
import sprite from '../../assets/sprite.svg';
export default class Navbuilder {
  constructor(options) {
    this.navItems = options.navItems;
    this.brand = options.brand;
    this.location = options.location;
  }
  build() {
    const navbarElement = document.createElement('nav');
    const navbarListElement = document.createElement('ul');
    const brandItem = document.createElement('li');
    const brandItemLink = document.createElement('a');
    const brandItemLocation = document.createElement('span');
    const burgerItem = document.createElement('li');
    const burgerIconSVG = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'svg'
    );
    const burgerIconUSE = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'use'
    );
    burgerIconUSE.setAttribute('href', `${sprite}` + '#icon-burger');

    navbarElement.classList.add('navbar');
    navbarListElement.classList.add('navbar__navlist');
    brandItem.classList.add('navbar__brand');
    brandItemLink.classList.add('navbar__brand--link');
    brandItemLink.setAttribute('href', '#');
    brandItemLocation.classList.add('navbar__brand--location');
    burgerItem.classList.add('toggle');
    burgerIconSVG.classList.add('icon--navbar', 'icon--burger');
    burgerIconSVG.addEventListener('click', this.toggle);

    brandItemLink.textContent = `${this.brand}`;
    brandItemLocation.textContent = `${this.location}`;

    brandItemLink.append(brandItemLocation);
    brandItem.append(brandItemLink);
    burgerIconSVG.append(burgerIconUSE);
    burgerItem.append(burgerIconSVG);
    navbarListElement.append(brandItem);
    navbarListElement.append(burgerItem);
    navbarElement.append(navbarListElement);

    this.navItems.forEach((item) => {
      const navItem = document.createElement('li');
      const navLink = document.createElement('a');

      navItem.classList.add('navbar__item');
      navLink.classList.add('navbar__link');

      navLink.textContent = `${item}`;

      navItem.append(navLink);

      navbarListElement.append(navItem);
    });

    return navbarElement;
  }

  toggle() {
    const navbar = document.querySelector('.navbar__navlist');
    const toggle = document.querySelector('.icon--burger').firstElementChild;
    if (navbar.classList.contains('active')) {
      toggle.setAttribute('href', `${sprite}#icon-burger`);
    } else {
      toggle.setAttribute('href', `${sprite}#icon-x`);
    }
    navbar.classList.toggle('active');
  }
}
