// Write your tests here!
const {
  polybius,
  convertPolybiusWordEncode,
  convertPolybiusWordDecode,
} = require('../src/polybius');
const expect = require('chai').expect;

describe('polybius', () => {
  it('should encode 1 word message from letters to pairs', () => {
    const actual = polybius('thinkful');
    const expected = '4432423352125413';
    expect(actual).to.equal(expected);
  });
  it('should encode multiple word message from letters to pairs', () => {
    const actual = polybius('hello world');
    const expected = '3251131343 2543241341';
    expect(actual).to.equal(expected);
  });
  it('should ignore capital letters', () => {
    const actual = polybius('ThInKfUl');
    const expected = '4432423352125413';
    expect(actual).to.equal(expected);
  });
  it('should decode 1 word message from pairs to letters', () => {
    const actual = polybius('4432423352125413', false);
    const expected = 'th(i/j)nkful';
    expect(actual).to.equal(expected);
  });
  it('should decode multi word message from pairs to letters', () => {
    const actual = polybius('3251131343 2543241341', false);
    const expected = 'hello world';
    expect(actual).to.equal(expected);
  });
  it('should return false if function is decoding and the length of the numbers is odd', () => {
    const actual = polybius('443242335212541', false);
    expect(actual).to.be.false;
  });
});

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
