const wlc = "Welcome to Websila Academy!";

//! toUpperCase()
const wlc_upper = wlc.toUpperCase();
console.log(wlc_upper);

//! toLowerCase()
const wlc_lower = wlc.toLowerCase();
console.log(wlc_lower);

//! trim()
const txt = "     Hello world!  ";
console.log(txt);
const txt_no_space = txt.trim();
console.log(txt_no_space);

//! replace()
const txt2 = "Hello, my name is Alireza";
const txt2_hi_version = txt2.replace("Hello", "Hi");
console.log(txt2_hi_version);

//! replaceAll()
const txt3 = "Welcome#to#Websila#Academy";
const txt3_hyphen = txt3.replaceAll("#", "-");
console.log(txt3_hyphen);

//! includes()
console.log(txt3.includes("Academy"));
console.log(txt3.includes("academy"));
console.log(txt3.includes("#"));
console.log(txt3.includes("-"));
