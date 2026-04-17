// calculator.test.js - Jest unit tests for calculator functions

const { add, subtract, multiply, divide } = require('../calculator.functions');

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
