const bio = document.getElementById("bio-input");
const bioPreview = document.querySelector("#bio-container p");
const terms = document.getElementById("terms");
const submitBtn = document.getElementById("submit-btn");
const password = document.getElementById("password");
const username = document.getElementById("username");

//! 1.bio
bio.addEventListener("input", function (event) {
  bioPreview.innerText = event.target.value
    ? event.target.value
    : "Please insert somthing.";
});

//! 2.terms validation
terms.addEventListener("change", function (event) {
  submitBtn.disabled = !event.target.checked;
});

//! 3.username validation
username.addEventListener("blur", function (event) {
  const value = event.target.value;
  const error = event.target.parentElement.querySelector(".error");
  const parent = event.target.parentElement;
  if (value.length < 3) {
    error.innerText = "Username must be at least 3 character";
    parent.classList.add("error");
  } else if (value.length > 10) {
    error.innerText = "Username is too long!";
    parent.classList.add("error");
  } else {
    parent.classList.remove("error");
  }
});

//! playground
password.addEventListener("focus", function (event) {
  event.target.style.border = "2px solid yellow";
});
password.addEventListener("blur", function (event) {
  event.target.style.border = "2px solid #f0f0f0";
});
