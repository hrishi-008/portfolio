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

  const desktopAnimation = {
    scale: [1, 1.2, 1],
    rotate: [0, 180, 360],
    x: [0, 50, 0],
    y: [0, 30, 0],
  };

  const mobileAnimation = {
    scale: [1, 1.1, 1],
    rotate: [0, 90, 0],
    x: [0, 20, 0],
    y: [0, 15, 0],
  };

  const desktopTransition = {
    duration: 10,
    repeat: Infinity,
    ease: "easeInOut"
  };

  const mobileTransition = {
    duration: 5,
    repeat: Infinity,
    ease: "linear"
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <motion.div
        animate={isMobile ? mobileAnimation : desktopAnimation}
        transition={isMobile ? mobileTransition : desktopTransition}
        className={`absolute ${isMobile ? '-top-10 -right-10 w-[200px] h-[200px]' : '-top-20 -right-20 w-[500px] h-[500px]'} rounded-full bg-blue-200 opacity-30 blur-3xl`}
      />
      <motion.div
        animate={isMobile ? {
          ...mobileAnimation,
          rotate: [90, 0, 90],
          x: [0, -20, 0],
          y: [0, -15, 0],
        } : {
          ...desktopAnimation,
          rotate: [360, 180, 0],
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={isMobile ? mobileTransition : desktopTransition}
        className={`absolute ${isMobile ? '-bottom-10 -left-10 w-[200px] h-[200px]' : '-bottom-20 -left-20 w-[500px] h-[500px]'} rounded-full bg-indigo-200 opacity-30 blur-3xl`}
      />
    </div>
  );
};

export default AnimatedBackground; 