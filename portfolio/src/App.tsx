import React, { useState } from 'react';
import { Analytics } from "@vercel/analytics/react";
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import AnimatedBackground from './components/AnimatedBackground';
import Certifications from './components/Certifications';
import Pet from './components/EasterEggs/Pet';
import CursorTrail from './components/EasterEggs/CursorTrail';
import HiddenFeatures from './components/EasterEggs/HiddenFeatures';

const App: React.FC = () => {
  const [petVisible, setPetVisible] = useState(false);
  const [trailActive, setTrailActive] = useState(false);

  const handleLogoClick = () => {
    setPetVisible(true);
    setTrailActive(true);
  };

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <div className="relative z-10">
        <Header onLogoClick={handleLogoClick} />
        <main>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Certifications />
          <Contact />
        </main>
      </div>
      <HiddenFeatures 
        onPetToggle={setPetVisible}
        onTrailToggle={setTrailActive}
      />
      <Pet isVisible={petVisible} />
      <CursorTrail isActive={trailActive} />
      <Analytics />
    </div>
  );
};

export default App; 