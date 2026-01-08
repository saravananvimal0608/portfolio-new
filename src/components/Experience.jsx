import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'Mern-Stack Developer Intern',
    company: 'Jnana Inventive',
    period: '4 Months (Completed)',
    description: 'Worked on real-time projects including Africa Duty Free (E-commerce Website) and BestRunners (Static Charity Website), focusing on responsive UI development and practical frontend implementation using modern web technologies.',
    technologies: ['Reactjs', 'Node.js', 'expressjs', 'mongoDB']
  },
];

export default function Experience() {
  return (
    <section className="mb-20">
      <div className="flex items-center gap-3 mb-10">
        <Briefcase className="w-8 h-8 text-pink-400" />
        <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
          Experience
        </h2>
      </div>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-[#2D1E2F] rounded-2xl p-6 shadow-lg hover:shadow-purple-500/30 transition-all duration-300 border border-purple-800/30"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold text-purple-400 mb-1">{exp.title}</h3>
                <p className="text-lg text-pink-300">{exp.company}</p>
              </div>
              <span className="text-gray-400 mt-2 md:mt-0">{exp.period}</span>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-sm text-purple-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
