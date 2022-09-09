import { Currency } from './../src/js/currency-service.js';
import { CurrencyExchange } from './../src/js/currency-service.js';

function exchange() {
  CurrencyExchange.exchange()
    .then(function(response) {
      if (response.conversion_rate) {
        printElements(response);
      } else {
        printError(response);
      }
    });
}

function printElements(response) {
  

};

function printError(error) {

};
