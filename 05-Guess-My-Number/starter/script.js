'use strict';

// check is Integer
// reset cell on focus
// keep track of guessed number
//
const min = 1;
const max = 20;
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
  setBackgoundColor('000000');
  document.querySelector('.guess').textContent = '';
  document.querySelector('.number').textContent = '??';
  document.querySelector('.score').textContent = score;
  document.querySelector('.highscore').textContent = highScore;
}

function guessBlank() {
  document.querySelector('.message').textContent = '⛔ Enter number to guess!';
}

function guessCorrect() {
  decrementScore();
  gameOver = true;
  checkHighScore();
  document.querySelector('.number').textContent = secretNumber;
  document.querySelector('.message').textContent = '🎉 Correct Number';
  setBackgoundColor('CD8000');
}

function guessToHigh() {
  decrementScore();
  document.querySelector('.message').textContent = '😞 To High, Guess Again!';
}

function guessToLow() {
  decrementScore();
  document.querySelector('.message').textContent = '😞 To Low, Guess Again!';
}

function decrementScore() {
  score--;
  document.querySelector('.score').textContent = score;
}

function checkHighScore() {
  if (score > highScore || highScore === 20) {
    highScore = score;
    document.querySelector('.highscore').textContent = highScore;
  }
}

function setBackgoundColor(bgColor) {
  document.querySelector('body').style.backgroundColor = `#${bgColor}`;
}

// eventlistner Play Again Reset GAme
document.querySelector('.again').addEventListener('click', function () {
  startGame();
});

// eventlistner Check the guess
document.querySelector('.check').addEventListener('click', function () {
  if (gameOver) {
    return;
  }
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    guessBlank();
  } else if (guess === secretNumber) {
    guessCorrect();
  } else if (guess > secretNumber) {
    guessToHigh();
  } else if (guess < secretNumber) {
    guessToLow();
  }
});

startGame();
