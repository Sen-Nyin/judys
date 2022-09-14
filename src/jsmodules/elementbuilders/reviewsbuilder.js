'use: strict';

import Utils from './utility.js';

export default class Reviews extends Utils {
  build() {
    const reviewsElement = super.createSection('reviews');

    return reviewsElement;
  }
}
