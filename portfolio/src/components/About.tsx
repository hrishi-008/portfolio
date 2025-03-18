import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const skills = [
    { name: 'Python', level: 90, color: '#4B8BBE' },
    { name: 'AI Frameworks', level: 85, color: '#FF6B6B' },
    // { name: 'LangChain', level: 90, color: '#61DAFB' },
    { name: 'Machine Learning', level: 75, color: '#38B2AC' },
    { name: 'Deep Learning', level: 75, color: '#805AD5' },
    { name: 'Cloud', level: 60, color: '#4299E1' },
    { name: 'Docker', level: 60, color: '#2496ED' },
    { name: 'Git', level: 50, color: '#F05032' },
    { name: 'SQL', level: 50, color: '#F29111' },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary-color mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-effect rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Who I Am</h3>
              <p className="text-gray-600 mb-4">
                I'm an <span className="text-primary-color font-bold">AI enthusiast</span>, <span className="text-primary-color font-bold">product thinker</span>, and a <span className="text-primary-color font-bold">problem solver</span> with a passion for building impactful solutions at the intersection of technology and business. With hands-on experience in <span className="underline decoration-primary-color">machine learning</span>, <span className="underline decoration-primary-color">natural language processing</span>, and <span className="underline decoration-primary-color">cloud-based AI systems</span>, I thrive on transforming complex ideas into scalable products.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Over time, I've developed projects ranging from AI-enabled web search platforms to Natural Language to SQL pipelines, and even experimented with LLM fine-tuning, vector databases, and RAG-based architectures. My work extends into deploying models efficiently, and diving deep into <em>finance and tech</em> — a space I'm genuinely passionate about.
                <br></br>
                <br></br>
                I love leading teams, owning processes, and brainstorming ideas that evolve into real-world products. Whether it's exploring cloud and DevOps, or fine-tuning LLMs for production, I'm always curious, always learning, and always building.
                <br></br>
                Currently, I'm exploring the limitless potential of AI in sales automation, newsletter personalization, and enterprise search systems — constantly pushing myself toward that sweet spot where tech meets business value. Let's build something impactful.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="glass-effect rounded-xl p-4 shadow-lg"
              >
                <div className="text-3xl font-bold text-primary-color mb-2">1+</div>
                <div className="text-gray-600">Years Experience</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="glass-effect rounded-xl p-4 shadow-lg"
              >
                <div className="text-3xl font-bold text-primary-color mb-2">6+</div>
                <div className="text-gray-600">Production Deployments</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="glass-effect rounded-xl p-4 shadow-lg"
              >
                <div className="text-3xl font-bold text-primary-color mb-2">10+</div>
                <div className="text-gray-600">Personal Projects</div>
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
            <div className="glass-effect rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Skills</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="h-2 rounded-full"
                        style={{ width: `${skill.level}%`, backgroundColor: skill.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-effect rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Education</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary-color/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-color" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Bachelor of Technology</h4>
                    <p className="text-gray-600">Computer Science & Engineering</p>
                    <p className="text-sm text-gray-500">2021 - 2025</p>
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