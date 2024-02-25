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
  notification.style.display = tasks.length > 0 ? "none" : "block";
}
input.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    addTask(input.value);
    input.value = "";
  }
});

//! playground
/* input.addEventListener("keydown", function (e) {
  console.log("keydown", e);
});

input.addEventListener("keyup", function () {
  console.log("keyup");
});
 */
// ? https://gcctech.org/csc/javascript/javascript_keycodes.htm
