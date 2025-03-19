import { fireEvent, render, screen } from '@testing-library/react';
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

test('updateTimes shows the correct time array for the date', () => {
  window.fetchAPI = jest.fn();
  expect(updateTimes("2025-03-17")).toEqual(["17:00", "17:30", "18:00", "18:30", "22:00", "22:30", "23:30"])
})

test('submit form if only required fields are filled in', () => {
  const handleSubmit = jest.fn();
  const firstName = "John";
  const lastName = "Doe";
  const email = "johndoe@gmail.com";
  const tel = "2134567890";
  const allergies = "yes";

  render(<Booking handleSubmit={handleSubmit}/>);

  const firstNameLabel = screen.getByLabelText(/First Name/);
  fireEvent.change(firstNameLabel, { target: { value: firstName } });

  const lastNameLabel = screen.getByLabelText(/Last Name/);
  fireEvent.change(lastNameLabel, { target: { value: lastName } });

  const emailLabel = screen.getByLabelText(/Email/);
  fireEvent.change(emailLabel, { target: { value: email } });

  const telLabel = screen.getByLabelText(/Phone Number/);
  fireEvent.change(telLabel, { target: { value: tel } });

  const allergiesLabel = screen.getByLabelText(/MY PARTY HAS FOOD ALLERGIES OR DIETARY RESTRICTIONS/);
  fireEvent.change(allergiesLabel, { target: { value: allergies } });


  expect(submitForm).toHaveBeenCalledWith({
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@gmail.com',
    tel: '2134567890',
    occasion: '',
    allergies: 'yes',
    allergyList: '',
  });
})