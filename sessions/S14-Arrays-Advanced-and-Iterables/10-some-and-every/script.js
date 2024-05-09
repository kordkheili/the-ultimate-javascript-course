const numbers = [5, 12, 8, 130, 44];

//! find()
// const result =
//   numbers.find(function (number) {
//     return number > 10;
//   }) || "مقدار مورد نظر یافت نشد.";
// console.log(result);

//! findIndex()
// const result = numbers.findIndex(function (number) {
//   return number === 55;
// });
// if (result === -1) {
//   console.log("مقدار مورد نظر یافت نشد.");
// } else {
//   console.log(result);
// }

//! some()
// const result = numbers.some(function (number) {
//   return number > 10;
// });
// console.log(result);

//! every()
const result = numbers.every(function (number) {
  return number > 4;
});
console.log(result);
