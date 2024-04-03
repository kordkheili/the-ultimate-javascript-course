//! First-Class Functions
//? 1. Functions are simply Values
//? 2. Functions are another type of Object
const firstName = "Alireza";
const logger = () => {
  console.log("Hello");
};
const sum = (x, y) => x + y;
const counter = {
  value: 1,
  increase: function () {
    this.value++;
  },
};
console.log(counter.value);
counter.increase();
counter.increase();
console.log(counter.value);

document.body.addEventListener("click", logger); // logger is First-Class

//! Higher-Order Functions
//? 1. Function receives a function
document.body.addEventListener("click", logger); // addEventListener is Higher-Order

//? 2. Function returning a function
const first = function () {
  console.log("first function called");
  return () => {
    console.log("second function called");
  };
};
const secondFunc = first();
secondFunc();
secondFunc();
secondFunc();
