const myFriends = ["Mostafa", "Hesam", "Arman"];
const myFriends2 = ["Ahmad", "Behnam"];
console.log(myFriends);

//! length
console.log(myFriends.length);

//! at
//console.log(myFriends[myFriends.length - 1]);
console.log(myFriends.at(-1));

//! includes
console.log(myFriends.includes("Hesam"));
console.log(myFriends.includes("hesam"));
console.log(myFriends.includes(100));

//! indexOf
console.log(myFriends.indexOf("Hesam"));
console.log(myFriends.indexOf("Arman"));
console.log(myFriends.indexOf(2100));

//! concat
console.log(myFriends.concat(myFriends2));

//! join
console.log(myFriends.join(" "));

//! reverse
console.log(myFriends.reverse());
