'use: strict';

import Utils from './utility.js';
import heroimage from '../../assets/shopimage.png';

export default class HeroBuilder extends Utils {
  build(options) {
    const heroElement = super.create('div', 'header__hero');
    const heroTitle = super.create('h1', 'header__title');
    heroTitle.textContent = options.headline;
    const heroSubtext = super.create('h2', 'header__subtext');
    heroSubtext.textContent = options.subtext;
    const heroImage = super.create('img', 'header__image');
    heroImage.setAttribute('src', `${heroimage}`);
    heroElement.append(heroTitle, heroSubtext, heroImage);
    return heroElement;
  }
}
