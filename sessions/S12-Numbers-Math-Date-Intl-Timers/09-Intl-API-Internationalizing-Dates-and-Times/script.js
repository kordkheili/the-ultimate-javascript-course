//! ECMAScript Internationalization API => Intl
const today = new Date();
const date1 = new Date("2020-09-15 4:8");
const options = {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  weekday: "long",
  hour: "2-digit",
  minute: "2-digit",
  second: "numeric",
};
const todayIR = new Intl.DateTimeFormat("de-CH", options).format(date1);
const todayVIPFormat = new Intl.DateTimeFormat(
  navigator.language,
  options
).format(date1);
console.log(todayIR);
console.log(todayVIPFormat);
