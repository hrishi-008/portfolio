import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

function App() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    });
  }, [controls]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 via-secondary-400/20 to-primary-400/20" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text font-display">
              AI Engineer & Developer
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700">
              Crafting intelligent solutions through code and innovation
            </p>
            <div className="flex gap-4 justify-center">
              <a
                href="#projects"
                className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white rounded-lg transition"
              >
                Contact Me
              </a>
            </div>
          </motion.div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-[500px] h-[500px] -top-20 -right-20 bg-primary-500/30 rounded-full blur-3xl" />
          <div className="absolute w-[500px] h-[500px] -bottom-20 -left-20 bg-secondary-500/30 rounded-full blur-3xl" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-6">
                As an AI Engineer, I specialize in developing cutting-edge solutions 
                using machine learning and artificial intelligence. My expertise spans 
                across various domains including computer vision, natural language 
                processing, and deep learning.
              </p>
              <p className="text-lg">
                I'm passionate about creating AI systems that solve real-world 
                problems and push the boundaries of what's possible with technology.
              </p>
            </div>
            <div className="space-y-4">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="font-bold mb-2">Machine Learning</h3>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-primary-500 h-2 rounded-full" style={{ width: '95%' }} />
                </div>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="font-bold mb-2">Deep Learning</h3>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-secondary-500 h-2 rounded-full" style={{ width: '90%' }} />
                </div>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="font-bold mb-2">Computer Vision</h3>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-primary-600 h-2 rounded-full" style={{ width: '85%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 gradient-text">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
              <div className="h-48 bg-gradient-to-r from-primary-500 to-secondary-500" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">AI Image Recognition</h3>
                <p className="text-gray-600 mb-4">
                  Deep learning model for real-time object detection and classification
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm">
                    PyTorch
                  </span>
                  <span className="px-3 py-1 bg-secondary-100 text-secondary-800 rounded-full text-sm">
                    Computer Vision
                  </span>
                </div>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
              <div className="h-48 bg-gradient-to-r from-secondary-500 to-primary-500" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">NLP Chatbot</h3>
                <p className="text-gray-600 mb-4">
                  Advanced conversational AI using transformer architecture
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-secondary-100 text-secondary-800 rounded-full text-sm">
                    TensorFlow
                  </span>
                  <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm">
                    NLP
                  </span>
                </div>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
              <div className="h-48 bg-gradient-to-r from-primary-500 to-secondary-500" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Predictive Analytics</h3>
                <p className="text-gray-600 mb-4">
                  Machine learning system for time series forecasting
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm">
                    Scikit-learn
                  </span>
                  <span className="px-3 py-1 bg-secondary-100 text-secondary-800 rounded-full text-sm">
                    Data Science
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 gradient-text text-center">Get in Touch</h2>
          <div className="max-w-xl mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300"
                  placeholder="Your message"
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App; 