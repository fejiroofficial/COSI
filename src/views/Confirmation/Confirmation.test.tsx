import React from 'react';
import { render } from '@testing-library/react';
import Confirmation from './Confirmation';


test('logo can be found in nav', () => {
  const { getByText } = render(<Confirmation />);
  const cardTitle = getByText('Your check-in is confirmed');
  expect(cardTitle).toBeInTheDocument();
});
