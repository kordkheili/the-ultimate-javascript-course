//! toFixed()
const temperature = 25.4921;
const displayedTemperature = +temperature.toFixed(1);
console.log(displayedTemperature);
console.log(typeof displayedTemperature);

//! parseInt()
console.log("parseInt()");
console.log(Number.parseInt("123"));
console.log(Number.parseInt("       123  "));
console.log(Number.parseInt("0123"));
console.log(Number.parseInt("1.9"));
console.log(Number.parseInt("ff", 16));
console.log(Number.parseInt("20px"));
console.log(Number.parseInt("xyz"));

//! parseFloat()
console.log("parseFloat()");
console.log(parseFloat("   1.9  "));
console.log(parseFloat("1.9px"));

//! isNaN()
console.log("isNaN()");
const a = parseInt("xyz");
const b = parseInt("20rem");
console.log(Number.isNaN(a));
console.log(Number.isNaN(b));

//! isFinite()
console.log("isFinite()");
const c = 200;
const d = c / 0;
console.log(Number.isFinite(c));
console.log(Number.isFinite(d));

//! isInteger()
console.log("isInteger()");
const e = 390;
const f = undefined;
const g = "Alireza";
const h = e / 0;
console.log(Number.isInteger(e));
console.log(Number.isInteger(f));
console.log(Number.isInteger(g));
console.log(Number.isInteger(h));

//! Numeric Separator _
const population = 1_2_3_4_567_890_5_00;
const x = 1_000;
const y = 8_000;
console.log(population);
console.log(x + y);
