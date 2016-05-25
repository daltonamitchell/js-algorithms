class LetterCounter {
  count(string) {
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
}

export default LetterCounter;
