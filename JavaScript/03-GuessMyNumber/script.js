"use strict";

/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "🎉 Correct Number!";

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 20;

console.log(document.querySelector(".guess").value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
// document.querySelector(".number").textContent = secretNumber;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const displayScore = function (score) {
  document.querySelector(".score").textContent = score;
};

const displayNumber = function (number) {
  document.querySelector(".number").textContent = number;
};

const displayNumberWidth = function (width) {
  document.querySelector(".number").style.width = width;
};

const displayBackground = function (color) {
  document.querySelector("body").style.backgroundColor = color;
};
// 如果把函数当成一个值，就可以把它传递给另一个函数
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // when there is no input
  if (!guess) {
    displayMessage("🚩 No Number!");
    // when player wins
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");
    displayBackground("#60b347");
    displayNumber(secretNumber);
    displayNumberWidth("30rem");
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = score;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too High !" : "📉 Too Low !");
      displayScore(--score);
    } else {
      displayMessage("You lost the game !");
      displayScore(0);
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayScore(score);
  document.querySelector(".guess").value = "";
  displayNumber("?");
  displayMessage("Start guessing...");
  displayBackground("#222");
  displayNumberWidth("15rem");
});
