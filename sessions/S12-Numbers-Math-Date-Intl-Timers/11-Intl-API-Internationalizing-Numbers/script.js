//! ECMAScript Internationalization API => Intl
// const number = 3608555.91;
// const number_US = Intl.NumberFormat("en-US").format(number);
// const number_BR = Intl.NumberFormat("pt-BR").format(number);
// const number_IR = Intl.NumberFormat("fa-IR").format(number);
// console.log(number);
// console.log(number_US);
// console.log(number_BR);
// console.log(number_IR);

//! style => unit
// const speed = 100;
// const options = {
//   style: "unit",
//   unit: "kilometer-per-hour",
// };
// const formattedSpeed = Intl.NumberFormat("en-US", options).format(speed);
// console.log(formattedSpeed);

//! style => currency
// const price = 1125.99;
// const options = {
//   style: "currency",
//   currency: "USD",
// };
// const formattedPrice = Intl.NumberFormat("en-CA", options).format(price);
// const formattedPriceUS = Intl.NumberFormat("en-US", options).format(price);
// const formattedPriceBR = Intl.NumberFormat("pt-BR", options).format(price);
// const formattedPriceIR = Intl.NumberFormat("fa-IR", options).format(price);
// console.log(formattedPrice);
// console.log(formattedPriceUS);
// console.log(formattedPriceBR);
// console.log(formattedPriceIR);

//! style => percent
const percent = 0.25;
const options = {
  style: "percent",
};
const formattedPercent = Intl.NumberFormat("fa-IR", options).format(percent);
const formattedPercentUS = Intl.NumberFormat("en-US", options).format(percent);
console.log(formattedPercent);
console.log(formattedPercentUS);
