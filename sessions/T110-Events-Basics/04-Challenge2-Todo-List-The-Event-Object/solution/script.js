const addBtn = document.getElementById("taskAdd");
const input = document.getElementById("taskInput");
const list = document.getElementById("tasksList");
const notification = document.getElementById("notification");

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
  if (tasks.length > 0) {
    notification.style.display = "none";
  }
}
