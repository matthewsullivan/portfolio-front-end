import React from 'react';

import ReactPlayer from 'react-player';

import Title from '../../elements/Title/Title';

import './Reel.css';

export default function Reel() {
  const options = {
    url: 'https://youtu.be/nQa72e_cC5I',
  };

  return (
    <section className="reel">
      <header className="reel__header">
        <Title
          body="Have a look at my demo reel."
          className="reel__header"
          light
          title="Demo Reel"
        />

        <div className="reel__line" />
      </header>
      <section className="reel__content">
        <ReactPlayer className="reel__video" {...options} />
      </section>
    </section>
  );
}
