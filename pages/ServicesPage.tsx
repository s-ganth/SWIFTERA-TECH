import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';
import { fadeIn, staggerContainer } from '../animations';

const ServicesPage: React.FC = () => {
  return (
    <div className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer(0.2, 0.1)}
          initial="hidden"
          animate="show"
          className="text-center mb-16"
        >
          <motion.h1 variants={fadeIn('down')} className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
            Our Services
          </motion.h1>
          <motion.p variants={fadeIn('down', 0.2)} className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-400">
            We offer a comprehensive suite of digital marketing services to help your business grow.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={staggerContainer(0.1, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {SERVICES.map((service, index) => (
            <Link to={`/services/${service.id}`} key={service.id}>
              <motion.div
                variants={fadeIn('up')}
                className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center h-full transform hover:-translate-y-2 transition-transform duration-300 flex flex-col"
              >
                <div className="flex justify-center mb-6">
                  <service.icon className="w-20 h-20 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 flex-grow">{service.description}</p>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesPage;
