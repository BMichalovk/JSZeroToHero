'use strict';
// use arre 0 1
// classlist.toggle
const minDiceNumber = 0;
const maxDiceNumber = 7;
const qsNewGame = document.querySelector('.btn--new');
const qsRollDice = document.querySelector('.btn--roll');
const qsHoldScore = document.querySelector('.btn--hold');
const qsDicePicture = document.querySelector('.dice');
const qsScorePlayer1 = document.getElementById('score--0');
const qsScorePlayer2 = document.getElementById('score--1');
const qsCurrentScore1 = document.getElementById('current--0');
const qsCurrentScore2 = document.getElementById('current--1');
const qsActivePlayer1 = document.getElementById('player--0');
const qsActivePlayer2 = document.getElementById('player--1');
let activePlayer;
let currentScore;
let playerScore1;
let playerScore2;
let gameOver;

const newGame = () => {
  gameOver = false;
  activePlayer = 1;
  currentScore = 0;
  playerScore1 = 0;
  playerScore2 = 0;
  hideDice();
  qsScorePlayer1.textContent = '0';
  qsScorePlayer2.textContent = '0';
  qsCurrentScore1.textContent = '0';
  qsCurrentScore2.textContent = '0';
  qsActivePlayer1.classList.add('player--active');
  qsActivePlayer2.classList.remove('player--active');
};

const rollDice = () => {
  if (gameOver) return;
  hideDice();
  let diceRoll = getDiceRoll(maxDiceNumber, minDiceNumber);
  changePictureOfDice(diceRoll);
  if (diceRoll !== 1) {
    addToCurrent(diceRoll);
  } else {
    changePlayer();
  }
};

const holdScore = diceRoll => {
  if (gameOver) return;
  hideDice();
  updateScore(activePlayer, currentScore);
  checkWinning();
  changePlayer();
};

const addToCurrent = roll => {
  currentScore += roll;
  if (activePlayer === 1) {
    qsCurrentScore1.textContent = currentScore;
  } else {
    qsCurrentScore2.textContent = currentScore;
  }
};

const updateScore = (player, score) => {
  if (player === 1) {
    playerScore1 += score;
    qsScorePlayer1.textContent = playerScore1;
  } else {
    playerScore2 += score;
    qsScorePlayer2.textContent = playerScore2;
  }
};

const changePlayer = () => {
  activePlayer = activePlayer === 1 ? 2 : 1;
  currentScore = 0;
  qsCurrentScore1.textContent = 0;
  qsCurrentScore2.textContent = 0;
  qsActivePlayer1.classList.toggle('player--active');
  qsActivePlayer2.classList.toggle('player--active');
};

const getDiceRoll = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const changePictureOfDice = roll => {
  qsDicePicture.src = `dice-${roll}.png`;
};

const hideDice = () => {
  qsDicePicture.style.visibility = 'hidden';
};

const showDice = () => {
  qsDicePicture.style.visibility = 'visible';
};

const checkWinning = () => {
  if (playerScore1 > 99 || playerScore2 > 99) {
    gameOver = true;
  }
};

qsNewGame.addEventListener('click', newGame);
qsRollDice.addEventListener('click', rollDice);
qsHoldScore.addEventListener('click', holdScore);
newGame();
