import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const skillCategories = [
  {
    category: 'Frontend',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'ReactJS', 'Bootstrap', 'Ant Design']
  },
  {
    category: 'Backend',
    skills: ['NodeJS', 'Express.js', 'Java', 'REST APIs']
  },
  {
    category: 'Database',
    skills: ['PostgreSQL', 'MongoDB', 'MySQL']
  },
  {
    category: ' Tools & Tech',
    skills: ['Postman', 'VS Code', 'Git', 'GitHub']
  }
];


export default function Skills() {
  return (
    <section className="mb-20">
      <div className="flex items-center gap-3 mb-10">
        <Sparkles className="w-8 h-8 text-purple-400" />
        <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Technical Skills
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            className="bg-gradient-to-br from-[#2D1E2F] to-[#4E2A4F] rounded-2xl p-6 shadow-lg hover:shadow-pink-500/30 transition-all duration-300 border border-purple-800/30"
          >
            <h3 className="text-2xl font-bold text-pink-400 mb-4">{category.category}</h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + i * 0.05, duration: 0.4 }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-lg text-purple-300 font-medium hover:border-purple-500/60 transition-all duration-300"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
