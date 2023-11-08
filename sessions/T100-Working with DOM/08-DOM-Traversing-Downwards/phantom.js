const tiles_section = document.querySelector(".tiles");
const articles = tiles_section.querySelectorAll("article");
const result = articles[0].getElementsByTagName("h2");
console.log(result);
result[0].innerText = "عنوان جدید برای اولین مقاله";

//! children
const wrapperEl = document.getElementById("wrapper");
console.log(wrapperEl);
console.dir(wrapperEl);
console.log(wrapperEl.childElementCount);
console.log(wrapperEl.children);
console.log(wrapperEl.children[1]);
console.log(document.children);
console.log(document.children[0].children);
console.log(document.children[0].children[1].children);
console.log(document.children[0].children[1].children[0].children);
