import React from 'react';

// import IconButton from '@material-ui/core/IconButton';

// import GitHubIcon from '@material-ui/icons/GitHub';
// import LinkedInIcon from '@material-ui/icons/LinkedIn';

import './App.css';

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
          <ul className="navigation__list">
            <li className="navigation__item">
              <a className="navigation__link" href="#">
                About
              </a>
            </li>
            <li className="navigation__item">
              <a className="navigation__link" href="#">
                Services
              </a>
            </li>
            <li className="navigation__item">
              <a className="navigation__link" href="#">
                Folio
              </a>
            </li>
            <li className="navigation__item">
              <a className="navigation__link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <section className="hero"></section>
    </div>
  );
}
