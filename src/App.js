import React, {useState} from 'react';

import {useInView} from 'react-intersection-observer';

import Navigation from './components/elements/Navigation/Navigation';

import About from './components/sections/About/About';
import Contact from './components/sections/Contact/Contact';
import Footer from './components/sections/Footer/Footer';
import Folio from './components/sections/Folio/Folio';
import Hero from './components/sections/Hero/Hero';
import Reel from './components/sections/Reel/Reel';
import Services from './components/sections/Services/Services';
import Vitae from './components/sections/Vitae/Vitae';

import './App.css';

export default function App() {
  const [viewportHeight, setViewPortHeight] = useState(window.innerHeight);

  window.addEventListener('resize', () =>
    setViewPortHeight(window.innerHeight)
  );

  const [folio, inView] = useInView({
    rootMargin: `0px 0px -${viewportHeight}px 0px`,
  });

  return (
    <div className="app">
      <header>
        <Navigation pinned={inView} />
      </header>
      <section id="hero">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="reel">
        <Reel />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="folio">
        <Folio ref={folio} />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <section id="cv">
        <Vitae />
      </section>

      <section id="footer">
        <Footer />
      </section>
    </div>
  );
}
