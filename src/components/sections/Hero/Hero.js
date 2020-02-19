import React, { useState } from 'react';

import AliceCarousel from 'react-alice-carousel';

import IosArrowBack from 'react-ionicons/lib/IosArrowBack'
import IosArrowForward from 'react-ionicons/lib/IosArrowForward'

import Button from '../../elements/Button/Button';

import './Hero.css';

export default function Hero() {
  const [selected, setSelected] = useState(0);

  const options = {
    buttonsDisabled: true,
    dotsDisabled: true,
    handleOnDragStart: (e) => e.preventDefault(),
    mouseTrackingEnabled: true,
  };

  let carousel;

  /**
   * Handle Slide Changed
   * @param {object} e 
   */
  const handleSlideChanged = (e) => {
    setSelected(e.slide);
  }

  return (
    <section className="carousel">
      <AliceCarousel onSlideChanged={handleSlideChanged} ref={(el) => (carousel = el)} {...options}>
        <div
          className="carousel__slide"
          onDragStart={options.handleOnDragStart}
        >
          <img
            alt="Carousel Slide Forest Background"
            className="carousel__image"
            src="assets/slide-1.jpg"
          />

          <div className="carousel__content">
            <h1 className="carousel__title">Software Engineer</h1>
            <p className="carousel__body">
              More than just a Developer. I am a well rounded Media Specialist
              who has a keen interest in leadership.
            </p>
            <Button label="Portfolio" path="folio" />
          </div>
        </div>
        <div
          className="carousel__slide"
          onDragStart={options.handleOnDragStart}
        >
          <img
            alt="Carousel Slide Forest Background with Sun"
            className="carousel__image"
            src="assets/slide-2.jpg"
          />

          <div className="carousel__content">
            <h1 className="carousel__title">Passionate Teacher</h1>
            <p className="carousel__body">
              Not only building, and consulting, but teaching others the lingo
              of the web and media.
            </p>
            <Button label="Curriculum Vitae" path="cv" />
          </div>
        </div>
      </AliceCarousel>

      <nav className="controls">
        <div className="controls__button controls__button--prev" onClick={() => carousel.slidePrev()}>
          <IosArrowBack color="#fff"/>
        </div>
        <div className="controls__button controls__button--next" onClick={() => carousel.slideNext()}>
          <IosArrowForward color="#fff"/>
        </div>

        <div className="controls__dots">
          <span className={`controls__dot ${selected === 0 ? 'controls__dot--selected' : ''}`} onClick={() => carousel.slideTo(0)}></span>
          <span className={`controls__dot ${selected === 1 ? 'controls__dot--selected' : ''}`} onClick={() => carousel.slideTo(1)}></span>
        </div>
      </nav>
    </section>
  );
}
