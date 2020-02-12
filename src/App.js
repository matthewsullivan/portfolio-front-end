import React from 'react';

import './App.css';

export default function App() {
  return (
    <div className="app">
      <section className="hero">
        <div className="hero__logo">
          <img
            alt="Matthew Sullivan's Logo"
            className="hero__logo--small"
            src="/assets/logo.png"
          />
        </div>
        <div className="hero__tag">
          <h1>Multimedia Specialist</h1>
        </div>
      </section>
      <section className="about"></section>
    </div>
  );
}
