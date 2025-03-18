import React from 'react';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    title: "SummarAI",
    description: "A tool for summarizing search results and website content using FAISS, LLMs, and the Retrieval-Augmented Generation (RAG) technique.",
    technologies: ["Python", "FAISS", "RAG", "LangChain", "Groq", "Docker", "ANNOY","Streamlit", "Selenium"],
    image: "images/SummarAI.png",
    // liveUrl: "",
    githubUrl: "https://github.com/hrishi-008/SummarAI"
  },
  {
    title: "Project Two",
    description: "An e-commerce platform built with modern web technologies and best practices in mind.",
    technologies: ["Gemini", "Python", "Google Cloud", "Streamlit"],
    image: "images/gemini.jpg",
    liveUrl: "https://chat-gemini-pro.streamlit.app/",
    githubUrl: "https://github.com/hrishi-008/Chat-Gemini"
  },
  {
    title: "MelodyMigrate",
    description: "This project allows you to easily transfer playlists from Apple Music to Spotify. It uses Selenium to scrape song names from an Apple Music playlist and Spotipy (a Python client for the Spotify Web API) to search for these songs and create a playlist in Spotify.",
    technologies: ["Spotify", "Python", "Selenium", "Spotipy", "BeautifulSoup"],
    image: "images/MelodyMigrate.jpg",
    liveUrl: "https://chat-gemini-pro.streamlit.app/",
    githubUrl: "https://github.com/hrishi-008/Chat-Gemini"
  },
  // Add more projects as needed
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="aspect-video bg-gray-200 relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://via.placeholder.com/400x300?text=Project+Image';
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      View Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-700 font-medium"
                    >
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 