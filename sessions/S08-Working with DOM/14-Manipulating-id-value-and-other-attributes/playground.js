const article = document.querySelector("article");
console.log(article);
console.dir(article);

//! get id
console.log(article.id);
const spanEl = document.createElement("span");
spanEl.innerText = article.id;
document.body.append(spanEl);

//! set id
article.id = "bmw-x4";
