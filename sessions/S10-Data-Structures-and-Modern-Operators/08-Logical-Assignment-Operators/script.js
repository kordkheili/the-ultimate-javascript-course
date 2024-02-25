//! ||=
const course = {
  title: "",
  duration: 50,
};
course.title ||= "Title is Empty"; // course.title = course.title || "Title is Empty";
course.duration ||= 10; // course.duration = course.duration || 10;
console.log(course.title);
console.log(course.duration);

//! &&=
const person = {
  firstName: "Jane",
  lastName: "Doe",
};
person.firstName &&= "Smith"; // person.firstName = person.firstName && "Smith";
console.log(person.firstName);

//! ??=
const product = {
  title: "Galaxy S24 Ultra",
  stock: 50,
};
product.stock ??= 100; // product.stock = product.stock ?? 100;
console.log(product.stock);

// let x = 10;
// x += 1; // x = x + 1
// x -= 1; // x = x - 1
// x /= 1; // x = x / 1
// console.log(x);
