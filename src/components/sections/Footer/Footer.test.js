import React from 'react';

import {render} from '@testing-library/react';

import Footer from './Footer';

test('Displays Formatted Copyright Notice', () => {
  const {getByText} = render(<Footer />);

  const copy = getByText('COPYRIGHT © 2020 Matthew Sullivan Media');

  expect(copy).toBeInTheDocument();
});
