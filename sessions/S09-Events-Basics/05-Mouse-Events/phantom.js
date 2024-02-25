const logo = document.querySelector(".logo");

//! methods
const clickHandler = function (event) {
  console.log("click event");
};
const dblclickHandler = function (event) {
  console.log("dblclick event");
};
const rightClickHandler = function (event) {
  console.log("rightClick event");
};
const mousedownHandler = function (event) {
  console.log("mousedown event");
};
const mouseupHandler = function (event) {
  console.log("mouseup event");
};
const wheelHandler = function (event) {
  console.log("wheel event");
};
const mouseenterHandler = function (event) {
  console.log("mouseenter event");
};
const mouseleaveHandler = function (event) {
  console.log("mouseleave event");
};
const mousemoveHandler = function (event) {
  console.log("mousemove event");
};
const dragstartHandler = function (event) {
  console.log("dragstart event", event);
};
const dragendHandler = function (event) {
  console.log("dragend event", event);
};
const dragHandler = function (event) {
  console.log("drag event");
};
//! events
logo.addEventListener("click", clickHandler);
logo.addEventListener("dblclick", dblclickHandler);
logo.addEventListener("contextmenu", rightClickHandler);
logo.addEventListener("mousedown", mousedownHandler);
logo.addEventListener("mouseup", mouseupHandler);
logo.addEventListener("wheel", wheelHandler);
logo.addEventListener("mouseenter", mouseenterHandler);
logo.addEventListener("mousemove", mousemoveHandler);
logo.addEventListener("mouseleave", mouseleaveHandler);
logo.addEventListener("dragstart", dragstartHandler);
logo.addEventListener("drag", dragHandler);
logo.addEventListener("dragend", dragendHandler);
