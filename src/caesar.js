// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  // a substitution cypher where it takes the message and shifts each letter by the amount passed into
  // the function.
  // returns either a string, or boolean value false
  const caesar = (input, shift = 0, encode = true) => {
    // check all values are valid, else return false
    if (shift < -25 || shift > 25 || shift === 0) {
      return false;
    }

    // set input message to lower case
    input = input.toLowerCase();

    // figure out if encode or decode is necessary
    if (!encode) {
      shift *= -1;
    }
    // split input by ' '
    // split word into letters ''
    // loop through the input for each letter
    // assign each letter a number
    // add shift value
    // assign letters to the new number value
    // join letters back into words
    // join words with ' '
    return input.join(' ');
  };

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
