// //! Promise
// //! 1. Create Promise
// const myPromise = new Promise((khoshGhowli, badGhowli) => {
//   const firstName = prompt("اسمت چیه گوگولی؟");
//   if (firstName === "علیرضا") {
//     badGhowli("شرمنده😢");
//   } else {
//     khoshGhowli("😊");
//   }
// });

// //! 2. Consuming Promise
// myPromise
//   .then((result) => {
//     //? successful
//     console.log(result);
//   })
//   .catch((result) => {
//     //? failed
//     console.log(result);
//   })
//   .finally(() => {
//     //? always
//     console.log("تمام");
//   });

//! Example: Pizza Delivery 👇🏻

//! 1. Create Promise
const orderPizza = new Promise((resolve, reject) => {
  console.log("سفارش شما دریافت شد");
  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve("🍕🍕🍕");
    } else {
      reject(new Error("😢"));
    }
  }, 1000);
});

//! 2. Consuming Promise
orderPizza
  .then((result) => {
    console.log(result);
  })
  .catch((result) => {
    console.log(result);
  });

console.log("در انتظار پیتزا...");
