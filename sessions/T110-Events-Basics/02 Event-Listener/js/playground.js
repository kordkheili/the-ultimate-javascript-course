let $ = document;
let bgBlur = $.querySelector(".bg-blur");
let wrapper = $.querySelector(".wrapper");
let btn = $.querySelector(".btn");
let modal = $.querySelector(".modal");
let closeIcon = $.querySelector(".svg-wrapper");
function showModal() {
  bgBlur.classList.add("blur");
  wrapper.classList.add("blur");
  modal.classList.add("slideInDown");
}
function closeModal() {
  bgBlur.classList.remove("blur");
  wrapper.classList.remove("blur");
  modal.classList.remove("slideInDown");
}
btn.addEventListener("click", showModal);
closeIcon.addEventListener("click", closeModal);
$.body.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    bgBlur.classList.remove("blur");
    wrapper.classList.remove("blur");
    modal.classList.remove("slideInDown");
  }
});
