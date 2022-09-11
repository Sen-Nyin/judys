'use: strict';

import heroimage from '../../assets/shopimage.png';

export default class Headbuilder {
  buildHeadElement(navbar) {
    const headerElement = document.createElement('header');
    headerElement.classList.add('header');

    const heroElement = document.createElement('div');
    heroElement.classList.add('header__hero');

    const heroTitle = document.createElement('h1');
    heroTitle.classList.add('header__title');
    heroTitle.textContent = 'If Carlsberg made burgers, ours would be better';

    const heroSubtext = document.createElement('h2');
    heroSubtext.classList.add('header__subtext');
    heroSubtext.textContent = 'Big fat burgers';

    const heroImage = document.createElement('img');
    heroImage.classList.add('header__image');
    heroImage.setAttribute('src', `${heroimage}`);

    heroElement.append(heroTitle, heroSubtext, heroImage);
    headerElement.append(navbar, heroElement);

    return headerElement;
  }
}
