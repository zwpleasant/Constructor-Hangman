// install/require packages
var inquirer = require("inquirer");
var Word = require("./Word");

// array to choose word from
var wordBank = ["orange", "blue", "green", "yellow", "red", "white", "black", "brown"];

// guesses made by player
var guesses = [];

// guesses remaining in game
var guessesRemaining = 5;

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
    var userAnswer = answer.userInput;
    gameWord.characterGuess(userAnswer);
    if (guessesRemaining > 0 && guesses.indexOf(userAnswer) === -1) {
      guesses.push(userAnswer);
      guessesRemaining--;
      console.log(`${guessesRemaining} guesses left!`);
      console.log(`Letters guessed: ${guesses}`);
      playGame();
    } else {
      console.log("Loser!");
    }
  });
}

playGame();
