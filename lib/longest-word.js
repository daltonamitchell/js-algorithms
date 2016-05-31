/**
* Write a method that takes in a string. Return the longest word in
* the string.
*/

function longestWord(string) {
  let longest = "";
  let words = string.split(' ');
  words = words.map(word => word.replace(/[^a-z0-9]+/gi, ''));
  words.forEach((word) => {
    if (word.length > longest.length) {
      longest = word;
    }
  });

  return longest;
};

export default longestWord;
