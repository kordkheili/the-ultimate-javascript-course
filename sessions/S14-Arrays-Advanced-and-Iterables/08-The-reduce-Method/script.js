//! reduce()
const numbers = [1, 2, 3, 4, 5];

// const result = numbers.reduce(function (accumulator, current) {
//   console.log(accumulator, current);
//   return accumulator + "Salam";
// }, "alireza");
// console.log(result);

const result = numbers.reduce(function (accumulator, current) {
  console.log(`${accumulator} + ${current} = ${accumulator + current}`);
  return accumulator + current;
}, 0);
console.log(result);
