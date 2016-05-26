/**
* Write a method that takes in a string of lowercase letters (no
* uppercase letters, no repeats). Consider the *substrings* of the
* string: consecutive sequences of letters contained inside the string.
* Find the longest such string of letters that is a palindrome.
*
* Note that the entire string may itself be a palindrome.
*/

function isPalindrome(string) {
  return string.split('').reverse().join('') === string;
}

function longestPalindrome(string) {
  if (isPalindrome(string)) return string;

  let maxLen = string.length - 2;
  while(maxLen > 0) {
    let i = 0;
    while((i + maxLen) <= string.length) {
      let sub = string.slice(i, (i + maxLen));
      if (isPalindrome(sub)) return sub;
      i++;
    }

    maxLen--;
  }
}

export { isPalindrome, longestPalindrome }
