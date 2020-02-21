import React from 'react';

import Scroller from '../../elements/Scroller/Scroller';
import Title from '../../elements/Title/Title';

import './Folio.css';

export default React.forwardRef(function Folio(props, ref) {
  return (
    <section className="folio">
      <Title
        body="Hand picked projects and case studies."
        className="title"
        chapter="03"
        title="Works"
      />

      <div className="preview" ref={ref}>
        <Scroller>
          <div className="preview__container">
            <div className="preview__item">
              <h2 className="preview__chapter">01</h2>
              <h2 className="preview__title">First Case Study Title</h2>
            </div>
            <div className="preview__item">
              <h2 className="preview__chapter">02</h2>
              <h2 className="preview__title">Second Case Study Title</h2>
            </div>
            <div className="preview__item"></div>
            <div className="preview__item"></div>
            <div className="preview__item"></div>
          </div>
        </Scroller>
      </div>
    </section>
  );
});
