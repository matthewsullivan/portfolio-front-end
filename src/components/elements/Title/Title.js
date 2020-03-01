import React from 'react';

import PropTypes from 'prop-types';
import MdRemove from 'react-ionicons/lib/MdRemove';

import './Title.css';

Title.propTypes = {
  body: PropTypes.string,
  chapter: PropTypes.string,
  light: PropTypes.bool,
  title: PropTypes.string,
};

export default function Title(props) {
  const {body, chapter, light, title} = props;

  const color = light ? '#f9f9f9' : '#070a21';

  return (
    <section className={`title ${light ? 'title--light' : ''}`}>
      <div className={chapter ? 'chapter' : 'chapter--hidden'}>
        <MdRemove color={color} fontSize="16" />
        <p className="chapter__content">{chapter}</p>
        <MdRemove color={color} fontSize="16" />
      </div>

      <h2 className="title__heading">{title}</h2>
      <p className="title__body">{body}</p>
    </section>
  );
}
