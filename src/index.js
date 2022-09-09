import { Currency } from './../src/js/currency-service.js';
import { CurrencyExchange } from './../src/js/currency-service.js';

function exchange() {
  CurrencyExchange.exchange()
    .then(function(response) {
      if (response.conversion_rates) {
        printElements(response);
      } else {
        printError(response);
      }
    });
}

function printElements(response) {
  document.querySelector('#answer').innerText = `${response.conversion_rates}`;

}

function printError(error) {
  document.querySelector('#answer').innerText = `There was an error accessing the conversion data: 
  ${error}.`;
}

const handleFormSubmission = () => {
  exchange();
  let currency = new Currency();
  currency.dollar = 5;
}

document.querySelector('#calculate').addEventListener("click", handleFormSubmission);