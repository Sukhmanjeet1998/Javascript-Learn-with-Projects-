// myFunction is a variable that stores an anonymous function. The function itself does not have a name.
"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = secretNumber;
console.log(secretNumber, typeof secretNumber);
let score = 20;
let highScore = 0;
let message_ = "";

// displaymessage
const displaymessage = function(message_){
  document.querySelector(".message").textContent = message_;
};

// Play the game!
document.querySelector(".check").addEventListener("click", function () {

  const guess = Number(document.querySelector(".guess").value);

  // When there is no input
  if (!guess) {
    displaymessage("⛔ No number!");
  } 
  // When player wins
  else if (guess === secretNumber) {
    displaymessage("🎉 Correct Number!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;
    // get the high score
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } 
  // When  guess is wrong!
  else if (guess !== secretNumber) {
    if (score > 1) {
      displaymessage((guess>secretNumber ? "📈 To High!":"📉 To Low!"));
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displaymessage("🐒 You loose the game!");
      document.querySelector(".score").textContent = 0;
    }
  } 

});

// Reset the game!
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displaymessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});

