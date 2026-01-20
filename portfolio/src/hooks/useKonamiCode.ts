import { useEffect, useState } from 'react';

const KONAMI_CODE = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'KeyB',
  'KeyA',
];

export const useKonamiCode = (callback: () => void) => {
  const [sequence, setSequence] = useState<string[]>([]);
  const [isActivated, setIsActivated] = useState(false);

  useEffect(() => {
    if (isActivated) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      setSequence(prev => {
        const newSequence = [...prev, e.code].slice(-KONAMI_CODE.length);
        
        if (newSequence.length === KONAMI_CODE.length) {
          const isMatch = newSequence.every((key, index) => key === KONAMI_CODE[index]);
          
          if (isMatch) {
            setIsActivated(true);
            callback();
            return [];
          }
        }
        
        return newSequence;
      });
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [callback, isActivated]);

  return isActivated;
};

