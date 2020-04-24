import React from 'react';

import Button from '../../elements/Button/Button';
import Title from '../../elements/Title/Title';

import './Vitae.css';

const Vitae = () => {
  return (
    <section className="vitae">
      <Title
        body="You've made it this far. Why not check out my curriculum vitae too?"
        title="Curriculum Vitae"
      />

      <div className="vitae__line" />

      <Button
        external
        path="https://www.static.matthewsullivan.media/matthewsullivancv.pdf"
      >
        Curriculum Vitae
      </Button>

      <p className="vitae__body">
        Senior Full Stack Engineer{' '}
        <a
          className="vitae__link"
          href="https://www.thinkific.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          @thinkific
        </a>
      </p>
    </section>
  );
};

export default Vitae;
