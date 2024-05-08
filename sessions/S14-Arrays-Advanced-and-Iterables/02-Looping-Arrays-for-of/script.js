const numbers = [10, 11, 12, 13, 14, 15];

//! bad solution
// console.log(numbers[0]);
// console.log(numbers[1]);
// console.log(numbers[2]);
// console.log(numbers[3]);
// console.log(numbers[4]);
// console.log(numbers[5]);

//! good solution
// for (let i = 0; i < 6; i++) {
//   console.log(numbers[i]);
// }

//! best solution -> forEach()
numbers.forEach(function (number) {
  console.log(number);
});

//! example
const cities = ["New York", "Chicago", "Houston"];
cities.forEach(function (city, index, array) {
  //   console.log(city);
  //   console.log(index);
  //   console.log(array);
  const result = `${city} Index is => ${index}`;
  console.log(result);
});
