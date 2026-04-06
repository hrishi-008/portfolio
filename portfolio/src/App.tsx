import React from 'react';
import { Analytics } from "@vercel/analytics/react";
import Header from './components/Header';
import PopUpBook from './components/PopUpBook';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import AnimatedBackground from './components/AnimatedBackground';
import Certifications from './components/Certifications';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen" style={{ background: '#f7f5f0' }}>
      <div className="relative z-10">
        <Header />
        <main>
          <PopUpBook />
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