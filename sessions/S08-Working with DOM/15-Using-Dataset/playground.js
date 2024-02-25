const article = document.querySelector("#benz-c200");
console.log(article);

//! get data
console.log(article.dataset.columns);
console.log(article.dataset.indexNumber);
console.log(article.dataset.parentCategory);
console.log("getAttribute", article.getAttribute("data-columns"));

//! set data
article.dataset.columns = "3";
article.dataset.parentCategory = "car";
