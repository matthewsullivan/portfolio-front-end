import React from 'react';

import {render} from '@testing-library/react';

import Disabled from './Disabled';

test('Renders Disabled', () => {
  const {getByText} = render(<Disabled />);

  const body = getByText(
    'It appears you are on an old browser. For the full viewing experience please update your browser by going to:'
  );

  const title = getByText('Old Browser Detected');
  const link = getByText('Browse Happy');

  expect(title).toBeInTheDocument();
  expect(body).toBeInTheDocument();
  expect(link).toBeInTheDocument();
});

test('Renders Alternative', () => {
  const {getByText} = render(<Disabled />);

  const body = getByText('Feel free to view my CV while you are here:');
  const linkA = getByText('Curriculum Vitae');
  const linkB = getByText('contact@matthewsullivan.media');

  expect(body).toBeInTheDocument();
  expect(linkA).toBeInTheDocument();
  expect(linkB).toBeInTheDocument();
});
