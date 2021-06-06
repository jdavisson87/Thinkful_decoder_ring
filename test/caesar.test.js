const { caesar, convertWord } = require('../src/caesar.js');
const expect = require('chai').expect;

describe('caesar', () => {
  it('returns false when shift value is less than -25', () => {
    const actual = caesar('thinkful', -26);
    expect(actual).to.be.false;
  });
  it('returns false when shift value is greater than 25', () => {
    const actual = caesar('thinkful', 26);
    expect(actual).to.be.false;
  });
  it('returns false when shift value is 0', () => {
    const actual = caesar('thinkful', 0);
    expect(actual).to.be.false;
  });
  it('returns false if no shift value is present', () => {
    const actual = caesar('thinkful');
    expect(actual).to.be.false;
  });
  it('should encode a message', () => {
    const actual = caesar('thinkful', 3);
    const expected = 'wklqnixo';
    expect(actual).to.equal(expected);
  });
  it('should decode a message', () => {
    const actual = caesar('wklqnixo', 3, false);
    const expected = 'thinkful';
    expect(actual).to.equal(expected);
  });
});

describe('convertWord', () => {
  it('should encode a message', () => {
    const actual = convertWord('thinkful', 3);
    const expected = 'wklqnixo';
    expect(actual).to.equal(expected);
  });
  it('should handle a negative shift value', () => {
    const actual = convertWord('thinkful', -3);
    const expected = 'qefkhcri';
    expect(actual).to.equal(expected);
  });
  it('should handle letters at the beginning of the alphabet with a negative shift value', () => {
    const actual = convertWord('a', -3);
    const expected = 'x';
    expect(actual).to.equal(expected);
  });
  it('should handle letters at the end of the alphabet with a positive shift value', () => {
    const actual = convertWord('z', 1);
    const expected = 'a';
    expect(actual).to.equal(expected);
  });
});
