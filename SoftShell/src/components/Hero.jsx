import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('softsell-theme');
    if (savedTheme) setIsDarkMode(savedTheme === 'dark');
  }, []);

  useEffect(() => {
    const theme = isDarkMode ? 'dark' : 'light';
    localStorage.setItem('softsell-theme', theme);
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return (
    <section
      id="hero"
      className={`${
        isDarkMode ? 'bg-gradient-to-r from-gray-800 to-black' : 'bg-gradient-to-r from-gray-800 to-black'
      } text-white py-32`}
    >
      <div className="container mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: -30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }} 
          className="text-5xl font-extrabold mb-6"
        >
          Resell Your Unused Software Licenses
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.2 }} 
          className="text-xl mb-8"
        >
          Maximize your software value with a secure, fast, and profitable resale process.
        </motion.p>
        <motion.button 
          initial={{ scale: 0.8, opacity: 0 }} 
          animate={{ scale: 1, opacity: 1 }} 
          transition={{ duration: 0.5, delay: 0.4 }} 
          className="bg-white text-black px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-gray-100 cursor-pointer"
        >
          Get a Quote
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
