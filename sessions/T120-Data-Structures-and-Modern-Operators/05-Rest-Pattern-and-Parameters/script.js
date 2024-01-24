//! rest operator (...)
const [user1, user2, ...others] = ["nima", "amir", "hesam", "ahmad", "ali"];
console.log(user1);
console.log(user2);
console.log(others);

//! using rest operator in functions
function add(username, ...numbers) {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  console.log(`Hello ${username}, The Result : ${result}`);
}
add("alireza", 5, 6);
add("sara", 5, 6, 10);
add("milad", 5, 6, 10, 8, 56, 34);
