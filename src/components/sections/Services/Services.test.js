import React from 'react';

import {render} from '@testing-library/react';

import Services from './Services';

test('Displays Title', () => {
  const {getAllByText} = render(<Services />);

  const title = getAllByText('Services');
  const subtitle = getAllByText('Full Stack in more ways than one.');

  expect(title[0]).toBeInTheDocument();
  expect(subtitle[0]).toBeInTheDocument();
});

test('Displays Service A', () => {
  const {getAllByText} = render(<Services />);

  const body = getAllByText(
    'Providing elegant, maintainable, and simple solutions to complex problems. From native applications to web development, I bring many years of experience to the table. There has not been a problem I could not solve.'
  );

  const title = getAllByText('Development');

  expect(title[0]).toBeInTheDocument();
  expect(body[0]).toBeInTheDocument();
});

test('Displays Service B', () => {
  const {getAllByText} = render(<Services />);

  const body = getAllByText(
    'A passionate leader and instructor who actively engages and instills a healthy environment. I am able to receive and give constructive criticism to produce highly efficient development teams.'
  );

  const title = getAllByText('Team Lead');

  expect(title[0]).toBeInTheDocument();
  expect(body[0]).toBeInTheDocument();
});

test('Displays Service C', () => {
  const {getAllByText} = render(<Services />);

  const body = getAllByText(
    'The Adobe Suite? No problem. I can create anything from simple, effective logos, all the way to complete application design. With unparalleled attention to detail, I can produce highly effective interfaces.'
  );

  const title = getAllByText('UX Design');

  expect(title[0]).toBeInTheDocument();
  expect(body[0]).toBeInTheDocument();
});

test('Displays Service D', () => {
  const {getAllByText} = render(<Services />);

  const body = getAllByText(
    'I am available to aid in the process of UI/UX design as well as help design the architecture of new or old platforms. High standards in code maintainability and cleanliness are a must.'
  );

  const title = getAllByText('Consultation');

  expect(title[0]).toBeInTheDocument();
  expect(body[0]).toBeInTheDocument();
});
