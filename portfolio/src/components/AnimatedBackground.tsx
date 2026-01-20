import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Generate random grid lines
  const generateGridLines = (count: number) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      isHorizontal: Math.random() > 0.5,
      color: Math.random() > 0.5 ? 'blue' : 'purple',
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 10,
      position: Math.random() * 100,
    }));
  };

  const gridLines = generateGridLines(isMobile ? 8 : 15);

  // Generate floating particles
  const particles = Array.from({ length: isMobile ? 15 : 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    delay: Math.random() * 10,
    duration: 15 + Math.random() * 10,
  }));

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden">
      {/* Base grid with enhanced opacity */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(128,128,128,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(128,128,128,0.08)_1px,transparent_1px)] bg-[size:32px_32px]" />
      
      {/* Animated neon lines */}
      {gridLines.map((line) => (
        <motion.div
          key={line.id}
          className={`absolute ${
            line.isHorizontal ? 'h-[1px] w-full' : 'w-[1px] h-full'
          } ${
            line.color === 'blue' 
              ? 'bg-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.6)]' 
              : 'bg-purple-400 shadow-[0_0_12px_rgba(168,85,247,0.6)]'
          }`}
          initial={{
            opacity: 0,
            [line.isHorizontal ? 'top' : 'left']: `${line.position}%`,
          }}
          animate={{
            opacity: [0, 0.5, 0],
            [line.isHorizontal ? 'top' : 'left']: [
              `${line.position}%`,
              `${line.position + (line.isHorizontal ? 100 : -100)}%`,
            ],
          }}
          transition={{
            duration: line.duration,
            repeat: Infinity,
            delay: line.delay,
            ease: "linear",
          }}
        />
      ))}

      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-blue-400/40 to-purple-400/40"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.sin(particle.id) * 20, 0],
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Enhanced glowing orbs for depth */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-blue-400/20 to-cyan-400/20 blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-purple-400/20 to-pink-400/20 blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.15, 0.3, 0.15],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-indigo-400/15 via-purple-400/15 to-pink-400/15 blur-3xl"
      />
    </div>
  );
};

export default AnimatedBackground; 