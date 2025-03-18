import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Hi, I'm{' '}
              <span className="text-gradient">Hrishikesh</span>
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl md:text-3xl text-gray-600 mb-8"
            >
              AI / ML Developer and CSE Engineer
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-gray-600 mb-8 max-w-lg mx-auto md:mx-0"
            >
              Passionate about creating innovative solutions using cutting-edge technologies.
              Specialized in AI/ML, keen in cloud, and building scalable applications.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4 justify-center md:justify-start"
            >
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="px-6 py-3 bg-transparent text-primary-color border border-primary-color rounded-lg font-medium hover:bg-primary-color/5 transition-colors duration-300 flex items-center gap-2"
              >
                Get In Touch
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.98 }}
                href="#projects"
                className="px-6 py-3 bg-transparent text-primary-color border border-primary-color rounded-lg font-medium hover:bg-primary-color/5 transition-colors duration-300 flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                </svg>
                View Projects
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                href="https://www.linkedin.com/in/hrishk/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#0077B5]/10 text-[#0077B5] border border-[#0077B5]/20 rounded-lg font-medium hover:bg-[#0077B5]/20 transition-colors duration-300 flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                Connect on LinkedIn
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
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="glass-effect rounded-xl p-5 bg-white/80 backdrop-blur-sm border border-white/10"
              >
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-primary-color/5 flex items-center justify-center">
                      {/* <svg className="w-5 h-5 text-primary-color" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                      </svg> */}
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {/* Technical Qualities */}
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-primary-color/5 flex items-center justify-center">
                          <svg className="w-5 h-5 text-primary-color" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-800">AI Enthusiast</h3>
                          <p className="text-sm text-gray-500">ML/DL Practitioner</p>
                        </div>
                      </div>

                      {/* Personal Quality 1 */}
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-primary-color/5 flex items-center justify-center">
                          <svg className="w-5 h-5 text-primary-color" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"/>
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-800">Problem Solver</h3>
                          <p className="text-sm text-gray-500">Analytical Thinker</p>
                        </div>
                      </div>

                      {/* Technical Quality 2 */}
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-primary-color/5 flex items-center justify-center">
                          <svg className="w-5 h-5 text-primary-color" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-800">DevOps Culture</h3>
                          <p className="text-sm text-gray-500">Microservice First</p>
                        </div>
                      </div>

                      {/* Personal Quality 2 */}
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-primary-color/5 flex items-center justify-center">
                          <svg className="w-5 h-5 text-primary-color" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-800">Team Player</h3>
                          <p className="text-sm text-gray-500">Collaborative Spirit</p>
                        </div>
                      </div>

                      {/* Technical Quality 3 */}
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-primary-color/5 flex items-center justify-center">
                          <svg className="w-5 h-5 text-primary-color" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"/>
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-800">Full Stack</h3>
                          <p className="text-sm text-gray-500">Backend First Developer</p>
                        </div>
                      </div>

                      {/* Personal Quality 3 */}
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-primary-color/5 flex items-center justify-center">
                          <svg className="w-5 h-5 text-primary-color" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-800">Innovative</h3>
                          <p className="text-sm text-gray-500">Creative Solutions</p>
                        </div>
                      </div>
                    </div>
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