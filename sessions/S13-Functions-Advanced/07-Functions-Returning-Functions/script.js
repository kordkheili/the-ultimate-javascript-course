//! Higher-Order Functions
//? Functions Returning Functions

function greet(prefix) {
  return function (firstName) {
    console.log(`${prefix} ${firstName}`);
  };
}

const greetWithHello = greet("Hello");
const greetWithHi = greet("Hi");
const greetWithSalam = greet("Salam");
const greetWithSalamPersian = greet("سلام");

greetWithHello("Alireza");
greetWithHi("Alireza");
greetWithHi("Alice");
greetWithSalam("Behnam");
greetWithSalamPersian("علیرضا");
