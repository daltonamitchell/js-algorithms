/**
* Return the factorial of the provided integer. If the integer is represented
* with the letter n, a factorial is the product of all positive integers less
* than or equal to n.
*
* Factorials are often represented with the shorthand notation n!
*
* For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
*/

import factorial from '../lib/factorial';

describe('factorial', () => {
  it('returns 1 for 0', () => {
    expect(factorial(0)).toEqual(1);
  });

  it('returns the input for values less than 3', () => {
    expect(factorial(2)).toEqual(2);
  });

  it('returns 24 for 4', () => {
    expect(factorial(4)).toEqual(24);
  });

  it('returns 3628800 for 10', () => {
    expect(factorial(10)).toEqual(3628800);
  });

  it('returns 2432902008176640000 for 20', () => {
    expect(factorial(20)).toEqual(2432902008176640000);
  });
});
