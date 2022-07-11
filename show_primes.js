function checkPrime(n) {
  if (n == 1) return false;
  if (n == 2) return true;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
console.log(checkPrime(8));

function showPrimes(num) {
  let arr = [];
  for (let i = 1; i <= num; i++) {
    if (checkPrime(i)) {
      arr.push(i);
    }
  }
  return arr;
}
console.log(showPrimes(20));
