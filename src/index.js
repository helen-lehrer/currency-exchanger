import Currency from './../src/js/currency-service.js';

function exchange(baseCurrency) {
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
  let resultArray = [];
  optionArray.forEach (function(option) {
    if (exchangeSelection !== option) {
      resultArray.push(option);
    }
  });
  if (optionArray.length === resultArray.length) {
    document.querySelector('#answer').innerText = `Sorry, the selected currency is not currently supported by this application`;
  } else { 
    document.querySelector('#answer').innerText = amountInput * (response.conversion_rates[`${exchangeSelection}`]);
  }
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