# Epicodus Project - Simon Game


## Outline

- generate a pattern from options
  - pattern stays the same just grows longer
  - every "turn" we add another bit to the pattern
- present that pattern to the player
  - have some delay between each part of the pattern
- wait for the player to enter a pattern
- check if correct
  - if not correct, it says you lose!
    - just start by popping up an alert
    - give option to restart game after
  - if correct, continue generating pattern
- show a count to the player to let them know how many turns have passed
- have the user press "start" to begin playing

- showing prompt to the user:
  - potentially add sound effect later
  - flash color in some way to indicate pattern

- user input is receieved from click events on the "buttons"

UI progression:
- at first, keep it simple, have 4 buttons next to each other
- button for starting
- display for count

```js
// generate state stuff
const pattern = [] // the current pattern, based on the round we are in
const userClickCount // how many clicks the user has done in the current pattern
// -----

/*
round 1, pattern = ["red"]
round 2, pattern = ["red", "blue"]
round 3, pattern = ["red", "blue", "yellow"]
round 4, pattern = ["red", "blue", "yellow", "red"]
round 5, pattern = ["red", "blue", "yellow", "red", "red"]
round 6, pattern = ["red", "blue", "yellow", "red", "red", "yellow"]
*/

function generatePattern () {
  const randomNumber = Math.floor(Math.random() * 4) + 1;
  
  if (randomNumber === 1) {
    pattern.push("red")
  } else if (randomNumber === 2) {
    pattern.push("green")
  } else if (randomNumber === 3) {
    pattern.push("blue")
  } else if (randomNumber === 4) {
    pattern.push("yellow")
  }
}

function analyzeUserInput (currentPattern, currentClickItem) {
  patternToCheck = currentPattern[userClickCount]

  if (patternToCheck === currentClickItem) {
    // this click has been correct
    userClickCount++
  } else {
    // this click has been incorrect
    userHasLost()
  }
}

function userHasLost () {
  alert ('You have lost');
  
  // refresh the page
  // window.location.reload()
  // otherwise, reset variables and do stuff
}

function currentClickHandler (buttonClickedOn) {
  analyzeUserInput(pattern, buttonClickedOn)
  
  if (userClickCount === pattern[pattern.length]) {
    generatePattern();
    userClickCount = 0;
  }
}

function showPatternToUser () {
  $('.buttons').find out how to disable buttons
  for (let i=0; i < pattern.length; i++) {
    if (pattern[i] === "red") {
      $('#red-button').fadeOut(250).fadeIn(250); //test this code
    } else if pattern[i] === "blue") {
      $('#blue-button').fadeOut(250).fadeIn(250); //test this code
    } else if pattern[i] === "yellow") {
      $('#yellow-button').fadeOut(250).fadeIn(250); //test this code
    } else if pattern[i] === "green") {
      $('#green-button').fadeOut(250).fadeIn(250); //test this code
    }

    // wait by using setInterval somehow
  }
  
  $('.buttons'). find out how to enable again
}
// do event listeners for each button

startbutton.onclick () {
  generatePattern()
  showPatternToUser()
}

redbutton.onclick = function () {
  currentClickHandler('red');
}

bluebutton.onclick = function () {
  currentClickHandler('blue');
}

yellowbutton.onclick = function () {
  currentClickHandler('yellow');
}
greenbutton.onclick = function () {
  currentClickHandler('green');
}
```


