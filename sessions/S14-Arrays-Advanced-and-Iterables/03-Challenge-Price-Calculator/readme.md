# Challenge: Price Calculator

You have an array of products, each represented by an object with three properties: name, price, and quantity. Your task is to iterate over this array using a forEach loop, calculate the total cost for each product (price multiplied by quantity), and then display the details of each product along with its total cost. Finally, you need to calculate the total cost of all products combined and display it.

```js
const products = [
  { name: "Apple", price: 1.99, quantity: 5 },
  { name: "Banana", price: 0.99, quantity: 10 },
  { name: "Orange", price: 2.49, quantity: 3 },
];

/*
    Expected Output: 👇🏻

    Product: Apple
    Quantity: 5
    Price: $1.99
    Total Cost: $9.95

    Product: Banana
    Quantity: 10
    Price: $0.99
    Total Cost: $9.90

    Product: Orange
    Quantity: 3
    Price: $2.49
    Total Cost: $7.47

    Total Cost of all Products: $27.32
*/
```

Your code should iterate over each product, calculate its total cost, and print out the details as shown above. Finally, it should calculate the total cost of all products combined and print it at the end.
