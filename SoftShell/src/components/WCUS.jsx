import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const features = [
  "High Payouts", 
  "Fast Transactions", 
  "Secure & Trusted", 
  "24/7 Support", 
  "Transparent Pricing", 
  "Easy Process"
];

const WhyChooseUs = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

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
      id="why-choose-us"
      className={`${
        isDarkMode ? 'bg-gradient-to-r from-gray-800 to-black' : 'bg-gradient-to-r from-blue-500 to-blue-600'
      } py-20`}
    >
      <div className="container mx-auto text-center">
        <h2 className={`text-4xl font-bold mb-12 ${isDarkMode ? 'text-white' : 'text-black'}`}>
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: index * 0.2 }} 
              className={`${
                isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'
              } p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300`}
            >
              <h3 className="text-2xl font-semibold mb-4">{feature}</h3>
              <p>Experience hassle-free transactions and maximize your software value.</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
