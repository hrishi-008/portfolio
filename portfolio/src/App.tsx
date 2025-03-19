import React from 'react';
import { Analytics } from "@vercel/analytics/react";
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import AnimatedBackground from './components/AnimatedBackground';
import Certifications from './components/Certifications';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Certifications />
          <Contact />
        </main>
      </div>
      <Analytics />
    </div>
  );
};

export default App; 