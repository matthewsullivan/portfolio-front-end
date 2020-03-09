import React, {useState} from 'react';

import AnchorLink from 'react-anchor-link-smooth-scroll';
import Headroom from 'react-headroom';
import IosClose from 'react-ionicons/lib/IosClose';
import IosMenu from 'react-ionicons/lib/IosMenu';
import MdRemove from 'react-ionicons/lib/MdRemove';
import ScrollLock from 'react-scrolllock';
import SlidingPanel from 'react-sliding-side-panel';

import './Navigation.css';

/**
 * Get Navigation
 * @param {string} element
 * @param {function} setDrawerState
 * @return {JSX}
 */
const getNavigation = (element, setDrawerState) => {
  const sections = ['about', 'services', 'folio', 'contact'];

  if (element === 'drawer') {
    const navigation = sections.map((section) => {
      return (
        <li className="drawer-navigation__item" key={section}>
          <AnchorLink
            className="drawer-navigation__link"
            href={`#${section}`}
            onClick={() => setDrawerState(false)}
          >
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

const Navigation = () => {
  const [drawerOpen, setDrawerState] = useState(false);

  return (
    <>
      <SlidingPanel
        backdropClicked={() => setDrawerState(!drawerOpen)}
        isOpen={drawerOpen}
        panelClassName="drawer"
        size={80}
        type={'right'}
      >
        <ScrollLock isActive={drawerOpen}>
          <section className="drawer__content">
            <header className="drawer__header">
              <AnchorLink
                aria-label="Close navigation drawer"
                href="#hero"
                offset="128"
                onClick={() => setDrawerState(false)}
              >
                <picture>
                  <source srcSet="assets/logo/logo.webp" type="image/webp" />
                  <source
                    media="(min-width: 768px)"
                    srcSet="assets/logo/logo@2x.webp"
                    type="image/webp"
                  />
                  <img
                    alt="Header logo"
                    className="drawer__image"
                    src="assets/logo/logo@2x.png"
                  />
                </picture>
              </AnchorLink>

              <div
                className="drawer__close"
                onClick={() => setDrawerState(!drawerOpen)}
              >
                <IosClose color="#f9f9f9" fontSize="32" />
              </div>
            </header>
            {getNavigation('drawer', setDrawerState)}
          </section>
        </ScrollLock>
      </SlidingPanel>

      <Headroom
        className="headroom"
        disableInlineStyles
        pinStart={192}
        wrapperStyle={{marginTop: -88}}
      >
        <AnchorLink aria-label="Scroll page to top" href="#hero" offset="208">
          <picture>
            <source srcSet="assets/logo/logo.webp" type="image/webp" />
            <source
              media="(min-width: 768px)"
              srcSet="assets/logo/logo@2x.webp"
              type="image/webp"
            />
            <img
              alt="Header logo"
              className="headroom__image"
              src="assets/logo/logo@2x.png"
            />
          </picture>
        </AnchorLink>

        <div
          className="headroom__drawer"
          onClick={() => setDrawerState(!drawerOpen)}
        >
          <IosMenu className="headroom__icon" color="#f9f9f9" />
        </div>
        {getNavigation('headroom')}
      </Headroom>

      <header className="header">
        <AnchorLink aria-label="Scroll page to top" href="#hero" offset="208">
          <picture>
            <source srcSet="assets/logo/logo.webp" type="image/webp" />
            <source
              media="(min-width: 768px)"
              srcSet="assets/logo/logo@2x.webp"
              type="image/webp"
            />
            <img
              alt="Header logo"
              className="header__image"
              src="assets/logo/logo@2x.png"
            />
          </picture>
        </AnchorLink>

        <IosMenu
          className="header__icon"
          color="#070a21"
          onClick={() => setDrawerState(!drawerOpen)}
        />
        {getNavigation('header')}
      </header>
    </>
  );
};

export default Navigation;
