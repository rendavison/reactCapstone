import { render, screen } from '@testing-library/react';
import App from './App';
import Booking, { initializeTimes, updateTimes, fetchAPI } from './components/Booking';
import RezFormFormik from './components/RezFormFormik';

test.skip('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('Renders the Reservation Form heading', () => {
  render(<Booking />);
  const headingElement = screen.getByText("Little Lemon Reservation Policies");
  expect(headingElement).toBeInTheDocument();
})

test('initializeTimes returns an array of time strings', () => {
  window.fetchAPI = jest.fn();
  expect(initializeTimes()).length > 0;
})