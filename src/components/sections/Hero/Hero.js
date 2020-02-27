import React, {useState} from 'react';

import AliceCarousel from 'react-alice-carousel';
import ScrollAnimation from 'react-animate-on-scroll';
import IosArrowBack from 'react-ionicons/lib/IosArrowBack';
import IosArrowForward from 'react-ionicons/lib/IosArrowForward';
import IosCafeOutline from 'react-ionicons/lib/IosCafeOutline';
import IosLeafOutline from 'react-ionicons/lib/IosLeafOutline';

import Button from '../../elements/Button/Button';

import './Hero.css';

export default function Hero() {
  const [selected, setSelected] = useState(0);

  const options = {
    autoPlay: true,
    autoPlayInterval: 4000,
    buttonsDisabled: true,
    disableAutoPlayOnAction: true,
    dotsDisabled: true,
    handleOnDragStart: (e) => e.preventDefault(),
    mouseTrackingEnabled: true,
    stopAutoPlayOnHover: true,
  };

  let carousel;

  /**
   * Handle Slide Changed
   * @param {object} event
   */
  const handleSlideChanged = (event) => {
    setSelected(event.slide);
  };

  return (
    <section className="carousel">
      <ScrollAnimation animateIn="fadeIn" animateOnce>
        <AliceCarousel
          onSlideChanged={handleSlideChanged}
          ref={(el) => (carousel = el)}
          {...options}
        >
          <div
            className="carousel__slide"
            onDragStart={options.handleOnDragStart}
          >
            <img
              alt="Carousel Slide Forest Background"
              className="carousel__image"
              src="assets/carousel/carousel-a.jpg"
            />

            <div className="carousel__content">
              <IosLeafOutline
                className="carousel__icon"
                color="#f9f9f9"
                fontSize="32"
              />
              <h1 className="carousel__title">Software Engineer</h1>
              <p className="carousel__body">
                More than just a Developer. I am a well rounded Media Specialist
                who has a keen interest in leadership.
              </p>
              <ScrollAnimation animateIn="fadeInUp" animateOnce>
                <Button path="folio">Portfolio</Button>
              </ScrollAnimation>
            </div>
          </div>

          <div
            className="carousel__slide"
            onDragStart={options.handleOnDragStart}
          >
            <img
              alt="Carousel Slide Forest Background with Sun"
              className="carousel__image"
              src="assets/carousel/carousel-b.jpg"
            />

            <div className="carousel__content">
              <IosCafeOutline
                className="carousel__icon"
                color="#f9f9f9"
                fontSize="32"
              />
              <h1 className="carousel__title">Natural Leader</h1>
              <p className="carousel__body">
                Not only building, and consulting, but instructing and leading
                developers.
              </p>
              <Button path="cv">Curriculum Vitae</Button>
            </div>
          </div>
        </AliceCarousel>

        <nav className="controls">
          <div
            className="controls__button controls__button--prev"
            onClick={() => carousel.slidePrev()}
          >
            <IosArrowBack color="#fff" />
          </div>

          <div
            className="controls__button controls__button--next"
            onClick={() => carousel.slideNext()}
          >
            <IosArrowForward color="#fff" />
          </div>

          <div className="controls__dots">
            <span
              className={`controls__dot ${
                selected === 0 ? 'controls__dot--selected' : ''
              }`}
              onClick={() => carousel.slideTo(0)}
            ></span>

            <span
              className={`controls__dot ${
                selected === 1 ? 'controls__dot--selected' : ''
              }`}
              onClick={() => carousel.slideTo(1)}
            ></span>
          </div>
        </nav>
      </ScrollAnimation>
    </section>
  );
}
