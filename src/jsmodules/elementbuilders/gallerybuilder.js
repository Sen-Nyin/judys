'use: strict';

import Utils from './utility.js';

export default class Gallery extends Utils {
  build() {
    const gallery = super.createSection('gallery');
    const container = super.createContainer('gallery');

    gallery.append(container);

    return gallery;
  }
}
