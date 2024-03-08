function getDayName(date) {
  const dayNumber = date.getDay();
  const weekdays = [
    "یکشنبه",
    "دوشنبه",
    "سه شنبه",
    "چهارشنبه",
    "پنجشنبه",
    "جمعه",
    "شنبه",
  ];
  return weekdays[dayNumber];
}
const result1 = getDayName(new Date());
const result2 = getDayName(new Date("2000-01-08"));
console.log(result1);
console.log(result2);
