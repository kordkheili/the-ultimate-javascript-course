//! sort()
const alphabet = ["A", "Z", "D", "S", "G", "W", "C"];
alphabet.sort();
console.log(alphabet);

const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log(months);

const numbers = [1, 30, 4, 21, 100000, 0, 40, 245, 45];
numbers.sort();
console.log(numbers);

numbers.sort((a, b) => a - b);
console.log(numbers);

numbers.sort((a, b) => b - a);
console.log(numbers);

//! reverse()
let users = ["Alireza", "Behnam", "Arman", "Sara"];
users.reverse();
console.log(users);

//? sort() and reverse() methods are destructive
