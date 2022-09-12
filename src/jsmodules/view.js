'use: strict';
import sprite from '../assets/sprite.svg';
import heroimage from '../assets/shopimage.png';

export default class View {
  capitalise(string) {
    const capitalised = string.charAt(0).toUpperCase() + string.slice(1);
    return capitalised;
  }
  createElement(...args) {
    const [element, ...styles] = args;
    const createdElement = document.createElement(element);
    styles.forEach((style) => createdElement.classList.add(style));
    return createdElement;
  }
  buildPage(options) {
    const header = this.createElement('header', 'header');
    const main = this.createElement('main', 'main');
    const footer = this.createElement('footer', 'footer');

    // build head
    const navbar = this.buildNav(
      options.brand,
      options.location,
      options.navItems
    );
    const head = this.buildHead();
    header.append(navbar, head);

    // build content
    const menuSection = this.buildMenus();
    const gallerySection = this.buildGallery();
    const reviewsSection = this.buildReviews();
    const contactSection = this.buildContactForm();
    main.append(menuSection, gallerySection, reviewsSection, contactSection);

    // build footer

    const footerSection = this.buildFooter();
    footer.append(footerSection);

    this.header = header;
    this.main = main;
    this.footer = footer;
  }
  buildHead() {
    const heroElement = this.createElement('div', 'header__hero');
    const heroTitle = this.createElement('h1', 'header__title');
    heroTitle.textContent = 'If Carlsberg made burgers, ours would be better';
    const heroSubtext = this.createElement('h2', 'header__subtext');
    heroSubtext.textContent = 'Big fat burgers';
    const heroImage = this.createElement('img', 'header__image');
    heroImage.setAttribute('src', `${heroimage}`);
    heroElement.append(heroTitle, heroSubtext, heroImage);
    return heroElement;
  }

  buildNav(brand, location, navItems) {
    const navbarElement = this.createElement('nav', 'navbar');
    const navbarListElement = this.createElement('ul', 'navbar__navlist');
    const brandItem = this.createElement('li', 'navbar__brand');
    const brandItemLink = this.createElement('a', 'navbar__brand--link');
    const brandItemLocation = this.createElement(
      'span',
      'navbar__brand--location'
    );
    const burgerItem = this.createElement('li', 'toggle');
    const burgerIconSVG = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'svg'
    );
    const burgerIconUSE = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'use'
    );
    burgerIconUSE.setAttribute('href', `${sprite}` + '#icon-burger');
    brandItemLink.setAttribute('href', '#');
    burgerIconSVG.classList.add('icon--navbar', 'icon--burger');
    brandItemLink.textContent = `${brand}`;
    brandItemLocation.textContent = `${location}`;
    brandItemLink.append(brandItemLocation);
    brandItem.append(brandItemLink);
    burgerIconSVG.append(burgerIconUSE);
    burgerItem.append(burgerIconSVG);
    navbarListElement.append(brandItem, burgerItem);
    navbarElement.append(navbarListElement);
    navItems.forEach((item) => {
      const navItem = this.createElement('li', 'navbar__item');
      const navLink = this.createElement('a', 'navbar__link');
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
  buildSection(section) {
    const element = this.createElement('section', 'section');
    element.id = section;
    const container = this.createElement('div', 'section__container');
    const header = this.createElement('h2', 'section__heading');
    header.textContent = this.capitalise(section);
    container.append(header);
    element.append(container);
    return element;
  }
  buildMenus() {
    const menuSection = this.buildSection('menu');

    return menuSection;
  }
  buildGallery() {
    const gallerySection = this.buildSection('gallery');

    return gallerySection;
  }
  buildReviews() {
    const reviewsSection = this.buildSection('reviews');

    return reviewsSection;
  }
  buildContactForm() {
    const contactSection = this.buildSection('contact');

    return contactSection;
  }
  buildFooter() {
    const footerMessage = this.createElement('p', 'footer__copyright');
    footerMessage.textContent = `&copy; Leon Lonsdale`;
    return footerMessage;
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
}
