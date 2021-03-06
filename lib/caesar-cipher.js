/**
* Write a method that takes in an integer `offset` and a string.
* Produce a new string, where each letter is shifted by `offset`. You
* may assume that the string contains only lowercase letters and
* spaces.
*
* When shifting "z" by three letters, wrap around to the front of the
* alphabet to produce the letter "c".
*
* You'll want to use String's `ord` method and Integer's `chr` method.
* `ord` converts a letter to an ASCII number code. `chr` converts an
* ASCII number code to a letter.
*
* You may look at the ASCII printable characters chart:
*
*     http://en.wikipedia.org/wiki/ASCII#ASCII_printable_characters
*
* Notice that the letter 'a' has code 97, 'b' has code 98, etc., up to
* 'z' having code 122.
*/

function caesarCipher(offset, string) {
  const a = "a".charCodeAt(0);
  const z = "z".charCodeAt(0);
  let letters = string.split('');

  return letters.map((letter) => {
    let charCode = letter.charCodeAt(0);

    if (charCode < a || charCode > z)
      return String.fromCharCode(charCode);

    charCode += offset;

    if (charCode > z)
      charCode -= 26;

    return String.fromCharCode(charCode);
  })
  .join('');
}

export default caesarCipher;
