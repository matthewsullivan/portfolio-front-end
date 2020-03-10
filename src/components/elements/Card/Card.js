import React from 'react';

import PropTypes from 'prop-types';
import IosArrowRoundForward from 'react-ionicons/lib/IosArrowRoundForward';
import LazyLoad from 'react-lazyload';
import styled from 'styled-components';

import './Card.css';

const CardAvatar = styled.div`
  background: url(${(props) => props.study.icon}) no-repeat;
  background-color: #fff;
  background-size: cover;
`;

const CardHeader = styled.div`
  background: url(${(props) => props.study.image}) no-repeat;
  background-color: #070a21;
  background-size: cover;
`;

const Card = (props) => {
  const {study} = props;

  return (
    <div className="card" data-study={1} key={study.name}>
      <LazyLoad offset={184} once>
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
      </LazyLoad>
    </div>
  );
};

Card.propTypes = {
  study: PropTypes.object,
};

export default React.memo(Card);
