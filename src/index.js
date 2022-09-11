'use: strict';

import './index.scss';
import HeadController from './jsmodules/builders/headBuilder.js';
import NavController from './jsmodules/builders/navBuilder.js';

const Header = new HeadController();
const Navbar = new NavController();

const navbarElement = Navbar.buildHome();
Header.buildHeadElement(navbarElement);
