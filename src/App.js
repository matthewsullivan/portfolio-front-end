import React from 'react';

import Title from './components/elements/Title/Title';

import Navigation from './components/elements/Navigation/Navigation';
import About from './components/sections/About/About';
import Hero from './components/sections/Hero/Hero';
import Reel from './components/sections/Reel/Reel';

import './App.css';

export default function App() {
  return (
    <div className="app">
      <header>
        <Navigation />
      </header>
      <section id="hero">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="reel">
        <Reel />
      </section>

      <section id="services" style={{height: 500}}>
        <Title
          body="Full Stack in more ways than one."
          chapter="02"
          title="Services"
        />
      </section>
      <section id="folio" style={{height: 500}}>
        <Title
          body="Hand picked projects and case studies."
          chapter="03"
          title="Works"
        />
      </section>
      <section id="contact" style={{height: 500}}>
        <Title
          body="Please don't hesitate to reach out to me with any questions."
          chapter="04"
          title="Contact"
        />
      </section>
      <section id="cv" style={{height: 500}}>
        <Title
          body="You've made it this far. Why not check out my curriculum vitae too?"
          title="Curriculum Vitae"
        />
      </section>
    </div>
  );
}
