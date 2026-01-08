import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'SRM Institute of Science and Technology',
    year: '2024',
    details: 'CGPA: 7.5 / 10'
  }
];

export default function Education() {
  return (
    <section className="mb-20">
      <div className="flex items-center gap-3 mb-10">
        <GraduationCap className="w-8 h-8 text-pink-400" />
        <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
          Education
        </h2>
      </div>
      <div className="relative">
        <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500"></div>
        <div className="space-y-12 pl-8 md:pl-20">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -left-8 md:-left-20 w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full border-4 border-gray-900"></div>
              <div className="bg-[#2D1E2F] rounded-2xl p-6 shadow-lg hover:shadow-purple-500/30 transition-all duration-300 border border-purple-800/30">
                <span className="inline-block px-4 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-sm text-purple-300 mb-3">
                  {edu.year}
                </span>
                <h3 className="text-2xl font-bold text-pink-400 mb-2">{edu.degree}</h3>
                <p className="text-lg text-purple-300 mb-2">{edu.institution}</p>
                <p className="text-gray-300">{edu.details}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
