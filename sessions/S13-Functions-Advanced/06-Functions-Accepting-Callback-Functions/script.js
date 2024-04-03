//! Higher-Order Functions
//? Functions Accepting Callback Functions

//* example 1
document.body.addEventListener("click", () => {
  console.log("clicked");
});

//* example 2
const array = [2, 4, 5, 6, 7, 9];

const isOdd = (x) => x % 2 === 1;
const isEven = (x) => x % 2 === 0;
const greaterThan5 = (x) => x > 5;

customFilter = (arr, fn) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
};

console.log(customFilter(array, isOdd));
console.log(customFilter(array, isEven));
console.log(customFilter(array, greaterThan5));
