import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * BOOK COVER (0.0 – 0.10)
 * Closed hardcover book with idle breathing animation
 */
const BookCover: React.FC<{ progress: number }> = ({ progress }) => {
  const coverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!coverRef.current) return;

    // Book cover opacity and rotation based on progress
    const coverProgress = Math.min(progress / 0.1, 1); // Normalize to 0-1 within this phase
    const rotation = coverProgress * 160; // Rotates -160deg as it opens

    gsap.set(coverRef.current, {
      rotateY: -rotation,
      opacity: 1 - Math.max((progress - 0.1) * 5, 0), // Fade out after 0.1
    });
  }, [progress]);

  return (
    <div ref={coverRef} className="absolute inset-0 flex items-center justify-center">
      <div
        className="relative"
        style={{
          perspective: '1200px',
          transformStyle: 'preserve-3d',
          animation: progress < 0.1 ? 'breathe 3s infinite ease-in-out' : 'none',
        }}
      >
        <div
          className="w-fit mx-auto"
          style={{
            width: '680px',
            height: '480px',
            background: '#3d2e20',
            borderRadius: '8px',
            boxShadow: '0 24px 48px rgba(0, 0, 0, 0.18)',
            position: 'relative',
          }}
        >
          {/* Left spine */}
          <div
            style={{
              position: 'absolute',
              left: '-32px',
              top: 0,
              width: '32px',
              height: '100%',
              background: '#2a1f15',
              borderRadius: '8px 0 0 8px',
            }}
          />

          {/* Border inset */}
          <div
            style={{
              position: 'absolute',
              inset: '12px',
              border: '2px solid #5a4535',
              borderRadius: '4px',
            }}
          />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1 className="font-serif italic text-2xl text-kraft-light mb-12">
              How it started.
            </h1>
            <p className="font-mono text-xs tracking-widest text-kraft-light">
              HRISHIKESH KALOLA
            </p>

            {/* HK Monogram - bottom right */}
            <div
              style={{
                position: 'absolute',
                bottom: '20px',
                right: '20px',
                width: '40px',
                height: '40px',
                border: '1px solid #8a7560',
                borderRadius: '2px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '12px',
                fontFamily: '"DM Mono", monospace',
                color: '#8a7560',
                fontWeight: 'bold',
              }}
            >
              HK
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * PAGE 1 - CLASSROOM (0.20 – 0.40)
 */
const PageOne: React.FC<{ progress: number }> = ({ progress }) => {
  const refs = {
    blackboard: useRef<HTMLDivElement>(null),
    teacher: useRef<HTMLDivElement>(null),
    desks: useRef<HTMLDivElement>(null),
    youFigure: useRef<HTMLDivElement>(null),
    speechBubble: useRef<HTMLDivElement>(null),
    lightbulb: useRef<HTMLDivElement>(null),
  };

  const pageProgress = Math.max((progress - 0.2) / 0.2, 0); // Normalize to 0-1 within page phase

  useEffect(() => {
    // Stagger animations for each element
    const staggerOffsets = [0, 0.08, 0.16, 0.24, 0.32, 0.4];
    const elements = [refs.blackboard, refs.teacher, refs.desks, refs.youFigure, refs.speechBubble, refs.lightbulb];

    elements.forEach((ref, idx) => {
      if (!ref.current) return;

      const elementProgress = Math.max((pageProgress - staggerOffsets[idx] * 1.25) * 1.25, 0);
      const scaleY = Math.min(elementProgress, 1);

      // Special handling for lightbulb - spring effect
      let finalScale = scaleY;
      if (idx === 5 && scaleY > 0) {
        // Spring overshoot: goes to 1.1 then settles to 1.0
        finalScale = Math.min(scaleY * 1.1, 1.1);
      }

      gsap.set(ref.current, {
        scaleY: finalScale,
        opacity: scaleY,
        transformOrigin: 'bottom',
      });
    });

    // Speech bubble text animation (word by word)
    if (refs.speechBubble.current) {
      const textProgress = Math.max(pageProgress - 0.32, 0);
      const words = refs.speechBubble.current.querySelectorAll('.word');
      words.forEach((word, idx) => {
        const wordStart = (idx / words.length) * 0.08;
        const wordProg = Math.max((textProgress - wordStart) / (0.08 / words.length), 0);
        (word as HTMLElement).style.opacity = Math.min(wordProg, 1).toString();
      });
    }
  }, [progress]);

  return (
    <div className="absolute inset-0 flex items-center justify-center px-8">
      <div className="flex gap-12 h-96 w-full max-w-4xl">
        {/* Left page */}
        <div
          style={{
            flex: 1,
            background: '#faf6f0',
            borderTopLeftRadius: '8px',
            borderBottomLeftRadius: '8px',
            border: '1px solid #c9b89a',
            padding: '2rem',
            position: 'relative',
          }}
        >
          <p className="font-mono text-xs text-kraft-medium absolute bottom-4 left-4">01</p>
          <div
            style={{
              position: 'absolute',
              inset: '12px',
              border: '1px solid #c9b89a',
              borderRadius: '2px',
            }}
          />
        </div>

        {/* Right page - diorama */}
        <div
          style={{
            flex: 1,
            background: '#faf6f0',
            borderTopRightRadius: '8px',
            borderBottomRightRadius: '8px',
            border: '1px solid #c9b89a',
            padding: '2rem',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Blackboard */}
          <div
            ref={refs.blackboard}
            style={{
              position: 'absolute',
              top: '2rem',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '80%',
              height: '60px',
              background: '#3a4a3a',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '11px',
              fontFamily: '"DM Mono", monospace',
              color: '#f5f5f5',
              letterSpacing: '0.05em',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
            }}
          >
            x² + 3x = 0
          </div>

          {/* Teacher figure */}
          <div
            ref={refs.teacher}
            style={{
              position: 'absolute',
              top: '30%',
              left: '70%',
              width: '30px',
              height: '80px',
              background: '#5a4535',
              borderRadius: '2px',
              transformOrigin: 'bottom',
            }}
          />

          {/* Desk rows */}
          <div
            ref={refs.desks}
            style={{
              position: 'absolute',
              bottom: '2rem',
              left: '2rem',
              right: '2rem',
              transformOrigin: 'bottom',
            }}
          >
            {[0, 1, 2].map((row) => (
              <div key={row} className="flex gap-3 mb-2" style={{ transform: `scaleX(${1 - row * 0.1})` }}>
                {[0, 1, 2, 3].map((desk) => (
                  <div
                    key={desk}
                    style={{
                      width: '20px',
                      height: '12px',
                      background: '#c9b89a',
                      borderRadius: '1px',
                    }}
                  />
                ))}
              </div>
            ))}
          </div>

          {/* You figure */}
          <div
            ref={refs.youFigure}
            style={{
              position: 'absolute',
              bottom: '2rem',
              right: '2rem',
              width: '25px',
              height: '60px',
              background: '#3d2e20',
              borderRadius: '2px',
              transformOrigin: 'bottom',
            }}
          />

          {/* Speech bubble */}
          <div
            ref={refs.speechBubble}
            style={{
              position: 'absolute',
              top: '25%',
              right: '10%',
              background: '#fefefe',
              border: '2px solid #3d2e20',
              borderRadius: '8px',
              padding: '12px 16px',
              maxWidth: '200px',
              fontSize: '13px',
              fontFamily: '"Playfair Display", serif',
              fontStyle: 'italic',
              color: '#3d2e20',
              transformOrigin: 'bottom left',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
            }}
          >
            <span className="word">There's a branch</span> <span className="word">of computers</span>{' '}
            <span className="word">that can predict the future.</span>
          </div>

          {/* Lightbulb */}
          <div
            ref={refs.lightbulb}
            style={{
              position: 'absolute',
              top: '15%',
              right: '25%',
              width: '40px',
              height: '50px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              transformOrigin: 'center',
              animation: 'pulse 1.5s infinite',
            }}
          >
            <div
              style={{
                width: '28px',
                height: '28px',
                background: '#f5c842',
                borderRadius: '50% 50% 50% 40%',
              }}
            />
            <div
              style={{
                width: '8px',
                height: '8px',
                background: '#a0a0a0',
                borderRadius: '2px',
                marginTop: '2px',
              }}
            />
            {/* Spark shapes */}
            {[0, 1, 2, 3].map((idx) => (
              <div
                key={idx}
                style={{
                  position: 'absolute',
                  width: '6px',
                  height: '6px',
                  background: '#f5c842',
                  transform: `rotate(${idx * 90}deg) translateX(35px) scale(${pageProgress > 0.4 ? 1 : 0})`,
                  transformOrigin: '0 0',
                  animation: pageProgress > 0.4 ? 'pulse 0.8s ease-out' : 'none',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * PAGE TURN 1 (0.40 – 0.55)
 */
const PageTurn1: React.FC<{ progress: number }> = ({ progress }) => {
  const turnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!turnRef.current) return;

    const turnProgress = Math.max((progress - 0.4) / 0.15, 0);
    const rotation = turnProgress * 180;
    const arc = Math.sin(turnProgress * Math.PI) * 2; // Arc effect at midpoint

    gsap.set(turnRef.current, {
      rotateY: -rotation,
      rotateZ: arc,
      opacity: Math.max(1 - turnProgress, 0),
    });
  }, [progress]);

  return (
    <div
      ref={turnRef}
      className="absolute inset-0 flex items-center justify-center"
      style={{
        perspective: '1200px',
        transformStyle: 'preserve-3d',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '800px',
          height: '384px',
          background: '#ede4d4',
          borderRadius: '8px',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
        }}
      />
    </div>
  );
};

/**
 * PAGE 2 - DORM ROOM (0.55 – 0.72)
 */
const PageTwo: React.FC<{ progress: number }> = ({ progress }) => {
  const pageProgress = Math.max((progress - 0.55) / 0.17, 0);

  return (
    <div className="absolute inset-0 flex items-center justify-center px-8">
      <div className="flex gap-12 h-96 w-full max-w-4xl">
        {/* Left page */}
        <div
          style={{
            flex: 1,
            background: '#faf6f0',
            borderTopLeftRadius: '8px',
            borderBottomLeftRadius: '8px',
            border: '1px solid #c9b89a',
            padding: '2rem',
            position: 'relative',
          }}
        >
          <p className="font-mono text-xs text-kraft-medium absolute bottom-4 left-4">02</p>
        </div>

        {/* Right page - diorama */}
        <div
          style={{
            flex: 1,
            background: '#faf6f0',
            borderTopRightRadius: '8px',
            borderBottomRightRadius: '8px',
            border: '1px solid #c9b89a',
            padding: '2rem',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Window */}
          <div
            style={{
              position: 'absolute',
              top: '1.5rem',
              left: '50%',
              transform: `translateX(-50%) scaleY(${Math.max((pageProgress - 0) * 1.5, 0)})`,
              width: '100px',
              height: '80px',
              background: '#1a1f3a',
              borderRadius: '4px',
              transformOrigin: 'top',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
            }}
          >
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                style={{
                  width: '2px',
                  height: '2px',
                  background: '#fff',
                  borderRadius: '50%',
                }}
              />
            ))}
          </div>

          {/* Star frame around window */}
          <div
            style={{
              position: 'absolute',
              top: '1.5rem',
              left: '50%',
              transform: `translateX(-50%) scaleY(${Math.max((pageProgress - 0) * 1.5, 0)})`,
              width: '120px',
              height: '100px',
              border: '3px solid #c9b89a',
              borderRadius: '2px',
              transformOrigin: 'top',
              pointerEvents: 'none',
            }}
          />

          {/* Desk */}
          <div
            style={{
              position: 'absolute',
              bottom: '2rem',
              left: '50%',
              transform: `translateX(-50%) scaleY(${Math.max((pageProgress - 0.1) * 1.25, 0)})`,
              width: '120px',
              height: '20px',
              background: '#b89d7a',
              borderRadius: '2px',
              transformOrigin: 'bottom',
            }}
          />

          {/* Laptop on desk */}
          <div
            style={{
              position: 'absolute',
              bottom: '2.8rem',
              left: '50%',
              transform: `translateX(-50%) scaleY(${Math.max((pageProgress - 0.15) * 1.25, 0)})`,
              width: '70px',
              height: '45px',
              background: '#8a8a8a',
              borderRadius: '4px',
              transformOrigin: 'bottom',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                width: '60px',
                height: '35px',
                background: `rgba(245, 200, 66, ${Math.max((pageProgress - 0.15) * 0.6, 0)})`,
                borderRadius: '2px',
              }}
            />
          </div>

          {/* Clock on wall */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              right: '1.5rem',
              transform: `scaleY(${Math.max((pageProgress - 0.2) * 1.25, 0)})`,
              width: '30px',
              height: '30px',
              border: '2px solid #c9b89a',
              borderRadius: '50%',
              transformOrigin: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '8px',
              fontFamily: '"DM Mono", monospace',
              color: '#c9b89a',
            }}
          >
            •
          </div>

          {/* You figure at laptop */}
          <div
            style={{
              position: 'absolute',
              bottom: '2.5rem',
              left: '45%',
              transform: `scaleY(${Math.max((pageProgress - 0.25) * 1.25, 0)})`,
              width: '20px',
              height: '50px',
              background: '#3d2e20',
              borderRadius: '2px',
              transformOrigin: 'bottom',
            }}
          />

          {/* Crumpled papers slide in */}
          <div
            style={{
              position: 'absolute',
              bottom: '2rem',
              left: `${15 - pageProgress * 0.4 * 15}%`,
              width: '12px',
              height: '12px',
              background: '#d4c4a8',
              borderRadius: '8px',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '2.5rem',
              right: `${15 - Math.max((pageProgress - 0.1) * 0.4 * 15, 0)}%`,
              width: '10px',
              height: '10px',
              background: '#d4c4a8',
              borderRadius: '6px',
            }}
          />

          {/* Caption */}
          <div
            style={{
              position: 'absolute',
              bottom: '0.5rem',
              left: '50%',
              transform: `translateX(-50%) translateY(${Math.max((1 - pageProgress) * 20, 0)}px)`,
              maxWidth: '90%',
              textAlign: 'center',
              fontSize: '14px',
              fontFamily: '"Playfair Display", serif',
              fontStyle: 'italic',
              color: '#3d2e20',
              opacity: Math.max(pageProgress - 0.6, 0) * 1.8,
            }}
          >
            No roadmap. Just curiosity and Python at 1am.
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * PAGE TURN 2 (0.72 – 0.82)
 */
const PageTurn2: React.FC<{ progress: number }> = ({ progress }) => {
  const turnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!turnRef.current) return;

    const turnProgress = Math.max((progress - 0.72) / 0.1, 0);
    const rotation = turnProgress * 180;
    const arc = Math.sin(turnProgress * Math.PI) * 2;

    gsap.set(turnRef.current, {
      rotateY: -rotation,
      rotateZ: arc,
      opacity: Math.max(1 - turnProgress, 0),
    });
  }, [progress]);

  return (
    <div
      ref={turnRef}
      className="absolute inset-0 flex items-center justify-center"
      style={{
        perspective: '1200px',
        transformStyle: 'preserve-3d',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '800px',
          height: '384px',
          background: '#ede4d4',
          borderRadius: '8px',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
        }}
      />
    </div>
  );
};

/**
 * PAGE 3 - TERMINAL / EUREKA (0.82 – 1.00)
 */
const PageThree: React.FC<{ progress: number }> = ({ progress }) => {
  const pageProgress = Math.max((progress - 0.82) / 0.18, 0);

  const terminalLines = [
    '$ python train.py',
    'Epoch 1/10 ··· loss: 2.3401',
    'Epoch 5/10 ··· loss: 0.8821',
    'Epoch 10/10 ··· loss: 0.0821',
    'Training complete. ✓',
  ];

  return (
    <div className="absolute inset-0 flex items-center justify-center px-8">
      <div className="flex gap-12 h-96 w-full max-w-4xl">
        {/* Left page */}
        <div
          style={{
            flex: 1,
            background: '#faf6f0',
            borderTopLeftRadius: '8px',
            borderBottomLeftRadius: '8px',
            border: '1px solid #c9b89a',
            padding: '2rem',
            position: 'relative',
          }}
        >
          <p className="font-mono text-xs text-kraft-medium absolute bottom-4 left-4">03</p>
        </div>

        {/* Right page - diorama */}
        <div
          style={{
            flex: 1,
            background: '#faf6f0',
            borderTopRightRadius: '8px',
            borderBottomRightRadius: '8px',
            border: '1px solid #c9b89a',
            padding: '2rem',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Desk surface */}
          <div
            style={{
              position: 'absolute',
              bottom: '2rem',
              left: '2rem',
              right: '2rem',
              height: '20px',
              background: '#b89d7a',
              borderRadius: '2px',
              transform: `scaleY(${Math.max((pageProgress - 0) * 1.5, 0)})`,
              transformOrigin: 'bottom',
            }}
          />

          {/* Laptop - isometric */}
          <div
            style={{
              position: 'absolute',
              bottom: '2.8rem',
              left: '50%',
              transform: `translateX(-50%) scaleY(${Math.max((pageProgress - 0.08) * 1.5, 0)}) skewX(2deg)`,
              width: '100px',
              height: '60px',
              background: '#8a8a8a',
              borderRadius: '4px',
              transformOrigin: 'bottom',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Laptop screen */}
            <div
              style={{
                width: '85px',
                height: '50px',
                background: '#2a2a2a',
                borderRadius: '2px',
                padding: '8px',
                fontSize: '8px',
                fontFamily: '"DM Mono", monospace',
                color: '#fff',
                overflow: 'hidden',
                lineHeight: '8px',
              }}
            >
              {terminalLines.map((line, idx) => {
                const lineProgress = Math.max((pageProgress - 0.16 - idx * 0.04) * 2, 0);
                const isSuccessLine = idx >= 3;
                return (
                  <div
                    key={idx}
                    style={{
                      opacity: Math.min(lineProgress, 1),
                      color: isSuccessLine ? '#4ade80' : '#fff',
                    }}
                  >
                    {line}
                  </div>
                );
              })}
              {/* Cursor blink */}
              <div
                style={{
                  display: pageProgress > 0.16 ? 'inline' : 'none',
                  animation: 'blink-cursor 0.8s infinite',
                  fontSize: '8px',
                  marginLeft: '2px',
                }}
              >
                |
              </div>
            </div>
          </div>

          {/* Screen glow */}
          <div
            style={{
              position: 'absolute',
              bottom: '2.8rem',
              left: '50%',
              transform: `translateX(-50%)`,
              width: '120px',
              height: '80px',
              background: `radial-gradient(ellipse at center, rgba(74,222,128,${Math.max((pageProgress - 0.25) * 0.15, 0)}) 0%, transparent 70%)`,
              borderRadius: '50%',
              filter: 'blur(24px)',
              pointerEvents: 'none',
            }}
          />

          {/* EUREKA burst */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: `translate(-50%, -50%) scale(${Math.max((pageProgress - 0.5) * 2, 0)})`,
              transformOrigin: 'center',
              opacity: Math.max((pageProgress - 0.5) * 2, 0),
            }}
          >
            {/* Outer starburst points */}
            {[0, 1, 2, 3, 4, 5].map((idx) => (
              <div
                key={`outer-${idx}`}
                style={{
                  position: 'absolute',
                  width: '4px',
                  height: '40px',
                  background: '#f5c842',
                  left: '48%',
                  top: '10%',
                  transform: `rotate(${idx * 60}deg)`,
                  transformOrigin: `0 ${40}px`,
                }}
              />
            ))}

            {/* Inner circle */}
            <div
              style={{
                position: 'absolute',
                width: '80px',
                height: '80px',
                background: '#fefefe',
                borderRadius: '50%',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
                fontFamily: '"Playfair Display", serif',
                fontWeight: 'bold',
                fontStyle: 'italic',
                color: '#3d2e20',
              }}
            >
              EUREKA
            </div>

            {/* Spark shapes radiating */}
            {[0, 1, 2, 3, 4, 5, 6, 7].map((idx) => (
              <div
                key={`spark-${idx}`}
                style={{
                  position: 'absolute',
                  width: '6px',
                  height: '6px',
                  background: '#f5c842',
                  left: '50%',
                  top: '50%',
                  transform: `translate(-50%, -50%) rotate(${idx * 45}deg) translateX(80px) translateY(${Math.max((pageProgress - 0.5) * 40, 0)}px)`,
                  borderRadius: '50%',
                  opacity: Math.max(1 - (pageProgress - 0.5) * 2, 0),
                }}
              />
            ))}
          </div>

          {/* Final caption */}
          <div
            style={{
              position: 'absolute',
              bottom: '0.5rem',
              left: '50%',
              transform: `translateX(-50%) translateY(${Math.max((1 - Math.min(pageProgress, 1)) * 20, 0)}px)`,
              maxWidth: '90%',
              textAlign: 'center',
              fontSize: '13px',
              fontFamily: '"Playfair Display", serif',
              fontStyle: 'italic',
              color: '#3d2e20',
              opacity: Math.max(pageProgress - 0.7, 0) * 3.33,
            }}
          >
            The gap between a notebook and production. That's where I live.
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * MAIN POP-UP BOOK COMPONENT
 * Orchestrates scroll-triggered animation sequence
 */
const PopUpBook: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = React.useState(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const scrollTrigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: 'bottom bottom',
      pin: true,
      pinSpacing: true,
      onUpdate: (self) => {
        setProgress(self.progress);
      },
    });

    return () => {
      scrollTrigger.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden"
      style={{
        background: 'radial-gradient(circle, #f0e8db 0%, #f7f5f0 100%)',
      }}
    >
      {/* Book container with 3D perspective */}
      <div
        className="book-container"
        style={{
          perspective: '1200px',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Book cover */}
        {progress < 0.2 && <BookCover progress={progress} />}

        {/* Page 1 - Classroom */}
        {progress >= 0.15 && progress < 0.45 && <PageOne progress={progress} />}

        {/* Page turn 1 */}
        {progress >= 0.35 && progress < 0.6 && <PageTurn1 progress={progress} />}

        {/* Page 2 - Dorm room */}
        {progress >= 0.5 && progress < 0.8 && <PageTwo progress={progress} />}

        {/* Page turn 2 */}
        {progress >= 0.65 && progress < 0.88 && <PageTurn2 progress={progress} />}

        {/* Page 3 - Terminal */}
        {progress >= 0.75 && <PageThree progress={progress} />}
      </div>
    </div>
  );
};

export default PopUpBook;
