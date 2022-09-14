'use: strict';

import Utils from './utility.js';

export default class Footer extends Utils {
  build() {
    const footer = super.create('footer', 'footer');
    const copyright = super.create('p', 'footer__copyright');
    copyright.textContent = `\u00A9 Leon Lonsdale`;

    footer.append(copyright);

    return footer;
  }
}
