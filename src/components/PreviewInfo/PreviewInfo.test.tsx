import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import PreviewInfo from './PreviewInfo';
import store from '../../redux/store'


test('logo can be found in nav', () => {
  const { getByText } = render(
    <Provider store={store}>
      <PreviewInfo />
    </Provider>);
  const header = getByText('Please review your information');
  expect(header).toBeInTheDocument();
});
