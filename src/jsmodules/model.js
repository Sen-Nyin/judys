'use: strict';

export default class Model {
  constructor() {
    this.businessDetails = {
      brand: "Judy's",
      address: null,
      city: 'Liverpool',
      postcode: null,
      phone: '0151 329 1253',
    };
    this.hero = {
      headline: 'If Carlsberg did burgers, ours would be better',
      subtext: 'Fat juicy burgers',
    };
    this.navItems = {
      homeNav: ['home', 'gallery', 'reviews', 'menu', 'contact'],
      other: ['home', 'menu', 'contact'],
    };
    this.menu = [
      {
        itemID: 1,
        name: 'Cheese Burger',
        ingredients: ['bun', 'burger', 'cheese'],
        calories: null,
        fat: {
          total: null,
          saturates: null,
        },
        carbohydrates: {
          total: null,
          sugars: null,
        },
        protein: null,
        vegetarian: false,
        spicy: false,
        price: '£2.50',
      },
    ];
  }
}
