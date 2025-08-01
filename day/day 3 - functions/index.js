let input1, input2;

input1 = prompt("Enter value 1:");
input2 = prompt("Enter value 2:");

function addTwo(num1, num2) {
  num1 = parseInt(num1);
  num2 = parseInt(num2);

  return num1 + num2;
}

function subTwo(num1, num2) {
  num1 = parseInt(num1);
  num2 = parseInt(num2);

  return num1 - num2;
}

function multTwo(num1, num2) {
  num1 = parseInt(num1);
  num2 = parseInt(num2);

  return num1 * num2;
}

function divTwo(num1, num2) {
  num1 = parseInt(num1);
  num2 = parseInt(num2);

  return num1 / num2;
}

let result;

result = addTwo(input1, input2);
console.log(result);

result = subTwo(input1, input2);
console.log(result);

result = multTwo(input1, input2);
console.log(result);

result = divTwo(input1, input2);
console.log(result);