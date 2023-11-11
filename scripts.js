// Conversion rates for different currencies
const conversionRates = {
  usd: 1,
  php: 55.92, 
  euro: 0.93,
  yen: 151.52,
  pound: 0.82,
};

// Function to convert temperature
function convertTemperature() {
  const input = parseFloat(document.getElementById("tempInput").value);
  const fromUnit = document.getElementById("tempFrom").value;
  let result;

  // Switch case to handle different temperature units
  switch (fromUnit) {
    case "celsius":
      result = `${input}°C is ${((input * 9/5) + 32).toFixed(2)}°F or ${(input + 273.15).toFixed(2)}K`;
      break;
    case "fahrenheit":
      result = `${input}°F is ${((input - 32) * 5/9).toFixed(2)}°C or ${(((input - 32) * 5/9) + 273.15).toFixed(2)}K`;
      break;
    case "kelvin":
      result = `${input}K is ${(input - 273.15).toFixed(2)}°C or ${((input - 273.15) * 9/5 + 32).toFixed(2)}°F`;
      break;
  }

  document.getElementById("tempResult").innerText = result;
}

// Function to convert weight
function convertWeight() {
  const input = parseFloat(document.getElementById("weightInput").value);
  const fromUnit = document.getElementById("weightFrom").value;
  const toUnit = document.getElementById("weightTo").value;
  let result;

  // Conversion factors for different weight units
  const conversionFactors = {
    grams: 1,
    kilograms: 0.001,
    ounces: 0.03527396,
    pounds: 0.002204623,
    milligrams: 1000,
  };

  result = `${input} ${fromUnit} is ${(input * conversionFactors[fromUnit] / conversionFactors[toUnit]).toFixed(6)} ${toUnit}`;

  document.getElementById("weightResult").innerText = result;
}

// Function to convert length
function convertLength() {
  const input = parseFloat(document.getElementById("lengthInput").value);
  const fromUnit = document.getElementById("lengthFrom").value;
  const toUnit = document.getElementById("lengthTo").value;
  let result;

  // Conversion factors for different length units
  const conversionFactors = {
    meters: 1,
    feet: 3.28084,
    inches: 39.3701,
    miles: 0.000621371,
    kilometers: 0.001,
  };

  result = `${input} ${fromUnit} is ${(input * conversionFactors[fromUnit] / conversionFactors[toUnit]).toFixed(6)} ${toUnit}`;

  document.getElementById("lengthResult").innerText = result;
}

// Function to convert time
function convertTime() {
  const input = parseFloat(document.getElementById("timeInput").value);
  const fromUnit = document.getElementById("timeFrom").value;
  const toUnit = document.getElementById("timeTo").value;
  let result;

  // Conversion factors for different time units
  const conversionFactors = {
    seconds: 1,
    minutes: 0.0166667,
    hours: 0.000277778,
    days: 1.15741e-5,
    weeks: 1.65344e-6,
  };

  result = `${input} ${fromUnit} is ${(input * conversionFactors[fromUnit] / conversionFactors[toUnit]).toFixed(6)} ${toUnit}`;

  document.getElementById("timeResult").innerText = result;
}

// Function to convert currency
function convertCurrency() {
  const amount = parseFloat(document.getElementById("currencyInput").value);
  const fromCurrency = document.getElementById("currencyFrom").value;
  const toCurrency = document.getElementById("currencyTo").value;

  // Calculate the currency conversion using the conversion rates
  const result = (amount * conversionRates[toCurrency] / conversionRates[fromCurrency]).toFixed(2);

  document.getElementById("currencyResult").innerText = `${amount} ${fromCurrency} is ${result} ${toCurrency}`;
}