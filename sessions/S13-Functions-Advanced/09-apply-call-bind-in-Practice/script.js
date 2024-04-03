const user1 = {
  firstName: "Alireza",
  lastName: "Kordkheili",
  introduce: function (job) {
    console.log(`I'm ${this.firstName} ${this.lastName}, ${job}`);
  },
};
const user2 = {
  firstName: "Sara",
  lastName: "Razavi",
};
user1.introduce("Developer"); // I'm Alireza Kordkheili, Developer
user1.introduce.apply(user2, ["Marketer"]); // I'm Sara Razavi, Marketer
