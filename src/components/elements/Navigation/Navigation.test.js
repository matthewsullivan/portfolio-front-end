import React from 'react';

import {render} from '@testing-library/react';

import Navigation from './Navigation';

test('Renders Navigation', () => {
  const {getAllByText} = render(<Navigation />);

  const linkA = getAllByText('about');
  const linkB = getAllByText('services');
  const linkC = getAllByText('folio');
  const linkD = getAllByText('contact');

  expect(linkA[0]).toBeInTheDocument();
  expect(linkB[0]).toBeInTheDocument();
  expect(linkC[0]).toBeInTheDocument();
  expect(linkD[0]).toBeInTheDocument();
});
