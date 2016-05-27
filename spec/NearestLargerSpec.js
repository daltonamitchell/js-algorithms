/**
 * Write a function, `nearestLarger(arr, i)` which takes an array and an
 * index.  The function should return another index, `j`: this should
 * satisfy:
 *
 * (a) `arr[i] < arr[j]`, AND
 * (b) there is no `j2` closer to `i` than `j` where `arr[i] < arr[j2]`.
 *
 * In case of ties (see example below), choose the earliest (left-most)
 * of the two indices. If no number in `arr` is larger than `arr[i]`,
 * return `null`.
 */

import nearestLarger from '../lib/nearest-larger';

describe('nearestLarger', () => {
  it('handles a simple case to the right', () => {
    expect(nearestLarger([2, 3, 4, 8], 2)).toEqual(3);
  });

  it('handles a simple case to the left', () => {
    expect(nearestLarger([2, 8, 4, 3], 2)).toEqual(1);
  });

  it('treats any two larger numbers like a tie', () => {
    expect(nearestLarger([2, 6, 4, 8], 2)).toEqual(1);
  });

  it('should choose the left case in a tie', () => {
    expect(nearestLarger([2, 6, 4, 6], 2)).toEqual(1);
  });

  it('finds an answer with a distance greater than 1 to the left', () => {
    expect(nearestLarger([8, 2, 4, 3], 2)).toEqual(0);
  });

  it('finds an answer with a distance greater than 1 to the right', () => {
    expect(nearestLarger([2, 4, 3, 8], 1)).toEqual(3);
  });

  it('should return null if no larger number is found', () => {
    expect(nearestLarger([2, 6, 4, 8], 3)).toEqual(null);
  });

  it('should return the nearer of 2 greater numbers', () => {
    expect(nearestLarger([2, 6, 9, 4, 8], 3)).toEqual(2);
  });
});
