import React from 'react';
import {render} from '@testing-library/react';
import App from './App';

test('Renders Navigation', () => {
  const {getByText} = render(<App />);

  const navigation = getByText(/about/i);

  expect(navigation).toBeInTheDocument();
});
