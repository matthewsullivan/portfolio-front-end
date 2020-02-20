import React from 'react';

import Scroller from '../../elements/Scroller/Scroller';
import Title from '../../elements/Title/Title';

import './Folio.css';

export default function Folio() {
  return (
    <section className="folio">
      <Title
        body="Hand picked projects and case studies."
        chapter="03"
        title="Works"
      />
      <div className="preview">
        <Scroller>
          <div className="preview__container">
            <div className="preview__item"></div>
            <div className="preview__item"></div>
            <div className="preview__item"></div>
            <div className="preview__item"></div>
            <div className="preview__item"></div>
          </div>
        </Scroller>
      </div>
    </section>
  );
}
