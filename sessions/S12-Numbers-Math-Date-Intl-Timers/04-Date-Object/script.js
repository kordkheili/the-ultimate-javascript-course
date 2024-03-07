//! type#1
const today = new Date();

//! type#2
const date1 = new Date(1998, 2, 28);
const date2 = new Date(2002, 2, 28, 13, 54);

//! type#3 => dateString
const date3 = new Date("2037-10-17 21:54:32");

//! type#4 => Unix Timestamp
const date4 = new Date(0);
const date5 = new Date(1709812711 * 1000);

//! Extracting Date Components
console.log(today.getFullYear());
console.log(today.getMonth()); // 0->Jan, 1->Feb, 2->March ... 11->dec
console.log(today.getDate());
console.log(today.getDay()); // 0->sun, 1->mon, 2->tue ... 6->sat

//! Get time components
console.log(today.getHours());
console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getSeconds());
console.log(today.getMilliseconds());

//! get Unix Timestamp
console.log(today.getTime());
