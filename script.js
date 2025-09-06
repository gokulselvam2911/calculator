function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}
function operate(operation, a, b) {
    switch (operation) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);    
    }
}
let currentInput = '';
let operator = null;
let firstOperand = null;
let secondOperand = null;

const display = document.getElementById('display');

document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', () => {
    const number = button.getAttribute('data-number');
    const decimal = button.getAttribute('data-decimal');
    const op = button.getAttribute('data-operator');


    if (number !== null) {
      currentInput += number;
      display.textContent = currentInput;
    }
    if (decimal !== null) {
      if (!currentInput.includes('.')) {
        currentInput += decimal;
        display.textContent = currentInput;
        }
    }
    if (op !== null) {
        if (currentInput === '' && firstOperand === null) {
            return; // Prevent operator input if no number is entered
        }
        if (firstOperand === null) {
            firstOperand = parseFloat(currentInput);
        } else if (currentInput !== '') {
            secondOperand = parseFloat(currentInput);
            firstOperand = operate(operator, firstOperand, secondOperand);
            display.textContent = firstOperand;
        }
        operator = op;
        currentInput = '';
    }
    if (button.id === 'equals') {
        if (firstOperand !== null && operator !== null && currentInput !== '') {
            secondOperand = parseFloat(currentInput);
            const result = operate(operator, firstOperand, secondOperand);
            display.textContent = result;
            currentInput = result.toString();
            firstOperand = null;
            operator = null;        
        }
        return;
    }
    if (button.id === 'clear') {
      currentInput = '';
        operator = null;
        firstOperand = null;
        secondOperand = null;
      display.textContent = '0';
    }
  });
});
