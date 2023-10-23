// Single Line Comment

/* 
    Multi-Line
    comment 
*/
if (condition) {
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
