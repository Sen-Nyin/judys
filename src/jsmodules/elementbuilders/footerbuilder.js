'use: strict';

import Utils from './utility.js';

export default class Footer extends Utils {
  build(contact) {
    console.log(contact.street);
    const footer = super.create('footer', 'footer');
    const container = super.createContainer();
    const footerGrid = super.create('div', 'footer__grid');
    const address = super.create('address', 'footer__address');
    const addressList = super.create('ul', 'footer__address-list');

    for (const key of Object.keys(contact)) {
      const listitem = super.create('li');
      if (key === 'phone' || key === 'email') {
        const link = super.create('a');
        link.classList.add('footer__address-link');
        link.setAttribute(
          'href',
          `${key === 'phone' ? 'tel:' : 'mailto'}${contact[key]}`
        );
        link.textContent = `${contact[key]}`;
        listitem.append(link);
      } else {
        listitem.textContent = `${contact[key]}`;
      }
      addressList.append(listitem);
    }
    address.append(addressList);
    footerGrid.append(address);
    container.append(footerGrid);
    const copyright = super.create('p', 'footer__copyright');
    copyright.textContent = `\u00A9 Jude's | Website by Lonsdale Studios`;

    footer.append(container, copyright);

    return footer;
  }
}
