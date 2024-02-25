const nameInput = document.querySelector("#name");
console.log(nameInput);
console.dir(nameInput);

//! get value
console.log(nameInput.value);

//! set value
nameInput.value = "mohammadi4363";
nameInput.value = "reza";

//! setAttribute()
const messageInput = document.getElementById("message");
console.log(messageInput);
messageInput.setAttribute("name", "message");
messageInput.setAttribute("xyz", "my custom value...");

const submitBtn = document.querySelector("#submit-btn");
//submitBtn.setAttribute("disabled", "");

//! getAttribute()
const type = submitBtn.getAttribute("type");
console.log(type);
console.log(messageInput.getAttribute("style"));
console.log(messageInput.getAttribute("placeholder"));

//! removeAttribute()
submitBtn.removeAttribute("disabled");
submitBtn.removeAttribute("id");
submitBtn.removeAttribute("value");
submitBtn.removeAttribute("class");
