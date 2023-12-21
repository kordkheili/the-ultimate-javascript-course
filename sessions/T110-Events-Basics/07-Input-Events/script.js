const bio_preview = document.querySelector("#bio-container p");
const submit_btn = document.getElementById("submit-btn");

//! inputs
const input_username = document.getElementById("username");
const input_password = document.getElementById("password");
const input_password2 = document.getElementById("password2");
const input_bio = document.getElementById("bio-input");
const input_terms = document.getElementById("terms");

//! 1.bio
function bio_input_handler(event) {
  const default_message = "Please insert somthing.";
  const value = event.target.value;
  bio_preview.innerText = value ? value : default_message;
}
input_bio.addEventListener("input", bio_input_handler);

//! 2.terms validation
function terms_change_handler(event) {
  submit_btn.disabled = !event.target.checked;
}
input_terms.addEventListener("change", terms_change_handler);

//! 3.username validation
function username_blur_handler(event) {
  const value = event.target.value;
  const parent = event.target.parentElement;
  const error = parent.querySelector(".error");
  if (value.length < 3) {
    error.innerText = "Username must be at least 3 character";
    parent.classList.add("error");
  } else if (value.length > 10) {
    error.innerText = "Username is too long!";
    parent.classList.add("error");
  } else {
    parent.classList.remove("error");
  }
}
input_username.addEventListener("blur", username_blur_handler);

//! playground
input_password.addEventListener("focus", function (event) {
  event.target.style.border = "2px solid yellow";
});
input_password.addEventListener("blur", function (event) {
  event.target.style.border = "2px solid #f0f0f0";
});
