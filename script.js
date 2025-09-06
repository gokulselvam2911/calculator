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
    display.textContent = 'Nope 😅';
    return 0;
  }
  return a / b;
}
function operate(operation, a, b) {
  switch (operation) {
    case '+': return add(a, b);
    case '-': return subtract(a, b);
    case '*': return multiply(a, b);
    case '/': return divide(a, b);
  }
}

let currentInput = '';
let operator = null;
let firstOperand = null;

const display = document.getElementById('display');
const expressionDisplay = document.getElementById('expression');

function updateExpression() {
  expressionDisplay.textContent =
    (firstOperand !== null ? firstOperand : '') +
    (operator ? ' ' + operator + ' ' : '') +
    currentInput;
}

function handleNumber(num) {
  currentInput += num;
  display.textContent = currentInput;
  updateExpression();
}

function handleDecimal() {
  if (!currentInput.includes('.')) {
    currentInput += '.';
    display.textContent = currentInput;
    updateExpression();
  }
}

function handleOperator(op) {
  if (currentInput === '' && firstOperand === null) return;
  if (firstOperand === null) {
    firstOperand = parseFloat(currentInput);
  } else if (currentInput !== '') {
    const secondOperand = parseFloat(currentInput);
    firstOperand = operate(operator, firstOperand, secondOperand);
    display.textContent = firstOperand;
  }
  operator = op;
  currentInput = '';
  updateExpression();
}

function handleEquals() {
  if (firstOperand === null || operator === null || currentInput === '') return;
  const secondOperand = parseFloat(currentInput);
  const result = operate(operator, firstOperand, secondOperand);
  display.textContent = result;
  currentInput = result.toString();
  firstOperand = null;
  operator = null;
  updateExpression();
}

function handleClear() {
  currentInput = '';
  operator = null;
  firstOperand = null;
  display.textContent = '0';
  expressionDisplay.textContent = '';
}

function handleBackspace() {
  currentInput = currentInput.slice(0, -1);
  display.textContent = currentInput || '0';
  updateExpression();
}

// Button clicks
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', () => {
    const number = button.getAttribute('data-number');
    const decimal = button.getAttribute('data-decimal');
    const op = button.getAttribute('data-operator');

    if (number !== null) handleNumber(number);
    if (decimal !== null) handleDecimal();
    if (op !== null) handleOperator(op);
    if (button.id === 'equals') handleEquals();
    if (button.id === 'clear') handleClear();
    if (button.id === 'backspace') handleBackspace();
  });
});

// Keyboard support
document.addEventListener('keydown', (e) => {
  if (!isNaN(e.key)) handleNumber(e.key);
  if (e.key === '.') handleDecimal();
  if (['+', '-', '*', '/'].includes(e.key)) handleOperator(e.key);
  if (e.key === 'Enter' || e.key === '=') handleEquals();
  if (e.key === 'Backspace') handleBackspace();
  if (e.key.toLowerCase() === 'c') handleClear();
});

// Theme toggle
const toggle = document.getElementById('theme-toggle');
  toggle.addEventListener('change', () => {
    document.body.classList.toggle('dark', toggle.checked);
  });