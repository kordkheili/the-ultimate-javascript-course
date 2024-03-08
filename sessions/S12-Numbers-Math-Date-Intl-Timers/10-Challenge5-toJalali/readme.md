# Challenge #5 (toJalali)

## Task

Write a function that takes a date as input and returns the date in the Jalali (Persian) calendar format.

## Input

The function should take one argument: `date`. `date` is a `Date` object representing the Gregorian date.

## Output

The function should return a string representing the date in the Jalali calendar format. The output should be in the following format `YYYY/MM/DD`

## Constraints

- Do not use any external libraries or frameworks.
- The function should be short and concise.

## Example

```js
const date = new Date(2023, 11, 1); // December 1, 2023
const jalaliDate = toJalali(date);
console.log(jalaliDate); // 1402/09/10
```
