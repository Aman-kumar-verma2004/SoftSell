import { motion } from 'framer-motion';

const Footer = ({ isDarkMode }) => {
  return (
    <footer className={`${isDarkMode ? 'bg-gradient-to-r from-gray-800 to-black' : 'bg-gradient-to-r from-gray-800 to-black'} py-8`}>
      <div className="container mx-auto text-center text-white">
        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.6 }} 
          className="text-lg"
        >
          © {new Date().getFullYear()} SoftSell. All rights reserved.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.6, delay: 0.3 }} 
          className="mt-4 space-x-4"
        >
          <a 
            href="#" 
            className={`hover:${isDarkMode ? 'text-gray-800' : 'text-gray-300'} transition-all`}
          >
            Privacy Policy
          </a>
          <a 
            href="#" 
            className={`hover:${isDarkMode ? 'text-gray-800' : 'text-gray-300'} transition-all`}
          >
            Terms of Service
          </a>
          <a 
            href="#" 
            className={`hover:${isDarkMode ? 'text-gray-800' : 'text-gray-300'} transition-all`}
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
