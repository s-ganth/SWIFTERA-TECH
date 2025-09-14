import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { fadeIn, staggerContainer } from '../animations';

const PortfolioPage: React.FC = () => {
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
                Our Portfolio
            </motion.h1>
            <motion.p variants={fadeIn('down', 0.2)} className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-400">
                Check out some of our recent projects that have delivered outstanding results for our clients.
            </motion.p>
        </motion.div>
        
        <motion.div 
            variants={staggerContainer(0.1, 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {PROJECTS.map((project, index) => (
            <Link to={`/portfolio/${project.id}`} key={project.id}>
                <motion.div 
                    variants={fadeIn('up')}
                    className="group relative overflow-hidden rounded-lg shadow-lg h-64"
                >
                <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 p-6">
                    <p className="text-sm text-accent font-semibold">{project.category}</p>
                    <h3 className="text-xl font-bold text-white mt-1">{project.title}</h3>
                </div>
                </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default PortfolioPage;
