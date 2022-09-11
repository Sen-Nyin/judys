'use: strict';

import './index.scss';
import HeadController from './jsmodules/builders/headBuilder.js';
import NavController from './jsmodules/builders/navBuilder.js';

// setup
const options = {
  brand: "Jude's",
  location: 'Liverpool',
  navItems: ['home', 'menu', 'gallery', 'reviews', 'contact'],
};

const Header = new HeadController();
const Navbar = new NavController(options);

const navbarElement = Navbar.build();
const headerElement = Header.buildHeadElement(navbarElement);

document.body.append(headerElement);

// smooth scrolling
document
  .querySelector('.navbar__navlist')
  .addEventListener('click', function (e) {
    e.preventDefault();
    if (e.target.classList.contains('.navbar__link')) {
      const id = e.target.getAttribute('href');
      document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }
  });
// nav hover fade effect
