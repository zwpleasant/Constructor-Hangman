// constructor that displays a character or blank placeholder, pending the user guess
function Letter(letterVal, letterGuessed) {
  // string value to store the underlying character for the letter
  this.letterVal = letterVal;
  // boolean value that store whether that letter has been guessed or not
  this.letterGuessed = false;
  // function that returns underlying character if the letter has been guessed, or a placeholder if it has not
  this.letterReturn = function() {
    if (this.letterGuessed === true) {
      console.log(this.letterVal);
    } else {
      console.log("-");
    }
  };
  // function that takes a character and checks it against the underlying character, updating the stored boolean value to true if it was guessed
  this.letterCheck = function(userGuess) {
    if (userGuess === this.letterVal) {
      this.letterGuessed === true;
    } else {
      this.letterGuessed === false;
    }
  };
};

var letter = new Letter("A");

A.letterReturn();
