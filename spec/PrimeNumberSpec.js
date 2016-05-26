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

import { isPrime, nthPrime } from '../lib/prime-number';

describe('isPrime', () => {
  it('returns false for 1', () => {
    expect(isPrime(1)).toEqual(false);
  });


  it('returns true for 2 or 3', () => {
    expect(isPrime(2)).toEqual(true);
    expect(isPrime(3)).toEqual(true);
  });

  it('handles_other_examples', () => {
    expect(isPrime(4)).toEqual(false);
    expect(isPrime(9)).toEqual(false);
    expect(isPrime(17)).toEqual(true);
    expect(isPrime(100)).toEqual(false);
  });
});

describe('nthPrime', () => {
  it('finds the 1st prime number', () => {
    expect(nthPrime(1)).toEqual(2);
  });

  it('finds the 2nd prime number', () => {
    expect(nthPrime(2)).toEqual(3);
  });

  it('finds prime numbers 3 thru 5', () => {
    expect(nthPrime(3)).toEqual(5);
    expect(nthPrime(4)).toEqual(7);
    expect(nthPrime(5)).toEqual(11);
  });
});
