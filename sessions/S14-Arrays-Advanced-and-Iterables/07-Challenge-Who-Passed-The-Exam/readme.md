# Challenge: Who Passed The Exam

This JavaScript challenge involves filtering an array of student objects to extract only those students who have passed the exam based on their grades. The challenge includes the flexibility to specify the minimum passing grade as a parameter.

1. Define a function `celsiusToFahrenheit()` that takes an array of Celsius temperatures as input.
2. Inside the function, use the `map()` method to iterate over each temperature in the array.
3. For each Celsius temperature, convert it to Fahrenheit using the formula `(C × 9 ÷ 5) + 32`
4. Return a new array containing the temperatures converted to Fahrenheit.
5. Test your function with sample input arrays and verify that it produces the correct output.

## Example:

```js
const temperatureCelsius = [0, 10, 20, 30, 40];
const temperatureFahrenheit = celsiusToFahrenheit(temperatureCelsius);
console.log(temperatureFahrenheit); // Expected Output: [32, 50, 68, 86, 104]
```
