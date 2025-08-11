// 1: Select elements
const buttons = document.querySelectorAll(".btn");
const container = document.querySelector("#container");

// 2: Event Handler
function handleClick(index) {
    // Get innerText value for current button
    const color = buttons[index].innerText;
    // Set background color of div container
    container.style.backgroundColor = color;
}

// 3: ForEach callback
function changeColor(item, index) {
  item.addEventListener("click", () => handleClick(index));
}

// 4: run a foreach loop for every button in buttons
buttons.forEach(changeColor);
