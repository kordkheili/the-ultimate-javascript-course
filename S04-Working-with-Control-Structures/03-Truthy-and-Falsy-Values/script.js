//! JavaScript Flasy Values
//* 1) 0
console.log(Boolean(0));
console.log(Boolean(-0));
console.log(Boolean(0n));

//* 2) "" (Empty String)
console.log(Boolean(""));

//* 3) undefined
console.log(Boolean(undefined));

//* 4) null
console.log(Boolean(null));

//* 5) NaN
console.log(Boolean(NaN));

//! All Other values are true
console.log(Boolean("alireza"));
console.log(Boolean("0"));
console.log(Boolean(" "));
console.log(Boolean(100637));
console.log(Boolean(-1));
console.log(Boolean(1.7));
console.log(Boolean(1));
console.log(Boolean({}));
console.log(Boolean([]));
console.log(Boolean(function () {}));

//! example
if (1.7) {
  console.log("hello1");
}
if ("alireza") {
  console.log("hello2");
}
if (undefined) {
  console.log("hello3");
}
if (null) {
  console.log("hello4");
}
if (0) {
  console.log("hello5");
}
if ("") {
  console.log("hello6");
}
if (NaN) {
  console.log("hello7");
}
