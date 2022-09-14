'use: strict';

import Utils from './utility.js';
import heroimage from '../../assets/shopimage.png';

export default class HeroBuilder extends Utils {
  build(options) {
    const section = super.createSection('section', 'section');
    const heroElement = super.create('div', 'header__hero');
    const heroTitle = super.create('h1', 'header__title');
    heroTitle.textContent = options.headline;
    const heroSubtext = super.create('h2', 'header__subtext');
    heroSubtext.textContent = options.subtext;

    heroElement.append(heroTitle, heroSubtext);
    section.append(heroElement);
    return section;
  }
}
