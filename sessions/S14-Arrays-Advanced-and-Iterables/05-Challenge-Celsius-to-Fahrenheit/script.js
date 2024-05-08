const temperatureCelsius1 = [0, 10, 20, 30, 40];
const temperatureCelsius2 = [55, 20, 3, 1, -20];
const celsiusToFahrenheit = (c_array) => c_array.map((c) => (c * 9) / 5 + 32);
const temperatureFahrenheit1 = celsiusToFahrenheit(temperatureCelsius1);
const temperatureFahrenheit2 = celsiusToFahrenheit(temperatureCelsius2);
const temperatureFahrenheit3 = celsiusToFahrenheit([-40, -32, 100]);
console.log(temperatureFahrenheit1);
console.log(temperatureFahrenheit2);
console.log(temperatureFahrenheit3);
