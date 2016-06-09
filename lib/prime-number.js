/**
* Is Prime?
*
* Write a method that takes in an integer (greater than one) and
* returns true if it is prime; otherwise return false.
*
* nth Prime
*
* Write a method that returns the `n`th prime number. Recall that only
* numbers greater than 1 can be prime.
*/

function isPrime(num) {
  if (num < 2) return false;
  if (num < 4) return true;

  let max = Math.sqrt(num);
  let i = 1;
  while (i <= max) {
    i++;
    if (evenAboveTwo(i)) continue;
    if ((num % i) === 0) return false;
  }

  return true;
}

function nthPrime(num) {
  let checked = 0;

  let i = 1;
  while (checked < num) {
    i++;
    if (evenAboveTwo(i)) continue;
    if (isPrime(i)) checked++;
  }

  return i;
}

function evenAboveTwo(num) {
  return (num !== 2) && !(num & 1);
}

export { isPrime, nthPrime }
