// ! Primitive Data Types
let a = "Kordkheili";
let a_copy = a;
a = "Mohammadi Kordkheili";
// console.log(a);
// console.log(a_copy);

// ! Reference Data Type (Object)
let x = {
  firstName: "Alireza",
  lastName: "Kordkheili",
};
let x_copy = x;
x.lastName = "Mohammadi Kordkheili";
console.log(x);
console.log(x_copy);

const array1 = [2, 4, 6, 8];
const array2 = array1;
array2.push(10);
console.log(array1);
console.log(array2);
