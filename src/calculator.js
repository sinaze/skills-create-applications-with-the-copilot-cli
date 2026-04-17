#!/usr/bin/env node

/**
 * calculator.js - Node.js CLI Calculator
 *
 * Supported operations:
 *   - Addition (+)
 *   - Subtraction (-)
 *   - Multiplication (*)
 *   - Division (/)
 *
 * Usage:
 *   node calculator.js <operation> <num1> <num2>
 *   Example: node calculator.js + 2 3
 */

const [,, operation, num1, num2] = process.argv;

function printUsage() {
  console.log('Usage: node calculator.js <operation> <num1> <num2>');
  console.log('Operations: +  -  *  /');
}

if (!operation || !num1 || !num2) {
  printUsage();
  process.exit(1);
}

const a = parseFloat(num1);
const b = parseFloat(num2);

if (isNaN(a) || isNaN(b)) {
  console.error('Error: Both operands must be valid numbers.');
  process.exit(1);
}

let result;
switch (operation) {
  case '+':
    result = a + b;
    break;
  case '-':
    result = a - b;
    break;
  case '*':
    result = a * b;
    break;
  case '/':
    if (b === 0) {
      console.error('Error: Division by zero is not allowed.');
      process.exit(1);
    }
    result = a / b;
    break;
  default:
    console.error('Error: Unsupported operation. Use +, -, *, or /.');
    printUsage();
    process.exit(1);
}

console.log(`Result: ${result}`);
