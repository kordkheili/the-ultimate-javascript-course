//! split()
const txt1 = "Welcome#to#Websila";
const txt2 = "Welcome to Websila Academy";
const txt1_array = txt1.split("#");
const txt2_array = txt2.split(" ");
console.log(txt1_array);
console.log(txt2_array);

//! padStart()
const myNumber = "10005";
const myNumber_after = myNumber.padStart(10, "*");
console.log(myNumber_after);

const cardNumber = "6037997287540745";
const last4digits = cardNumber.slice(-4);
console.log(last4digits);
const cardNumber_secret = last4digits.padStart(16, "*");
console.log(cardNumber_secret);

//! padEnd()
const mobileNumber = "09121234567";
const first5digits = mobileNumber.slice(0, 6);
console.log(first5digits);
const mobileNumber_secret = first5digits.padEnd(11, "*");
console.log(mobileNumber_secret);

//! repeat()
const mood = "Happy!";
console.log(mood.repeat(30));
