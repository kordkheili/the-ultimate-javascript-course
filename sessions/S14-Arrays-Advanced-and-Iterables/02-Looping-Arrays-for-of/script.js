//! forEach()
const cities = ["New York", "Chicago", "Houston"];
cities.forEach(function (city, index) {
  const result = `${city} Index is => ${index}`;
  console.log(result);
});

//! for-of
for (const city of cities) {
  console.log(city);
}

//! example
const fruits = ["apple", "banana", "orange"];
for (const fruit of fruits) {
  console.log(fruit);
}
