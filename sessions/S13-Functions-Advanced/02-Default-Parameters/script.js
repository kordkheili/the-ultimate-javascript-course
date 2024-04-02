//! example 1
function logger(x = "Kordkheli") {
  console.log(x);
}
logger("Alireza");
logger();

//! example 2
const articles = [];

function createArticle(
  id = articles.length + 1,
  title = "article " + id,
  description = "description for " + title,
  publishDate = new Date()
) {
  const newArticle = {
    id,
    title,
    description,
    publishDate: Intl.DateTimeFormat("fa-IR").format(publishDate),
  };
  articles.push(newArticle);
}
createArticle();
createArticle(1002, undefined, undefined, new Date("2037-05-16"));
createArticle(
  1003,
  "JavaScript Course",
  "Some stuff here...",
  new Date("2036-02-16")
);

console.log(articles);
