var computerGuess;
var userGuessLog = [];
var attempts = 0;
var maxGuesses = 10;

function easyMode(){
  maxGuesses = 10;
  document.getElementById('easyBtn').className = 'activeButton';
  document.getElementById('hardBtn').className = '';
}

function hardMode(){
  maxGuesses = 5;
  document.getElementById('hardBtn').className = 'activeButton';
  document.getElementById('easyBtn').className = '';
}

function newGame() {
  window.location.reload();
}

function init() {
  computerGuess =Math.floor(Math.random() * 100 +1);
  //console.log(computerGuess);
  document.getElementById('newGameButton').style.display = 'none';
}

function compareGuess(){
  var userGuess = document.getElementById('inputBox').value;
  //console.log(userGuess);

  userGuessLog.push(userGuess);
  //console.log(userGuessLog);
  document.getElementById('guessLog').innerHTML = userGuessLog;
  attempts++;
  document.getElementById('attempts').innerHTML = attempts;

  if(userGuessLog.length < maxGuesses){
    if(userGuess > computerGuess){
      document.getElementById('textOutput').innerHTML = 'Your guess is too high';
      document.getElementById('inputBox').value = "";
    } else if (userGuess < computerGuess) {
      document.getElementById('textOutput').innerHTML = 'Your guess is too low';
      document.getElementById('inputBox').value = "";
    } else {
      document.getElementById('textOutput').innerHTML = 'Correct!';
    }
  } else {
    if(userGuess > computerGuess){
      document.getElementById('textOutput').innerHTML = 'You lose!';
    } else if(userGuess < computerGuess){
      document.getElementById('textOutput').innerHTML = 'You lose!';
    } else {
      document.getElementById('textOutput').innerHTML = 'Correct!';
    }

  }

}
