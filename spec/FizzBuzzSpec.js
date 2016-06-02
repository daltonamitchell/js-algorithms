/**
 *
 * Write a program that prints the numbers from 1 to 100. But for multiples of
 * three print “Fizz” instead of the number and for the multiples of five print
 * “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.
 *
 * Your method should optionally take `start` and `end` parameters which add the
 * following functionality:
 *
 * start: outputs items from `start` to 100
 * end: outputs items from 0 to `end`
 * start, end: output items from `start` to `end` inclusive
 *
 * Of course with no parameters, just output 1 to 100
 */

import fizzBuzz from '../lib/fizz-buzz';
import nthIndex from './support/nth-index';

describe('fizzBuzz', () => {
  it('returns an array', () => {
    expect(Array.isArray(fizzBuzz())).toEqual(true);
  });

  describe('when no parameters are given', () => {
    it('outputs 100 items', () => {
      expect(fizzBuzz().length).toEqual(100);
    });

    it('outputs "Fizz" as the third item', () => {
      const expected = 'Fizz';
      const actual = fizzBuzz()[2];
      expect(expected).toEqual(actual);
    });

    it('outputs "Buzz" as the 5th item', () => {
      const expected = 'Buzz';
      const actual = fizzBuzz()[4];
      expect(expected).toEqual(actual);
    });

    it('outputs "FizzBuzz" as the 15th item', () => {
      const expected = 'FizzBuzz';
      const actual = fizzBuzz()[14];
      expect(expected).toEqual(actual);
    });

    it('outputs "Fizz" for every third item', () => {
      const fizzFilter = (_, index) => !nthIndex(index, 15) && nthIndex(index, 3);
      const thirds = fizzBuzz().filter(fizzFilter);
      const actual = thirds.every(item => item === 'Fizz');
      expect(actual).toEqual(true);
    });

    it('outputs "Buzz" for every fifth item', () => {
      const buzzFilter = (_, index) => !nthIndex(index, 15) && nthIndex(index, 5);
      const fifths = fizzBuzz().filter(buzzFilter);
      const actual = fifths.every(item => item === 'Buzz');
      expect(actual).toEqual(true);
    });

    it('outputs "FizzBuzz" for every fifteenth item', () => {
      const fifteenths = fizzBuzz().filter((_, index) => nthIndex(index, 15));
      const actual = fifteenths.every(item => item === 'FizzBuzz');
      expect(actual).toEqual(true);
    });
  });

  describe('when only start is given', () => {
    it('returns 50 items when starting from 51', () => {
      const actual = fizzBuzz({ start: 51 });
      expect(actual.length).toEqual(50);
    });

    it('returns the last 10 items', () => {
      const expected = [91, 92, 'Fizz', 94, 'Buzz', 'Fizz', 97, 98, 'Fizz', 'Buzz'];
      const actual = fizzBuzz({ start: 91 });
      expect(expected).toEqual(actual);
    });

    it('can count before 1', () => {
      const actual = fizzBuzz({ start: -5 });
      const expected = ['Buzz', -4, 'Fizz', -2, -1];
      expect(actual.length).toEqual(106);
      expect(actual.slice(0, 5)).toEqual(expected);
    });
  });

  describe('when only end is given', () => {
    it('can only count to 10', () => {
      const actual = fizzBuzz({ end: 10 });
      expect(actual.length).toEqual(10);
    });

    it('can count past 100', () => {
      const expected = [101, 'Fizz', 103, 104, 'FizzBuzz'];
      const actual = fizzBuzz({ end: 105 });
      expect(actual.length).toEqual(105);
      expect(actual.slice(100)).toEqual(expected);
    });
  });

  describe('when both start and end are given', () => {
    it('can still count from 1 to 100', () => {
      const expected = fizzBuzz();
      const actual = fizzBuzz({ start: 1, end: 100 });
      expect(actual).toEqual(expected);
    });

    it('can return only one item', () => {
      const expected = ['FizzBuzz'];
      const actual = fizzBuzz({ start: 15, end: 15 });
      expect(actual).toEqual(expected);
    });

    it('correctly returns a range', () => {
      const expected = ['Buzz', 'Fizz', 37, 38, 'Fizz', 'Buzz', 41, 'Fizz', 43, 44, 'FizzBuzz'];
      const actual = fizzBuzz({ start: 35, end: 45 });
      expect(actual).toEqual(expected);
    });

    it('can return a range outside than the default', () => {
      const actual = fizzBuzz({ start: -5, end: 105 });
      expect(actual.length).toEqual(111);
    });
  });
});
