// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  // a substitution cypher where it takes the message and shifts each letter by the amount passed into
  // the function.
  // returns either a string, or boolean value false
  const caesar = (input, shift, encode = true) => {
    if (shift < -25) {
      console.log(shift);
      return false;
    }
    // check all values are valid, else return false
    // set input message to lower case
    // figure out if encode or decode is necessary
    // create functionality to encode message
    // create functionality to decode message
    // return message
  };

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
