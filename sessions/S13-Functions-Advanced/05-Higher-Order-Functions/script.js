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

document.body.addEventListener("click", logger);
