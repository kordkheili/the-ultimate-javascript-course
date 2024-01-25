//! || -> Short Circuiting
console.log("######OR######");
console.log(7 || "Alireza");
console.log(false || true || "Alireza" || false);
console.log(0 || "Alireza");
console.log(10 * 30 || undefined || "Alireza");
console.log("" || "Websila");
console.log(false || null || 0 || undefined || "Websila!" || true);
console.log(false || null || "" || undefined);

function sum(a, b) {
  console.log("sum function invoked");
  return a + b;
}

const exp = 2 > 5 || "" || sum(5, 25) || 5 ** 5;
console.log(exp);

//! && -> Short Circuiting
console.log("######AND######");
console.log(0 && "Alireza");
console.log(3 && "Alireza");
console.log(10 < 5 && "Alireza");
console.log("Websila" && 10 * 20 && "" && "Alireza");

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
  //   getTags: function () {
  //     console.log(...this.tags);
  //   },
};

product.getTags && product.getTags();
