// install/require packages
var inquirer = require("inquirer");
var Word = require("./Word");

// array to choose word from
var wordBank = ["orange", "blue", "green", "yellow", "red", "white", "black", "brown"];

// choose a random word from the wordBank to play the game
var word = wordBank[Math.floor(Math.random() * wordBank.length)];
// set that chosen word as the word for the game
var gameWord = new Word(word);

// start the inquirer for user guesses
function playGame() {
  // display the chosen word and its status
  console.log(gameWord.wordToString());
  // inquirer prompt
  inquirer.prompt([
    {
      message: "To guess a letter, type one here!",
      name: "userInput",
      type: "input",
    }
  ]).then(function(answer) {
    var userAnswers = answer.userInput;
    gameWord.characterGuess(userAnswers);
    // need to put an if-else statement with directions on how to proceed with the guesses and how to properly show the content of gameWord.wordToString()
  })
}

playGame();
