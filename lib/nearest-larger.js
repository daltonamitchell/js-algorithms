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

export default (array, i) => {
  let distance = 1;
  let left;
  let right;

  while (true) {
    left = i - distance;
    right = i + distance;

    if (left < 0 && right >= array.length)
      return null;

    if (left >= 0 && array[left] > array[i])
      return left;

    if (right < array.length && array[right] > array[i])
      return right;

    distance++;
  }
}
