const current = new Date();
const date1 = new Date(2034, 10, 18);
const date2 = new Date(2034, 10, 21);
console.log(Number(date1));
console.log(date1.getTime());
console.log(date1 > date2);
console.log(current <= date2);
console.log(date1 === date2);
console.log(date2 - date1);
console.log((date2 - date1) / 1000 / 60 / 60 / 24);
const max = Math.max(current, date1, date2);
const maxDate = new Date(max);
console.log(maxDate);
