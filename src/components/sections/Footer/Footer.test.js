import React from 'react';

import {render} from '@testing-library/react';

import Footer from './Footer';

test('Displays Formatted Copyright Notice', () => {
  const {getByText} = render(<Footer />);

  const date = new Date();

  const copy = getByText(
    `COPYRIGHT © ${date.getFullYear()} Matthew Sullivan Media`
  );

  expect(copy).toBeInTheDocument();
});
