const display = document.querySelector(".display");
const numBtns = document.querySelectorAll(".num");
const operatorBtns = document.querySelectorAll(".operator");

let num1;
let num2;
let operator;



const add = (a, b) => {
    return a + b;
}

const subtract = (a, b) => {
    return a - b;
}

const multiply = (a, b) => {
    return a * b;
}

const divide = (a, b) => {
    return a / b;
}

const operate = (operator, num1, num2) => {
    if (operator === "+") { return add(num1, num2) }
    if (operator === "-") { return subtract(num1, num2) }
    if (operator === "*") { return multiply(num1, num2) }
    if (operator === "/") { return divide(num1, num2) }

}

