function toJalali(date) {
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };
  const jalaliDate = new Intl.DateTimeFormat("fa-IR", options).format(date);
  return jalaliDate;
}
const date1 = new Date("2019-11-25");
const date2 = new Date();
console.log(toJalali(date1));
console.log(toJalali(date2));
