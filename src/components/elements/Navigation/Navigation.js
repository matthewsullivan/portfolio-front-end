import React, {useState} from 'react';

import PropTypes from 'prop-types';

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

Navigation.propTypes = {
  pinned: PropTypes.bool,
};

export default function Navigation(props) {
  const {pinned} = props;

  const [drawerOpen, setDrawerState] = useState(false);

  return (
    <>
      <SlidingPanel
        backdropClicked={() => setDrawerState(!drawerOpen)}
        panelClassName="drawer"
        isOpen={drawerOpen}
        size={80}
        type={'right'}
      >
        <ScrollLock isActive={drawerOpen}>
          <section className="drawer__content">
            <header className="drawer__header">
              <AnchorLink href="#hero" offset="128">
                <img
                  alt="Header Logo"
                  className="drawer__image"
                  src="assets/logo/logo--square.png"
                />
              </AnchorLink>

              <div
                className="drawer__close"
                onClick={() => setDrawerState(!drawerOpen)}
              >
                <IosClose color="#f9f9f9" fontSize="32" />
              </div>
            </header>
            {getNavigation('drawer')}
          </section>
        </ScrollLock>
      </SlidingPanel>
      <Headroom
        className={`headroom ${pinned ? 'headroom--hide' : 'headroom--show'}`}
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
          onClick={() => setDrawerState(!drawerOpen)}
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
          onClick={() => setDrawerState(!drawerOpen)}
        />
        {getNavigation('header')}
      </header>
    </>
  );
}
