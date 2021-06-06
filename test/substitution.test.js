// Write your tests here!
const {
  substitution,
  substitutionEncode,
  substitutionDecode,
} = require('../src/substitution');
const expect = require('chai').expect;

describe('substitution', () => {
  it('should return false if alphabet parameter is missing', () => {
    const actual = substitution('thinkful');
    expect(actual).to.be.false;
  });
  it('should return false if alphabet parameter does not equal 26 in length', () => {
    const actual = substitution('thinkful', 'lkjs');
    expect(actual).to.be.false;
  });
  it('should return false is alphabet is not 26 unique characters', () => {
    const actual = substitution('thinkful', 'abcabcabcabcabcabcabcabcyz');
    expect(actual).to.be.false;
  });
  it('should encode a message with valid arguments', () => {
    const actual = substitution('thinkful', 'xoyqmcgrukswaflnthdjpzibev');
    const expected = 'jrufscpw';
    expect(actual).to.equal(expected);
  });
  it('should encode a message with multiple words and valid arguments', () => {
    const actual = substitution(
      'You are an excellent spy',
      'xoyqmcgrukswaflnthdjpzibev'
    );
    const expected = 'elp xhm xf mbymwwmfj dne';
    expect(actual).to.equal(expected);
  });
  it('should decode a message with valid arguments', () => {
    const actual = substitution(
      'jrufscpw',
      'xoyqmcgrukswaflnthdjpzibev',
      false
    );
    const expected = 'thinkful';
    expect(actual).to.equal(expected);
  });
  it('should decode a message with multiple words and valid arguments', () => {
    const actual = substitution(
      'elp xhm xf mbymwwmfj dne',
      'xoyqmcgrukswaflnthdjpzibev',
      false
    );
    const expected = 'you are an excellent spy';
    expect(actual).to.equal(expected);
  });
});

describe('substitutionEncode', () => {
  it('should encode a message with valid arguments', () => {
    const actual = substitutionEncode('thinkful', 'xoyqmcgrukswaflnthdjpzibev');
    const expected = 'jrufscpw';
    expect(actual).to.equal(expected);
  });
  it('should encode a message with multiple words and valid arguments', () => {
    const actual = substitutionEncode(
      'you are an excellent spy',
      'xoyqmcgrukswaflnthdjpzibev'
    );
    const expected = 'elpxhmxfmbymwwmfjdne';
    expect(actual).to.equal(expected);
  });
});

describe('substitutionDecode', () => {
  it('should decode a message with valid arguments', () => {
    const actual = substitutionDecode(
      'jrufscpw',
      'xoyqmcgrukswaflnthdjpzibev',
      false
    );
    const expected = 'thinkful';
    expect(actual).to.equal(expected);
  });
  it('should decode a message with multiple words and valid arguments', () => {
    const actual = substitutionDecode(
      'elp xhm xf mbymwwmfj dne',
      'xoyqmcgrukswaflnthdjpzibev',
      false
    );
    const expected = 'youareanexcellentspy';
    expect(actual).to.equal(expected);
  });
});
