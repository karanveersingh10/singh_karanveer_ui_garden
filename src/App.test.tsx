import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the UI component library heading', () => {
  render(<App />);
  expect(
    screen.getByText(/my ui component library/i)
  ).toBeInTheDocument();
});

test('renders the assignment description', () => {
  render(<App />);
  expect(
    screen.getByText(/assignment 12: react and storybook/i)
  ).toBeInTheDocument();
});