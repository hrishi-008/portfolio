import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTypingAnimation } from '../hooks/useTypingAnimation';

const roles = [
  'AI / ML Developer',
  'CSE Engineer',
  'Full Stack Developer',
  'Problem Solver',
];

const Hero: React.FC = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const { displayedText, isComplete } = useTypingAnimation(
    roles[currentRoleIndex],
    100,
    500
  );

  useEffect(() => {
    if (isComplete) {
      const timeout = setTimeout(() => {
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [isComplete]);

  // Floating particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 10 + Math.random() * 10,
  }));

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden pt-16 md:pt-20">
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-blue-400/30 to-purple-400/30"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.sin(particle.id) * 20, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-4"
            >
              <span className="text-lg md:text-xl text-gray-500 font-medium">Hello, I'm</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight"
            >
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient font-display">
                  Hrishikesh
                </span>
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-lg blur-2xl -z-10"
                  animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.7, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </span>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="h-12 md:h-16 mb-6 flex items-center"
            >
              <h2 className="text-2xl md:text-4xl font-semibold text-gray-700">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  {displayedText}
                </span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block ml-2"
                >
                  |
                </motion.span>
              </h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-gray-600 mb-6 max-w-lg mx-auto md:mx-0 text-lg leading-relaxed"
            >
              I live in that sweet spot where AI, product, and chaos meet. I've built everything from RAG systems that actually work (not just sound fancy in decks) to scalable pipelines running on cloud infra that doesn't randomly catch fire. I think like a builder, move like a founding engineer, and talk like a PM who actually knows what's under the hood.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-2xl mx-auto md:mx-0"
            >
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="btn btn-primary ripple group relative overflow-hidden flex items-center justify-center gap-2 px-4 py-3 text-sm"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get In Touch
                  <motion.svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </motion.svg>
                </span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#projects"
                className="btn btn-secondary group flex items-center justify-center gap-2 px-4 py-3 text-sm"
              >
                <svg className="w-4 h-4 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <span>View Projects</span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="https://www.linkedin.com/in/hrishk/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 bg-[#0077B5]/10 text-[#0077B5] border border-[#0077B5]/20 rounded-lg font-medium hover:bg-[#0077B5]/20 hover:border-[#0077B5]/40 transition-all duration-200 flex items-center justify-center gap-2 group text-sm"
              >
                <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span>LinkedIn</span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="https://www.upwork.com/freelancers/~0114abe46f114f423f"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 bg-[#1C1C1C]/10 text-[#5cb85c] border border-[#5cb85c]/20 rounded-lg font-medium hover:bg-[#1C1C1C]/20 hover:border-[#5cb85c]/40 transition-all duration-200 flex items-center justify-center gap-2 group text-sm"
              >
                <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.43c-1.14 0-2.06-.93-2.06-2.06 0-1.14.92-2.06 2.06-2.06 1.14 0 2.06.92 2.06 2.06 0 1.13-.92 2.06-2.06 2.06zm15.11 13.02h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67h-3.56V9h3.42v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29z" />
                </svg>
                <span>Upwork</span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="https://aiforevery1.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 bg-transparent text-gray-700 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 flex items-center justify-center gap-2 group text-sm"
              >
                <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.539 8.242H1.46V4h21.08v4.242zM1.45 10.275h21.1v7.178c0 .992-.797 1.792-1.792 1.792H3.245c-.993 0-1.795-.8-1.795-1.792v-7.178zm0 9.27v2.451c0 .993.802 1.795 1.795 1.795H20.745c.993 0 1.792-.802 1.792-1.795V19.545H1.45z" />
                </svg>
                <span>Substack</span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="https://medium.com/@hackathon.hrishi"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 bg-black/10 text-black border border-black/20 rounded-lg font-medium hover:bg-black/20 hover:border-black/40 transition-all duration-200 flex items-center justify-center gap-2 group text-sm"
              >
                <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42c1.87 0 3.38 2.88 3.38 6.42M24 12c0 2.98-.46 5.4-1.03 5.4-.57 0-1.04-2.42-1.04-5.4s.47-5.4 1.04-5.4c.57 0 1.03 2.42 1.03 5.4z" />
                </svg>
                <span>Medium</span>
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10">
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="glass-effect-premium rounded-3xl p-8 shadow-2xl"
              >
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Core Strengths</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {/* Technical Qualities */}
                    <motion.div
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="flex items-center space-x-3 p-3 rounded-xl hover:bg-white/50 transition-colors"
                    >
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">AI Enthusiast</h3>
                        <p className="text-sm text-gray-500">ML/DL Practitioner</p>
                      </div>
                    </motion.div>

                    {/* Personal Quality 1 */}
                    <motion.div
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="flex items-center space-x-3 p-3 rounded-xl hover:bg-white/50 transition-colors"
                    >
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">Problem Solver</h3>
                        <p className="text-sm text-gray-500">Analytical Thinker</p>
                      </div>
                    </motion.div>

                    {/* Technical Quality 2 */}
                    <motion.div
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="flex items-center space-x-3 p-3 rounded-xl hover:bg-white/50 transition-colors"
                    >
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500/20 to-teal-500/20 flex items-center justify-center">
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">DevOps Culture</h3>
                        <p className="text-sm text-gray-500">Microservice First</p>
                      </div>
                    </motion.div>

                    {/* Personal Quality 2 */}
                    <motion.div
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="flex items-center space-x-3 p-3 rounded-xl hover:bg-white/50 transition-colors"
                    >
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center">
                        <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">Team Player</h3>
                        <p className="text-sm text-gray-500">Collaborative Spirit</p>
                      </div>
                    </motion.div>

                    {/* Technical Quality 3 */}
                    <motion.div
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="flex items-center space-x-3 p-3 rounded-xl hover:bg-white/50 transition-colors"
                    >
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500/20 to-blue-500/20 flex items-center justify-center">
                        <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">Full Stack</h3>
                        <p className="text-sm text-gray-500">Backend First Developer</p>
                      </div>
                    </motion.div>

                    {/* Personal Quality 3 */}
                    <motion.div
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="flex items-center space-x-3 p-3 rounded-xl hover:bg-white/50 transition-colors"
                    >
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-500/20 to-orange-500/20 flex items-center justify-center">
                        <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">Innovative</h3>
                        <p className="text-sm text-gray-500">Creative Solutions</p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;