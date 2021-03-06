import React from 'react';

import Navigation from './components/elements/Navigation/Navigation';
import About from './components/sections/About/About';
import Contact from './components/sections/Contact/Contact';
import Folio from './components/sections/Folio/Folio';
import Footer from './components/sections/Footer/Footer';
import Hero from './components/sections/Hero/Hero';
import Reel from './components/sections/Reel/Reel';
import Services from './components/sections/Services/Services';
import Vitae from './components/sections/Vitae/Vitae';

import './App.css';

const App = () => {
  return (
    <div className="app">
      <header>
        <Navigation />
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
        <Folio />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <section id="cv">
        <Vitae />
      </section>

      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default App;
