//! GetElementById() -> output: Element
const headerEl = document.getElementById("header");
console.log(headerEl, typeof headerEl);
console.dir(headerEl);

//! querySelector() -> output: Element
const h1Element = document.querySelector("h1");
const cardEl = document.querySelector("article.style2:nth-child(2)");
const emailInputQuery = document.querySelector("input[name='email']");
console.log(emailInputQuery);
console.log(h1Element);
console.log(cardEl);

//! querySelectorAll() -> output: array
const articleElements = document.querySelectorAll("article");
const mainEl = document.querySelectorAll("#main");
console.log(articleElements);
console.log(mainEl[0]);

//! getElementsByClassName -> output: array
const style2Elements = document.getElementsByClassName("style2");
console.log(style2Elements);

//! getElementsByTagName -> output: array
const allDivs = document.getElementsByTagName("div");
console.log(allDivs);
console.log(allDivs[10]);

//! getElementsByName -> output: array
const emailInputs = document.getElementsByName("email");
console.log(emailInputs[0]);
