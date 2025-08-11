// let text = "My car is ";

// let car = ["BMW", "Audi", "Mercedes"];

// for (let i = 0; i < car.length; i++) {
//     console.log(car[i])
// }

let number = 10;
let guess = parseInt(prompt("Enter a number"));

while(guess != number) {
    guess = prompt("WRONG! Enter another number");
}

console.log("Yay!!!");