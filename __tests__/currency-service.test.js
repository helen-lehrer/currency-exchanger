import { Currency } from './../src/js/currency-service.js';
import { CurrencyExchange } from './../src/js/currency-service.js';

describe('Currency', () => {
  test ('should create a currency object instance with a property called dollar equal to 5', () => {
    let currency = new Currency(5);
    expect(currency.dollar).toEqual(5);
  });




});

describe('CurrencyExchange', () => {
  test ('should create a CurrencyExchange object type with a static method exchange', () => {
    expect(CurrencyExchange.exchange()).toEqual(undefined);
  });


});
