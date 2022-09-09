import { Currency } from './../src/js/currency-service.js';
import { CurrencyExchange } from './../src/js/currency-service.js';

export function exchange(baseCurrency) {
  CurrencyExchange.exchange(baseCurrency)
    .then(function(response) {
      if (response.conversion_rates) {
        printElements(response);
      } else {
        printError(response);
      }
    });
}

function printElements(response) {
  let amountInput = document.querySelector('#amount-input').value; 
  let exchangeTo = document.querySelector('#exchange-select').value; 
  document.querySelector('#answer').innerText = amountInput * (response.conversion_rates[`${exchangeTo}`]);
}

function printError(error) {
  document.querySelector('#answer').innerText = `There was an error accessing the conversion data: 
  ${error}.`;
}

const handleFormSubmission = () => {
  let baseCurrency = document.querySelector('#base-currency-select').value;
  exchange(baseCurrency);

  let currency = new Currency();
  currency.dollar = 5;
};

document.querySelector('#calculate').addEventListener("click", handleFormSubmission);