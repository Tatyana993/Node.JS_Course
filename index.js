const colors = require("colors/safe");

function getPrimes(num) {
  const seive = [];
  const primes = [];

  for (let i = 2; i <= num; i++) {
    if (!seive[i]) {
      primes.push(i);
      for (let j = i * i; j <= num; j += i) {
        seive[j] = true;
      }
    }
  }
  //let newArr = primes.filter((_, i) => i % 3 == 0);

  //return colors.red(newArr);
  return primes;
}
console.log(colors.green(getPrimes(150)));
