'use: strict';
import sprite from '../assets/sprite.svg';

import NavBuilder from './elementbuilders/navbuilder.js';
import HeroBuilder from './elementbuilders/herobuilder.js';
import ContactBuilder from './elementbuilders/contactbuilder.js';
import GalleryBuilder from './elementbuilders/gallerybuilder.js';
import MenuBuilder from './elementbuilders/menusbuilder.js';
import ReviewsBuilder from './elementbuilders/reviewsbuilder.js';
import FooterBuilder from './elementbuilders/footerbuilder.js';
import Utility from './elementbuilders/utility.js';

export default class View {
  constructor() {
    this.home = true;
    this.page = 'home';
    this.pageElements = {};
    this.navBuilder = new NavBuilder();
    this.heroBuilder = new HeroBuilder();
    this.contactBuilder = new ContactBuilder();
    this.galleryBuilder = new GalleryBuilder();
    this.menuBuilder = new MenuBuilder();
    this.reviewsBuilder = new ReviewsBuilder();
    this.footerBuilder = new FooterBuilder();
    this.utility = new Utility();
  }
  getElements(options) {
    this.pageElements.hero = this.heroBuilder.build(options.hero);
    this.pageElements.navbar = this.navBuilder.build(
      options.businessDetails,
      options.navItems
    );
    this.pageElements.menu = this.menuBuilder.build(options.menu);
    this.pageElements.gallery = this.galleryBuilder.build();
    this.pageElements.reviews = this.reviewsBuilder.build();
    this.pageElements.contact = this.contactBuilder.build();
    this.pageElements.footer = this.footerBuilder.build();
  }

  buildPage() {
    const header = this.utility.create('header', 'header');
    const main = this.utility.create('main', 'main');

    if (this.page === 'home') {
      header.append(this.pageElements.navbar, this.pageElements.hero);
      main.append(this.pageElements.gallery, this.pageElements.reviews);
    } else {
      header.append(this.pageElements.navbar);
      main.append(this.pageElements[`${this.page}`]);
    }

    this.pageElements.header = header;
    this.pageElements.main = main;
    this.pageElements.footer = this.footerBuilder.build();
  }
  toggleNav() {
    const navbar = document.querySelector('.navbar__navlist');
    const toggle = document.querySelector('.icon--burger').firstElementChild;
    if (navbar.classList.contains('active')) {
      toggle.setAttribute('href', `${sprite}#icon-burger`);
    } else {
      toggle.setAttribute('href', `${sprite}#icon-x`);
    }
    navbar.classList.toggle('active');
  }
  handleHover = function (event) {
    if (event.target.classList.contains('navbar__link')) {
      const link = event.target;
      const siblings = link
        .closest('.navbar')
        .querySelectorAll('.navbar__link');
      siblings.forEach((element) => {
        if (element !== link) {
          element.style.opacity = this;
        }
      });
    }
  };
  setBuildType(type) {
    this.buildType = type;
  }
}
