//! GetElementById()
const headerEl = document.getElementById("header");
console.log(headerEl, typeof headerEl);
console.dir(headerEl);

//! querySelector()
const h1Element = document.querySelector("h1");
const cardEl = document.querySelector("article.style2:nth-child(2)");
console.log(h1Element);
console.log(cardEl);
