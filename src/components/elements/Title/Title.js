import React from 'react';

import PropTypes from 'prop-types';

import './Title.css';

Title.propTypes = {
  body: PropTypes.string,
  chapter: PropTypes.string,
  title: PropTypes.string,
};

export default function Title(props) {
  const {body, chapter, title} = props;

  return (
    <section>
      <p>{chapter}</p>
      <p>{body}</p> <h2>{title}</h2>
    </section>
  );
}
