'use strict';
// The querySelector() method returns the first element that matches a CSS selector.
let dice = Math.trunc(Math.random() * 6) + 1;
let currentScore = 0;
// Selecting elements.
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

// Manipulating elements
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

// Rolling Dice Functionality
btnRoll.addEventListener("click",function(){
    // Generating a random dice roll.
    const dice = Math.trunc(Math.random() * 6) + 1;

    // Display dice. (Change te img src)
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;

    // Check for rolled 1: if true, switch to next player
    if (dice!==1) {
        // Add dice number to current score
        currentScore += dice;
        current0El.textContent = currentScore;
    }else{
        // Switch to next player
        
    }
});

// 
btnNew.addEventListener("click",function(){
    console.log("New Game!");
});


btnHold.addEventListener("click",function(){
    console.log("Hold Number!");
});

