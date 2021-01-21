import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import NavBar from './NavBar';


test('logo can be found in nav', () => {
  const { getByAltText } = render(
    <Router>
      < NavBar />
    </Router>);
  const logo = getByAltText('cosi');
  expect(logo).toBeInTheDocument();
});
