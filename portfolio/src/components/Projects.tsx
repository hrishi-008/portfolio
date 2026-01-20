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
    // liveUrl: "https://chat-gemini-pro.streamlit.app/",
    github: "https://github.com/hrishi-008/Chat-Gemini"
  },
  {
    title: "MelodyMigrate",
    description: "This project allows you to easily transfer playlists from Apple Music to Spotify. It uses Selenium to scrape song names from an Apple Music playlist and Spotipy (a Python client for the Spotify Web API) to search for these songs and create a playlist in Spotify.",
    technologies: ["Spotify", "Python", "Selenium", "Spotipy", "BeautifulSoup"],
    image: "images/MelodyMigrate.jpg",
    // liveUrl: "https://chat-gemini-pro.streamlit.app/",
    github: "https://github.com/hrishi-008/MelodyMigrate"
  },
  {
    title: "VideoChat",
    description: "This is a video chat application built using AgoraRTC for real-time communication, Django for backend development, HTML/CSS for design and styling, and SQL for data storage. The application facilitates video conferencing between multiple users in real-time. Additionally, dynamic Agora token generation is implemented for secure communication.",
    technologies: ["AgoraRTC", "Django", "HTML/CSS", "SQL"],
    image: "images/video-call.jpg",
    // liveUrl: "https://chat-gemini-pro.streamlit.app/",
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
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-primary-color mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -12, scale: 1.02 }}
              className={`group card-premium overflow-hidden ${project.isGitHubCard ? 'cursor-pointer' : ''}`}
              onClick={() => project.isGitHubCard && window.open(project.github, '_blank')}
            >
              {project.isGitHubCard ? (
                <div className="h-full min-h-[400px] flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black group-hover:from-gray-800 group-hover:via-gray-700 group-hover:to-gray-900 transition-all duration-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="relative z-10"
                  >
                    <svg className="w-16 h-16 text-white mb-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                  </motion.div>
                  <span className="text-white text-xl font-semibold relative z-10">Visit My GitHub</span>
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              ) : (
                <>
                  <div className="relative h-56 overflow-hidden group/image">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.15 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300"></div>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300"
                      initial={false}
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover/image:translate-y-0 transition-transform duration-300">
                      <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="px-3 py-1 bg-white/20 text-white text-sm rounded-full backdrop-blur-md border border-white/30"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">{project.description}</p>
                    <div className="flex justify-between items-center">
                      {project.github && (
                        <motion.a
                          whileHover={{ scale: 1.1, x: 5 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-blue-600 transition-all duration-300 group/link"
                        >
                          <svg className="w-5 h-5 group-hover/link:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                          </svg>
                          <span className="font-medium">GitHub</span>
                        </motion.a>
                      )}
                      {project.demo && (
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary"
                        >
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
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