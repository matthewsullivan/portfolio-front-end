import React from 'react';

import AnchorLink from 'react-anchor-link-smooth-scroll';
import IosArrowRoundForward from 'react-ionicons/lib/IosArrowRoundForward';
import MdRemove from 'react-ionicons/lib/MdRemove';

import Title from '../../elements/Title/Title';

import './About.css';

export default function About() {
  return (
    <section className="about">
      <Title
        body="Enthuiastic and Experienced Software Developer"
        chapter="01"
        title="About"
      />

      <div className="about__content">
        <div className="about__text">
          <h3 className="about__title">Hello</h3>
          <MdRemove color="#070a21" fontSize="16" />
          <p className="about__body">
            My name is Matthew Sullivan. I am a Software Engineer, Team Lead,
            and Multimedia Specialist who is fascinated in all aspects of media
            production.
          </p>
          <p className="about__body">
            Driven by a passion to produce highly efficient, maintainable
            codebases while keeping unparalleled attention to detail. I have a
            proven track record of solid development and leadership strategies.
            Moving forward, I hope to continue to build relationships and foster
            healthy team environments.
          </p>

          <AnchorLink className="about__link" href="#cv" offset="208">
            Check out my CV <IosArrowRoundForward fontSize="16" />
          </AnchorLink>
        </div>

        <img
          alt="About Coffee"
          className="about__image"
          src="assets/about/image-a.jpg"
        />
      </div>

      <div className="about__content">
        <img
          alt="About Coffee"
          className="about__image"
          src="assets/about/image-b.jpg"
        />

        <div className="about__text">
          <h3 className="about__title">Interests</h3>
          <MdRemove color="#070a21" fontSize="16" />
          <p className="about__body">
            Time management plays a huge roll in my day to day life. Late is not
            an option for me. I have the ability to handle a lot of work at
            once, and I enjoy learning new things while problem solving. Outside
            of work I enjoy:
          </p>

          <ul className="about__body about__list">
            <li className="about__item">Playing music</li>
            <li className="about__item">Listening to music</li>
            <li className="about__item">Listening to podcasts</li>
            <li className="about__item">Reading</li>
            <li className="about__item">Gardening</li>
            <li className="about__item">Jogging and hiking</li>
            <li className="about__item">Healthy lifestyles</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
