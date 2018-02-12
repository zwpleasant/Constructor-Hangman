// install the required packages
var Letter = require("./Letter.js");

// constructor that depends on Letter, used to create an object representing the current word the user is attempting to guess
function Word(word) {
  this.word = word;
  // An array of `new` Letter objects representing the letters of the underlying word
  this.newLetters = [];
  for (var i = 0; i < this.word.length; i++) {
    // display either a "-" or the letter
    this.newLetters.push(new Letter(this.letter[i]));
    console.log(this.newLetters);
  }
  // A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.
  this.wordToString = function() {
    var output = "";
    for (var i = 0; i < this.newLetters.length; i++) {
      output += this.newLetters[i].letterReturn();
    }
    return output;
  };
  // A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)
  this.characterGuess = function(userGuess) {
    var checkInput = new Letter(userGuess);
    return checkInput.letterCheck(userGUess);
  }
};

module.exports = Word;

Word("robber");
