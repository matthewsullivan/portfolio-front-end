import React from 'react';

import {render} from '@testing-library/react';

import Folio from './Folio';

test('Displays Title', () => {
  const {getByText} = render(<Folio />);

  const title = getByText(/Works/i);

  expect(title).toBeInTheDocument();
});

test('Displays Error Message', () => {
  const {getByText} = render(<Folio />);

  const error = getByText(/Until this is fixed, feel free to checkout:/i);

  expect(error).toBeInTheDocument();
});
