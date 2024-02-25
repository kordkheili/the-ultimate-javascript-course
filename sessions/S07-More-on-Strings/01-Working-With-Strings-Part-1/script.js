const wlc = "Welcome to Websila Academy";
console.log(wlc[0]);
console.log(wlc[1]);
console.log(wlc.at(-1));
console.log(wlc.at(-2));
console.log(wlc.length);

console.log(wlc.indexOf("welcome"));
console.log(wlc.indexOf("Welcome"));
console.log(wlc.indexOf("Academy"));
console.log(wlc.indexOf("e"));
console.log(wlc.lastIndexOf("e"));

//slice()
const wlc_sub1 = wlc.slice(20, 23);
console.log(wlc_sub1);
const wlc_sub2 = wlc.slice(-5);
console.log(wlc_sub2);
