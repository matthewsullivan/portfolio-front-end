import React from 'react';

import {render} from '@testing-library/react';

import Gem from './Gem';

test('Renders Gem', () => {
  const {getByText} = render(<Gem label="Test">Hello, World.</Gem>);

  const body = getByText('Hello, World.');
  const label = getByText('Test');

  expect(label).toBeInTheDocument();
  expect(body).toBeInTheDocument();
});
