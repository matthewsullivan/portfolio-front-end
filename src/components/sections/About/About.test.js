import React from 'react';

import {render} from '@testing-library/react';

import About from './About';

test('Displays Title', () => {
  const {getByText} = render(<About />);

  const title = getByText('About');

  expect(title).toBeInTheDocument();
});

test('Displays Text Content', () => {
  const {getByText} = render(<About />);

  const paragraphA = getByText(/My name is Matthew Sullivan/i);
  const paragraphB = getByText(/Time management plays/i);

  expect(paragraphA).toBeInTheDocument();
  expect(paragraphB).toBeInTheDocument();
});
