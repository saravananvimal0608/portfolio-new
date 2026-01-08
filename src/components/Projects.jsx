import { motion } from 'framer-motion';
import { Code2, Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Developed a responsive e-commerce web application with product listing, user authentication, and cart functionality. Focused on building a clean UI and smooth user experience using modern full-stack technologies.',
    technologies: ['ReactJS', 'Express.js', 'MongoDB'],
    github: '#',
    live: '#'
  },
  {
    title: 'Todo List Application',
    description: 'Developed a full-stack Todo List application as part of an office task, created and delivered for internal use. Implemented separate Admin and User dashboards with authentication and Redux-based state management, following real-world development practices.',
    technologies: ['ReactJS', 'Express.js', 'MongoDB', 'Redux'],
    github: '#',
    live: '#'
  },
  {
    title: 'YouTube Clone',
    description: 'Built a static YouTube clone website replicating the core UI layout, including homepage design, video thumbnails, and responsive structure using ReactJS and YouTube API for content display.',
    technologies: ['ReactJS', 'HTML5', 'CSS3', 'JavaScript'],
    github: '#',
    live: '#'
  },
  {
    title: 'Real Estate Website',
    description: 'Developed a responsive static real estate website using reusable React components. Focused on clean UI design, property listing layout, and mobile-friendly user experience.',
    technologies: ['ReactJS', 'HTML5', 'CSS3', 'JavaScript'],
    github: '#',
    live: '#'
  },

];

export default function Projects() {
  return (
    <section className="mb-20">
      <div className="flex items-center gap-3 mb-10">
        <Code2 className="w-8 h-8 text-purple-400" />
        <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Projects
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            whileHover={{ scale: 1.05, y: -10 }}
            className="bg-[#2D1E2F] rounded-2xl p-6 shadow-lg hover:shadow-pink-500/30 transition-all duration-300 border border-purple-800/30"
          >
            <h3 className="text-2xl font-bold text-pink-400 mb-3">{project.title}</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 rounded-full text-sm text-pink-300"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href={project.github}
                className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
              >
                <Github className="w-5 h-5" />
                <span>Code</span>
              </a>
              <a
                href={project.live}
                className="flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
                <span>Live Demo</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
