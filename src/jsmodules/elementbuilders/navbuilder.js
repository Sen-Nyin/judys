'use: strict';

import Utils from './utility.js';

export default class Nav extends Utils {
  build(brand, location, navItems) {
    const navbarElement = super.create('nav', 'navbar');

    const navbarListElement = super.create('ul', 'navbar__navlist');

    const brandItem = super.create('li', 'navbar__brand');

    const brandItemLink = super.create('a', 'navbar__brand--link');
    brandItemLink.setAttribute('href', '#');
    brandItemLink.textContent = `${brand}`;

    const brandItemLocation = super.create('span', 'navbar__brand--location');
    brandItemLocation.textContent = `${location}`;

    const burgerItem = super.create('li', 'toggle');
    const burgerIcon = super.createSVG(
      'burger',
      'icon--navbar',
      'icon--burger'
    );

    brandItemLink.append(brandItemLocation);
    brandItem.append(brandItemLink);
    burgerItem.append(burgerIcon);
    navbarListElement.append(brandItem, burgerItem);
    navbarElement.append(navbarListElement);
    navItems.forEach((item) => {
      const navItem = super.create('li', 'navbar__item');
      const navLink = super.create('a', 'navbar__link');
      navLink.textContent = `${item}`;
      if (item === 'home') {
        navLink.setAttribute('href', '#');
      } else {
        navLink.setAttribute('href', `#${item}`);
      }
      navItem.append(navLink);
      navbarListElement.append(navItem);
    });
    return navbarElement;
  }
}
