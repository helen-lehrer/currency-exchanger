import { Currency } from './../src/js/currency-service.js';

describe('currency', () => {
  test ('should create a currency object instance with a property called dollar equal to 5.', () => {
    let currency = new Currency(5);
    expect(currency.dollar).toEqual(5);
  });
});