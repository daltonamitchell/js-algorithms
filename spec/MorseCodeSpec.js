/**
 * Build a function, `morseEncode(str)` that takes in a string (no
 * numbers or punctuation) and outputs the morse code for it.
 *
 * See http://en.wikipedia.org/wiki/Morse_code.
 *
 * Put two spaces between words and one space between letters.
 */

import morseEncode from '../lib/morse-code';

describe('morseEncode', () => {
  it('encodes a simple letter', () => {
    expect(morseEncode('q')).toEqual('--.-');
  });

  it('encodes a small word', () => {
    expect(morseEncode('cat')).toEqual('-.-. .- -');
  });

  it('encodes a phrase', () => {
    expect(morseEncode('cat in hat')).toEqual('-.-. .- -  .. -.  .... .- -');
  });
});
