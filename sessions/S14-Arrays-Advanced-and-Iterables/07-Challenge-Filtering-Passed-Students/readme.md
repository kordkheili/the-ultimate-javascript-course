# Challenge: Filtering Passed Students

## Overview

This challenge involves the creation of a JavaScript function called filterPassedStudents, which is designed to filter through a list of student objects based on their exam grades. Each student object consists of properties for their name and their exam grade. The function is intended to take two parameters: the list of student objects and a minimum passing grade. It then returns a new array containing only the student objects who achieved a grade equal to or higher than the specified minimum passing grade.

## Objective

The main objective of this challenge is to introduce learners to the concept of filtering data in JavaScript using the `filter` method. By completing this challenge, participants will gain a better understanding of how to:

- Work with arrays of objects in JavaScript.
- Perform conditional checks to filter data based on specific criteria.

## Instructions

To complete this challenge, follow these steps:

1. Implement the filterPassedStudents function according to the provided specifications.

2. Test your function with different inputs to ensure it behaves as expected.
3. Refactor or optimize your code if necessary.

## Example:

```js
const students = [
  { name: "Alice", grade: 80 },
  { name: "Bob", grade: 65 },
  { name: "Charlie", grade: 90 },
  { name: "David", grade: 75 },
];

const passingGrade = 70;
console.log(filterPassedStudents(students, passingGrade));
/* Expected Output: 👇🏻 
    [
        { name: 'Alice', grade: 80 },
        { name: 'Charlie', grade: 90 },
        { name: 'David', grade: 75 }
    ]
*/
```
