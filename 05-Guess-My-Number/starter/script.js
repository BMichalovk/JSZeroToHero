'use strict';

const min = 1;
const max = 20;
const backgroundColorWin = '#239753';
const backgroundColorStart = '#000';
let availableGuesses;

const qsBody = document.querySelector('body');
const qsGuess = document.querySelector('.guess');
const qsNumber = document.querySelector('.number');
const qsYouWin = document.querySelector('.youWin');
const qsScore = document.querySelector('.score');
const qsHighScore = document.querySelector('.highscore');
const qsMessage = document.querySelector('.message');
const qsAgain = document.querySelector('.again');
const qsCheck = document.querySelector('.check');
const qsAvailable = document.querySelector('.availableNumbers');

let highScore = 20;
let score = 20;
let secretNumber;
let gameOver = false;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function startGame() {
  gameOver = false;
  score = 20;
  availableGuesses = [...Array(max + 1).keys()].slice(1);
  secretNumber = getRandomInt(min, max);
  setBackgoundColor(backgroundColorStart);
  qsYouWin.style.visibility = 'hidden';
  qsAvailable.style.visibility = 'visible';
  qsAvailable.textContent = availableGuesses;
  qsGuess.textContent = '';
  qsNumber.textContent = '??';
  qsScore.textContent = score;
  qsHighScore.textContent = highScore;
}

function guessBlank() {
  qsMessage.textContent = '⛔ Enter number to guess!';
}

function guessNotValid(guess) {
  qsMessage.textContent = '⛔ Not a valid Guess!';
}

function guessCorrect() {
  decrementScore();
  checkHighScore();
  setBackgoundColor(backgroundColorWin);
  gameOver = true;
  qsNumber.textContent = secretNumber;
  qsMessage.textContent = '🎉 Correct Number';
  qsYouWin.style.visibility = 'visible';
}

function guessWrong(guessWrongMessage) {
  decrementScore();
  qsMessage.textContent = `😞 ${guessWrongMessage}, Guess Again!`;
}

function decrementScore() {
  score--;
  qsAvailable.textContent = availableGuesses;
  qsScore.textContent = score;
}

function checkHighScore() {
  if (score > highScore || highScore === 20) {
    highScore = score;
    qsHighScore.textContent = highScore;
  }
}

function setBackgoundColor(bgColor) {
  qsBody.style.backgroundColor = bgColor;
}

// eventlistner Play Again Reset GAme
qsAgain.addEventListener('click', function () {
  startGame();
});

qsGuess.addEventListener('focus', function () {
  qsGuess.value = '';
});

function removeItemsfromArray(guess) {
  if (guess > secretNumber) {
    availableGuesses = availableGuesses.filter(function (x) {
      return x < guess;
    });
  } else {
    availableGuesses = availableGuesses.filter(function (x) {
      return x > guess;
    });
  }
}

// eventlistner Check the guess
qsCheck.addEventListener('click', function () {
  const guess = Number(qsGuess.value);
  if (gameOver) return;

  if (!guess) {
    guessBlank();
    return;
  } else if (availableGuesses.indexOf(guess) === -1) {
    guessNotValid();
    return;
  } else {
    removeItemsfromArray(guess);
    qsAvailable.textContent = availableGuesses;
  }

  if (guess === secretNumber) {
    guessCorrect();
  } else if (guess != secretNumber) {
    let guessWrongMessage = guess > secretNumber ? 'To High' : 'To Low';
    guessWrong(guessWrongMessage);
  }
});

startGame();
