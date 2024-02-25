const user1 = {
  firstName: "Alireza",
  lastName: "Mohammadi",
  job: "Full-stack developer",
  birthYear: 1998,
  friends: ["Mostafa", "Arman", "Hesam"],
  getAge: function () {
    console.log(2028 - this.birthYear);
  },
};
user1.getAge();
