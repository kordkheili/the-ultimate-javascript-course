const btn = document.querySelector(".btn");
const closeBtn = document.querySelector(".close-icon");
const bgBlur = document.querySelector(".bg-blur");
const wrapper = document.querySelector(".wrapper");
const modal = document.querySelector(".modal");
btn.addEventListener("click", function () {
  bgBlur.classList.add("blur");
  wrapper.classList.add("blur");
  modal.classList.add("slideInDown");
});
closeBtn.addEventListener("click", function () {
  bgBlur.classList.remove("blur");
  wrapper.classList.remove("blur");
  modal.classList.remove("slideInDown");
});
