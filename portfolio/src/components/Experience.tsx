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
      "Broke down an AI-ML based monolithic service into microservices which reduced worker starvation and decreased response time to sub 12 seconds from 9 minutes. Containerized these micro services and hosted using AKS.",
      "Drove end-to-end AI product development, from ideation and requirements gathering with non-technical stakeholders to solution deployment.",
      "Optimized GPU utilization, resulting in over $3000 in savings on rental costs.",
      "Developed and deployed an AI solution that saves 10 minutes daily for over 100 employees, significantly boosting productivity.",
      "Created a generative AI product that ensures GDPR SLAs, serving over 800 users.",
      "Operated within a lean, 'startup-like' AI team of three, building and deploying products for a 1000+ employee company.",
      "Fine-tuned a custom LLM for seamless natural language to SQL (NL2SQL) conversion, streamlining enterprise data interaction.",
      "Engineered a plug-and-play AI pipeline using LangGraph to support modular database integration as LLM knowledge bases.",
      "Built a plug-and-play fine-tuning framework specific to company hardware to finetune any supported open-source LLM (e.g., Mistral, LLaMA) using structured datasets in a defined schema.",
      "Gained deep hands-on experience in both backend pipeline engineering and AI product lifecycle design.",
      "Developing Dockerfiles and images for the deployment of AI products."
    ],
    technologies: ["LangGraph", "LangChain", "Ollama", "Transformers", "LoRA", "QLoRA", "Unsloth", "Python", "SQL", "Docker", "AKS"]
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
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-primary-color mx-auto"></div>
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
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-color rounded-full z-10 shadow-lg"></div>

                {/* Thread connectors */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-0.5 h-24 bg-gradient-to-b from-primary-color/50 to-transparent ${
                  index % 2 === 0 ? 'top-full' : 'bottom-full'
                }`}></div>
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-0.5 h-24 bg-gradient-to-b from-transparent to-primary-color/50 ${
                  index % 2 === 0 ? 'bottom-full' : 'top-full'
                }`}></div>

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