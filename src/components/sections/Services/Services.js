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
    </section>
  );
}
