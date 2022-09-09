import Currency from './../src/js/currency-service.js';

describe('Currency', () => {
  test ('should create a CurrencyExchange object type with a static method exchange that returns the Jsonified response or an error', () => {
    expect(exchange().conversion_rates.AED).toEqual(3.6725);
  });
});

