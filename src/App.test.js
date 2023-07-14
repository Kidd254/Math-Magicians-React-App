import { render, screen } from '@testing-library/react';
import Calculator from './components/Calculator';
import Home from './components/Home';
import RouterNav from './Router';
import calculate from './logic/calculate';
import operate from './logic/operate';

test('Test if RouterNav works perfectly', () => {
  render(<RouterNav />);
  expect(screen.getByText('Math Magicians')).toBeInTheDocument();
});

test('Test if Calculator page shows the expected text', () => {
  render(<Calculator />);
  expect(screen.getByText('Lets do some math!')).toBeInTheDocument();
});

test('Test if Home if home page shows expected page', () => {
  render(<Home />);
  expect(screen.getByText('Welcome to our main page!')).toBeInTheDocument();
});

// tests for calculate.js

describe('Calculate module', () => {
  test('Should return object', () => {
    const obj = {
      total: 1,
      next: 1,
      operation: '+',
    };
    const buttonName = 'AC';
    const result = calculate(obj, buttonName);
    expect(typeof result).toBe('object');
  });

  test('Test calculator and operator sum n1: 6 plus n2: 4', () => {
    const cal = {
      next: '6',
      total: '4',
      operation: '+',
    };
    expect(calculate(cal, '=').total).toBe('10');
  });

  test('remove values from screen', () => {
    const obj = {
      total: 1,
      next: 1,
      operation: '+',
    };
    const buttonName = 'AC';
    const result = calculate(obj, buttonName);
    expect(result).toStrictEqual({ total: null, next: null, operation: null });
  });

  test('Test calculator and operator substraction n1: 6 - n2: 4', () => {
    const cal = {
      next: '4',
      total: '6',
      operation: '-',
    };
    expect(calculate(cal, '=').total).toBe('2');
  });

  test('Test calculator and operator division n1: 6 ÷ n2: 3', () => {
    const cal = {
      next: '3',
      total: '6',
      operation: '÷',
    };
    expect(calculate(cal, '=').total).toBe('2');
  });

  test('Test calculator and operator multiplication n1: 6 x n2: 4', () => {
    const cal = {
      next: '6',
      total: '4',
      operation: 'x',
    };
    expect(calculate(cal, '=').total).toBe('24');
  });

  test('Test calculator and operator module n1: 23 % n2: 5', () => {
    const cal = {
      next: '5',
      total: '23',
      operation: '%',
    };
    expect(calculate(cal, '=').total).toBe('3');
  });
});
// testa for operate .js

describe('Operate module', () => {
  test('Test operate sum n1: 6 plus n2: 4', () => {
    const cal = {
      next: '6',
      total: '4',
      operation: '+',
    };
    expect(operate(cal.next, cal.total, cal.operation)).toBe('10');
  });

  test('Test operate substraction n1: 6 - n2: 4', () => {
    const cal = {
      next: '6',
      total: '4',
      operation: '-',
    };
    expect(operate(cal.next, cal.total, cal.operation)).toBe('2');
  });

  test('Test operate division n1: 6 ÷ n2: 3', () => {
    const cal = {
      next: '6',
      total: '3',
      operation: '÷',
    };
    expect(operate(cal.next, cal.total, cal.operation)).toBe('2');
  });

  test('Test operate multiplication n1: 6 x n2: 4', () => {
    const cal = {
      next: '6',
      total: '4',
      operation: 'x',
    };
    expect(operate(cal.next, cal.total, cal.operation)).toBe('24');
  });

  test('Test calculator and operator module n1: 23 % n2: 5', () => {
    const cal = {
      next: '23',
      total: '5',
      operation: '%',
    };
    expect(operate(cal.next, cal.total, cal.operation)).toBe('3');
  });

  test('Unknown operation throws error', () => {
    const numb1 = 10;
    const numb2 = 2;
    const operation = '/';
    expect(() => operate(numb1, numb2, operation)).toThrowError();
  });
});
