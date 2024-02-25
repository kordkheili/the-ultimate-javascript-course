const alirezaArray = [
  "Alireza",
  "Mohammadi",
  "Full-stack developer",
  1998,
  ["Mostafa", "Arman"],
];

const alirezaObject = {
  firstName: "Alireza",
  lastName: "Mohammadi",
  "job #1": "Full-stack developer",
  birthYear: 1998,
  friends: ["Mostafa", "Arman"],
};
console.log(alirezaObject, typeof alirezaObject);
console.log(alirezaObject.firstName);
console.log(alirezaObject.birthYear);
console.log(alirezaObject.friends);
console.log(alirezaObject["firstName"]);
console.log(alirezaObject["birthYear"]);
console.log(alirezaObject["friends"]);
const a = "Year";
const prop = "firstName";
console.log(alirezaObject["birth" + a]);
console.log(alirezaObject[prop]);

// alirezaObject["height"] = "189cm";
alirezaObject.height = "189cm";
console.log(alirezaObject);

delete alirezaObject.friends;
console.log(alirezaObject);

alirezaObject.birthYear = 1992;
alirezaObject["birthYear"] = 1993;
console.log(alirezaObject);

console.log(alirezaObject["job #1"]);
