//! Constants
console.log("Constants");
console.log(Math.PI); // 3.141592653589793
console.log(Math.E); // 2.718281828459045
console.log(Math.LN2); // 3.141592653589793

//! Mathematical Operations
console.log("Mathematical Operations");
console.log(2 ** 8); // 256
console.log(Math.pow(2, 8)); // 256
console.log(Math.sqrt(121)); // 11
console.log(121 ** (1 / 2)); // 11
console.log(8 ** (1 / 3)); // 2
console.log(Math.abs(-10)); // 10
console.log(Math.abs(8)); // 8
console.log(Math.abs(0)); // 0

//! Trigonometric Functions
console.log("Trigonometric Functions");
console.log(Math.sin(Math.PI / 2)); // 1
console.log(Math.sin(Math.PI / 6)); // 0.49999999999999994
console.log(Math.sin(Math.PI / 3)); // 0.8660254037844386
console.log(Math.cos(Math.PI)); // -1
console.log(Math.tan(Math.PI)); // -1.2246467991473532e-16

//! Additional Methods
console.log("Additional Methods");
const numbers = [50, 60, 35, 43, 1, 0, -70];
console.log(Math.min(50, 4, 23, 43, 63, 100)); // 4
console.log(Math.max(50, 4, 23, 43, 63, 100)); // 100
console.log(Math.random()); // 0.41962305794938426
console.log(Math.min(...numbers));
console.log(Math.max(...numbers));

//! Rounding Methods
console.log("Rounding Methods");
console.log(Math.round(0.9)); // 1
console.log(Math.round(1.2)); // 1
console.log(Math.round(-5.07)); // -5
console.log(Math.ceil(3.9)); // 4
console.log(Math.ceil(4.2)); // 5
console.log(Math.floor(2.8)); // 2
console.log(Math.floor(10.1)); // 10
console.log(Math.trunc(15.7)); // 15
console.log(Math.trunc(17.3)); // 17
console.log(Math.trunc(45.8037)); // 45
