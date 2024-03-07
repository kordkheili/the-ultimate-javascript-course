function randomGenerator(min, max) {
  const random = min + Math.random() * (max - min);
  const result = Math.floor(random);
  return result;
}
const rand = randomGenerator(100, 1000);
console.log(rand);
