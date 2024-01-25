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

// const id = product.id;
// const title = product.title;
// const price = product.price;
// console.log(id, title);

//! Destructuring Objects
// const { title, price, id, images, categories } = product;
// console.log(id, title, price);
// console.log(images);
// console.log(categories);

//! Renaming Props after Destructuring
// const { brand: product_brand, tags: product_tags, id: code } = product;
// console.log(product_brand);
// console.log(product_tags);
// console.log(code);

//! Default values
// const {
//   title,
//   price,
//   discountPercentage = 0,
//   thumbnail: product_thumbnail = "https://i.dummyjson.com/data/sample.jpeg",
// } = product;
// console.log(title, discountPercentage);
// console.log(product_thumbnail);

//! Destructuring Nested Objects
const {
  id,
  rating: { count: product_count = 0, rate: product_rate = 0 },
} = product;
console.log(id);
console.log(product_count);
console.log(product_rate);
