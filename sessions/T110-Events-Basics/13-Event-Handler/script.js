const counter = document.getElementById("counter");
const up = document.getElementById("up");
const resetBtn = document.getElementById("reset");
const down = document.getElementById("down");
function increase() {
  let current = +counter.innerText;
  counter.innerText = ++current;
}
function decrease() {
  let current = +counter.innerText;
  counter.innerText = --current;
}
function reset() {
  counter.innerText = 0;
}
function sayHello() {
  console.log("Hello!");
}

//! Event Handler
// up.onclick = increase;
// resetBtn.onclick = reset;
// down.onclick = decrease;

//! Event Listener
up.addEventListener("click", increase);
resetBtn.addEventListener("click", reset);
resetBtn.addEventListener("click", sayHello);
down.addEventListener("click", decrease);
