import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type PetMood = 'happy' | 'curious' | 'sleeping' | 'excited';

interface PetProps {
  isVisible: boolean;
}

const Pet: React.FC<PetProps> = ({ isVisible }) => {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [mood, setMood] = useState<PetMood>('happy');
  const [isFollowing, setIsFollowing] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const petRef = useRef<HTMLDivElement>(null);
  const lastMousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!isVisible) return;

    const handleMouseMove = (e: MouseEvent) => {
      lastMousePos.current = { x: e.clientX, y: e.clientY };
      
      if (isFollowing) {
        setPosition({
          x: e.clientX - 30,
          y: e.clientY - 30,
        });
      }
    };

    const handleMouseEnter = () => {
      setIsFollowing(true);
      setMood('excited');
    };

    const handleMouseLeave = () => {
      setIsFollowing(false);
      setMood('happy');
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    if (petRef.current) {
      petRef.current.addEventListener('mouseenter', handleMouseEnter);
      petRef.current.addEventListener('mouseleave', handleMouseLeave);
    }

    // Random mood changes
    const moodInterval = setInterval(() => {
      if (!isFollowing) {
        const moods: PetMood[] = ['happy', 'curious', 'sleeping'];
        setMood(moods[Math.floor(Math.random() * moods.length)]);
      }
    }, 5000);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(moodInterval);
    };
  }, [isVisible, isFollowing]);

  const handleClick = () => {
    setClickCount(prev => prev + 1);
    setMood('excited');
    setTimeout(() => setMood('happy'), 1000);
  };

  const getPetEmoji = () => {
    switch (mood) {
      case 'happy':
        return '🐱';
      case 'curious':
        return '😸';
      case 'sleeping':
        return '😴';
      case 'excited':
        return '🤩';
      default:
        return '🐱';
    }
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        ref={petRef}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleClick}
        className="fixed z-[9998] cursor-pointer select-none"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          pointerEvents: 'auto',
        }}
      >
        <motion.div
          animate={{
            rotate: mood === 'excited' ? [0, -10, 10, -10, 0] : 0,
            y: mood === 'sleeping' ? [0, -5, 0] : 0,
          }}
          transition={{
            duration: mood === 'excited' ? 0.5 : 2,
            repeat: mood === 'sleeping' ? Infinity : 0,
            ease: 'easeInOut',
          }}
          className="text-6xl relative"
        >
          {getPetEmoji()}
          {clickCount > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: [0, 1, 0], y: -30 }}
              className="absolute -top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-sm font-bold text-purple-600"
            >
              {clickCount === 1 && 'Meow!'}
              {clickCount === 2 && 'Purr~'}
              {clickCount === 3 && '😸'}
              {clickCount > 3 && '❤️'}
            </motion.div>
          )}
        </motion.div>
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute inset-0 bg-purple-400 rounded-full blur-xl -z-10"
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default Pet;

