'use: strict';

import Utils from './utility.js';

export default class Reviews extends Utils {
  build() {
    const reviewsElement = super.createSection('reviews');
    const container = super.createContainer('reviews');

    reviewsElement.append(container);

    return reviewsElement;
  }
}
