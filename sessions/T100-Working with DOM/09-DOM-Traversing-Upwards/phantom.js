//! parentElement
const h1Element = document.querySelector("header h1");
console.log(h1Element.innerText);
console.dir(h1Element);
console.log(h1Element.parentElement);
console.log(h1Element.parentElement.parentElement);
console.log(h1Element.parentElement.parentElement.parentElement);

//! closest
const iconEl = document.querySelector(".icon.fa-facebook-f");
console.log(iconEl);
console.log(iconEl.parentElement);
const closestDivParent = iconEl.closest("div");
console.log(closestDivParent);

//! combine parentElement & children props
const article1 = document.querySelector("article");
console.log(article1);
console.log(article1.parentElement);
console.log(article1.parentElement.children);
