import React from 'react';

import {render} from '@testing-library/react';

import Button from './Button';

test('Renders as Button', () => {
  const {getByText} = render(<Button type="submit">Submit</Button>);

  const button = getByText('Submit');

  expect(button).toBeInTheDocument();
});

test('Renders as Link', () => {
  const {getByText} = render(<Button path="folio">Portfolio</Button>);

  const link = getByText('Portfolio');

  expect(link).toBeInTheDocument();
});
