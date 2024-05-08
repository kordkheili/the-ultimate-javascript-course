# Challenge: Celsius to Fahrenheit

You have an array of Celsius temperatures representing the daily temperatures for a week. Your task is to create a function `celsiusToFahrenheit()` that takes an array of Celsius temperatures as input and returns an array of corresponding temperatures in Fahrenheit using the `map()` method.

1. Define a function `celsiusToFahrenheit()` that takes an array of Celsius temperatures as input.
2. Inside the function, use the `map()` method to iterate over each temperature in the array.
3. For each Celsius temperature, convert it to Fahrenheit using the formula `(C × 9/5) + 32`.
4. Return a new array containing the temperatures converted to Fahrenheit.
5. Test your function with sample input arrays and verify that it produces the correct output.

## Example:

```js
const celsiusTemperatures = [0, 10, 20, 30, 40];
const temperatureFahrenheit = celsiusToFahrenheit()(celsiusTemperatures);
console.log(temperatureFahrenheit); // Expected Output: [32, 50, 68, 86, 104]
```

Your challenge is to implement the `celsiusToFahrenheit()` function as described above. This exercise will help learners understand how to use the `map()` method to transform elements of an array in JavaScript.
