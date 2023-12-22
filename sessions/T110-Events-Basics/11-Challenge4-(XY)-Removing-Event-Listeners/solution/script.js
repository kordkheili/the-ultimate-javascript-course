const area = document.getElementById("area");
const x = document.getElementById("result-x");
const y = document.getElementById("result-y");
const stop = document.getElementById("stop");
const start = document.getElementById("start");
function mouseoverHandler(e) {
  x.innerText = e.offsetX;
  y.innerText = e.offsetY;
}
area.addEventListener("mousemove", mouseoverHandler);
stop.addEventListener("click", function () {
  area.removeEventListener("mousemove", mouseoverHandler);
  area.classList.remove("active");
  x.innerText = "0";
  y.innerText = "0";
});
start.addEventListener("click", function () {
  area.addEventListener("mousemove", mouseoverHandler);
  area.classList.add("active");
});
