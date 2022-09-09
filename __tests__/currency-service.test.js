import { Currency } from './../src/js/currency-service.js';
import { CurrencyExchange } from './../src/js/currency-service.js';

describe('Currency', () => {
  test ('should create a currency object instance with a property called dollar equal to 5', () => {
    let currency = new Currency(1);
    expect(currency.dollar).toEqual(1);
  });

});

describe('CurrencyExchange', () => {
  test ('should create a CurrencyExchange object type with a static method exchange that returns the Jsonified response or an error', () => {
    expect(CurrencyExchange.exchange().result).toEqual("success");
  });
});

