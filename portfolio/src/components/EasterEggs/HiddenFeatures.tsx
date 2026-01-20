import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useKonamiCode } from '../../hooks/useKonamiCode';

interface HiddenFeaturesProps {
  onPetToggle: (visible: boolean) => void;
  onTrailToggle: (active: boolean) => void;
}

const HiddenFeatures: React.FC<HiddenFeaturesProps> = ({ onPetToggle, onTrailToggle }) => {
  const [logoClickCount, setLogoClickCount] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState('');
  const [trailActive, setTrailActive] = useState(false);
  const [petVisible, setPetVisible] = useState(false);

  // Konami code activation
  useKonamiCode(() => {
    setMessage('🎉 Konami Code Activated! You found the secret! 🎉');
    setShowMessage(true);
    setTrailActive(true);
    setPetVisible(true);
    onPetToggle(true);
    onTrailToggle(true);
    
    setTimeout(() => {
      setShowMessage(false);
    }, 5000);
  });

  // Console easter egg
  useEffect(() => {
    const messages = [
      '%c👋 Hey there!',
      '%cThanks for checking out my portfolio!',
      '%cWant to see something cool? Try the Konami code: ↑↑↓↓←→←→BA',
      '%cOr click the logo 5 times! 🐱',
    ];
    
    const styles = [
      'color: #667eea; font-size: 20px; font-weight: bold;',
      'color: #764ba2; font-size: 14px;',
      'color: #f5576c; font-size: 12px;',
      'color: #4facfe; font-size: 12px;',
    ];

    messages.forEach((msg, i) => {
      setTimeout(() => {
        console.log(msg, styles[i] || '');
      }, i * 500);
    });

    // Fun facts
    const funFacts = [
      'Did you know? This portfolio was built with React, TypeScript, and lots of ☕',
      'Fun fact: The pet follows your cursor! Try hovering over it!',
      'Easter egg: Click the logo multiple times for a surprise!',
    ];

    setTimeout(() => {
      const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
      console.log(`%c${randomFact}`, 'color: #00f2fe; font-size: 11px; font-style: italic;');
    }, 3000);
  }, []);

  // Handle logo clicks
  const handleLogoClick = () => {
    const newCount = logoClickCount + 1;
    setLogoClickCount(newCount);

    if (newCount === 5) {
      setMessage('🎊 You found me! The pet is now following you! 🎊');
      setShowMessage(true);
      setPetVisible(true);
      onPetToggle(true);
      setTimeout(() => {
        setShowMessage(false);
        setLogoClickCount(0);
      }, 3000);
    }
  };

  // Special date check (e.g., birthday, holidays)
  useEffect(() => {
    const today = new Date();
    const month = today.getMonth();
    const date = today.getDate();

    // April Fools, Halloween, Christmas, New Year
    if (
      (month === 3 && date === 1) || // April 1
      (month === 9 && date === 31) || // Halloween
      (month === 11 && date === 25) || // Christmas
      (month === 0 && date === 1) // New Year
    ) {
      setMessage('🎉 Special day detected! Enjoy the extra animations! 🎉');
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 4000);
    }
  }, []);

  return (
    <>
      <AnimatePresence>
        {showMessage && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-20 left-1/2 transform -translate-x-1/2 z-[10000]"
          >
            <div className="glass-effect-premium rounded-2xl px-6 py-4 shadow-xl">
              <p className="text-center font-semibold text-gray-800">{message}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Export logo click handler */}
      <div style={{ display: 'none' }} data-logo-click-handler={handleLogoClick.toString()} />
    </>
  );
};

export default HiddenFeatures;

