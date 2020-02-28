import React from 'react';

import './Disabled.css';

export default function Disabled() {
  return (
    <div className="disabled">
      <img
        alt="logo"
        className="disabled__logo"
        src="https://static.matthewsullivan.media/logo.png"
      />
      <h2 className="disabled__title">Old Browser Detected</h2>
      <p className="disabled__body">
        It appears you are on an old browser. For the full viewing experience
        please update your browser by going to:
      </p>
      <a
        className="disabled__link"
        href="https://browsehappy.com/"
        rel="noopener noreferrer"
        target="_blank"
      >
        Browse Happy
      </a>
      <p className="disabled__body">
        Feel free to view my CV while you are here:
      </p>
      <a
        className="disabled__link"
        href="https://static.matthewsullivan.media/matthewsullivancv.pdf"
        rel="noopener noreferrer"
        target="_blank"
      >
        Curriculum Vitae
      </a>
      <p>
        Contact me at:{' '}
        <a
          className="disabled__link"
          href="mailTo:contact@matthewsullivan.media"
        >
          contact@matthewsullivan.media
        </a>
      </p>
    </div>
  );
}
