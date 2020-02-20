import React from 'react';

import Button from '../../elements/Button/Button';
import Title from '../../elements/Title/Title';

import './Vitae.css';

export default function Vitae() {
  return (
    <section className="vitae">
      <Title
        body="You've made it this far. Why not check out my curriculum vitae too?"
        title="Curriculum Vitae"
      />

      <div className="vitae__line" />
      <Button
        external
        label="Curriculum Vitae"
        path="assets/cv/MatthewSullivanCV.pdf"
      />
      <p className="vitae__body">
        Avaliable for full time work as well as consultation work.
      </p>
    </section>
  );
}