import React from 'react';

import './App.css';

export default function App() {
  return (
    <div className="app">
      <section className="hero">
        <section className="hero__image"></section>
        <section className="hero__content">
          <p>
            <strong>Matthew Sullivan</strong>
          </p>
          <h1>
            <span>Create.</span>
            <span>Enjoy.</span>
            <span>Repeat.</span>
          </h1>
          <p>
            As a <i>Design Principal</i> at <strong>IBM</strong>, Peter fuses
            his love for design, curiosity for technology, and unwavering
            commitment to understanding user behavior to lead future experiences
            for <strong>IBM Security</strong>.
          </p>
        </section>
      </section>
      <section className="about"></section>
      <section className="works"></section>
      <section className="contact"></section>
    </div>
  );
}
