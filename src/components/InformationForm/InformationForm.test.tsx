import React from 'react';
import { Provider } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';
import InformationForm from './InformationForm';
import store from '../../redux/store'


test('submit button should be disabled when a basic field is empty', () => {
  const { getByPlaceholderText, getByText } = render(
  <Provider store={store}>
    <InformationForm />
  </Provider>);
  const firstNameInput = getByPlaceholderText(/First name/i);
  fireEvent.change(firstNameInput, { 'target': { 'value': '' } });
  const submitBtn = getByText(/Continue/i);
  expect(submitBtn).toHaveAttribute('disabled');
});

test('show error warning when a required field for country is missing', () => {
  const { getByPlaceholderText, getByRole, getByDisplayValue, getByText } = render(
  <Provider store={store}>
    <InformationForm />
  </Provider>);
  const nationalityInput = getByDisplayValue(/Nationality/i)
  fireEvent.change(nationalityInput, { 'target': { 'value': 'France' } });
  const firstNameInput = getByPlaceholderText(/First name/i);
  fireEvent.change(firstNameInput, { 'target': { 'value': 'jojo' } });
  const lastNameInput = getByPlaceholderText(/Last name/i);
  fireEvent.change(lastNameInput, { 'target': { 'value': 'yaya' } });
  const email = getByPlaceholderText(/Email/i);
  fireEvent.change(email, { 'target': { 'value': 'xxy@gmail.com' } });
  const phoneNumber = getByPlaceholderText(/Phone number/i);
  fireEvent.change(phoneNumber, { 'target': { 'value': '8895848' } });
  const passportNumber = getByPlaceholderText(/Passport number/i);
  fireEvent.change(passportNumber, { 'target': { 'value': '8894984' } });
  const countryInput = getByPlaceholderText(/Country/i);
  fireEvent.change(countryInput, { 'target': { 'value': '' } });
  const termsInput = getByRole('checkbox');
  fireEvent.change(termsInput, { 'target': { 'checked': true } });
  const submitBtn = getByText(/Continue/i);
  fireEvent.click(submitBtn)
  expect(submitBtn).toHaveAttribute('disabled');
});
