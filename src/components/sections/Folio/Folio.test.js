import React from 'react';

import {act, render} from '@testing-library/react';

import Folio from './Folio';

test('Displays Title', async () => {
  await act(async () => {
    const {getByText} = render(<Folio />);

    const title = getByText('Works');

    expect(title).toBeInTheDocument();
  });
});

test('Displays Error Message', async () => {
  await act(async () => {
    const {getByText} = render(<Folio />);

    const error = getByText(/Until this is fixed, feel free to checkout:/i);

    expect(error).toBeInTheDocument();
  });
});
