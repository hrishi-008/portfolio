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
    title: "AI Software Engineer",
    company: "Paperchase",
    period: "Dec'24 - Present",
    description: [
      "Engineered a scalable AI microservices architecture to process financial documents, reducing response time from 9 minutes to sub-12 seconds (98% reduction) for Accountancy Operations.",
      "Awarded 'AI Champions' for leading cross-functional teams in identifying operational bottlenecks and deploying AI solutions.",
      "Drove end-to-end AI product development, from ideation and requirements gathering with non-technical stakeholders to solution deployment.",
      "Optimized GPU utilization, resulting in over $3000 in savings on rental costs.",
      "Developed and deployed an AI enabled OCR solution (using Azure Document Intelligence) that saves ~10 minutes daily for over 50+ employees, significantly boosting productivity.",
      "Created a generative AI, RAG chat application that ensures GDPR SLAs, serving over 800 users.",
      "Operated within a lean, 'startup-like' AI team of three, building and deploying products for a 1000+ employee company.",
      "Fine-tuned a custom LLM for seamless natural language to SQL (NL2SQL) conversion, streamlining enterprise data interaction.",
      "Engineered a plug-and-play AI pipeline using LangGraph to support modular database integration as LLM knowledge bases.",
      "Built a plug-and-play fine-tuning framework specific to company hardware to finetune any supported open-source LLM (e.g., Mistral, LLaMA) using structured datasets in a defined schema.",
      "Gained deep hands-on experience in both backend pipeline engineering and AI product lifecycle design.",
      "Partnered with operational stakeholders to translate complex financial workflows into technical requirements for LLM and NLP automations, streamlining the accounting lifecycle."
    ],
    technologies: ["LangGraph", "LangChain", "Ollama", "Transformers", "LoRA", "QLoRA", "Unsloth", "Python", "SQL", "Azure AKS", "Azure Document Intelligence"]
  },
  {
    title: "AI/ML Intern",
    company: "PGAGI",
    period: "May'24 - Aug'24",
    description: [
      "Built a Retrieval-Augmented Generation (RAG) pipeline using LangChain, OpenAI, and FAISS for a product recommendation use case—boosted client upsell rates by 11%.",
      "Deployed the RAG system on Google Cloud Run using Docker containers, enabling cost-efficient, auto-scalable inference workflows.",
      "Managed cloud infrastructure via Google Cloud CLI, Artifact Registry, and custom CI/CD flows for container versioning and zero-downtime rollouts.",
      "Developed a custom AI text generator using DSPy and OpenAI, tailored for generating social media scripts (YouTube, Instagram), which led to a 30% increase in viewer retention.",
      "Implemented prompt engineering and few-shot learning strategies to improve generation quality and style alignment."
    ],
    technologies: ["LangChain", "FAISS", "OpenAI", "DSPy", "Docker", "Google Cloud Platform", "Cloud Run", "Artifact Registry", "Prompt Engineering"]
  },
  {
    title: "Summer Intern",
    company: "Reliance Industries Limited",
    period: "Jun - Jul'23",
    description: [
      "Engineered the backend for the Data Center Management Service (DCMS), utilizing MySQL for high-volume data storage.",
      "Integrated RESTful APIs (.NET) and optimized complex SQL queries, enhancing data retrieval speeds for internal tooling."
    ],
    technologies: ["MySQL", ".NET", "RESTful APIs", "SQL"]
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Work Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Decorative weaving lines */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path
                d="M0,20 Q25,0 50,20 T100,20"
                stroke="rgba(var(--primary-color-rgb), 0.1)"
                strokeWidth="0.5"
                fill="none"
                className="animate-draw"
              />
              <path
                d="M0,40 Q75,20 100,40"
                stroke="rgba(var(--primary-color-rgb), 0.1)"
                strokeWidth="0.5"
                fill="none"
                className="animate-draw"
              />
              <path
                d="M0,60 Q25,80 50,60 T100,60"
                stroke="rgba(var(--primary-color-rgb), 0.1)"
                strokeWidth="0.5"
                fill="none"
                className="animate-draw"
              />
              <path
                d="M0,80 Q75,60 100,80"
                stroke="rgba(var(--primary-color-rgb), 0.1)"
                strokeWidth="0.5"
                fill="none"
                className="animate-draw"
              />
            </svg>
          </div>

          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-30"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.2, type: 'spring' }}
                  className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full z-10 shadow-lg border-4 border-white"
                />

                {/* Thread connectors */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-0.5 h-24 bg-gradient-to-b from-primary-color/50 to-transparent ${index % 2 === 0 ? 'top-full' : 'bottom-full'
                  }`}></div>
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-0.5 h-24 bg-gradient-to-b from-transparent to-primary-color/50 ${index % 2 === 0 ? 'bottom-full' : 'top-full'
                  }`}></div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  }`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="glass-effect-premium rounded-2xl p-8 shadow-xl"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                          {exp.title}
                        </h3>
                        <p className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                          {exp.company}
                        </p>
                      </div>
                      <div className="mt-4 md:mt-0">
                        <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-700 rounded-full text-sm font-semibold border border-blue-500/30">
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <ul className="space-y-3">
                        {exp.description.map((item, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start gap-3 text-gray-700 leading-relaxed"
                          >
                            <motion.div
                              className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mt-2 flex-shrink-0"
                              initial={{ scale: 0 }}
                              whileInView={{ scale: 1 }}
                              transition={{ delay: i * 0.1 }}
                            />
                            <span>{item}</span>
                          </motion.li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-gray-200">
                        {exp.technologies.map((tech, i) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.1, y: -2 }}
                            transition={{ duration: 0.3, delay: i * 0.05 }}
                            viewport={{ once: true }}
                            className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-purple-50 text-gray-800 rounded-lg text-sm font-medium border border-blue-200/50 hover:border-blue-400/50 transition-all cursor-default"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
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