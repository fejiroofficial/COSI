import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import WelcomeForm from './WelcomeForm';


test('submit button should be disabled when Name is empty', () => {
  const { getByPlaceholderText, getByText } = render(<WelcomeForm />);
  const lastNameInput = getByPlaceholderText(/Last name/i);
  fireEvent.change(lastNameInput, { 'target': { 'value': '' } });
  const submitBtn = getByText(/Search Flight/i);
  expect(submitBtn).toHaveAttribute('disabled');
});

test('submit button should be disabled when flight number is empty', () => {
  const { getByPlaceholderText, getByText } = render(<WelcomeForm />);
  const flightNumberInput = getByPlaceholderText(/Flight number/i);
  fireEvent.change(flightNumberInput, { 'target': { 'value': '' } });
  const submitBtn = getByText(/Search Flight/i);
  expect(submitBtn).toHaveAttribute('disabled');
});

test('submit button should be disabled when flight number is not four digits long', () => {
  const { getByPlaceholderText, getByText } = render(<WelcomeForm />);
  const lastNameInput = getByPlaceholderText(/Last name/i);
  fireEvent.change(lastNameInput, { 'target': { 'value': 'Lilly' } });
  const flightNumberInput = getByPlaceholderText(/Flight number/i);
  fireEvent.change(flightNumberInput, { 'target': { 'value': '99999' } });
  const submitBtn = getByText(/Search Flight/i);
  expect(submitBtn).toHaveAttribute('disabled');
});
