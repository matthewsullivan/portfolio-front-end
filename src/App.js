import React from 'react';

import Carousel from './components/sections/Hero/Hero';

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
        <Carousel />
      </section>
    </div>
  );
}
