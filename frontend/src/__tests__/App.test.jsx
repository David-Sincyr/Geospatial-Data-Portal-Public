import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

test('App has exactly one header', () => {
  const { container } = render(<App />);
  expect(container.getElementsByClassName('header').length).toBe(1);
});

test('App has exactly one navbar', () => {
  const { container } = render(<App />);
  expect(container.getElementsByClassName('navbar').length).toBe(1);
});

test('App has exactly one footer', () => {
  const { container } = render(<App />);
  expect(container.getElementsByClassName('footer').length).toBe(1);
});
