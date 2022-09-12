'use: strict';
import sprite from '../assets/sprite.svg';
import heroimage from '../assets/shopimage.png';

export default class View {
  constructor() {
    this.pageElements = {};
  }
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
  buildPage() {
    const header = this.createElement('header', 'header');
    const main = this.createElement('main', 'main');
    const footer = this.createElement('footer', 'footer');
    header.append(this.pageElements.navbar, this.pageElements.hero);
    main.append(
      this.pageElements.menus,
      this.pageElements.gallery,
      this.pageElements.reviews,
      this.pageElements.contact
    );
    footer.append(this.pageElements.footerContent);
    this.header = header;
    this.main = main;
    this.footer = footer;
  }
  buildHero(options) {
    const heroElement = this.createElement('div', 'header__hero');
    const heroTitle = this.createElement('h1', 'header__title');
    heroTitle.textContent = options.headline;
    const heroSubtext = this.createElement('h2', 'header__subtext');
    heroSubtext.textContent = options.subtext;
    const heroImage = this.createElement('img', 'header__image');
    heroImage.setAttribute('src', `${heroimage}`);
    heroElement.append(heroTitle, heroSubtext, heroImage);
    this.pageElements.hero = heroElement;
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
    const burgerIconSVG = this.createSVG(
      'burger',
      'icon--navbar',
      'icon--burger'
    );
    brandItemLink.setAttribute('href', '#');
    brandItemLink.textContent = `${brand}`;
    brandItemLocation.textContent = `${location}`;
    brandItemLink.append(brandItemLocation);
    brandItem.append(brandItemLink);
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
    this.pageElements.navbar = navbarElement;
  }
  buildSection(section) {
    const element = this.createElement('section', 'section');
    element.id = section;
    const container = this.createElement('article', 'section__container');
    const header = this.createElement('h2', 'section__heading');
    header.textContent = this.capitalise(section);
    container.append(header);
    element.append(container);
    return element;
  }
  buildMenus(menu) {
    const menuSection = this.buildSection('menu');

    this.pageElements.menus = menuSection;
  }
  buildGallery() {
    const gallerySection = this.buildSection('gallery');

    this.pageElements.gallery = gallerySection;
  }
  buildReviews() {
    const reviewsSection = this.buildSection('reviews');

    this.pageElements.reviews = reviewsSection;
  }
  buildContactForm() {
    const contactSection = this.buildSection('contact');

    this.pageElements.contact = contactSection;
  }
  buildFooter() {
    const footerMessage = this.createElement('p', 'footer__copyright');
    footerMessage.textContent = `\u00A9 Leon Lonsdale`;

    this.pageElements.footerContent = footerMessage;
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
  initElements(options) {
    this.buildHero(options.hero);
    this.buildNav(
      options.businessDetails.brand,
      options.businessDetails.location,
      options.navItems
    );
    this.buildMenus(options.menu);
    this.buildGallery();
    this.buildReviews();
    this.buildContactForm();
    this.buildFooter();
    this.buildPage();
  }
}
