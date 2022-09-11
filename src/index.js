'use: strict';

import './index.scss';
import HeadController from './jsmodules/builders/headBuilder.js';
import NavController from './jsmodules/builders/navBuilder.js';

// setup
const options = {
  brand: "Judy's",
  location: 'Liverpool',
  navItems: ['home', 'menu', 'gallery', 'reviews', 'contact'],
};

const Header = new HeadController();
const Navbar = new NavController(options);

const navbarElement = Navbar.build();
const headerElement = Header.buildHeadElement(navbarElement);

document.body.append(headerElement);
