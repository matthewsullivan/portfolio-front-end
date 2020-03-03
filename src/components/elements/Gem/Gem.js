import React from 'react';

import PropTypes from 'prop-types';

import './Gem.css';

const Button = (props) => {
  const {children, icon, label} = props;

  return (
    <section className="gem">
      <div className="gem__icon">{icon}</div>
      <h2 className="gem__label">{label}</h2>
      <p className="gem__body">{children}</p>
    </section>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  icon: PropTypes.object,
  label: PropTypes.string,
};

export default Button;
