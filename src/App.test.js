import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Calendar Communication Tracking header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Calendar Communication Tracking/i);
  expect(headerElement).toBeInTheDocument();
});
