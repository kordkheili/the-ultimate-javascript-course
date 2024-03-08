function randomGenerator(min, max) {
  const random = min + Math.random() * (max - min);
  const result = Math.round(random);
  return result;
}
const rand = randomGenerator(510, 520);
console.log(rand);
