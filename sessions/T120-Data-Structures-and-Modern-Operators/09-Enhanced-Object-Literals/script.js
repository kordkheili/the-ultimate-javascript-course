const brand = "HP Pavilion";
const images = [
  "https://i.dummyjson.com/data/products/10/1.jpg",
  "https://i.dummyjson.com/data/products/10/2.jpg",
  "https://i.dummyjson.com/data/products/10/3.jpg",
];
const tags = ["Tech Product", "Laptop", "Gaming"];
const colors = ["black", "blue", "red", "pink"];
const attrs = ["color", "screen", "weight", "battery"];
const product = {
  id: 10,
  title: "HP Pavilion 15-DK1056WM",
  description: "HP Pavilion 15-DK1056WM Gaming...",
  price: 1099,
  discountPercentage: 6.18,
  rating: { rate: 4.3, count: 120 },
  stock: 1000 - 50,
  brand,
  category: "laptops",
  tags,
  thumbnail: "https://i.dummyjson.com/data/products/10/thumbnail.jpeg",
  images,
  getPrice() {
    console.log(`${this.price}$`);
  },
  color: colors[0],
  [attrs[2]]: "2.1 KG",
  [attrs[1]]: "IPS",
  ["salam" + "Khubi"]: "Merci",
};
console.log(product);
product.getPrice();
