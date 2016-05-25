import LetterCounter from '../lib/LetterCounter';

describe('LetterCounter', () => {
  describe('#count', () => {
    it('handles a simple case', () => {
      const counter = new LetterCounter();
      const expected = { c: 1, a: 1, t: 1 };

      expect(counter.count('cat')).toEqual(expected);
    });

    it('handles multiples of the same letter', () => {
      const counter = new LetterCounter();
      const expected = { m: 1, o: 2, n: 1 };

      expect(counter.count('moon')).toEqual(expected);
    });

    it('handles a multi-word case', () => {
      const counter = new LetterCounter();
      const expected = {
        c: 1,
        a: 2,
        t: 1,
        s: 1,
        r: 1,
        e: 1,
        f: 1,
        u: 1,
        n: 1,
      };

      expect(counter.count('cats are fun')).toEqual(expected);
    });
  });
});
