const products = [
  { name: "Apple", price: 1.99, quantity: 5 },
  { name: "Banana", price: 0.99, quantity: 10 },
  { name: "Orange", price: 2.49, quantity: 9 },
  { name: "Cucumber", price: 1.49, quantity: 3 },
];

let totalCostAll = 0;
products.forEach((product) => {
  console.log(`Product: ${product.name}`);
  console.log(`Quantity: ${product.quantity}`);
  console.log(`Price: $${product.price}`);
  const total = product.price * product.quantity;
  console.log(`Total Cost: $${total.toFixed(2)}`);
  totalCostAll += total;
});
console.log(`Total Cost of all Products: $${totalCostAll.toFixed(2)}`);
