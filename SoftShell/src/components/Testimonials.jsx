// components/Testimonials.js
import { motion } from 'framer-motion';
import testimonialImage from '../assets/animated.png';

const testimonials = [
  { name: "John Doe", role: "CEO, TechCorp", text: "SoftSell made the whole process seamless and profitable!" },
  { name: "Jane Smith", role: "CTO, SoftWareCo", text: "Excellent platform for maximizing software value!" }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-gray-100 dark:bg-gray-900 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 dark:text-gray-100">Testimonials</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: index * 0.2 }} 
              className="bg-white dark:bg-gray-800 dark:text-gray-200 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <motion.img
                src={testimonialImage}
                alt="Happy Clients"
                initial={{ scale: 0.8, rotate: -10, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mx-auto mb-4 w-24 h-24 rounded-full shadow-lg"
              />
              <p className="mb-4">"{testimonial.text}"</p>
              <span className="block font-semibold">{testimonial.name}</span>
              <span className="block text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
