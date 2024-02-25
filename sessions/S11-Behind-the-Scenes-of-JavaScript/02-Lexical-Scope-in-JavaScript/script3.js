if (true) {
  //! block scope (ES6)
  var x = 100;
}
console.log(x);

function logger() {
  //! function scope (CJS)
  var y = 200;
}
console.log(y);
