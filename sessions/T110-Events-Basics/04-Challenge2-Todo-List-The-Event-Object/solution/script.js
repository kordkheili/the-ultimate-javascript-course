const addBtn = document.getElementById("taskAdd");
const input = document.getElementById("taskInput");
const list = document.getElementById("tasksList");
const notification = document.getElementById("notification");

document.body.addEventListener("click", function (event) {
  if (event.target.classList[0] === "delete") {
    event.target.parentElement.remove();
    notificationHandler();
  }
});
addBtn.addEventListener("click", function () {
  addTask(input.value);
  input.value = "";
});
function addTask(task) {
  if (!task) {
    alert("لطفا تسک مورد نظر خود را وارد نمایید.");
    return;
  }
  const taskTemplate = `
    <li>
        ${task}
        <button class="delete">✖</button>
    </li>
  `;
  list.insertAdjacentHTML("beforeend", taskTemplate);
  notificationHandler();
}
function notificationHandler() {
  const tasks = document.querySelectorAll("#tasksList li");
  console.log(tasks);
  notification.style.display = tasks.length > 0 ? "none" : "block";
}


//! playground
/* const btn = document.querySelector(".btn");
console.log(btn);
btn.addEventListener("click", function (event) {
  console.log(event);
  console.log(typeof event);
}); */
/* document.body.addEventListener("click", function (event) {
  console.log("you clicked on body");
  console.log(event.target);
}); */
