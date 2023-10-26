// Single Line Comment

/* 
    Multi-Line
    comment 
*/
/* if (condition) {
  //  block of code to be executed if the condition is true
}

if (condition) {
  //  block of code to be executed if the condition is true
} else {
  //  block of code to be executed if the condition is false
}

if (condition1) {
  //  block of code to be executed if condition1 is true
} else if (condition2) {
  //  block of code to be executed if the condition1 is false and condition2 is true
} else {
  //  block of code to be executed if the condition1 is false and condition2 is false
}

if (true) {
  const foo = "foo";
  console.log(foo); // "foo"
}

console.log(foo); // Uncaught ReferenceError: foo is not defined

const carColor = "blue";
if (carColor === "red" || carColor === "blue") {
  console.log("I will buy the car");
}

const doorIsLocked = false;
const shoesOn = true;
if (!doorIslocked && shoesOn) {
  console.log("I can leave the house");
}

const score = 80;
const scoreRating = score > 70 ? "Excellent" : "Do better";
console.log(scoreRating);

let a = 2 + 2;

switch (a) {
  case 3:
    alert("Too small");
    break;
  case 4:
    alert("Exactly!");
    break;
  case 5:
    alert("Too big");
    break;
  default:
    alert("I don't know such values");
}

const today = "shanbe";
if (today === "shanbe") {
  console.log("فوتبال");
} else if (today === "2shanbe") {
  console.log("پیانو");
} else if (today === "4shanbe") {
  console.log("برنامه‌نویسی");
} else {
  console.log("بیکار!");
}
switch (today) {
  case "shanbe":
    console.log("فوتبال");
    break;
  case "2shanbe":
    console.log("پیانو");
    break;
  case "4shanbe":
    console.log("برنامه‌نویسی");
    break;
  default:
    console.log("بیکار!");
}

let i = 10;
do {
  console.log(i);
  i++;
} while (i < 9);
// Output:
// 10

for (let i = 1; i < 10; i += 2) {
  if (i === 7) {
    break;
  }
  console.log("Total elephants: " + i);
}

// Output:
// Total elephants: 1
// Total elephants: 3
// Total elephants: 5

for (let i = 0; i < 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}

// Output:
// 0
// 1
// 2
// 4
// 5

const sayHello = function () {
  return "Hello!";
};
const result = sayHello();
console.log(result);

// Output:
// Hello!

const add = function (a, b) {
  return a + b;
};
const answer = add(3, 5);
console.log(answer); */

// Output: 8

//first method
/* const friends = ["Mostafa", "Hesam", "Arman"];
friends[1] = "Ali";

console.log(friends);
//Output:
//["Mostafa", "Ali", "Arman"];

console.log(friends[0]); //Output: Mostafa
console.log(friends[2]); //Output: Arman

//second method
const numbers = new Array(2, 4, 6, 8);

const firstName = "Mostafa";
const myArray = [23, "Alireza", firstName, 1402 - 1376];
console.log(myArray[1]); //Output: "Alireza"
console.log(myArray[2]); //Output: "Mostafa"
console.log(myArray[3]); //Output: 26

const nestedArray = [
  ["salam", "khubi?"],
  [100, 200],
];
console.log(nestedtrray[0][0]); //Output: "salam"
console.log(nestedArray[0][1]); //Output: "salam"
console.log(nestedArray[1][0]); //Output: 100
console.log(nestedArray[1][1]); //Output: 200 */

// const friends = ["Mostafa", "Hesam"];
// console.log(friends);
// //Output: ['Mostafa', 'Hesam']
// friends.push("Arman");
// console.log(friends);
// //Output: ['Mostafa', 'Hesam', 'Arman']

// const friends = ["Mostafa", "Hesam"];
// console.log(friends);
// //Output: ['Mostafa', 'Hesam']
// friends.unshift("Arman");
// console.log(friends);
// //Output: ['Mostafa', 'Hesam', 'Arman']

// const friends = ["Mostafa", "Hesam"];
// console.log(friends);
// //Output: ['Mostafa', 'Hesam']
// friends.pop();
// console.log(friends);
// //Output: ['Mostafa']

// const friends = ["Mostafa", "Hesam"];
// console.log(friends);
// //Output: ['Mostafa', 'Hesam']
// friends.shift();
// console.log(friends);
// //Output: ['Hesam']

//length
// const friends = ["Mostafa", "Hesam", "Arman"];
// console.log(friends.length); //Output: 3

//at
// const friends = ["Mostafa", "Hesam", "Arman"];
// console.log(friends.at(1)); // "Hesam"
// console.log(friends.at(-1)); // "Arman"

//includes

//indexOf

//concat
//join

//reverse

// slice(start)
// slice(start, end)
// const friends = ["Mostafa", "Arman", "Hesam", "Ahmad", "Hamid"];
// console.log(friends.slice(2));
// //Output: ['Hesam', 'Ahmad', 'Hamid']

// console.log(friends.slice(2, 4));
// //Output: ['Hesam', 'Ahmad']

// splice(start, deleteCount, item1, item2, /* …, */ itemN)

// splice(start, deleteCount)
// splice(start)
// const friends = ["Mostafa", "Arman", "Hesam", "Ahmad", "Hamid"];
// friends.splice(3);
// console.log(friends);
// //Output: ['Mostafa', 'Arman', 'Hesam']

// console.log(friends);
// //Output: ['Mostafa', 'Arman', 'Hamid']

// // splice(start, deleteCount)

// console.log(friends.slice(2));
// //Output: ['Hesam', 'Ahmad', 'Hamid']

// console.log(friends.slice(2, 4));
// //Output: ['Hesam', 'Ahmad', 'Hamid']

// console.log(friends.reverse());
// //Output: ['Hesam', 'Arman', 'Mostafa']

// console.log(friends.join("-"));
// //Output: "Mostafa-Arman-Hesam"

// const firends2 = ["Ahmad", "Hamid"];
// console.log(friends.concat(firends2));
// //Output: ['Mostafa', 'Arman', 'Ahmad', 'Hamid']

// console.log(friends.indexOf("Hesam")); // 1
// console.log(friends.indexOf("Arman")); // 2
// console.log(friends.includes("Hesam")); //true
// console.log(friends.includes("Ahmad")); //false

//Array
const alirezaArray = [
  "Alireza",
  "Mohammadi",
  "Full-Stack Developer",
  1998,
  ["Mostafa", "Hesam", "Arman"],
];

//Object
const alirezaObject = {
  firstName: "Alireza",
  lastName: "Mohammadi",
  job: "Full-Stack Developer",
  birthYear: 1998,
  Friends: ["Mostafa", "Hesam", "Arman"],
  getAge: function () {
    return 2028 - this.birthYear;
  },
};
console.log(alirezaObject.getAge());
//Output: 30

const users = [
  {
    firstName: "Alireza",
    lastName: "Mohammadi",
    job: "Full-Stack Developer",
  },
  {
    firstName: "Arman",
    lastName: "Shabani",
    job: "Video Editor",
  },
];
