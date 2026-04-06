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
    <section id="experience" className="py-20 relative overflow-hidden" style={{ background: '#f7f5f0' }}>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-kraft-dark mb-4">Work Experience</h2>
          <div className="w-24 h-1 mx-auto" style={{ background: '#c9b89a' }}></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-1/2 transform -translate-x-1/2 h-full w-1"
            style={{ background: '#c9b89a' }}
          ></div>

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
                <div
                  className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full z-10 shadow-paper"
                  style={{
                    background: '#c9b89a',
                    border: '3px solid #f7f5f0',
                  }}
                ></div>

                {/* Content */}
                <div
                  className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}
                >
                  <div
                    className="shadow-paper-lg rounded-lg p-8"
                    style={{
                      background: '#faf6f0',
                      border: '2px solid #c9b89a',
                    }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-serif font-semibold text-kraft-dark mb-2">{exp.title}</h3>
                        <p className="text-lg font-mono text-kraft-medium">{exp.company}</p>
                      </div>
                      <div className="mt-4 md:mt-0">
                        <span
                          className="px-4 py-2 rounded text-sm font-mono"
                          style={{
                            background: '#e8dcc4',
                            color: '#3d2e20',
                          }}
                        >
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <ul className="space-y-2 text-kraft-medium font-sans text-sm">
                        {exp.description.map((item, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start"
                          >
                            <span className="mr-3 text-kraft-dark">•</span>
                            <span>{item}</span>
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
                            className="px-3 py-1 rounded text-xs font-mono shadow-paper"
                            style={{
                              background: '#e8dcc4',
                              color: '#3d2e20',
                            }}
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