import React from 'react';

import AnchorLink from 'react-anchor-link-smooth-scroll';
import PropTypes from 'prop-types';

import './Button.css';

Button.propTypes = {
  children: PropTypes.string,
  external: PropTypes.bool,
  path: PropTypes.string,
  type: PropTypes.string,
};

export default function Button(props) {
  const {children, external, path, type} = props;

  if (type) {
    return (
      <button className="button" type={type}>
        {children}
      </button>
    );
  }

  if (external) {
    return (
      <a
        className="button"
        href={path}
        rel="noopener noreferrer"
        target="_blank"
      >
        {children}
      </a>
    );
  }

  return (
    <AnchorLink className="button" href={`#${path}`}>
      {children}
    </AnchorLink>
  );
}
