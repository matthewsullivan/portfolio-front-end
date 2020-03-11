import React from 'react';

import LogoGithub from 'react-ionicons/lib/LogoGithub';
import LogoLinkedin from 'react-ionicons/lib/LogoLinkedin';

import './Footer.css';

const Footer = () => {
  const date = new Date();

  return (
    <section className="footer">
      <div className="footer__icons">
        <a
          aria-label="Navigate to LinkedIn profile"
          href="https://www.linkedin.com/in/matthew-sullivan/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <LogoLinkedin color="#f9f9f9" />
        </a>
        <a
          aria-label="Navigate to Github profile"
          href="https://github.com/matthewsullivan/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <LogoGithub color="#f9f9f9" />
        </a>
      </div>

      <p className="footer__copy">
        COPYRIGHT © {date.getFullYear()} Matthew Sullivan Media
      </p>
    </section>
  );
};

export default Footer;
