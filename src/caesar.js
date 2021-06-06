// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  // helper function to convert word
  const convertWord = (word, shift) => {
    // split word into letters ''
    // loop through the input for each letter
    word = word.split('').map((letter) => {
      letter = letter.charCodeAt(0);
      if (letter < 97 || letter > 122) {
        return String.fromCharCode(letter);
      }
      // assign each letter the charCode number
      // take away 97 for clarity, so we are only dealing with values 0 - 25
      // add shift value
      letter = letter - 97 + shift;
      // assign letters to the new number value
      // create conditions if letter value is <0 or >25
      if (letter < 0) {
        letter = 26 + letter;
      }
      if (letter > 25) {
        letter = (letter % 25) - 1;
      }
      // letter += 97;
      return String.fromCharCode(letter + 97);
    });
    return word.join('');
  };

  // a substitution cipher where it takes the message and shifts each letter by the amount passed into the function.
  // returns either a string, or boolean value false
  const caesar = (input, shift = 0, encode = true) => {
    // check all values are valid, else return false
    if (shift < -25 || shift > 25 || shift === 0) {
      return false;
    }

    // figure out if encode or decode is necessary
    if (!encode) {
      shift *= -1;
    }

    // set input message to lower case, split with ' ', run helper function, then join words back together
    return input
      .toLowerCase()
      .split(' ')
      .map((word) => convertWord(word, shift))
      .join(' ');
  };

  return {
    caesar,
    convertWord,
  };
})();

module.exports = {
  caesar: caesarModule.caesar,
  convertWord: caesarModule.convertWord,
};
