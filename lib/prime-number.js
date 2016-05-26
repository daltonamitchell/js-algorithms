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

  let max = Math.sqrt(num);
  let i = 2;
  while (i <= max) {
    // skip all even nums after 2
    if ((i !== 2) && (i % 2) === 0) {
      i++;
      continue;
    }

    if ((num % i) === 0) return false;

    i++;
  }

  return true;
}

function nthPrime(num) {
  let checked = 0;

  let i = 1;
  while (checked < num) {
    i++;
    if (isPrime(i)) {
      checked++;
    }
  }

  return i;
}

export { isPrime, nthPrime }
