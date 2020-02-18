import React from 'react';

import AliceCarousel from 'react-alice-carousel';
import Button from '../../elements/Button/Button';

import './Hero.css';

export default function Hero() {
  const options = {
    autoPlay: true,
    autoPlayInterval: 4000,
    mouseTrackingEnabled: true,
    handleOnDragStart: (e) => e.preventDefault(),
  };

  return (
    <AliceCarousel className="carousel" {...options}>
      <div className="carousel__slide" onDragStart={options.handleOnDragStart}>
        <img
          alt="Carousel Slide Forest Background"
          className="carousel__image"
          src="assets/slide-1.jpg"
        />

        <div className="carousel__content">
          <h1 className="carousel__title">Software Engineer</h1>
          <p className="carousel__body">
            More than just a Developer. I am a well rounded Media Specialist who
            has a keen interest in leadership.
          </p>
          <Button label="Portfolio" path="folio" />
        </div>
      </div>
      <div className="carousel__slide" onDragStart={options.handleOnDragStart}>
        <img
          alt="Carousel Slide Forest Background with Sun"
          className="carousel__image"
          src="assets/slide-2.jpg"
        />

        <div className="carousel__content">
          <h1 className="carousel__title">Passionate Teacher</h1>
          <p className="carousel__body">
            Not only building, and consulting, but teaching others the lingo of
            the web and media.
          </p>
          <Button label="Curriculum Vitae" path="cv" />
        </div>
      </div>
    </AliceCarousel>
  );
}
