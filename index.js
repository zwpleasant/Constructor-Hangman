// install/require packages
var inquirer = require("inquirer");
var Word = require("./Word");

// array to choose word from
var wordBank = ["orange", "blue", "green", "yellow", "red", "white", "black", "brown"];

// choose a random word from the wordBank to play the game
var word = wordBank[Math.floor(Math.random() * wordBank.length)];
// set that chosen word as the word for the game
var gameWord = new Word(word);
console.log(gameWord);

// start the inquirer for user guesses
function playGame() {
  inquirer.prompt([
    {
      message: "To guess a letter, type one here!",
      name: "userInput",
      type: "input",
    }
  ]).then(function(answer) {
    var userAnswers = answer.userInput;
    gameWord.characterGuess(userAnswers);
  })

}

playGame();
