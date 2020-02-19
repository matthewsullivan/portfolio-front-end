import React, {useState} from 'react';

import AnchorLink from 'react-anchor-link-smooth-scroll';
import Headroom from 'react-headroom';
import IosArrowRoundForward from 'react-ionicons/lib/IosArrowRoundForward';
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
                src="assets/logo/logo--square.png"
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
            src="assets/logo/logo--square.png"
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
            src="assets/logo/logo--square.png"
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

      <section className="about" id="about">
        <Title
          body="Enthuiastic and Experienced Software Developer"
          chapter="01"
          title="About"
        />

        <div className="about__content">
          <div className="about__text">
            <h3 className="about__title">Hello</h3>
            <MdRemove color="#070a21" fontSize="16" />
            <p className="about__body">
              My name is Matthew Sullivan. I am a Software Engineer, Team Lead,
              and Multimedia Specialist who is fascinated in all aspects of
              media production.
            </p>
            <p className="about__body">
              Driven by a passion to produce highly efficient, maintainable
              codebases while keeping unparalleled attention to detail. I have a
              proven track record of solid development and leadership
              strategies. Moving forward, I hope to continue to build
              relationships and foster healthy team environments.
            </p>

            <AnchorLink className="about__link" href="#cv" offset="208">
              Check out my CV <IosArrowRoundForward fontSize="16" />
            </AnchorLink>
          </div>

          <img
            alt="About Coffee"
            className="about__image"
            src="assets/about/image-a.jpg"
          />
        </div>

        <div className="about__content">
          <img
            alt="About Coffee"
            className="about__image"
            src="assets/about/image-b.jpg"
          />

          <div className="about__text">
            <h3 className="about__title">Interests</h3>
            <MdRemove color="#070a21" fontSize="16" />
            <p className="about__body">
              Time management plays a huge roll in my day to day life. Late is
              not an option for me. I have the ability to handle a lot of work
              at once, and I enjoy learning new things while problem solving.
              Outside of work I enjoy:
            </p>

            <ul className="about__body about__list">
              <li className="about__item">Playing music</li>
              <li className="about__item">Listening to music</li>
              <li className="about__item">Listening to podcasts</li>
              <li className="about__item">Reading</li>
              <li className="about__item">Gardening</li>
              <li className="about__item">Jogging and hiking</li>
              <li className="about__item">Healthy lifestyles</li>
            </ul>
          </div>
        </div>
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
