import React from 'react';

import {render} from '@testing-library/react';

import Contact from './Contact';

test('Displays Title', () => {
  const {getByText} = render(<Contact />);

  const title = getByText('Contact');

  expect(title).toBeInTheDocument();
});
