//! Arithmetic Operators
const birthYear = 1370;
console.log(birthYear + 18);

const x = 10;
const y = 4;
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(birthYear / x);
console.log(2 ** 8);
console.log(10 % 5);
console.log(11 % 5);

//! Assignment Operators
let age = 28;
age += 1; //age = age + 1;
age++; //age = age + 1;
age -= 1; //age = age - 1;
age--; //age = age - 1;
age *= 2; //age = age * 2;
age /= 2; //age = age / 2;
console.log(age);

//! Operator Precedence
const score1 = 20;
const score2 = 17.5;
const result = (score1 + score2) / 2;
console.log(result);
