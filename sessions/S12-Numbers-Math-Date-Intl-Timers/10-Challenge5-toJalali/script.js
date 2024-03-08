function getDaysDiff(startDate, endDate) {
  const diffTimestamp = Math.abs(endDate - startDate);
  const diffInDays = diffTimestamp / 1000 / 60 / 60 / 24;
  return diffInDays;
}
const startDate = new Date("2021-12-01"); // December 1, 2023
const endDate = new Date("2024-01-01"); // January 1, 2024
const daysDiff = getDaysDiff(startDate, endDate);
console.log(daysDiff);
