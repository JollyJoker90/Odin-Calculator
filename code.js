const display = document.querySelector(".display");
const numBtns = document.querySelectorAll(".num");
const operatorBtns = document.querySelectorAll(".operator");
const btns = document.querySelectorAll("button");

let previousNumber = "";
let currentNumber = "";
// let input;
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
      // operator = btn.value;
      // calculate();
    } else if (btn.classList.contains("equal")) {
      calculate();
    }
    updateDisplay();
  });
});

const chooseOperator = (operation) => {
  // if (currentNumber === "") return;
  operator = operation;
  previousNumber = currentNumber;
  currentNumber = "";
};

const calculate = () => {
  let prev = parseInt(previousNumber);
  let current = parseInt(currentNumber);
  let result;

  switch (operator) {
    case "+":
      result = (num1 + num2).toString();
      break;

    default:
      break;
  }
};

// numBtns.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     input += btn.value;
//     updateDisplay(input);
//   });
// });

// If equal, calc num1, num2 with stored operator

// If operator pressed, store input as num1
//

// operatorBtns.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     if (btn.value === "=") {
//       num2 = input;
//       // operate(num1, num2 === "" ? "0" : num2)
//       operate(num1, num2);
//       updateDisplay(num1);
//       input = "";
//     } else {
//       if (num1 === "") {
//         num1 = input
//         input = "";
//       } else {
//         num2 = input;
//         operate(num1, num2);
//         updateDisplay(num1);
//         input = "";
//       }
//       operator = btn.value;
//     }
//   });
// });

const updateDisplay = () => {
  display.textContent = currentNumber || "0";
};

// init();
