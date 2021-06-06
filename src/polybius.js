// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  // encode cipher
  const encodeCipher = {
    a: '11',
    b: '21',
    c: '31',
    d: '41',
    e: '51',
    f: '12',
    g: '22',
    h: '32',
    i: '42',
    j: '42',
    k: '52',
    l: '13',
    m: '23',
    n: '33',
    o: '43',
    p: '53',
    q: '14',
    r: '24',
    s: '34',
    t: '44',
    u: '54',
    v: '15',
    w: '25',
    x: '35',
    y: '45',
    z: '55',
  };

  // decode cipher
  const decodeCipher = {
    1: { 1: 'a', 2: 'f', 3: 'l', 4: 'q', 5: 'v' },
    2: { 1: 'b', 2: 'g', 3: 'm', 4: 'r', 5: 'w' },
    3: { 1: 'c', 2: 'h', 3: 'n', 4: 's', 5: 'x' },
    4: { 1: 'd', 2: '(i/j)', 3: 'o', 4: 't', 5: 'y' },
    5: { 1: 'e', 2: 'k', 3: 'p', 4: 'u', 5: 'z' },
  };

  // takes in a string message
  const convertPolybiusWordEncode = (word) => {
    // create result array
    let result = [];
    // separate word into an array of letters
    result = word.split('').map((letter) => {
      return encodeCipher[letter];
    });
    // match letter with coordinate number and push coordinate to a result array
    // join and return result array
    return result.join('');
  };

  // takes in a string of numbers.
  const convertPolybiusWordDecode = (word) => {
    if (word.length % 2 != 0) {
      return false;
    }
    // create result array
    let result = [];
    // separate argument into single numbers and save in a temp array
    let temp = word.split('');
    // run through the temp array with for loop that iterates every other index.
    for (let i = 0; i < temp.length; i += 2) {
      // in this loop, the pointer and the next item will be used to locate the letter, and push into result array
      result.push(decodeCipher[temp[i]][temp[i + 1]]);
    }

    // join and return result array
    return result.join('');
  };

  // cipher where each letter is represented by a coordinate
  // arguments include an input and whether we are encoding or decoding
  // returns a string of numbers or the decoded message
  const polybius = (input, encode = true) => {
    // if encode is false, check that input value is valid
    if (!encode) {
      let length = input.split(' ').reduce((acc, curr) => acc + curr.length, 0);
      if (length % 2 != 0) {
        return false;
      }
    }

    // be sure input is in lower case and create an array with the input separated by ' '
    return (
      input
        .toLowerCase()
        .split(' ')
        .map((word) => {
          // determine which helper function to run
          return encode
            ? convertPolybiusWordEncode(word)
            : convertPolybiusWordDecode(word);
        })
        // join words with ' ' and return
        .join(' ')
    );
  };

  return {
    polybius,
    convertPolybiusWordEncode,
    convertPolybiusWordDecode,
  };
})();

module.exports = {
  polybius: polybiusModule.polybius,
  convertPolybiusWordEncode: polybiusModule.convertPolybiusWordEncode,
  convertPolybiusWordDecode: polybiusModule.convertPolybiusWordDecode,
};
