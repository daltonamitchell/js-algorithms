/**
* Write a method that takes in a string. Return the longest word in
* the string.
*/

export default (string) => {
  let longest = "";
  let words = string.split(' ');
  words = words.map(word => word.replace(/[^a-z0-9]+/gi, ''));

  for (const word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }

  return longest;
};
