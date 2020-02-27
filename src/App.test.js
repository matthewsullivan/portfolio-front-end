import React from 'react';
import {render} from '@testing-library/react';
import App from './App';

test('Renders Drawer', () => {
  const {getAllByText} = render(<App />);

  const navigation = getAllByText(/about/i);

  expect(navigation[0]).toBeInTheDocument();
});
