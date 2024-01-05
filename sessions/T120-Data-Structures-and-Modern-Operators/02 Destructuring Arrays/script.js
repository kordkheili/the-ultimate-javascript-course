const product = {
  id: 10,
  title: "HP Pavilion 15-DK1056WM",
  description: "HP Pavilion 15-DK1056WM Gaming...",
  price: 1099,
  discountPercentage: 6.18,
  rating: { rate: 4.3, count: 120 },
  stock: 89,
  brand: "HP Pavilion",
  category: "laptops",
  tags: ["Tech Product", "Laptop", "Gaming"],
  thumbnail: "https://i.dummyjson.com/data/products/10/thumbnail.jpeg",
  images: [
    "https://i.dummyjson.com/data/products/10/1.jpg",
    "https://i.dummyjson.com/data/products/10/2.jpg",
    "https://i.dummyjson.com/data/products/10/3.jpg",
  ],
};

const [tag1, tag2, tag3] = product.tags;
console.log(tag1, tag2, tag3);

const [firstImage, , lastImage] = product.images;
console.log(firstImage);
console.log(lastImage);

const users = ["Alireza", "Mostafa", "Mohammad"];
// const a = users[0];
// const b = users[1];
// const c = users[2];
// console.log(a, b, c);

//! Destructuring Arrays
// const [a, b, c] = users;
// console.log(a, b, c);

//! example 1
// const [x, y] = users;
// console.log(x, y);

//! example 2
// const [, x, y] = users;
// console.log(x, y);

//! example 3
// const [x, , y] = users;
// console.log(x, y);

//! Swapping Variables
// let [x, y] = ["Alireza", "Behnam"];
// console.log(x, y);
// [x, y] = [y, x];
// console.log(x, y);

//! Destructuring Nested Array
// const numbers = [10, 20, [1001, 1002]];
// const [a, b, [c, d]] = numbers;
// console.log(a, b, c, d);

//! Default Values
// const numbers = [1001, 1002, 2000];
// const [num1 = 1, num2 = 1, num3 = 1] = numbers;
// console.log(num1, num2, num3);
