function CelsiusToFahrenheit(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

data = CelsiusToFahrenheit(0);
console.log(data);
