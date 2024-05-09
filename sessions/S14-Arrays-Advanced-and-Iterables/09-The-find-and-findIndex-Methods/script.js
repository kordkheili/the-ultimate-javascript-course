const numbers = [5, 12, 8, 130, 44];

//! find()
// const result =
//   numbers.find(function (number) {
//     return number > 10;
//   }) || "مقدار مورد نظر یافت نشد.";
// console.log(result);

//! findIndex()
const result = numbers.findIndex(function (number) {
  return number === 130;
});
if (result === -1) {
  console.log("مقدار مورد نظر یافت نشد.");
} else {
  console.log(result);
}
