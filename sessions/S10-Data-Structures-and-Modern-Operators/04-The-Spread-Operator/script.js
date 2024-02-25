//! without using spread operator
// const arr = [30, 40, 50];
// const numbers = [10, 20, arr[0], arr[1], arr[2]];
// console.log(numbers);

//! using spread operator
const arr = [30, 40, 50];
const numbers = [10, 20, ...arr, 70, 80, 90];
console.log(numbers);

//! copy/clone
// const arr = [30, 40, 50];
// const clone = [...arr];
// console.log(clone);

//! concat two arrays
// const arr1 = [30, 40, 50];
// const arr2 = [70, 80, 90];
// const joinedArray = [...arr1, ...arr2];
// console.log(joinedArray);

//! function parameters
//? example 1
// const arr = [30, 40, 50];
// console.log("ali", "mohamad", "arman", 20);
// console.log(...arr);

//? example 2
const product = {
  id: 10,
  title: "HP Pavilion 15-DK1056WM",
  description: "HP Pavilion 15-DK1056WM Gaming...",
  price: 1099,
  discountPercentage: 20,
  rating: { rate: 4.3, count: 120 },
  stock: 89,
  brand: "HP Pavilion",
  category: "laptops",
  tags: ["Tech Product", "Laptop", "Gaming"],
  images: [
    "https://i.dummyjson.com/data/products/10/1.jpg",
    "https://i.dummyjson.com/data/products/10/2.jpg",
    "https://i.dummyjson.com/data/products/10/3.jpg",
  ],
};
function tagLogger(tag1, tag2, tag3) {
  console.log(`${tag1}, ${tag2}, ${tag3}`);
}
tagLogger("hi", "hello", "something");
// tagLogger(product.tags[0], product.tags[1], product.tags[2]);
tagLogger(...product.tags);

//! clone/copy & manipulate object
const productCopy = { ...product };
console.log(productCopy);

const newProduct = {
  id: 11,
  title: "Asus FX507-ZR",
  ...product,
  price: 1500,
  color: "white",
  color: "green",
  id: 1000,
};
console.log(newProduct);
