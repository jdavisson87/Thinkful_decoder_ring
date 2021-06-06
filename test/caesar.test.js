const { caesar } = require('../src/caesar.js');
const expect = require('chai').expect;

describe('caesar', () => {
  it('returns false when shift value is less than -25', () => {
    const actual = caesar('thinkful', -30);
    expect(actual).to.be.false;
  });
});
