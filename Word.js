// install/require packages
var Letter = require("./Letter.js");

// constructor that depends on Letter, used to create an object representing the current word the user is attempting to guess
function Word(word) {
  // randomWord input
  this.word = word;
  // array of letters that will hold either dashes or letters
  this.letterArray = [];
  for (var i = 0; i < this.word.length; i++) {
      this.letterArray.push(new Letter(this.word[i]));
  }
  // A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.
  this.wordToString = function() {
    var wordString = "";
    for (var j = 0; j < this.letterArray.length; j++) {
      wordString += this.letterArray[j].letterReturn();
    }
    return wordString;
  }
  // A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)
  this.characterGuess = function(userGuess) {
    var checkInput = new Letter(userGuess);
      return checkInput.letterCheck(userGuess);
  }
};

module.exports = Word;
