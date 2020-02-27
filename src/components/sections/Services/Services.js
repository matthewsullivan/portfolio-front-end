import React from 'react';

import ScrollAnimation from 'react-animate-on-scroll';
import IosCodeWorking from 'react-ionicons/lib/IosCodeWorking';
import IosLeafOutline from 'react-ionicons/lib/IosLeafOutline';
import IosColorFillOutline from 'react-ionicons/lib/IosColorFillOutline';
import IosChatbubblesOutline from 'react-ionicons/lib/IosChatbubblesOutline';

import Gem from '../../elements/Gem/Gem';
import Title from '../../elements/Title/Title';

import './Services.css';

export default function Services() {
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
              <ScrollAnimation animateIn="rotateIn" animateOnce>
                <IosCodeWorking color="#070a21" fontSize="64px" />
              </ScrollAnimation>
            }
            label="Development"
          >
            Providing elegant, maintainable, and simple solutions to complex
            problems. From native applications to web development, I bring many
            years of experience to the table. There has not been a problem I
            could not solve.
          </Gem>
          <Gem
            className="service__item"
            icon={
              <ScrollAnimation animateIn="rotateIn" animateOnce delay={150}>
                <IosLeafOutline color="#070a21" fontSize="64px" />
              </ScrollAnimation>
            }
            label="Team Lead"
          >
            A passionate leader and instructor who actively engages and instills
            a healthy environment. I am able to receive and give constructive
            criticism to produce highly efficient development teams.
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
            unparelled attention to detail, I can produce highly effective
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
            <img
              alt="Review Avatar"
              className="review__avatar-img"
              src="assets/services/brian.jpg"
            />
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
}
