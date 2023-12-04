//! example 1
const list = document.querySelector(".list");
const newItem = `<li class="list-item">item3</li>`;

//? solution 1
//list.innerHTML = list.innerHTML + newItem;

//? solution 2
//list.insertAdjacentHTML("beforeend", newItem);

//! example 2
const app = document.getElementById("app");
const pTag = `<p>some text...</p>`;
app.insertAdjacentHTML("afterbegin", pTag);
