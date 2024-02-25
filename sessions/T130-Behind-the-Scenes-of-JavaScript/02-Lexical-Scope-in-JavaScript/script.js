//! 1. global scope
const x = 10;
const me = "kordkheili";
const array = [10, 20];

function sayHello() {
  //! 2. function scope
  const firstName = "Alireza";
  console.log(firstName);
  console.log(x);
  console.log(array);
  if (true) {
    const lastName = "Mohammadi";
    console.log(lastName);
  }
  //   console.log(lastName); !error!
}
sayHello();
// console.log(firstName); !error!

if (true) {
  //! 3. block scope
  const y = 20;
  console.log(y);
  console.log(x);
  console.log(me);
  console.log(array);

  if (true) {
    const z = 30;
    console.log(z);
    console.log(y);
    console.log(me);
  }
  //   console.log(z); !error!
}

for (let i = 0; i < 10; i++) {
  //! 3. block scope
  console.log(i);
}
