// Write your tests here!
const {
  polybius,
  convertPolybiusWordEncode,
  convertPolybiusWordDecode,
} = require('../src/polybius');
const expect = require('chai').expect;

describe('polybius', () => {});

describe('convertPolybiusEncode', () => {
  it('encodes word from letters to numbers', () => {
    const actual = convertPolybiusWordEncode('thinkful');
    const expected = '4432423352125413';
    expect(actual).to.equal(expected);
  });
});

describe('convertPolybiusWordDecode', () => {
  it('decodes word from numbers to letters', () => {
    const actual = convertPolybiusWordDecode('4432423352125413');
    const expected = 'th(i/j)nkful';
    expect(actual).to.equal(expected);
  });
  it('returns false if argument length is odd', () => {
    const actual = convertPolybiusWordDecode('443242335212541');
    expect(actual).to.be.false;
  });
});
