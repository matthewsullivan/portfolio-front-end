import React, {useState} from 'react';

import LazyLoad from 'react-lazyload';
import YouTubePlayer from 'react-player/lib/players/YouTube';
import BarLoader from 'react-spinners/BarLoader';

import Title from '../../elements/Title/Title';

import './Reel.css';

const Reel = () => {
  const [loading, setLoading] = useState(true);

  const options = {
    controls: true,
    onReady: () => setLoading(false),
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
        <BarLoader
          css="margin: auto; position: absolute; width: 136px;"
          color="#2ecc71"
          loading={loading}
        />

        <LazyLoad offset={184} once>
          <YouTubePlayer className="reel__video" {...options} />
        </LazyLoad>
      </section>
    </section>
  );
};

export default Reel;
