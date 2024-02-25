const x = 10;
function logger() {
  //let x = 20;
  function sayHello() {
    //const x = 30;
    console.log(x);
  }
  sayHello();
}
logger();

let y = 100;
if (true) {
  y = 200;
  console.log(y);
}

let result = 0;
for (let i = 1; i <= 10; i++) {
  console.log(`${result} + ${i} = ${result + i}`);
  result = result + i;
}
console.log(result);
