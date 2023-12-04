//! style
const btnEl = document.querySelector(".login-btn");
btnEl.style.color = "#fff";
btnEl.style.backgroundColor = "#ea4c89";
btnEl.style.display = "inline-block";
btnEl.style.padding = "5px 20px";
btnEl.style.margin = "15px 5px";
btnEl.style.borderRadius = "8px";
btnEl.style.cursor = "pointer";

//! classList.add()
const registerBtnEl = document.getElementById("register-btn");
registerBtnEl.classList.add("register-btn", "active", "xyz");

//! classList.remove()
registerBtnEl.classList.remove("xyz");

//! classList.contains()
const result1 = registerBtnEl.classList.contains("xyz");
const result2 = registerBtnEl.classList.contains("register-btn");
const result3 = registerBtnEl.classList.contains("active");
console.log(result1);
console.log(result2);
console.log(result3);
