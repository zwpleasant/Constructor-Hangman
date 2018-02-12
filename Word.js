// install the required packages
var inquirer = require("inquirer");
var Letter = require("./Letter.js");

// constructor that depends on Letter, used to create an object representing the current word the user is attempting to guess
function Word() {
  // An array of `new` Letter objects representing the letters of the underlying word
  var newLetters = [];
  // A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.
  this.underscoreLetter = function() {

  }
  // A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)
  this.characterGuess = function() {
    
  }
};

module.exports = Word;
