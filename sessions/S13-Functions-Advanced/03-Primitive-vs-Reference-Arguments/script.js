//! Primitive vs Reference Types
// Object Data Type => Reference
// Other Data Type => Primitive

//! Primitive vs Reference Arguments
const user = {
  firstName: "Alireza",
  lastName: "Mohammadi",
};
const job = "Developer 🧑🏻‍💻";

const apply = (userObj, jobName) => {
  jobName = "Software-Engineer";
  userObj.lastName = "Kordkheili";
  userObj.age = 100;
  user.gender = "male";
  if (userObj.firstName === "Alireza") {
    console.log("your application request has been approved 😍");
  } else {
    console.log("You are not suitable for this position! 😟");
  }
};

apply(user, job);
console.log(user);
console.log(job);
