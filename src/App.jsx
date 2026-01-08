import { motion } from 'framer-motion';
import { Code } from 'lucide-react';
import CareerObjective from './components/CareerObjective';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills';
// import Strengths from './components/Strengths';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import profileImage from './assets/Profile-img.jpeg'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#4E2A4F] via-[#2D1E2F] to-black">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent pointer-events-none"></div>

      <div className="relative">
        <motion.header
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="pt-20 pb-16 px-4"
        >
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 max-w-6xl mx-auto">

            {/* Content */}
            <div className="flex-1 text-center lg:text-left">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                className="inline-flex items-center justify-center w-24 h-24 mb-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full p-1"
              >
                <div className="w-full h-full bg-[#2D1E2F] rounded-full flex items-center justify-center">
                  <Code className="w-12 h-12 text-purple-400" />
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-4xl md:text-6xl lg:text-7xl font-black mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent"
              >
                Saravanan Developer
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-medium mb-6"
              >
                Mern-Stack Developer & Reactjs Developer
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="flex justify-center lg:justify-start gap-3 flex-wrap"
              >
                <span className="px-4 py-2 bg-purple-500/20 border border-purple-500/40 rounded-full text-purple-300">
                  React
                </span>
                <span className="px-4 py-2 bg-purple-500/20 border border-purple-500/40 rounded-full text-purple-300">
                  Node.js
                </span>
              </motion.div>
            </div>

            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="flex-shrink-0"
            >
              <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-purple-500/30 shadow-2xl">
                <img
                  src={profileImage}
                  alt="Saravanan Developer"
                  className="w-full  object-cover"
                />
              </div>
            </motion.div>

          </div>
        </motion.header>

        <main className="max-w-7xl mx-auto px-4 md:px-8 pb-20">
          <CareerObjective />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          {/* <Strengths /> */}
          <Certifications />
          <Contact />
        </main>

        <footer className="border-t border-purple-800/30 py-8 text-center">
          <p className="text-gray-400">
            Built with React
          </p>
          <p className="text-gray-500 mt-2">
            &copy; 2025 Saravanan . All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
