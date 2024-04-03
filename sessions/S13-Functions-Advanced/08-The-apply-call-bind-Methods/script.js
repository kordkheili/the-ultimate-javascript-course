//! apply()
const user1 = { firstName: "Alireza" };
const user2 = { firstName: "Sara" };

function sayHello(email, password) {
  console.log(this);
  console.log(`Hello ${this.firstName}`);
  console.log(`My email is : ${email}`);
  console.log(`My password is : ${password}`);
}

sayHello.apply(user1, ["alireza@gmail.com", "123456"]);

//! call()
sayHello.call(user1, "alireza@gmail.com", "123456");

//! bind()
const fn = sayHello.bind(user2, "alireza@gmail.com", "123456");
fn();
