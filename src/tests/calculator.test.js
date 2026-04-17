const {
  addition,
  subtraction,
  multiplication,
  division,
  modulo,
  power,
  squareRoot,
} = require('../calculator');

describe('addition', () => {
  test('adds two positive numbers', () => {
    expect(addition(2, 3)).toBe(5);
  });
  test('adds negative numbers', () => {
    expect(addition(-1, -2)).toBe(-3);
  });
  test('adds zero', () => {
    expect(addition(5, 0)).toBe(5);
  });
  test('throws on non-number input', () => {
    expect(() => addition('a', 1)).toThrow(TypeError);
  });
});

describe('subtraction', () => {
  test('subtracts two numbers', () => {
    expect(subtraction(10, 4)).toBe(6);
  });
  test('result can be negative', () => {
    expect(subtraction(3, 7)).toBe(-4);
  });
  test('throws on non-number input', () => {
    expect(() => subtraction(1, null)).toThrow(TypeError);
  });
});

describe('multiplication', () => {
  test('multiplies two numbers', () => {
    expect(multiplication(3, 4)).toBe(12);
  });
  test('multiplies by zero', () => {
    expect(multiplication(5, 0)).toBe(0);
  });
  test('throws on non-number input', () => {
    expect(() => multiplication('b', 2)).toThrow(TypeError);
  });
});

describe('division', () => {
  test('divides two numbers', () => {
    expect(division(10, 2)).toBe(5);
  });
  test('returns fractional result', () => {
    expect(division(7, 2)).toBe(3.5);
  });
  test('throws on division by zero', () => {
    expect(() => division(5, 0)).toThrow('Division by zero is not allowed');
  });
  test('throws on non-number input', () => {
    expect(() => division('c', 3)).toThrow(TypeError);
  });
});

describe('modulo', () => {
  test('returns modulo of two numbers', () => {
    expect(modulo(10, 3)).toBe(1);
  });
  test('modulo with even division returns zero', () => {
    expect(modulo(9, 3)).toBe(0);
  });
  test('modulo with negative dividend', () => {
    expect(modulo(-7, 3)).toBe(-1);
  });
  test('throws on modulo by zero', () => {
    expect(() => modulo(5, 0)).toThrow('Modulo by zero is not allowed');
  });
  test('throws on non-number input', () => {
    expect(() => modulo('d', 2)).toThrow(TypeError);
  });
});

describe('power (exponentiation)', () => {
  test('raises base to an exponent', () => {
    expect(power(2, 10)).toBe(1024);
  });
  test('power of zero exponent returns 1', () => {
    expect(power(5, 0)).toBe(1);
  });
  test('power with exponent 1 returns base', () => {
    expect(power(7, 1)).toBe(7);
  });
  test('power with negative exponent', () => {
    expect(power(2, -1)).toBeCloseTo(0.5);
  });
  test('throws on non-number input', () => {
    expect(() => power('e', 2)).toThrow(TypeError);
  });
});

describe('squareRoot (square root)', () => {
  test('returns square root of a perfect square', () => {
    expect(squareRoot(9)).toBe(3);
  });
  test('returns square root of zero', () => {
    expect(squareRoot(0)).toBe(0);
  });
  test('returns approximate square root', () => {
    expect(squareRoot(2)).toBeCloseTo(1.4142, 4);
  });
  test('throws on negative input', () => {
    expect(() => squareRoot(-4)).toThrow('Cannot compute square root of a negative number');
  });
  test('throws on non-number input', () => {
    expect(() => squareRoot('f')).toThrow(TypeError);
  });
});
