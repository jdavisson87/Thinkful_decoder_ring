// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  // takes in a string message
  const convertPolybiusWordEncode = (word) => {
    // create result array
    // separate word into an array of letters
    // match letter with coordinate number
    // push coordinate to a result array
    // join result array
    // return result array that is a string of numbers
  };

  // takes in a string of numbers.
  const convertPolybiusWordDecode = (word) => {
    // create result array
    // separate argument into single numbers and save in a temp array
    // run through the temp array with for loop that iterates every other index.
    // in this loop, the pointer and the next item will be used to locate the letter
    // push letter into the result array
    // join result array
    // return result array
  };

  // cypher where each letter is represented by a coordinate
  // arguments include an input and whether we are encoding or decoding
  // returns a string of numbers or the decoded message
  const polybius = (input, encode = true) => {
    // your solution code here
    // be sure input is in lower case
    // create an array with the input separated by ' '
    // if encode===true, run convertPolybiusWordEncode on each word
    // if encode===false, run convertPolybiusWordDecode on each word
    // join words with ' '
    // return a string
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
