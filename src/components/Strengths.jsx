import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

const strengths = [
  'Problem Solving',
  'Team Collaboration',
  'Responsive UI Development',
  'Clean Code Practices',
  'REST API Integration',
  'UI/UX Awareness',
  'Version Control (Git)',
  'Continuous Learning'
];


export default function Strengths() {
  return (
    <section className="mb-20">
      <div className="flex items-center gap-3 mb-10">
        <Zap className="w-8 h-8 text-fuchsia-400" />
        <h2 className="text-4xl font-bold bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
          Key Strengths
        </h2>
      </div>
      <div className="flex flex-wrap gap-4">
        {strengths.map((strength, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.4 }}
            whileHover={{ scale: 1.1, rotate: 2 }}
            className="px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 border border-cyan-500/40 rounded-full text-lg text-cyan-300 font-medium hover:border-cyan-500/80 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
          >
            {strength}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
