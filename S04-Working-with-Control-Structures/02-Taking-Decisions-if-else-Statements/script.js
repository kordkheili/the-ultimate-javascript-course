const age = +prompt("لطفا سن خود را وارد نمایید");
if (age >= 18) {
  console.log("شما به سن قانونی رسیده‌اید!");
} else if (age === 17) {
  console.log("شما نزدیک به سن قانونی هستید");
} else {
  console.log("کلاس چندی عمو؟");
}

let x;
if (true) {
  x = 100;
  console.log(x);
  console.log("allways true...");
  x = 150;
}
console.log(x);
/*
if (false) {
  console.log("test");
}
 */
