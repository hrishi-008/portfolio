import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { title: 'Home', link: 'about' },
    { title: 'About', link: 'about' },
    { title: 'Projects', link: 'projects' },
    { title: 'Experience', link: 'experience' },
    { title: 'Contact', link: 'contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 transition-all duration-300"
      style={{
        background: isScrolled
          ? 'rgba(247, 245, 240, 0.9)'
          : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        boxShadow: isScrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none',
      }}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between py-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-serif font-bold text-kraft-dark cursor-pointer"
            onClick={() => {
              const target = document.getElementById('about');
              if (target) target.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            hk
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <motion.a
                key={item.link}
                href={`#${item.link}`}
                whileHover={{ y: -2 }}
                className="text-kraft-medium font-sans text-sm transition-colors duration-300 relative group hover:text-kraft-dark"
              >
                {item.title}
                <span
                  className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                  style={{ background: '#c9b89a' }}
                ></span>
              </motion.a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="md:hidden text-kraft-dark transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
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
            </svg>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden absolute left-0 right-0 top-full shadow-paper-lg rounded-b-lg"
              style={{
                background: 'rgba(250, 246, 240, 0.95)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <nav className="flex flex-col space-y-4 p-4">
                {menuItems.map((item) => (
                  <motion.a
                    key={item.link}
                    href={`#${item.link}`}
                    whileHover={{ x: 10 }}
                    className="text-kraft-medium hover:text-kraft-dark transition-colors duration-300 py-2 font-sans text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.title}
                  </motion.a>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header; 