'use: strict';

import Utils from './utility.js';

export default class Contact extends Utils {
  build() {
    const contactSection = super.createSection('contact');
    const container = super.createContainer('contact');

    contactSection.append(container);

    return contactSection;
  }
}
