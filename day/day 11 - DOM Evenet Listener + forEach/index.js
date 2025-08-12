 const redBtn = document.querySelector("#turnRedBtn");
const greenBtn = document.querySelector("#turnGreenBtn");
const blueBtn = document.querySelector("#turnBlueBtn");

const boxes = document.querySelectorAll("body div");

function turnRed() {
  boxes.forEach((item) => item.style.backgroundColor = "red");
}

function turnBlue() {
  boxes.forEach((item) => item.style.backgroundColor = "blue");
}

function turnGreen() {
  boxes.forEach((item) => (item.style.backgroundColor = "green"));
}

redBtn.addEventListener("click", turnRed);
greenBtn.addEventListener("click", turnGreen);
blueBtn.addEventListener("click", turnBlue);
