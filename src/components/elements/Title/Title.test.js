import React from 'react';

import {render} from '@testing-library/react';

import Title from './Title';

test('Renders Title', () => {
  const {getByText} = render(
    <Title body="Hello, World." chapter="01" title="Greeting" />
  );

  const body = getByText('Hello, World.');
  const chapter = getByText('01');
  const title = getByText('Greeting');

  expect(title).toBeInTheDocument();
  expect(chapter).toBeInTheDocument();
  expect(body).toBeInTheDocument();
});
