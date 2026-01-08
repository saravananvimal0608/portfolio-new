import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const certifications = [
  {
    name: 'Java Full Stack',
    issuer: 'Intellisense Academy',
    year: '2025'
  },
  {
    name: 'Mern-Stack-Developer Intern',
    issuer: 'Jnana Inventive',
    year: '2025'
  },
];

export default function Certifications() {
  return (
    <section className="mb-20">
      <div className="flex items-center gap-3 mb-10">
        <Award className="w-8 h-8 text-purple-400" />
        <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Certifications
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className="bg-[#2D1E2F] rounded-2xl p-6 shadow-lg hover:shadow-pink-500/40 transition-all duration-300 border border-purple-800/30 flex items-start gap-4"
          >
            <div className="p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl">
              <Award className="w-8 h-8 text-purple-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-pink-400 mb-1">{cert.name}</h3>
              <p className="text-gray-300 mb-1">{cert.issuer}</p>
              <span className="text-purple-400 text-sm">{cert.year}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
