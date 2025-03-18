import React from 'react';
import { motion } from 'framer-motion';

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    title: "AI Engineer",
    company: "Paperchase India Pvt. Ltd.",
    period: "December 2024 - Present",
    description: [
      "Developed a fine-tuned LLM for seamless NL2SQL conversion, enhancing database interaction.",
      "Benchmarked data for querying using LLM for enterprise clients, optimizing performance and response times.",
      "Queried and processed large-scale databases with 30+ lakh (3M+) rows and multi-GB data, ensuring efficient retrieval and analysis.",
      "Built a plug-and-play AI pipeline using LangGraph, allowing seamless integration of any database as a knowledge base.",
      "Designed modular compatibility to support any LLM for SQL query generation and processing using LangGraph."
    ],
    technologies: ["Ollama", "LangChain", "LangGraph", "Transformers", "LoRA", "QLoRA", "Unsloth", "Python", "SQL"]
  },
  {
    title: "AI / ML Intern",
    company: "PGAGI",
    period: "May 2024 - August 2024",
    description: [
      "Developed an AI-powered Retrieval-Augmented Generation (RAG) system using LangChain, OpenAI, and FAISS, responsible for upselling products to clients.",
      "Deployed and maintained custom software on Google Cloud Platform, using docker containerisation.",
      "Developed a custom AI text generator using DSPy and OpenAI, producing YouTube and Instagram scripts for clients."
    ],
    technologies: ["RAG", "LangChain", "LangGraph", "OpenAI", "FAISS", "Docker", "GCP", "Python", "Google Cloud CLI"]
  },
  {
    title: "Summer Intern",
    company: "Reliance Industries Ltd.",
    period: "June 2023 - July 2023",
    description: [
      "Developed DCMS (Data Center Management Service), an employee portal using HTML, CSS, and MySQL.",
      "Optimized database queries and integrated several .NET APIs for enhanced functionality and performance."
    ],
    technologies: ["HTML", "CSS", "MySQL", ".NET"]
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-primary-color mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-color rounded-full z-10 shadow-lg"></div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <div className="glass-effect rounded-2xl p-8 shadow-xl bg-white/80 backdrop-blur-sm">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-2">{exp.title}</h3>
                        <p className="text-xl text-primary-color font-medium">{exp.company}</p>
                      </div>
                      <div className="mt-4 md:mt-0">
                        <span className="px-4 py-2 bg-primary-color/15 text-primary-color rounded-full text-sm font-semibold">
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        {exp.description.map((item, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                          >
                            {item}
                          </motion.li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2 mt-6">
                        {exp.technologies.map((tech, i) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm font-medium shadow-sm"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;