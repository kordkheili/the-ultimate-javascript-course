# Challenge #3 (Add Days)

## Task

Write a function that takes two input arguments: `startDate` and `numberOfDays`. `startDate` is a `Date` object representing the start date, and `numberOfDays` is an integer representing the number of days you want to add to the start date.

## Output

The function should return a new `Date` object representing the new date after adding `numberOfDays` to `startDate`.

## Constraints

- Do not use any external libraries or frameworks.
- Do not use a `for` or `while` loop.
- The function should be short and concise.

## Example

```js
const startDate = new Date(2023, 11, 1); // December 1, 2023
const numberOfDays = 4;
const newDate = addDays(startDate, numberOfDays);
console.log(newDate); // December 5, 2023
```
