import { Currency } from './../src/js/currency-service.js';

describe('currency', () => {
  test ('should create a currency object with a static property called dollar equal to dollarInput.', () => {
    let currency = new Currency(5);
    expect(currency.dollar).toEqual(5);
  });
});