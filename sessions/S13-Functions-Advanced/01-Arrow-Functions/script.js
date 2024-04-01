//! Arrow Function (ES6)

//? example1
const hello = () => {};

//? example2
const sayHello = () => {
  return "Hello World!";
};

//? example3
const arrowSum = (a, b) => {
  return a + b;
};
const result2 = arrowSum(200, 300);
console.log(result2);

//? example4 => Arrow Function Return Value by Default
const shangool = () => "mangool";
console.log(shangool());

//? example5 => Arrow Function Return Value by Default
const sum = (a, b) => a + b;
console.log(sum(3, 5));

//? example6 => Arrow Function Return Value by Default
const hi = (firstName) => "Hello " + firstName;
console.log(hi("Alireza"));
console.log(hi("Mohammad"));

//! this

const box1 = document.getElementById("box1");
box1.addEventListener("click", function () {
  console.log("clicked", this);
});
box1.addEventListener("click", () => {
  console.log("clicked from Arrow", this);
});
