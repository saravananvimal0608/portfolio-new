import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaHtml5, FaCss3Alt, FaGithub } from 'react-icons/fa';
import { VscVscode } from "react-icons/vsc";


const TechLoader = () => {
  const techIcons = [
    { Icon: FaReact, color: '#61DAFB', name: 'React' },
    { Icon: VscVscode, color: '#007ACC', name: 'VS Code' },
    { Icon: FaGithub, color: '#181717', name: 'GitHub' },
    { Icon: FaHtml5, color: '#E34F26', name: 'HTML5' },
    { Icon: FaCss3Alt, color: '#1572B6', name: 'CSS3' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const iconVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8, 
      y: 20 
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const reactRotation = {
    rotate: 360,
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "linear"
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#4E2954]">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-radial from-purple-500/10 via-transparent to-transparent" />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex items-center gap-8"
      >
        {techIcons.map(({ Icon, color, name }, index) => (
          <motion.div
            key={name}
            variants={iconVariants}
            className="relative"
          >
            <motion.div
              animate={index === 0 ? reactRotation : {}}
              className="relative"
            >
              <Icon
                size={60}
                color={color}
                className="drop-shadow-2xl"
                style={{
                  filter: `drop-shadow(0 0 20px ${color}40)`
                }}
              />
            </motion.div>
            
            {/* Glow effect */}
            <div
              className="absolute inset-0 rounded-full blur-xl opacity-30"
              style={{
                background: `radial-gradient(circle, ${color}40 0%, transparent 70%)`
              }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Loading text */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-20 text-white/80 text-lg font-medium tracking-wider"
      >
        Loading Portfolio...
      </motion.div>
    </div>
  );
};

export default TechLoader;