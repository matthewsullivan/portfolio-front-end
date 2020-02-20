import React from 'react';

import AnchorLink from 'react-anchor-link-smooth-scroll';
import PropTypes from 'prop-types';

import './Button.css';

Button.propTypes = {
  external: PropTypes.bool,
  label: PropTypes.string,
  path: PropTypes.string,
};

export default function Button(props) {
  const {external, label, path} = props;

  if (external) {
    return (
      <a
        className="button"
        href={path}
        rel="noopener noreferrer"
        target="_blank"
      >
        {label}
      </a>
    );
  }

  return (
    <AnchorLink className="button" href={`#${path}`} offset="88">
      {label}
    </AnchorLink>
  );
}
