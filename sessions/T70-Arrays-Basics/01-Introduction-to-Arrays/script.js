const friend1 = "Mostafa";
const friend2 = "Hesam";
const friend3 = "Arman";
console.log(friend1, friend2, friend3);

// method 1
const myFriends = ["Mostafa", "Hesam", "Arman"];
console.log(myFriends);

// method 2
const numbers = new Array(2, 4, 6, 8);
console.log(numbers);

// getting values from arrays
console.log(myFriends[0]);
console.log(myFriends[1]);
console.log(myFriends[2]);
console.log(numbers[2]);

// mutating array
myFriends[1] = "Ali";
console.log(myFriends);

// some other examples
const email = "websila.co@gmail.com";
const myArray = ["some text...", email, 436, true, 10 + 20, 5 === 5];
console.log(myArray);

const nestedArray = [
  100,
  true,
  ["salam...", "khubi?", "ghorbanat tashakor"],
  [200, 300],
];
console.log(nestedArray);
console.log(nestedArray[2]);
console.log(nestedArray[2][0]);
console.log(nestedArray[3][0]);
console.log(nestedArray[3][1]);
