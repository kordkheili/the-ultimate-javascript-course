//! nullish coalescing operator (??)
const product = {
  id: 10,
  title: "HP Pavilion 15-DK1056WM",
  description: "HP Pavilion 15-DK1056WM Gaming...",
  price: 1099,
  discountPercentage: 20,
  rating: { rate: 4.3, count: 120 },
  stock: 0,
  brand: "HP Pavilion",
  category: "laptops",
  tags: ["Tech Product", "Laptop", "Gaming"],
  images: [
    "https://i.dummyjson.com/data/products/10/1.jpg",
    "https://i.dummyjson.com/data/products/10/2.jpg",
    "https://i.dummyjson.com/data/products/10/3.jpg",
  ],
};

//? Nullish Values in JS: 1-null 2-undefined (NOT "", 0, false)
const stock = product.stock ?? 1000;
console.log(stock);
