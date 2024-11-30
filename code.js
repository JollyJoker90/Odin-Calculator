const display = document.querySelector(".display");
const numBtns = document.querySelectorAll(".num");
const operatorBtns = document.querySelectorAll(".operator");

let num1 = "0";
let num2 = "";
let operator = "";

const add = (a, b) => {
  return (parseInt(a) + parseInt(b)).toString();
};

const subtract = (a, b) => {
  return (parseInt(a) - parseInt(b)).toString();
};

const multiply = (a, b) => {
  return (parseInt(a) * parseInt(b)).toString();
};

const divide = (a, b) => {
  return (parseInt(a) / parseInt(b)).toString();
};

const operate = (number1, number2) => {
  if (operator === "+") {
    return add(number1, number2);
  }
  if (operator === "-") {
    return subtract(number1, number2);
  }
  if (operator === "*") {
    return multiply(number1, number2);
  }
  if (operator === "/") {
    return divide(number1, number2);
  }
};

numBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    num2 += btn.value;
    updateDisplay(num2);
  });
});

operatorBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    operator = btn.value;
  });
});

const updateDisplay = (str) => {
  display.textContent = str;
};
