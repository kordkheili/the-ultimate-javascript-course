//! create ul
const newList = document.createElement("ul");
console.dir(newList);

//! create li (item 1)
const item1 = document.createElement("li");
item1.innerText = "Item1";

//! create li (item 2)
const item2 = document.createElement("li");
item2.innerText = "Item2";

//! append li to ul
newList.append(item1, item2);

//! append() ul to document
document.body.append(newList);

const pTag = document.createElement("p");
pTag.innerText = "Welcome to Websila JS Course";

//! prepend()
const firstItem = document.createElement("li");
firstItem.innerText = "Item0";
newList.prepend(firstItem);

//! after()
// newList.after(pTag);

//! before()
newList.before(pTag);

const divElement = document.createElement("div");
divElement.innerHTML = `
    <h1 style="border:1px solid #000;padding:1rem;">
        Hello World!
    </h1>`;
newList.insertAdjacentElement("beforebegin", divElement);

//! remove()
document.querySelector("h3").remove();
// newList.remove();
// divElement.remove();
// document.remove();
