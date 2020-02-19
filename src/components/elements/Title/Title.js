import React from 'react';

import MdRemove from 'react-ionicons/lib/MdRemove';

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
    <section className="title">
      <div className={chapter ? 'chapter' : 'chapter--hidden'} hidden={true}>
        <MdRemove color="#070a21" fontSize="16" />
        <p className="chapter__content">{chapter}</p>
        <MdRemove color="#070a21" fontSize="16" />
      </div>
      <h2 className="title__heading">{title}</h2>
      <p className="title__body">{body}</p>
    </section>
  );
}
