import React, {useState} from 'react';

import AnchorLink from 'react-anchor-link-smooth-scroll';
import Headroom from 'react-headroom';
import IosClose from 'react-ionicons/lib/IosClose';
import IosMenu from 'react-ionicons/lib/IosMenu';
import MdRemove from 'react-ionicons/lib/MdRemove';
import SlidingPanel from 'react-sliding-side-panel';

import {disableBodyScroll, enableBodyScroll} from 'body-scroll-lock';

import Title from './components/elements/Title/Title';
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
          <AnchorLink className="drawer-navigation__link" href={`#${section}`}>
            {section}
          </AnchorLink>
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
        <AnchorLink
          className={`navigation__link ${
            element === 'headroom' ? 'navigation__link--headroom' : ''
          }`}
          href={`#${section}`}
          offset="88"
        >
          {section}
        </AnchorLink>
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
            <AnchorLink href="#hero" offset="128">
              <img
                alt="Header Logo"
                className="drawer__image"
                src="/assets/logo--square.png"
              />
            </AnchorLink>

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
        <AnchorLink href="#hero" offset="208">
          <img
            alt="Header Logo"
            className="headroom__image"
            src="/assets/logo--square.png"
          />
        </AnchorLink>
        <IosMenu
          className="headroom__drawer-icon"
          color="#f9f9f9"
          onClick={() => handleDrawerToggle()}
        />
        {getNavigation('headroom')}
      </Headroom>

      <header className="header">
        <AnchorLink href="#hero" offset="208">
          <img
            alt="Header Logo"
            className="header__image"
            src="/assets/logo--square.png"
          />
        </AnchorLink>
        <IosMenu
          className="header__drawer-icon"
          color="#070a21"
          onClick={() => handleDrawerToggle()}
        />
        {getNavigation('header')}
      </header>

      <section id="hero">
        <Hero />
      </section>

      <section id="about" style={{height: 500}}>
        <Title
          body="Enthuiastic and Experienced Software Developer"
          chapter="01"
          title="About"
        />
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
