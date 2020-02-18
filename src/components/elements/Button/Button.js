import React from 'react';

import PropTypes from 'prop-types';

import './Button.css';

Button.propTypes = {
  label: PropTypes.string,
  path: PropTypes.string,
};

export default function Button(props) {
  const {label, path} = props;

  return (
    <a className="button" href={`#${path}`}>
      {label}
    </a>
  );
}
