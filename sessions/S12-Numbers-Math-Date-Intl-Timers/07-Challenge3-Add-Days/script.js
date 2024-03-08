function addDays(startDate, numberOfDays) {
  const startDateTimestamp = startDate.getTime();
  const numberOfDaysTimestamp = numberOfDays * 24 * 60 * 60 * 1000;
  const finalDateTimestamp = startDateTimestamp + numberOfDaysTimestamp;
  return new Date(finalDateTimestamp);
}
const result = addDays(new Date(), -1000);
console.log(result);
