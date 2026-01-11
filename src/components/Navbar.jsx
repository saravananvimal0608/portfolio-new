import { motion } from 'framer-motion';

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md "
    >
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-center space-x-8">
          <button
            onClick={() => scrollToSection('home')}
            className="text-gray-300 hover:text-purple-400 transition-colors duration-300 font-medium"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="text-gray-300 hover:text-purple-400 transition-colors duration-300 font-medium"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-gray-300 hover:text-purple-400 transition-colors duration-300 font-medium"
          >
            Contact
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;