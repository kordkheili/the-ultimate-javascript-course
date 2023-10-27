const myFriends = ["Mostafa", "Hesam", "Arman"];
const myFriends2 = ["Ahmad", "Behnam"];
console.log(myFriends);

//! length
console.log(myFriends.length);

//! at
//console.log(myFriends[myFriends.length - 1]);
console.log(myFriends.at(-1));

//! includes
console.log(myFriends.includes("Hesam"));
console.log(myFriends.includes("hesam"));
console.log(myFriends.includes(100));

//! indexOf
console.log(myFriends.indexOf("Hesam"));
console.log(myFriends.indexOf("Arman"));
console.log(myFriends.indexOf(2100));

//! concat
console.log(myFriends.concat(myFriends2));

//! join
console.log(myFriends.join(" "));

//! reverse
console.log(myFriends.reverse());

//! slice
const carBrands = ["Benz", "Porsche", "BMW", "Toyota", "Ford", "Volvo"];
console.log(carBrands.slice(1, 4));
console.log(carBrands.slice(2));

//! splice
const output = carBrands.splice(2, 3);
console.log(carBrands);
console.log(output);

const months = [
  "فروردین",
  "اردیبهشت",
  "تیر",
  "مرداد",
  "شهریور",
  "مهر",
  "آبان",
  "آذر",
  "دی",
  "بهمن",
  "اسفند",
];
//months.splice(6, 3);
months.splice(2, 0, "خرداد");
console.log(months);
