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
}

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
    num1 = add(number1, number2);
    // updateDisplay(num1);
    // input = "";
  }
  if (operator === "-") {
    num1 = subtract(number1, number2);
    // updateDisplay(num1);
    // input = "";
  }
  if (operator === "*") {
    num1 = multiply(number1, number2);
    // updateDisplay(num1);
    // input = "";
  }
  if (operator === "/") {
    num1 = divide(number1, number2);
    // updateDisplay(num1);
    // input = "";
  }
};

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains(".num")) {
      appendNumber(btn.value);
    }
    updateDisplay();
  })
})

// numBtns.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     input += btn.value;
//     updateDisplay(input);
//   });
// });

// If equal, calc num1, num2 with stored operator

// If operator pressed, store input as num1
// 


operatorBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.value === "=") {
      num2 = input;
      // operate(num1, num2 === "" ? "0" : num2)
      operate(num1, num2);
      updateDisplay(num1);
      input = "";
    } else {
      if (num1 === "") {
        num1 = input
        input = "";
      } else {
        num2 = input;
        operate(num1, num2);
        updateDisplay(num1);
        input = "";
      }
      operator = btn.value;
    }
  });
});

const updateDisplay = () => {
  display.textContent = currentNumber || "0";
};

// init();