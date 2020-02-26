import React from 'react';

import IosArrowRoundForward from 'react-ionicons/lib/IosArrowRoundForward';

import PropTypes from 'prop-types';

import styled from 'styled-components';

import './Card.css';

const CardAvatar = styled.div`
  background: url(${(props) => props.study.icon}) no-repeat;
  background-color: #fff;
  background-size: cover;
`;

const CardHeader = styled.div`
  background: url(${(props) => props.study.image}) no-repeat;
  background-size: cover;
`;

Card.propTypes = {
  study: PropTypes.object,
};

function Card(props) {
  const {study} = props;

  return (
    <div className="card" data-study={1} key={study.name}>
      <CardHeader className="card__header" study={study} />

      <div className="card__content">
        <CardAvatar className="card__avatar" study={study} />

        <h3 className="card__pre-title">{study.type}</h3>
        <h2 className="card__title">{study.name}</h2>
        <div className="card__line" />
        <p className="card__synopsis">{study.synopsis}</p>
        <p className="card__link">
          View Case Study <IosArrowRoundForward fontSize="24" />
        </p>
      </div>
    </div>
  );
}

export default React.memo(Card);
