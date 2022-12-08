import React from 'react';

import {render, screen} from '@testing-library/react';

import Button from './Button';

describe('<Button />', () => {
  describe('render', () => {
    it('renders a button', () => {
      render(<Button type="button">Submit</Button>);
      expect(screen.getByText('Submit')).toBeInTheDocument();
    });
  });

  describe('when external prop is passed', () => {
    it('renders a hypertext link', () => {
      render(<Button external>Curriculum Vitae</Button>);
      expect(screen.getByText('Curriculum Vitae')).toBeInTheDocument();
    });
  });

  describe('when path prop with no type prop is passed', () => {
    it('renders an anchor link', () => {
      render(<Button path="folio">Portolio</Button>);
      expect(screen.getByText('Portolio')).toBeInTheDocument();
    });
  });
});
