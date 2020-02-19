import React from 'react';

import Hero from './components/sections/Hero/Hero';
import Headroom from 'react-headroom';

import './App.css';

/**
 * Get Navigation
 * @return {JSX}
 */
const getNavigation = () => {
  const sections = ['about', 'services', 'folio', 'contact'];

  return sections.map((section) => {
    return (
      <li className="navigation__item" key={section}>
        <a className="navigation__link" href={`#${section}`}>
          {section}
        </a>
      </li>
    );
  });
};

export default function App() {
  return (
    <div className="app">
      <Headroom
        disableInlineStyles
        pinStart={192}
        wrapperStyle={{marginTop: -88}}
      >
        Content here
      </Headroom>

      <header className="header">
        <img
          alt="Header Logo"
          className="header__image"
          src="/assets/logo--square.png"
        />
        <nav className="navigation">
          <ul className="navigation__list">{getNavigation()}</ul>
        </nav>
      </header>

      <section className="hero">
        <Hero />
      </section>

      <section className="about" style={{height: 500}}></section>
    </div>
  );
}
