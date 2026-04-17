#!/usr/bin/env node

/**
 * calculator.js - Node.js CLI Calculator
 *
 * Supported operations:
 *   - Addition (+)
 *   - Subtraction (-)
 *   - Multiplication (*)
 *   - Division (/)
 *   - Modulo (%)
 *   - Exponentiation (pow)
 *   - Square root (sqrt)
 *
 * Usage:
 *   node calculator.js <operation> <num1> [<num2>]
 *   Examples:
 *     node calculator.js + 2 3
 *     node calculator.js sqrt 16
 */

const [,, operation, num1, num2] = process.argv;

function printUsage() {
  console.log('Usage: node calculator.js <operation> <num1> [<num2>]');
  console.log('Operations: +  -  *  /  %  pow  sqrt');
}

// Pure functions (exported for testing)
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
    throw new Error('Division by zero is not allowed.');
  }
  return a / b;
}

function modulo(a, b) {
  if (b === 0) {
    throw new Error('Modulo by zero is not allowed.');
  }
  return a % b;
}

function power(base, exponent) {
  return Math.pow(base, exponent);
}

function squareRoot(n) {
  if (n < 0) {
    throw new Error('Cannot take square root of a negative number.');
  }
  return Math.sqrt(n);
}

// CLI: only run when invoked directly
if (require.main === module) {
  if (!operation || !num1) {
    printUsage();
    process.exit(1);
  }

  const a = parseFloat(num1);
  const b = (typeof num2 !== 'undefined') ? parseFloat(num2) : undefined;

  if (isNaN(a) || (['+','-','*','/','%','pow'].includes(operation) && (typeof b === 'undefined' || isNaN(b)))) {
    console.error('Error: Operands must be valid numbers.');
    process.exit(1);
  }

  let result;
  try {
    switch (operation) {
      case '+':
        result = add(a, b);
        break;
      case '-':
        result = subtract(a, b);
        break;
      case '*':
        result = multiply(a, b);
        break;
      case '/':
        result = divide(a, b);
        break;
      case '%':
        result = modulo(a, b);
        break;
      case 'pow':
        result = power(a, b);
        break;
      case 'sqrt':
        result = squareRoot(a);
        break;
      default:
        console.error('Error: Unsupported operation. Use +, -, *, /, %, pow, or sqrt.');
        printUsage();
        process.exit(1);
    }
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(1);
  }

  console.log(`Result: ${result}`);
}

// Export functions for testing
module.exports = {
  add,
  subtract,
  multiply,
  divide,
  modulo,
  power,
  squareRoot
};


