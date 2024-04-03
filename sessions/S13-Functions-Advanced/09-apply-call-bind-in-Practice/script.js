const user1 = {
  firstName: "Alireza",
  lastName: "Kordkheili",
  introduce: function (job, age) {
    console.log(`I'm ${this.firstName} ${this.lastName}, ${job} ${age}`);
  },
};

const user2 = {
  firstName: "Sara",
  lastName: "Razavi",
};

user1.introduce("Developer", 100);
user1.introduce.apply(user2, ["Marketer", 34]);
user1.introduce.call(user2, "Marketer", 53);
user1.introduce.bind(user2, "Marketer", 15)();
