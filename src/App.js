import React, {useState} from 'react';

import Headroom from 'react-headroom';
import IosClose from 'react-ionicons/lib/IosClose';
import IosMenu from 'react-ionicons/lib/IosMenu';
import MdRemove from 'react-ionicons/lib/MdRemove';
import SlidingPanel from 'react-sliding-side-panel';

import {disableBodyScroll, enableBodyScroll} from 'body-scroll-lock';

import Hero from './components/sections/Hero/Hero';

import './App.css';

/**
 * Get Navigation
 * @param {string} element
 * @return {JSX}
 */
const getNavigation = (element) => {
  const sections = ['about', 'services', 'folio', 'contact'];

  if (element === 'drawer') {
    const navigation = sections.map((section) => {
      return (
        <li className="drawer-navigation__item" key={section}>
          <a className="drawer-navigation__link" href={`#${section}`}>
            {section}
          </a>
        </li>
      );
    });

    return (
      <nav className="drawer-navigation">
        <ul className="drawer-navigation__list">{navigation}</ul>
        <MdRemove color="#f9f9f9" fontSize="32" />
      </nav>
    );
  }

  const navigation = sections.map((section) => {
    return (
      <li className="navigation__item" key={section}>
        <a
          className={`navigation__link ${
            element === 'headroom' ? 'navigation__link--headroom' : ''
          }`}
          href={`#${section}`}
        >
          {section}
        </a>
      </li>
    );
  });

  return (
    <nav
      className={`navigation ${
        element === 'headroom' ? 'navigation--headroom' : ''
      }`}
    >
      <ul className="navigation__list">{navigation}</ul>
    </nav>
  );
};

export default function App() {
  const [drawerOpen, setDrawerState] = useState(false);

  /**
   * Handle Drawer Toggle
   */
  const handleDrawerToggle = () => {
    !drawerOpen ? disableBodyScroll() : enableBodyScroll();

    setDrawerState(!drawerOpen);
  };

  return (
    <div className="app">
      <SlidingPanel
        backdropClicked={() => handleDrawerToggle()}
        panelClassName="drawer"
        isOpen={drawerOpen}
        size={80}
        type={'right'}
      >
        <section className="drawer__content">
          <header className="drawer__header">
            <img
              alt="Header Logo"
              className="drawer__image"
              src="/assets/logo--square.png"
            />

            <div className="drawer__close" onClick={() => handleDrawerToggle()}>
              <IosClose color="#f9f9f9" fontSize="32" />
            </div>
          </header>
          {getNavigation('drawer')}
        </section>
      </SlidingPanel>

      <Headroom
        className="headroom"
        disableInlineStyles
        pinStart={192}
        wrapperStyle={{marginTop: -88}}
      >
        <img
          alt="Header Logo"
          className="headroom__image"
          src="/assets/logo--square.png"
        />
        <IosMenu
          className="headroom__drawer-icon"
          color="#f9f9f9"
          onClick={() => handleDrawerToggle()}
        />
        {getNavigation('headroom')}
      </Headroom>

      <header className="header">
        <img
          alt="Header Logo"
          className="header__image"
          src="/assets/logo--square.png"
        />
        <IosMenu
          className="header__drawer-icon"
          color="#070a21"
          onClick={() => handleDrawerToggle()}
        />
        {getNavigation('header')}
      </header>

      <section className="hero">
        <Hero />
      </section>

      <section className="about" style={{height: 500}}></section>
    </div>
  );
}
