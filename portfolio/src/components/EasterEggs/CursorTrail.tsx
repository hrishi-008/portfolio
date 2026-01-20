import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface TrailPoint {
  id: number;
  x: number;
  y: number;
}

interface CursorTrailProps {
  isActive: boolean;
}

const CursorTrail: React.FC<CursorTrailProps> = ({ isActive }) => {
  const [trail, setTrail] = useState<TrailPoint[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!isActive) {
      setTrail([]);
      return;
    }

    let trailId = 0;
    const maxTrailLength = 10;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      setTrail(prev => {
        const newTrail = [
          { id: trailId++, x: e.clientX, y: e.clientY },
          ...prev.slice(0, maxTrailLength - 1),
        ];
        return newTrail;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isActive]);

  if (!isActive) return null;

  return (
    <>
      {trail.map((point, index) => {
        const size = (trail.length - index) * 3;
        const opacity = (trail.length - index) / trail.length * 0.5;
        
        return (
          <motion.div
            key={point.id}
            className="fixed pointer-events-none z-[9997] rounded-full"
            style={{
              left: point.x - size / 2,
              top: point.y - size / 2,
              width: size,
              height: size,
              background: `radial-gradient(circle, rgba(168, 85, 247, ${opacity}) 0%, transparent 70%)`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3 }}
          />
        );
      })}
    </>
  );
};

export default CursorTrail;

