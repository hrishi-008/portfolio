import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  onLogoClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLogoClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [logoClickCount, setLogoClickCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Calculate scroll progress
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const progress = (scrollTop / (documentHeight - windowHeight)) * 100;
      setScrollProgress(Math.min(100, Math.max(0, progress)));

      // Determine active section
      const sections = ['hero', 'about', 'projects', 'experience', 'certifications', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { title: 'Home', link: 'hero' },
    { title: 'About', link: 'about' },
    { title: 'Projects', link: 'projects' },
    { title: 'Experience', link: 'experience' },
    { title: 'Certifications', link: 'certifications' },
    { title: 'Contact', link: 'contact' },
  ];

  const handleLogoClick = () => {
    const newCount = logoClickCount + 1;
    setLogoClickCount(newCount);

    if (onLogoClick && newCount >= 5) {
      onLogoClick();
      setLogoClickCount(0);
    } else {
      // Reset after 3 seconds if not reached 5
      setTimeout(() => {
        setLogoClickCount(0);
      }, 3000);
    }

    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Scroll Progress Indicator */}
      <motion.div
        className="scroll-progress"
        style={{
          width: `${scrollProgress}%`,
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.1 }}
      />

      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'py-3 shadow-lg' : 'py-6'
          }`}
        style={{
          background: isScrolled
            ? 'rgba(255, 255, 255, 0.8)'
            : 'transparent',
          backdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.18)' : 'none',
        }}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-2xl font-bold text-gradient cursor-pointer relative group"
              onClick={handleLogoClick}
            >
              <span className="relative z-10 font-display tracking-tight">hrishk</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              {logoClickCount > 0 && logoClickCount < 5 && (
                <motion.span
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  className="absolute -top-2 -right-2 text-xs bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold shadow-lg"
                >
                  {logoClickCount}
                </motion.span>
              )}
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-1">
              {menuItems.map((item) => {
                const isActive = activeSection === item.link;
                return (
                  <motion.a
                    key={item.link}
                    href={`#${item.link}`}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative px-4 py-2 rounded-lg transition-all duration-300 ${isActive
                      ? 'text-blue-600 font-semibold'
                      : 'text-gray-600 hover:text-gray-900'
                      }`}
                  >
                    <span className="relative z-10 font-medium">{item.title}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg"
                        initial={false}
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      />
                    )}
                    <motion.span
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                      initial={{ width: 0 }}
                      animate={{ width: isActive ? '80%' : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                );
              })}
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="md:hidden text-gray-600 hover:text-blue-500 transition-colors duration-300 p-2 rounded-lg hover:bg-blue-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <motion.svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ rotate: isMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </motion.svg>
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0, y: -20 }}
                animate={{ opacity: 1, height: 'auto', y: 0 }}
                exit={{ opacity: 0, height: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="md:hidden absolute left-0 right-0 top-full mt-2 mx-4 glass-effect-premium rounded-2xl shadow-xl overflow-hidden"
              >
                <nav className="flex flex-col p-4">
                  {menuItems.map((item, index) => {
                    const isActive = activeSection === item.link;
                    return (
                      <motion.a
                        key={item.link}
                        href={`#${item.link}`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ x: 10 }}
                        whileTap={{ scale: 0.95 }}
                        className={`relative px-4 py-3 rounded-lg transition-all duration-300 ${isActive
                          ? 'text-blue-600 font-semibold bg-blue-50'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                          }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.title}
                        {isActive && (
                          <motion.div
                            layoutId="mobileActiveSection"
                            className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-r-full"
                            initial={false}
                            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                          />
                        )}
                      </motion.a>
                    );
                  })}
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>
    </>
  );
};

export default Header; 