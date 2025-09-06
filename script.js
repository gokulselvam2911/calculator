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

const display = document.getElementById('display');

document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', () => {
    const number = button.getAttribute('data-number');
    const decimal = button.getAttribute('data-decimal');
    const operator = button.getAttribute('data-operator');

    if (number !== null) {
      currentInput += number;
      display.textContent = currentInput;
    }
    if (decimal !== null) {
      currentInput += decimal;
      display.textContent = currentInput;
    }
    if (operator !== null) {
      currentInput += ` ${operator} `;
      display.textContent = currentInput;
    }
    if (button.id === 'clear') {
      currentInput = '';
      display.textContent = '0';
    }
  });
});
