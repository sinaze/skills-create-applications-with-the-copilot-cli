// calculator.test.js - Jest unit tests for calculator functions

const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('../calculator');

describe('Calculator Basic Operations', () => {
  test('adds 2 + 3 to equal 5', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('subtracts 10 - 4 to equal 6', () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test('multiplies 45 * 2 to equal 90', () => {
    expect(multiply(45, 2)).toBe(90);
  });

  test('divides 20 / 5 to equal 4', () => {
    expect(divide(20, 5)).toBe(4);
  });

  test('division by zero throws error', () => {
    expect(() => divide(10, 0)).toThrow('Division by zero is not allowed.');
  });

  test('addition with negative numbers', () => {
    expect(add(-2, -3)).toBe(-5);
  });

  test('subtraction resulting in negative', () => {
    expect(subtract(3, 5)).toBe(-2);
  });

  test('multiplication by zero', () => {
    expect(multiply(0, 100)).toBe(0);
  });

  test('division resulting in decimal', () => {
    expect(divide(7, 2)).toBeCloseTo(3.5);
  });
});

// Extended operations inspired by images/calc-extended-operations.png
describe('Calculator Extended Operations', () => {
  test('modulo with 5 % 2 to equal 1', () => {
    expect(modulo(5, 2)).toBe(1);
  });

  test('modulo by zero throws error', () => {
    expect(() => modulo(5, 0)).toThrow('Modulo by zero is not allowed.');
  });

  test('power with 2 ^ 3 to equal 8', () => {
    expect(power(2, 3)).toBe(8);
  });

  test('power with negative exponent', () => {
    expect(power(2, -2)).toBeCloseTo(0.25);
  });

  test('square root with √16 to equal 4', () => {
    expect(squareRoot(16)).toBe(4);
  });

  test('square root of zero', () => {
    expect(squareRoot(0)).toBe(0);
  });

  test('square root of negative throws error', () => {
    expect(() => squareRoot(-9)).toThrow('Cannot take square root of a negative number.');
  });
});

