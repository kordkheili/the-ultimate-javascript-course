const box1 = document.getElementById("box1");

box1.addEventListener("click", function (e) {
  console.log(e.target);
  console.log(this);
});

document.body.addEventListener("click", function (e) {
  console.log(e.target);
  console.log(this);
});
