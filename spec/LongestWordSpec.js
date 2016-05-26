/**
* Write a method that takes in a string. Return the longest word in
* the string.
*/

import longestWord from '../lib/longest-word';

describe('longestWord', () => {
  it('handles a simple string', () => {
    expect(longestWord('short longest')).toEqual('longest');
  });

  it('handles only one word', () => {
    expect(longestWord('one')).toEqual('one');
  });

  it('handles many words', () => {
    expect(longestWord('is the loneliest number')).toEqual('loneliest');
  });

  it('handles punctuation', () => {
    expect(longestWord('Hi there, how are you?')).toEqual('there');
  });

  it('returns the first longest if more than one', () => {
    expect(longestWord('Four score and seven years ago...')).toEqual('score');
  });
});
