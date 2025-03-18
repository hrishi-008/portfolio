import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <p className="text-gray-600 leading-relaxed">
            I'm an <em>AI enthusiast</em>, <em>product thinker</em>, and a <em>problem solver</em> with a passion for building impactful solutions at the intersection of technology and business. With hands-on experience in machine learning, natural language processing, and cloud-based AI systems, I thrive on transforming complex ideas into scalable products.

            </p>
            <p className="text-gray-600 leading-relaxed">
            Over time, I've developed projects ranging from AI-enabled web search platforms to Natural Language to SQL pipelines, and even experimented with LLM fine-tuning, vector databases, and RAG-based architectures. My work extends into deploying models efficiently, understanding system design, and diving deep into finance and tech — a space I’m genuinely passionate about.
            <br></br>
            <br></br>
            I love leading teams, owning processes, and brainstorming ideas that evolve into real-world products. Whether it’s exploring cloud and DevOps, or fine-tuning LLMs for production, I’m always curious, always learning, and always building.
            <br></br>
            <br></br>
            Currently, I’m exploring the limitless potential of AI in sales automation, newsletter personalization, and enterprise search systems — constantly pushing myself toward that sweet spot where tech meets business value.
            Let’s build something impactful.
            </p>
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">My Skills Include:</h3>
              <div className="flex flex-wrap gap-3">
                {['React', 'TypeScript', 'Node.js', 'Python', 'SQL', 'AWS'].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 p-1">
              <div className="w-full h-full bg-gray-100 rounded-xl overflow-hidden">
                <img 
                  src="/images/image (3).jpg" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://via.placeholder.com/400x400?text=Profile+Image';
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 