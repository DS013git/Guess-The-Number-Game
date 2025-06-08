let random = parseInt(Math.random() * 100 + 1);
let submit = document.querySelector("#subt");
let userInput = document.querySelector("#guessField");
let prevGuesses = document.querySelector(".guesses");
let remaining = document.querySelector(".lastResult");
let lowOrHi = document.querySelector(".lowOrHi");
let startOver = document.querySelector(".resultParas");
let p =  document.createElement("p");
let prevguess = [];
let numguess = 1;
let playgame = true;

if(playgame) {
    submit.addEventListener("click", function(event){
        event.preventDefault();
        let guess = parseInt(userInput.value);
        validateguess(guess);
    });
}

function validateguess(guess) {
    if(isNaN(guess)|| guess < 1 || guess > 100){
    alert(`Please enter a valid number between 1 and 100.`)
    }
    prevguess.push(guess);
    if(numguess === 10){
        displayguess(guess);
        displayMessage(`Game Over! The number was ${random}.`);
        endgame();
    }
    else{
        displayguess(guess);
        checkguess(guess);
    }


}

function checkguess(guess) {
    if(guess === random){
        displayMessage("Booyah!!! You WON!!!")
        endgame();
    }
    else if(guess < random){
        displayMessage("Think Higher!");
    }
    else if(guess > random){
        displayMessage("Think Lower!");
    }
}
function displayguess(guess) {
    userInput.value = ""
    prevGuesses.innerHTML += `${guess}  `;
    numguess++;
    remaining.innerHTML = `${11 - numguess}`;
}
function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}
function endgame() {
    userInput.value = "";
    userInput.setAttribute("disabled", "");
    p.classList.add(`button`)
    p.innerHTML = `<h2 id = "newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playgame = false;
    newGame();
}
function newGame() {
    let startnewgame = document.querySelector("#newGame");
    startnewgame.addEventListener("click", function(event){
     random = parseInt(Math.random() * 100 + 1);
     prevguess = []
     numguess = 1;
     prevGuesses.innerHTML = "";
     remaining.innerHTML = `${11 - numguess}`;
     userInput.removeAttribute("disabled");
     startOver.removeChild(p);
     playgame = true;
    })
}
