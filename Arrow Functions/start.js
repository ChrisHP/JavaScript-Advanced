const sum = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

// ((2 + 4) * (5 + 2) - 2) / 5
let value=divide(subtract(multiply(sum(2,4),sum(5,2)),2),5);
const log = (value) => console.log(value);
log(value);
