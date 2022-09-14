'use: strict';

import Utils from './utility.js';

export default class Gallery extends Utils {
  build(menu) {
    const menuElement = super.createSection('menu');
    const container = super.createContainer('menu');

    menuElement.append(container);
    return menuElement;
  }
}
