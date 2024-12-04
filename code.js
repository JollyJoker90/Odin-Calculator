const display = document.querySelector(".display");
// const numBtns = document.querySelectorAll(".num");
// const operatorBtns = document.querySelectorAll(".operator");
const btns = document.querySelectorAll("button");

let previousNumber = "";
let currentNumber = "";
let operator = null;

const appendNumber = (number) => {
  currentNumber += number;
};

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("num")) {
      appendNumber(btn.value);
    } else if (btn.classList.contains("operator")) {
      chooseOperator(btn.value);
    } else if (btn.classList.contains("equal")) {
      calculate();
    } else if (btn.classList.contains("clear")) {
      clear();
    }
    updateDisplay();
  });
});

const chooseOperator = (operation) => {
  if (currentNumber === "") return;
  if (previousNumber !== "") {
    calculate();
  }
  operator = operation;
  previousNumber = currentNumber;
  currentNumber = "";
};

const calculate = () => {
  if (currentNumber === "") return;
  let prev = parseInt(previousNumber);
  let current = parseInt(currentNumber);
  let result;

  switch (operator) {
    case "+":
      result = prev + current;
      break;
    case "-":
      result = prev - current;
      break;
    case "*":
      result = prev * current;
      break;
    case "/":
      result = current === 0 ? "ERROR" : prev / current;
      break;
    default:
      break;
  }
  currentNumber = result.toString();
  operator = null;
  previousNumber = "";
};

const clear = () => {
  currentNumber = "";
  previousNumber = "";
  operator = null;
};

const updateDisplay = () => {
  display.textContent = currentNumber || "0";
};
