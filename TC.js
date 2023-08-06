// Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

// Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}

// Celsius to Kelvin
function celsiusToKelvin(celsius) {
  return celsius + 273.15;
}

// Kelvin to Celsius
function kelvinToCelsius(kelvin) {
  return kelvin - 273.15;
}

// Fahrenheit to Kelvin
function fahrenheitToKelvin(fahrenheit) {
  return (fahrenheit + 459.67) * 5/9;
}

// Kelvin to Fahrenheit
function kelvinToFahrenheit(kelvin) {
  return (kelvin * 9/5) - 459.67;
}

// Temperature conversion based on user input
function convertTemperature() {
  let temperatureInput = document.getElementById("temperature").value;
  let selectFrom = document.getElementById("from").value;
  let selectTo = document.getElementById("to").value;
  let convertedTemperature;

  if (selectFrom === selectTo) {
    convertedTemperature = temperatureInput;
  } else if (selectFrom === "celsius" && selectTo === "fahrenheit") {
    convertedTemperature = celsiusToFahrenheit(temperatureInput);
  } else if (selectFrom === "celsius" && selectTo === "kelvin") {
    convertedTemperature = celsiusToKelvin(temperatureInput);
  } else if (selectFrom === "fahrenheit" && selectTo === "celsius") {
    convertedTemperature = fahrenheitToCelsius(temperatureInput);
  } else if (selectFrom === "fahrenheit" && selectTo === "kelvin") {
    convertedTemperature = fahrenheitToKelvin(temperatureInput);
  } else if (selectFrom === "kelvin" && selectTo === "celsius") {
    convertedTemperature = kelvinToCelsius(temperatureInput);
  } else if (selectFrom === "kelvin" && selectTo === "fahrenheit") {
    convertedTemperature = kelvinToFahrenheit(temperatureInput);
  }

  document.getElementById("result").innerHTML = `Converted Temperature: ${convertedTemperature.toFixed(2)}`;
}