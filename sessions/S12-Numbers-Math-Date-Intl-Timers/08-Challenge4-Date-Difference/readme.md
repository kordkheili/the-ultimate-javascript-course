# Challenge #3 (Add Days)

## Task

Write a function that takes two dates as input and returns the difference between them in days.

## Input

The function should take two arguments: `startDate` and `endDate`. Both `startDate` and `endDate` are `Date` objects representing the start and end dates, respectively.

## Output

The function should return an integer representing the number of days between `startDate` and `endDate`.

## Constraints

- Do not use any external libraries or frameworks.
- The function should be short and concise.

## Example

```js
const startDate = new Date("2023-12-01"); // December 1, 2023
const endDate = new Date("2024-01-01"); // January 1, 2024
const daysDiff = getDaysDiff(startDate, endDate);
console.log(daysDiff); // 31
```
