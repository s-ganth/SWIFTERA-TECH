import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';
import NotFoundPage from './NotFoundPage';
import { fadeIn, staggerContainer } from '../animations';

const ServiceDetailPage: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = SERVICES.find(s => s.id === serviceId);

  if (!service) {
    return <NotFoundPage />;
  }

  const { icon: Icon, title, details } = service;

  return (
    <div className="py-24 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer(0.2, 0.2)}
          initial="hidden"
          animate="show"
        >
          {/* Header */}
          <motion.div variants={fadeIn('down')} className="text-center mb-16">
            <div className="flex justify-center mb-6">
                <Icon className="w-24 h-24 text-accent" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold">{title}</h1>
          </motion.div>

          {/* Overview Section */}
          <motion.div 
            variants={fadeIn('up')}
            className="max-w-3xl mx-auto text-center text-lg text-gray-600 dark:text-gray-300 mb-16"
          >
            <p>{details.overview}</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Key Benefits */}
            <motion.div variants={fadeIn('right')}>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 border-l-4 border-accent pl-4">Key Benefits</h2>
              <ul className="space-y-4">
                {details.keyBenefits.map((benefit, index) => (
                  <motion.li 
                    key={index}
                    custom={index}
                    variants={fadeIn('up', index * 0.1)}
                    className="flex items-start"
                  >
                    <svg className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span className="text-gray-600 dark:text-gray-300">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Our Process */}
            <motion.div variants={fadeIn('left')}>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 border-l-4 border-accent pl-4">Our Process</h2>
              <div className="space-y-8">
                {details.process.map((step, index) => (
                  <motion.div 
                    key={step.step}
                    custom={index}
                    variants={fadeIn('up', index * 0.1)}
                    className="flex"
                  >
                    <div className="flex flex-col items-center mr-6">
                      <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-accent font-bold text-xl">
                        {step.step}
                      </div>
                      {index < details.process.length - 1 && (
                        <div className="w-px h-full bg-gray-200 dark:bg-gray-700"></div>
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{step.title}</h3>
                      <p className="text-gray-500 dark:text-gray-400">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Back to Services Link */}
          <motion.div variants={fadeIn('up', 0.6)} className="text-center mt-20">
            <Link 
              to="/services" 
              className="inline-block bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-bold py-3 px-8 rounded-full transition-colors"
            >
              &larr; View All Services
            </Link>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;
