import { render, screen } from '@testing-library/react';
import App from './App';

test('renders group number and team members', () => {
  render(<App />);

  expect(screen.getByText(/Group 5/i)).toBeInTheDocument();
  expect(screen.getByText(/Dylan Retana Porras/i)).toBeInTheDocument();
  expect(screen.getByText(/Cel Jun Lato/i)).toBeInTheDocument();
});