import Currency from './../src/js/currency-service.js';

export function exchange(baseCurrency) {
  Currency.exchange(baseCurrency)
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
  let exchangeSelectForm = document.querySelector('#exchange-select');
  let exchangeSelection = document.querySelector('#exchange-select').value;
  let optionArray = [];
  for (const option of exchangeSelectForm.options) {
    optionArray.push(option.value);
  }
  console.log("optionArray" + optionArray);
  let resultArray = optionArray.forEach (function(option) {
    if (exchangeSelection !== option) {
      optionArray.splice(0, 1);
    }
  });
  console.log("resultArray" + resultArray);
    if (resultArray.length === exchangeSelection.length)
  
  document.querySelector('#answer').innerText = amountInput * (response.conversion_rates[`${exchangeSelection}`]);
}

function printError(error) {
  document.querySelector('#answer').innerText = `There was an error accessing the conversion data: 
  ${error}.`;
}

const handleFormSubmission = () => {
  let baseCurrency = document.querySelector('#base-currency-select').value;
  exchange(baseCurrency);
};

document.querySelector('#calculate').addEventListener("click", handleFormSubmission);