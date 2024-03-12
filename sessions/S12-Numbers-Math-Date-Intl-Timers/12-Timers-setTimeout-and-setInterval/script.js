//! setTimeout()
const timer1 = setTimeout(function () {
  console.log("timer1", "Hello World! 1");
}, 3000);

console.log("Hello World! 2");

//! setInterval()
const timer2 = setInterval(function () {
  console.log("timer2", new Date());
}, 1000);

// //! setInterval() -> separate function
// function timeLogger() {
//   console.log(new Date());
// }
// const timer2 = setInterval(timeLogger, 1000);

//! clearTimeout() , clearInterval()
const btn1 = document.querySelector(".timer1Btn");
const btn2 = document.querySelector(".timer2Btn");

function clickHandler1() {
  clearTimeout(timer1);
}
btn1.addEventListener("click", clickHandler1);
function clickHandler2() {
  clearInterval(timer2);
}
btn2.addEventListener("click", clickHandler2);

//! setTimeout with input arguments
const timer3 = setTimeout(
  function (a, b, firstName) {
    console.log("timer3", a + b);
    console.log("timer3", `Hello ${firstName}`);
  },
  3000,
  2,
  3,
  "alireza"
);
