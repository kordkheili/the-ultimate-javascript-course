//! map()
const numbers1 = [1, 2, 3, 4, 5, 22, 100];
const numbers2 = numbers1.map((number) => {
  return number * 2;
});
console.log(numbers1);
console.log(numbers2);

//! example
const names1 = ["Alice", "Bob", "Charlie"];
const names2 = names1.map(function (name, index) {
  return `${index + 1}#${name}`;
});
console.log(names1);
console.log(names2);
