import { render, screen } from '@testing-library/react';
import Calculator from './components/Calculator';
import Home from './components/Home';
import RouterNav from './Router';
import calculate from './logic/calculate';
import operate from './logic/operate';

test('Test if RouterNav is well build', () => {
  render(<RouterNav />);
  expect(screen.getByText('Math Magicians')).toBeInTheDocument();
});

test('Test if Calculator is well build', () => {
  render(<Calculator />);
  expect(screen.getByText('Lets do some math!')).toBeInTheDocument();
});

test('Test if Home is well build', () => {
  render(<Home />);
  expect(screen.getByText('Welcome to our main page!')).toBeInTheDocument();
});
