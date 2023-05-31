'use strict';

// TODO check if guess is Integer
// TODO keep track of guessed number

const min = 1;
const max = 20;
const backgroundColorWin = '#239753';
const backgroundColorStart = '#000';
const availableGuesses = [...Array(max + 1).keys()].slice(1);

const qsBody = document.querySelector('body');
const qsGuess = document.querySelector('.guess');
const qsNumber = document.querySelector('.number');
const qsYouWin = document.querySelector('.youWin');
const qsScore = document.querySelector('.score');
const qsHighScore = document.querySelector('.highscore');
const qsMessage = document.querySelector('.message');
const qsAgain = document.querySelector('.again');
const qsCheck = document.querySelector('.check');

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
  secretNumber = getRandomInt(min, max);
  setBackgoundColor(backgroundColorStart);
  qsYouWin.style.visibility = 'hidden';
  qsGuess.textContent = '';
  qsNumber.textContent = '??';
  qsScore.textContent = score;
  qsHighScore.textContent = highScore;
}

function guessBlank() {
  qsMessage.textContent = '⛔ Enter number to guess!';
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

// eventlistner Check the guess
qsCheck.addEventListener('click', function () {
  if (gameOver) {
    return;
  }
  const guess = Number(qsGuess.value);
  if (!guess) {
    guessBlank();
  } else if (guess === secretNumber) {
    guessCorrect();
  } else if (guess != secretNumber) {
    let guessWrongMessage = guess > secretNumber ? 'To High' : 'To Low';
    guessWrong(guessWrongMessage);
  }
});

startGame();
