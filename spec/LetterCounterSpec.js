/**
 * Write a function, `letterCount(str)` that takes a string and
 * returns a hash mapping each letter to its frequency. Do not include
 * spaces.
 */

import letterCount from '../lib/letter-count';

describe('letterCount', () => {
  it('handles a simple case', () => {
    const expected = { c: 1, a: 1, t: 1 };

    expect(letterCount('cat')).toEqual(expected);
  });

  it('handles multiples of the same letter', () => {
    const expected = { m: 1, o: 2, n: 1 };

    expect(letterCount('moon')).toEqual(expected);
  });

  it('handles a multi-word case', () => {
    const expected = {
      c: 1,
      a: 2,
      t: 1,
      s: 1,
      r: 1,
      e: 1,
      f: 1,
      u: 1,
      n: 1,
    };

    expect(letterCount('cats are fun')).toEqual(expected);
  });
});
