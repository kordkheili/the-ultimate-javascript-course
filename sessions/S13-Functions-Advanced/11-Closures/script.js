//! Closures
//? example 1
function functionMaker() {
  const lastName = "Kordkheili";
  return function () {
    console.log("Salam");
    console.log(lastName);
  };
}
const myFunction = functionMaker();
myFunction();

//? example 2
function counter() {
  let value = 0;
  return function () {
    value++;
    console.log(value);
  };
}
const up = counter();
up();
up();
up();
