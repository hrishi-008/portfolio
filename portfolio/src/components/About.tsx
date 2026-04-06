import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const skills = [
    { name: 'Python', level: 90 },
    { name: 'LangChain/LangGraph', level: 90 },
    { name: 'Machine Learning', level: 85 },
    { name: 'Docker', level: 80 },
    { name: 'Cloud (GCP/Azure)', level: 75 },
    { name: 'SQL', level: 75 },
    { name: 'Transformers/LoRA', level: 75 },
    { name: 'DevOps', level: 70 },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden" style={{ background: '#f7f5f0' }}>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-kraft-dark mb-4">About Me</h2>
          <div className="w-24 h-1 mx-auto" style={{ background: '#c9b89a' }}></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div
              className="shadow-paper-lg rounded-lg p-8"
              style={{
                background: '#faf6f0',
                border: '2px solid #c9b89a',
              }}
            >
              <h3 className="text-2xl font-serif font-semibold text-kraft-dark mb-4">Who I Am</h3>
              <p className="text-kraft-medium mb-4 font-sans text-sm leading-relaxed">
                I live in that sweet spot where AI, product, and chaos meet. I've built everything from RAG systems that actually work (not just sound fancy in decks) to scalable pipelines running on cloud infra that doesn't randomly catch fire. I think like a builder, move like a founding engineer, and talk like a PM who actually knows what's under the hood.
              </p>
              <p className="text-kraft-medium leading-relaxed font-sans text-sm">
                I love owning problems end-to-end — strategy, architecture, shipping, feedback loops — all of it. Whether it's leading from the front or building in the trenches, I'm obsessed with turning wild ideas into real products.
                <br></br>
                <br></br>
                TL;DR: I can ship fast, think long-term, and make sure AI isn't just "cool" but actually useful.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="shadow-paper rounded-lg p-4"
                style={{
                  background: '#faf6f0',
                  border: '2px solid #c9b89a',
                }}
              >
                <div className="text-3xl font-serif font-bold text-kraft-dark mb-2">1+</div>
                <div className="text-kraft-light font-mono text-xs">Years Experience</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="shadow-paper rounded-lg p-4"
                style={{
                  background: '#faf6f0',
                  border: '2px solid #c9b89a',
                }}
              >
                <div className="text-3xl font-serif font-bold text-kraft-dark mb-2">6+</div>
                <div className="text-kraft-light font-mono text-xs">Deployments</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="shadow-paper rounded-lg p-4"
                style={{
                  background: '#faf6f0',
                  border: '2px solid #c9b89a',
                }}
              >
                <div className="text-3xl font-serif font-bold text-kraft-dark mb-2">10+</div>
                <div className="text-kraft-light font-mono text-xs">Projects</div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div
              className="shadow-paper-lg rounded-lg p-8"
              style={{
                background: '#faf6f0',
                border: '2px solid #c9b89a',
              }}
            >
              <h3 className="text-2xl font-serif font-semibold text-kraft-dark mb-6">Skills</h3>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-kraft-dark font-sans font-medium text-sm">{skill.name}</span>
                      <span className="text-kraft-light font-mono text-xs">{skill.level}%</span>
                    </div>
                    <div className="w-full rounded-full h-2" style={{ background: '#e8dcc4' }}>
                      <div
                        className="h-2 rounded-full transition-all duration-300"
                        style={{
                          width: `${skill.level}%`,
                          background: '#c9b89a',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="shadow-paper-lg rounded-lg p-8"
              style={{
                background: '#faf6f0',
                border: '2px solid #c9b89a',
              }}
            >
              <h3 className="text-2xl font-serif font-semibold text-kraft-dark mb-4">Education</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 shadow-paper"
                    style={{
                      background: '#f0e6d3',
                      border: '1px solid #c9b89a',
                    }}
                  >
                    <span className="font-serif font-bold text-kraft-dark">📚</span>
                  </div>
                  <div>
                    <h4 className="font-serif font-semibold text-kraft-dark">Bachelor of Technology</h4>
                    <p className="text-kraft-light font-sans text-sm">Computer Science & Engineering</p>
                    <p className="text-kraft-light font-mono text-xs">2021 - 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 