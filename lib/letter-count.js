/**
 * Write a function, `letterCount(str)` that takes a string and
 * returns a hash mapping each letter to its frequency. Do not include
 * spaces.
 */

export default (string) => {
  let counts = {};
  let letters = string.replace(/\s+/gi, '').split('');

  for (let letter of letters) {
    if (counts[letter]) {
      counts[letter]++;
    } else {
      counts[letter] = 1;
    }
  }

  return counts;
}
