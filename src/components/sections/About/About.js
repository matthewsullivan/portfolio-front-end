import React from 'react';

import AnchorLink from 'react-anchor-link-smooth-scroll';
import ScrollAnimation from 'react-animate-on-scroll';
import IosArrowRoundForward from 'react-ionicons/lib/IosArrowRoundForward';
import MdRemove from 'react-ionicons/lib/MdRemove';
import LazyLoad from 'react-lazyload';

import Title from '../../elements/Title/Title';

import './About.css';

const About = () => {
  return (
    <section className="about">
      <Title
        body="Enthuiastic and Experienced Software Developer"
        chapter="01"
        title="About"
      />

      <div className="about__content">
        <div className="about__text">
          <ScrollAnimation animateIn="fadeInUp" animateOnce>
            <h3 className="about__title">Hello</h3>
            <MdRemove color="#070a21" fontSize="16" />
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeInUp" animateOnce>
            <p className="about__body">
              My name is Matthew Sullivan. I am a Software Engineer, Team Lead,
              and Multimedia Specialist who is fascinated by all aspects of
              media production.
            </p>
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeInUp" animateOnce>
            <p className="about__body">
              Driven by a passion to produce highly efficient, maintainable
              codebases while keeping unparalleled attention to detail. I have a
              proven track record of solid development and leadership
              strategies. Moving forward, I hope to continue to build
              relationships and foster healthy team environments.
            </p>
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeInUp" animateOnce>
            <AnchorLink className="about__link" href="#cv" offset="208">
              Check out my CV <IosArrowRoundForward fontSize="24" />
            </AnchorLink>
          </ScrollAnimation>
        </div>

        <ScrollAnimation
          animateIn="fadeIn"
          animateOnce
          className="about__container"
        >
          <LazyLoad offset={184} once>
            <img
              alt="About Coffee"
              className="about__image"
              src="assets/about/image-a.jpg"
            />
          </LazyLoad>
        </ScrollAnimation>
      </div>

      <div className="about__content">
        <ScrollAnimation
          animateIn="fadeIn"
          animateOnce
          className="about__container"
        >
          <LazyLoad offset={184} once>
            <img
              alt="About Coffee"
              className="about__image"
              src="assets/about/image-b.jpg"
            />
          </LazyLoad>
        </ScrollAnimation>

        <div className="about__text">
          <ScrollAnimation animateIn="fadeInUp" animateOnce>
            <h3 className="about__title">Interests</h3>
            <MdRemove color="#070a21" fontSize="16" />
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeInUp" animateOnce>
            <p className="about__body">
              Time management plays a major role in my day to day life. Late is
              not an option. I possess the ability to manage a lot of work at
              once, and I enjoy learning new things while problem-solving. Some
              of my interests outside of work include:
            </p>
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeInUp" animateOnce>
            <ul className="about__body about__list">
              <li className="about__item">Playing music</li>
              <li className="about__item">Listening to music</li>
              <li className="about__item">Listening to podcasts</li>
              <li className="about__item">Reading</li>
              <li className="about__item">Gardening</li>
              <li className="about__item">Jogging and hiking</li>
              <li className="about__item">Healthy lifestyles</li>
            </ul>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default About;
