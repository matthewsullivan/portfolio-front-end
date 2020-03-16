import React from 'react';

import {render} from '@testing-library/react';

import Reel from './Reel';

test('Displays Title', () => {
  const {getByText} = render(<Reel />);

  const title = getByText('Demo Reel');

  expect(title).toBeInTheDocument();
});
