'use: strict';

import './index.scss';
import HeadController from './jsmodules/builders/headBuilder.js';
import NavController from './jsmodules/builders/navBuilder.js';

// setup
const navItems = ['home', 'menu', 'gallery', 'reviews', 'contact'];
const brand = "Judy's";
const location = 'Liverpool';

const Header = new HeadController();
const Navbar = new NavController(brand, location, navItems);

const navbarElement = Navbar.build();
Header.buildHeadElement(navbarElement);
