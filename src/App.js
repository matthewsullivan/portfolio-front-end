import React from 'react';

import Headroom from 'react-headroom';
import IosMenu from 'react-ionicons/lib/IosMenu';

import Hero from './components/sections/Hero/Hero';

import './App.css';

/**
 * Get Navigation
 * @param {boolean} headroom
 * @return {JSX}
 */
const getNavigation = (headroom) => {
  const sections = ['about', 'services', 'folio', 'contact'];

  const navigation = sections.map((section) => {
    return (
      <li className="navigation__item" key={section}>
        <a
          className={`navigation__link ${
            headroom ? 'navigation__link--headroom' : ''
          }`}
          href={`#${section}`}
        >
          {section}
        </a>
      </li>
    );
  });

  return (
    <nav className={`navigation ${headroom ? 'navigation--headroom' : ''}`}>
      <ul className="navigation__list">{navigation}</ul>
    </nav>
  );
};

export default function App() {
  return (
    <div className="app">
      <header className="header">
        <Headroom
          disableInlineStyles
          pinStart={192}
          wrapperStyle={{marginTop: -88}}
        >
          <img
            alt="Header Logo"
            className="header__image header__image--headroom"
            src="/assets/logo--square.png"
          />

          <IosMenu className="drawer-icon" color="#fff" />

          {getNavigation(true)}
        </Headroom>

        <img
          alt="Header Logo"
          className="header__image"
          src="/assets/logo--square.png"
        />
        {getNavigation(false)}
      </header>

      <section className="hero">
        <Hero />
      </section>

      <section className="about" style={{height: 500}}></section>
    </div>
  );
}
