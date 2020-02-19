import React from 'react';

import AnchorLink from 'react-anchor-link-smooth-scroll';
import PropTypes from 'prop-types';

import './Button.css';

Button.propTypes = {
  label: PropTypes.string,
  path: PropTypes.string,
};

export default function Button(props) {
  const {label, path} = props;

  return (
    <AnchorLink className="button" href={`#${path}`}>
      {label}
    </AnchorLink>
  );
}
