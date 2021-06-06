// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  // create object of letters
  const alpha = {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
    e: 4,
    f: 5,
    g: 6,
    h: 7,
    i: 8,
    j: 9,
    k: 10,
    l: 11,
    m: 12,
    n: 13,
    o: 14,
    p: 15,
    q: 16,
    r: 17,
    s: 18,
    t: 19,
    u: 20,
    v: 21,
    w: 22,
    x: 23,
    y: 24,
    z: 25,
  };

  const validAlphabet = (alphabet) => {
    if (alphabet.length !== 26) {
      return false;
    }
    let uniqueChar = {};
    alphabet.split('').forEach((letter) => {
      uniqueChar[letter] = 1;
    });
    if (Object.keys(uniqueChar).length !== 26) {
      return false;
    }
    return true;
  };

  // 2 parameters: word and alphabet cypher
  const substitutionEncode = (word, alphabet) => {
    // split word into letters and loop through each letter
    return word
      .split('')
      .map((letter) => {
        // figure out index of each letter using the alpha object
        // return letter of alphabet cypher at the index that was located
        return alphabet[alpha[letter]];
        // join word
      })
      .join('');
  };

  // 2 parameters: word and alphabet cypher
  const substitutionDecode = (word, alphabet) => {
    // split word into letters and loop through each letter
    return word
      .split('')
      .map((letter) => {
        // match the letter to the alphabet cypher and find the index of it
        let index = alphabet.split('').indexOf(letter);
        let alphaKeys = Object.keys(alpha);
        return alphaKeys[index];
        // create array of object.keys of the alpha object
        // return alpha object at the index that was found
      })
      .join('');
  };

  // 3 parameters: the message, the alphabet for substitution, and if we are encoding or decoding
  // returns an encoded or decoded message
  const substitution = (input, alphabet = '', encode = true) => {
    // if alphabet is missing or does not have a length of 26, return false
    // alphabet needs to be all unique characters, no duplicates
    if (!validAlphabet(alphabet)) {
      return false;
    }
    // make sure input is all lower case and split words
    // run correct encode or decode function for each word
    input = input
      .toLowerCase()
      .split(' ')
      .map((word) =>
        encode
          ? substitutionEncode(word, alphabet)
          : substitutionDecode(word, alphabet)
      );
    return input.join(' ');
  };

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
