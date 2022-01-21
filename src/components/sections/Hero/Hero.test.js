import React from 'react';

import {render} from '@testing-library/react';

import Hero from './Hero';

test('Displays Carousel Slide A Content', () => {
  const {getAllByText} = render(<Hero />);

  const body = getAllByText(
    'Not only building and consulting, but instructing and leading engineers.'
  );

  const button = getAllByText('Curriculum Vitae');
  const title = getAllByText('Engineer Manager');

  expect(title[0]).toBeInTheDocument();
  expect(body[0]).toBeInTheDocument();
  expect(button[0]).toBeInTheDocument();
});

test('Displays Carousel Slide B Content', () => {
  const {getAllByText} = render(<Hero />);

  const body = getAllByText(
    'More than just an Engineer. I am a well rounded Media Specialist who has a keen interest in leadership.'
  );

  const button = getAllByText('Portfolio');
  const title = getAllByText('Software Engineer');

  expect(title[0]).toBeInTheDocument();
  expect(body[0]).toBeInTheDocument();
  expect(button[0]).toBeInTheDocument();
});
