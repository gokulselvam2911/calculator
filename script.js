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

console.log("5 + 3 =", operate('+', 5, 3)); 
console.log("10 - 4 =", operate('-', 10, 4));
console.log("6 * 7 =", operate('*', 6, 7));
console.log("20 / 5 =", operate('/', 20, 5)); 