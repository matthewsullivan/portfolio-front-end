import React from 'react';

// import IconButton from '@material-ui/core/IconButton';

// import GitHubIcon from '@material-ui/icons/GitHub';
// import LinkedInIcon from '@material-ui/icons/LinkedIn';

import './App.css';

/**
 * Get Navigation
 * @return {JSX}
 */
const getNavigation = () => {
  const sections = ['About', 'Services', 'Folio', 'contact'];

  return sections.map((section) => {
    return (
      <li className="navigation__item" key={section}>
        <a className="navigation__link" href="#">
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
          alt="Header Logo Image"
          className="header__img"
          src="/assets/logo--square.png"
        />
        <nav className="navigation">
          <ul className="navigation__list">{getNavigation()}</ul>
        </nav>
      </header>
      <section className="hero"></section>
    </div>
  );
}
