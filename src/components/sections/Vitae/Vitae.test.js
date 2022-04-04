import React from 'react';

import {render} from '@testing-library/react';

import Vitae from './Vitae';

test('Displays Title', () => {
  const {getAllByText} = render(<Vitae />);

  const title = getAllByText('Curriculum Vitae');

  expect(title[0]).toBeInTheDocument();
});

test('Displays Content', () => {
  const {getAllByText} = render(<Vitae />);

  const body = getAllByText('Engineering Manager');

  const button = getAllByText('Curriculum Vitae');
  const subtitle = getAllByText(
    "You've made it this far. Why not check out my curriculum vitae too?"
  );

  expect(subtitle[0]).toBeInTheDocument();
  expect(button[0]).toBeInTheDocument();
  expect(body[0]).toBeInTheDocument();
});
