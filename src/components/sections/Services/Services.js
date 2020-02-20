import React from 'react';

import IosLaptop from 'react-ionicons/lib/IosLaptop';
import IosColorFillOutline from 'react-ionicons/lib/IosColorFillOutline';
import IosChatbubblesOutline from 'react-ionicons/lib/IosChatbubblesOutline';
import IosPhonePortrait from 'react-ionicons/lib/IosPhonePortrait';

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

      <div className="service">
        <Gem
          className="service__item"
          label="iOS Development"
          icon={<IosPhonePortrait color="#070a21" fontSize="64px" />}
        >
          Starting in Objective-C in 2014, I now have a core understanding of
          iOS development and the Xcode environment. I am very familiar with
          Objective-C and Swift.
        </Gem>
        <Gem
          className="service__item"
          label="Web Development"
          icon={<IosLaptop color="#070a21" fontSize="64px" />}
        >
          A true web developer who knows how to get things done without
          Wordpress. Both front-end and back-end. From JavaScript to PHP - I am
          capable of small to large scale projects.
        </Gem>
        <Gem
          className="service__item"
          label="Design"
          icon={<IosColorFillOutline color="#070a21" fontSize="64px" />}
        >
          The Adobe Suite? No problem. I have the knowledge to create a
          beautiful logo, all the way to a complete application design.
        </Gem>
        <Gem
          className="service__item"
          label="Consultation"
          icon={<IosChatbubblesOutline color="#070a21" fontSize="64px" />}
        >
          I am available to aid in the process of UI/UX design as well as help
          design the architecture of new or old platforms. High standards in
          code maintainability and cleanliness are a must.
        </Gem>
      </div>

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
          <p className="review__body">
            368 Durham has used Matthew as a consult for web design and
            development for several years on various projects. Matthew brings
            experience and a fresh outlook to all client projects and has proven
            to be a great asset in all various aspects.
          </p>
          <div className="review__line--small" />
          <p className="review__author">Brian Rutherford</p>
          <p className="review__company">386 Durham</p>
        </div>
      </section>
    </section>
  );
}
