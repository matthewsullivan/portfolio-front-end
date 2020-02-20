import React from 'react';

import Button from '../../elements/Button/Button';
import Title from '../../elements/Title/Title';

import './Folio.css';

export default function Folio() {
  return (
    <section className="vitae">
      <Title
        body="Hand picked projects and case studies."
        chapter="03"
        title="Works"
      />

      <div className="vitae__line" />
      <Button external path="assets/cv/MatthewSullivanCV.pdf">
        Curriculum Vitae
      </Button>
      <p className="vitae__body">
        Avaliable for full time work as well as consultation work.
      </p>
    </section>
  );
}
