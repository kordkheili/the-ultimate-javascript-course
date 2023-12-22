const counter = document.getElementById("counter");
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
