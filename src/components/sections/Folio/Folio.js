import React from 'react';

import Scroller from '../../elements/Scroller/Scroller';
import Title from '../../elements/Title/Title';

import './Folio.css';

/**
 * Get Studies
 * @param {string} element
 * @return {JSX}
 */
const getStudies = (element) => {
  const studies = [
    {
      image: 'assets/portfolio/burgerdex/burgerdex.jpg',
      name: 'Burgerdex',
      type: 'iOS Application',
    },
    {
      image: 'assets/portfolio/easyAisle/easyAisle.jpg',
      name: 'easyAisle',
      type: 'iOS Application',
    },
    {
      image: 'assets/portfolio/gidme/gidme.jpg',
      name: 'Gidme',
      type: 'iOS Application',
    },
    {
      image: 'assets/portfolio/bonterpolaris/bonterpolaris-dark.jpg',
      name: 'Bonter Polaris',
      type: 'Website / CMS',
    },
    {
      image: 'assets/portfolio/freeliveyoga/freelive.jpg',
      name: 'Free Live Yoga',
      type: 'Website / CMS',
    },
    {
      image: 'assets/portfolio/madxscape/madxscape.jpg',
      name: 'Mad Xscape',
      type: 'iOS Application',
    },
    {
      image: 'assets/portfolio/mortgagealliance/mortgagealliance.jpg',
      name: 'Mortgage Alliance',
      type: 'Website',
    },
    {
      image: 'assets/portfolio/stockgaming/stockgaming.jpg',
      name: 'Stock Gaming',
      type: 'Angular Application',
    },
    {
      image: 'assets/portfolio/tracelogix/tracelogix.jpg',
      name: 'Trace Logix',
      type: 'Inventory System CMS',
    },
    {
      image: 'assets/portfolio/villageinn/villageinn.jpg',
      name: 'Village Inn',
      type: 'Website',
    },
  ];

  return studies.map((study, index) => {
    return (
      <div className="item" key={study.name}>
        <img alt="Portfolio Clip" className="item__image" src={study.image} />

        <div className="item__content">
          <h2 className="item__chapter">{`0${index + 1}`}</h2>
          <h2 className="item__title">{study.name}</h2>
          <h3 className="item__subheading">{study.type}</h3>
        </div>
      </div>
    );
  });
};

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
          <div className="preview__container">{getStudies()}</div>
        </Scroller>
      </div>
    </section>
  );
});
