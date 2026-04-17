/**
 * Calculator - Supports the following operations:
 * - addition
 * - subtraction
 * - multiplication
 * - division
 * - modulo
 * - exponentiation (power)
 * - square root
 */

/**
 * Adds two numbers together (addition).
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function addition(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Both arguments must be numbers');
  }
  return a + b;
}

/**
 * Subtracts b from a (subtraction).
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function subtraction(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Both arguments must be numbers');
  }
  return a - b;
}

/**
 * Multiplies two numbers (multiplication).
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function multiplication(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Both arguments must be numbers');
  }
  return a * b;
}

/**
 * Divides a by b (division).
 * @param {number} a
 * @param {number} b
 * @returns {number}
 * @throws {Error} If b is zero
 */
function division(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Both arguments must be numbers');
  }
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return a / b;
}

/**
 * Returns the remainder of dividing a by b (modulo).
 * @param {number} a
 * @param {number} b
 * @returns {number}
 * @throws {Error} If b is zero
 */
function modulo(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Both arguments must be numbers');
  }
  if (b === 0) {
    throw new Error('Modulo by zero is not allowed');
  }
  return a % b;
}

/**
 * Raises base to the given exponent (exponentiation / power).
 * @param {number} base
 * @param {number} exponent
 * @returns {number}
 */
function power(base, exponent) {
  if (typeof base !== 'number' || typeof exponent !== 'number') {
    throw new TypeError('Both arguments must be numbers');
  }
  return Math.pow(base, exponent);
}

/**
 * Returns the square root of a number.
 * @param {number} n
 * @returns {number}
 * @throws {Error} If n is negative
 */
function squareRoot(n) {
  if (typeof n !== 'number') {
    throw new TypeError('Argument must be a number');
  }
  if (n < 0) {
    throw new Error('Cannot compute square root of a negative number');
  }
  return Math.sqrt(n);
}

module.exports = {
  addition,
  subtraction,
  multiplication,
  division,
  modulo,
  power,
  squareRoot,
};
