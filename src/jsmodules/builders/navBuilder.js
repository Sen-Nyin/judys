'use: strict';

export default class Navbuilder {
  constructor() {
    this.navItems = ['home', 'gallery', 'menu', 'testimonials', 'contact'];
  }
  buildNavElement() {
    const navElement = document.createElement('nav');
    const brandElement = document.createElement('h1');
    const linkList = document.createElement('ul');

    navElement.classList.add('navbar');
    brandElement.classList.add('navbar__brand');
    linkList.classList.add('navbar__navlist');

    brandElement.textContent = "Judy's";

    navElement.append(brandElement);
    this.navElement = navElement;
    this.navList = linkList;
    console.log(this.linkList);
  }
  buildHome() {
    this.buildNavElement();
    this.navItems.forEach((item) => {
      const navItem = document.createElement('li');
      const navLink = document.createElement('a');

      navItem.classList.add('navbar__item');
      navLink.classList.add('navbar__link');

      navLink.textContent = `${item}`;
      navItem.append(navLink);
      this.navList.append(navItem);
    });
    this.navElement.append(this.navList);
    return this.navElement;
  }
}
