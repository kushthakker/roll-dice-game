const leftSide = document.querySelector(".left");
const rightSide = document.querySelector(".right");
const scoreLeftSide = document.querySelector(".scoreLeft");
const scoreRightSide = document.querySelector(".scoreRight");
const currentScoreLeftSide = document.querySelector(".currentScoreLeft");
const currentScoreRightSide = document.querySelector(".currentScoreRight");
const btnNewGame = document.querySelector(".btn-new-game");
const btnRollDice = document.querySelector(".btn-roll-dice");
const btnHold = document.querySelector(".btn-hold");
const dice = document.querySelector(".dice");
const playerLeft = document.querySelector(".playerLeft");
const playerRight = document.querySelector(".playerRight");
const btn = document.querySelector(".btn");

let number = 0;
let totalForLeft = 0;
let totalForRight = 0;
let leftSideChoice = 1;
let rightSideChoice = 0;
let savedLeft = 0;
let savedRight = 0;

function user() {
  let player1 = prompt("Player 1 Name: ");
  let player2 = prompt("Player 2 Name: ");
  typeof player1 === "string" && player1.length >= 1
    ? (playerLeft.textContent = player1)
    : (playerLeft.textContent = "Player 1");
  typeof player2 === "string" && player2.length >= 1
    ? (playerRight.textContent = player2)
    : (playerRight.textContent = `Player 2`);
}

defaultGame();

function defaultGame() {
  user();
  leftSide.classList.remove("player-won");
  rightSide.classList.remove("player-won");
  leftSide.classList.add("player-active");
  rightSide.classList.add("player-notActive");
  rightSide.classList.remove("player-active");
  scoreLeftSide.textContent = 0;
  scoreRightSide.textContent = 0;
  currentScoreLeftSide.textContent = 0;
  currentScoreRightSide.textContent = 0;
  dice.style.display = "none";
  number = 0;
  totalForLeft = 0;
  totalForRight = 0;
  leftSideChoice = 1;
  rightSideChoice = 0;
  savedLeft = 0;
  savedRight = 0;
}

// Reset Game

btnNewGame.addEventListener("click", newGame);

function newGame() {
  defaultGame();
  total = 0;
  currentScoreLeftSide.textContent = total;
  currentScoreRightSide.textContent = total;
}

// ROll dice

btnRollDice.addEventListener("click", rollit);

function rollit() {
  if (leftSideChoice === 1 || rightSideChoice === 1) {
    // this condition is to know which is active and which is not-active side. If anyone wins then we declred both's value to 0 so these buttuns won't work
    number = Math.trunc(Math.floor(Math.random() * 6) + 1);
    dice.src = `img/dice-${number}.png`;
    dice.style.display = "block";
    if (leftSideChoice === 1) {
      playerLeft.classList.add("expand");
      totalForLeft += number;
      currentScoreLeftSide.textContent = totalForLeft;
      return totalForLeft;
    } else if (rightSideChoice === 1) {
      totalForRight += number;
      currentScoreRightSide.textContent = totalForRight;
      return totalForRight;
    }
  }
}

// hold game
btnHold.addEventListener("click", changeSide);

function changeSide() {
  savedLeft += totalForLeft;
  savedRight += totalForRight;
  if (savedLeft >= 30) {
    // condition if he reached the wining score 30
    leftSide.classList.add("player-won");
    scoreLeftSide.textContent = savedLeft;
    totalForLeft = 0;
    currentScoreLeftSide.textContent = totalForLeft;
    leftSideChoice = 0;
    rightSideChoice = 0;
    btnNewGame.style.opacity = 1;
    dice.style.display = "none";
  } else if (savedRight >= 30) {
    rightSide.classList.add("player-won");
    scoreRightSide.textContent = savedRight;
    totalForRight = 0;
    currentScoreRightSide.textContent = totalForRight;
    leftSideChoice = 0;
    rightSideChoice = 0;
    btnNewGame.style.opacity = 1;
    dice.style.display = "none";
  } else {
    if (leftSideChoice === 1) {
      scoreLeftSide.textContent = savedLeft;
      totalForLeft = 0;
      currentScoreLeftSide.textContent = totalForLeft;
      leftSide.classList.toggle("player-notActive");
      leftSide.classList.toggle("player-active");
      rightSide.classList.toggle("player-notActive");
      rightSide.classList.toggle("player-active");
      playerLeft.classList.remove("expand");
      playerRight.classList.add("expand");
      leftSideChoice = 0;
      rightSideChoice = 1;
    } else if (rightSideChoice === 1) {
      leftSide.classList.toggle("player-notActive");
      leftSide.classList.toggle("player-active");
      rightSide.classList.toggle("player-notActive");
      rightSide.classList.toggle("player-active");
      scoreRightSide.textContent = savedRight;
      totalForRight = 0;
      currentScoreRightSide.textContent = totalForRight;
      playerRight.classList.remove("expand");
      playerLeft.classList.add("expand");
      leftSideChoice = 1;
      rightSideChoice = 0;
    }
  }
}

// function sameCode(side, oppositeSide) {
//   `score${side}Side`.textContent = `saved${side}`;
//   `totalFor${side}` = 0;
//   `currentScoreL${side}Side`.textContent = `totalFor${side}`;
//   `${side}Side`.classList.toggle("player-notActive");
//   `${side}Side`.classList.toggle("player-active");
//   `${oppositeSide}Side`.classList.toggle("player-notActive");
//   `${oppositeSide}Side`.classList.toggle("player-active");
//   `player${side}`.classList.remove("expand");
//   `player${oppositeSide}`.classList.add("expand");
//   `${side}SideChoice` = 0;
//   `${oppositeSide}SideChoice` = 1;
// }

// function whoWon(small, big, opposite) {
//   `${small}Side`.classList.add("player-won");
//   `score${big}Side`.textContent = `saved${big}`;
//   `totalFor${big}` = 0;
//   `currentScore${big}Side`.textContent = `totalFor${big}`;
//   `${small}SideChoice` = 0;
//   `${opposite}SideChoice` = 0;
// }
