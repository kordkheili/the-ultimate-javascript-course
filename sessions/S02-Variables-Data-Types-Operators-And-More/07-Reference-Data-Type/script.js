// ! Primitive Data Types

//String
const firstName = "alireza";
console.log(firstName, typeof firstName);

//Number
const age = 31;
const score = 9.9;
console.log(age, typeof age);
console.log(score, typeof score);

//Boolean
const isMarried = true;
const isFemale = false;
console.log(isMarried, typeof isMarried);
console.log(isFemale, typeof isFemale);

//Undefined
let user;
console.log(user, typeof user);

//null
let email = null;
console.log(email, typeof email);

//Symbol
const mySymbol = Symbol("test");
console.log(mySymbol, typeof mySymbol);

//BigInt
const hugeNumber1 = BigInt(9009943634637537838);
const hugeNumber2 = 9009943634637537838n;
console.log(hugeNumber1, typeof hugeNumber1);
console.log(hugeNumber2, typeof hugeNumber2);

// ! Reference Data Type
//Object
const person1 = {
  firstName: "alireza",
  lastName: "mohammadi",
};
console.log(person1, typeof person1);

const numbers = [2, 4, 6, 8];
console.log(numbers, typeof numbers);

const sayHello = function () {
  console.log("سلام رفیق!");
};
console.log(sayHello, typeof sayHello);
