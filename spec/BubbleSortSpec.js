/**
* Write a function `bubbleSort(arr)` which will sort an array of
* integers using the "bubble sort"
* methodology. (http://en.wikipedia.org/wiki/Bubble_sort)
*/

import bubbleSort from '../lib/bubble-sort';

describe('bubbleSort', () => {
  it('works with an empty array', () => {
    expect(bubbleSort([])).toEqual([]);
  });

  it('works with an array of 1 item', () => {
    expect(bubbleSort([1])).toEqual([1]);
  });

  it('sorts a small array of numbers', () => {
    expect(bubbleSort([5, 4, 3, 2, 1]))
             .toEqual([1, 2, 3, 4, 5]);
  });

  it('sorts a larger array', () => {
    expect(bubbleSort([9, 10, 3, 1, 4, 17, 23, 12, 25, 6]))
             .toEqual([1, 3, 4, 6, 9, 10, 12, 17, 23, 25]);
  });
});
