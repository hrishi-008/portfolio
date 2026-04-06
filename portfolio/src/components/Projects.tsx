import React from 'react';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github?: string;
  demo?: string;
  isGitHubCard?: boolean;
}

const projects: Project[] = [
  {
    title: "SummarAI",
    description: "A tool for summarizing search results and website content using FAISS, LLMs, and the Retrieval-Augmented Generation (RAG) technique.",
    technologies: ["Python", "FAISS", "RAG", "LangChain", "Groq", "Docker", "ANNOY", "Streamlit", "Selenium"],
    image: "images/SummarAI.png",
    github: "https://github.com/hrishi-008/SummarAI"
  },
  {
    title: "Chat-Gemini",
    description: "An e-commerce platform built with modern web technologies and best practices in mind.",
    technologies: ["Gemini", "Python", "Google Cloud", "Streamlit"],
    image: "images/gemini.jpg",
    github: "https://github.com/hrishi-008/Chat-Gemini"
  },
  {
    title: "MelodyMigrate",
    description: "This project allows you to easily transfer playlists from Apple Music to Spotify. It uses Selenium to scrape song names from an Apple Music playlist and Spotipy (a Python client for the Spotify Web API) to search for these songs and create a playlist in Spotify.",
    technologies: ["Spotify", "Python", "Selenium", "Spotipy", "BeautifulSoup"],
    image: "images/MelodyMigrate.jpg",
    github: "https://github.com/hrishi-008/MelodyMigrate"
  },
  {
    title: "VideoChat",
    description: "This is a video chat application built using AgoraRTC for real-time communication, Django for backend development, HTML/CSS for design and styling, and SQL for data storage. The application facilitates video conferencing between multiple users in real-time. Additionally, dynamic Agora token generation is implemented for secure communication.",
    technologies: ["AgoraRTC", "Django", "HTML/CSS", "SQL"],
    image: "images/video-call.jpg",
    github: "https://github.com/hrishi-008/video-chat-application"
  },
  {
    title: "Nokia Snake",
    description: "Classic nokia game using python, and turtle module.Yes that is it, what could be more simple but fun than this",
    technologies: ["Python", "Turtle"],
    image: "images/nokia-snake.png",
    github: "https://github.com/hrishi-008/Nokia-Snake-game"
  },
  {
    title: "GitHub",
    description: "MY GITHUB",
    technologies: [],
    image: "",
    github: "https://github.com/hrishi-008",
    isGitHubCard: true
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 relative overflow-hidden" style={{ background: '#f7f5f0' }}>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-kraft-dark mb-4">My Projects</h2>
          <div className="w-24 h-1 mx-auto" style={{ background: '#c9b89a' }}></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="shadow-paper-lg rounded-lg overflow-hidden cursor-pointer"
              onClick={() => project.isGitHubCard && window.open(project.github, '_blank')}
              style={{
                background: '#faf6f0',
                border: '2px solid #c9b89a',
              }}
            >
              {project.isGitHubCard ? (
                <div
                  className="h-full min-h-[400px] flex items-center justify-center transition-all duration-300 flex-col"
                  style={{ background: '#f0e6d3' }}
                >
                  <svg className="w-16 h-16 text-kraft-dark mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span className="text-kraft-dark font-serif text-lg font-semibold">Visit My GitHub</span>
                </div>
              ) : (
                <>
                  {project.image && (
                    <div className="relative h-48 overflow-hidden bg-kraft-light">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                      />
                      <div
                        className="absolute inset-0"
                        style={{ background: 'linear-gradient(to top, rgba(61, 46, 32, 0.4), transparent)' }}
                      ></div>
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-serif font-semibold text-kraft-dark mb-2">{project.title}</h3>
                    <p className="text-kraft-medium font-sans text-sm mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs font-mono text-kraft-dark rounded"
                          style={{
                            background: '#e8dcc4',
                            border: '1px solid #c9b89a',
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      {project.github && (
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-kraft-dark hover:text-kraft-medium transition-colors duration-300 font-mono text-sm"
                        >
                          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                          </svg>
                          GitHub
                        </motion.a>
                      )}
                      {project.demo && (
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded text-kraft-dark font-mono text-sm transition-all duration-300"
                          style={{
                            background: '#c9b89a',
                            color: '#fff',
                          }}
                        >
                          Live Demo
                        </motion.a>
                      )}
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 