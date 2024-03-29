import React from 'react';

import ScrollAnimation from 'react-animate-on-scroll';
import IosChatbubblesOutline from 'react-ionicons/lib/IosChatbubblesOutline';
import IosCodeWorking from 'react-ionicons/lib/IosCodeWorking';
import IosColorFillOutline from 'react-ionicons/lib/IosColorFillOutline';
import IosLeafOutline from 'react-ionicons/lib/IosLeafOutline';
import LazyLoad from 'react-lazyload';

import Gem from '../../elements/Gem/Gem';
import Title from '../../elements/Title/Title';

import './Services.css';

const Services = () => {
  return (
    <section className="services">
      <Title
        body="Full Stack in more ways than one."
        chapter="02"
        title="Services"
      />

      <ScrollAnimation animateIn="fadeIn" animateOnce>
        <div className="service">
          <Gem
            className="service__item"
            icon={
              <ScrollAnimation animateIn="rotateIn" animateOnce delay={150}>
                <IosLeafOutline color="#070a21" fontSize="64px" />
              </ScrollAnimation>
            }
            label="Engineer Management"
          >
            A passionate leader, coach, and instructor who actively engages and
            instills a healthy team environment. I am able to manage, receive,
            and provide constructive criticism to produce highly efficient
            development teams.
          </Gem>
          <Gem
            className="service__item"
            icon={
              <ScrollAnimation animateIn="rotateIn" animateOnce>
                <IosCodeWorking color="#070a21" fontSize="64px" />
              </ScrollAnimation>
            }
            label="Development"
          >
            Writing elegant, maintainable, and simple solutions to complex
            problems. From native applications to web development, I bring many
            years of experience to the table. There has not been a problem I
            could not solve.
          </Gem>
          <Gem
            className="service__item"
            icon={
              <ScrollAnimation animateIn="rotateIn" animateOnce delay={300}>
                <IosColorFillOutline color="#070a21" fontSize="64px" />
              </ScrollAnimation>
            }
            label="UX Design"
          >
            The Adobe Suite? No problem. I can create anything from simple,
            effective logos, all the way to complete application design. With
            unparalleled attention to detail, I can produce highly effective
            interfaces.
          </Gem>
          <Gem
            className="service__item"
            icon={
              <ScrollAnimation animateIn="rotateIn" animateOnce delay={450}>
                <IosChatbubblesOutline color="#070a21" fontSize="64px" />
              </ScrollAnimation>
            }
            label="Consultation"
          >
            I am available to aid in the process of UI/UX design as well as help
            design the architecture of new or old platforms. High standards in
            code maintainability and cleanliness are a must.
          </Gem>
        </div>
      </ScrollAnimation>

      <section className="review">
        <p className="review__pre-title">368 Durham</p>
        <h2 className="review__title">WORD ON THE STREET</h2>
        <div className="review__line" />
        <div className="review__review">
          <div className="review__avatar">
            <LazyLoad offset={184} once>
              <picture>
                <source srcSet="assets/services/brian.webp" type="image/webp" />
                <img
                  alt="Review avatar"
                  className="review__avatar-img"
                  src="assets/services/brian.jpg"
                />
              </picture>
            </LazyLoad>
          </div>

          <ScrollAnimation animateIn="fadeIn" animateOnce>
            <p className="review__body">
              368 Durham has used Matthew as a consult for web design and
              development for several years on various projects. Matthew brings
              experience and a fresh outlook to all client projects and has
              proven to be a great asset in all various aspects.
            </p>
          </ScrollAnimation>

          <div className="review__line--small" />

          <ScrollAnimation animateIn="fadeInUp" animateOnce>
            <p className="review__author">Brian Rutherford</p>
            <p className="review__company">368 Durham</p>
          </ScrollAnimation>
        </div>
      </section>
    </section>
  );
};

export default Services;
