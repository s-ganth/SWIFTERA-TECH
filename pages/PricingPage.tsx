import React from 'react';
import { motion } from 'framer-motion';
import { PRICING_PLANS } from '../constants';
import { fadeIn, staggerContainer } from '../animations';

const PricingPage: React.FC = () => {
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
                Pricing Plans
            </motion.h1>
            <motion.p variants={fadeIn('down', 0.2)} className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-400">
                Choose a plan that fits your needs and budget. All plans are customizable.
            </motion.p>
        </motion.div>

        <motion.div
            variants={staggerContainer(0.1, 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {PRICING_PLANS.map((plan, index) => (
            <motion.div
              key={plan.name}
              variants={fadeIn('up')}
              className={`border rounded-lg p-8 flex flex-col ${plan.isFeatured ? 'border-accent bg-gray-50 dark:bg-gray-800 scale-105' : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800'}`}
            >
              {plan.isFeatured && (
                <p className="text-center bg-accent text-white text-xs font-bold py-1 px-3 rounded-full -mt-10 mb-4 mx-auto">MOST POPULAR</p>
              )}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center">{plan.name}</h3>
              <div className="text-center my-6">
                <span className="text-5xl font-extrabold text-gray-900 dark:text-white">${plan.price}</span>
                <span className="text-lg text-gray-500 dark:text-gray-400">{plan.period}</span>
              </div>
              <ul className="space-y-4 text-gray-600 dark:text-gray-300 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${plan.isFeatured ? 'bg-accent hover:bg-accent-hover text-white' : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white'}`}>
                Get Started
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default PricingPage;
