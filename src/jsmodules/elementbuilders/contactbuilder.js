'use: strict';

import Utils from './utility.js';

export default class Contact extends Utils {
  build() {
    const contactSection = super.createSection('contact');

    return contactSection;
  }
}
