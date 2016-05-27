/**
* Write a function `bubbleSort(arr)` which will sort an array of
* integers using the "bubble sort"
* methodology. (http://en.wikipedia.org/wiki/Bubble_sort)
*/

Array.prototype.swap = function (a, b) {
  const c = this[a];
  this[a] = this[b];
  this[b] = c;
  return this;
};

export default (array) => {
  if (array.length < 2)
    return array;

  let sorted = false;
  while (!sorted) {
    sorted = true;
    let i = 1;

    while (i < array.length) {
      if (array[i-1] > array[i]) {
        sorted = false;
        array.swap((i-1), i);
      }

      i++;
    }
  }

  return array;
}
