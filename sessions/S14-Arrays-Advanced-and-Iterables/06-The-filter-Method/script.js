//! filter()
const numbers = [1, 2, 3, 4, 5, 43, 56, 74, 23, 53, 725, 754];
const evenNumbers = numbers.filter((number) => {
  const condition = number % 2 === 0;
  return condition;
});
console.log(numbers);
console.log(evenNumbers);

//! example
const names = ["Alice", "Bob", "Charlie", "David", "Eve"];
const shortNames = names.filter((name) => name.length < 5);
console.log(names);
console.log(shortNames);
