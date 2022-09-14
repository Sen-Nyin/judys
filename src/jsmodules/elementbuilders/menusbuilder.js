'use: strict';

import Utils from './utility.js';

export default class Gallery extends Utils {
  build(menu) {
    const menuElement = super.createSection('menu');

    return menuElement;
  }
}
