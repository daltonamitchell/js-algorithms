/**
 * Build a function, `morseEncode(str)` that takes in a string (no
 * numbers or punctuation) and outputs the morse code for it.
 *
 * See http://en.wikipedia.org/wiki/Morse_code.
 *
 * Put two spaces between words and one space between letters.
 */

const MORSE_CODE = {
    a: '.-',
    b: '-...',
    c: '-.-.',
    d: '-..',
    e: '.',
    f: '..-.',
    g: '--.',
    h: '....',
    i: '..',
    j: '.---',
    k: '-.-',
    l: '.-..',
    m: '--',
    n: '-.',
    o: '---',
    p: '.--.',
    q: '--.-',
    r: '.-.',
    s: '...',
    t: '-',
    u: '..-',
    v: '...-',
    w: '.--',
    x: '-..-',
    y: '-.--',
    z: '--..'
};

function encodeWord(word) {
  let letters = word.split('');
  return letters.map(letter => MORSE_CODE[letter] || letter).join(' ');
}

export default (string) => {
  if (string.length === 1)
    return MORSE_CODE[string];

  let words = string.split(' ');
  return words.map(word => encodeWord(word)).join('  ');
}
