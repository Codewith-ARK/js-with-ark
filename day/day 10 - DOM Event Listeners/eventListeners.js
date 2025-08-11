// Step 1: select button
const btn = document.querySelector("#container button#changeColor");

// step 2: add event listener
btn.addEventListener("click", handleClick);

// step 3: add functionality to button.
function handleClick(){
    const paragraph = document.querySelector("#container p");
    paragraph.style.color = "blue";
}