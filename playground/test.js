// Single Line Comment

/* 
    Multi-Line
    comment 
*/
if (condition) {
  //  block of code to be executed if the condition is true
}

if (condition) {
  //  block of code to be executed if the condition is true
} else {
  //  block of code to be executed if the condition is false
}

if (condition1) {
  //  block of code to be executed if condition1 is true
} else if (condition2) {
  //  block of code to be executed if the condition1 is false and condition2 is true
} else {
  //  block of code to be executed if the condition1 is false and condition2 is false
}

if (true) {
  const foo = "foo";
  console.log(foo); // "foo"
}

console.log(foo); // Uncaught ReferenceError: foo is not defined
