import React from 'react';
import { motion } from 'framer-motion';
import { TEAM_MEMBERS, COMPANY_STATS } from '../constants';
import { fadeIn, staggerContainer } from '../animations';
import type { TeamMember } from '../types';

const StatCard: React.FC<{ value: string; label: string }> = ({ value, label }) => (
    <div className="text-center">
        <p className="text-4xl md:text-5xl font-bold text-accent">{value}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{label}</p>
    </div>
);

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => (
    <div className="text-center">
        <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden shadow-lg">
            <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{member.name}</h3>
        <p className="text-accent">{member.role}</p>
    </div>
);


const AboutPage: React.FC = () => {
  return (
    <div className="py-24 bg-white dark:bg-gray-900 text-gray-900 dark:text-white space-y-24 md:space-y-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          variants={staggerContainer(0.2, 0.1)}
          initial="hidden"
          animate="show"
          className="text-center mb-16"
        >
          <motion.h1 variants={fadeIn('down')} className="text-4xl font-extrabold sm:text-5xl">
            About Swiftera Technology
          </motion.h1>
          <motion.p variants={fadeIn('down', 0.2)} className="mt-4 max-w-3xl mx-auto text-xl text-gray-600 dark:text-gray-400">
            We are a passionate team of digital marketers, strategists, and creatives dedicated to helping businesses succeed in the online world.
          </motion.p>
        </motion.div>

        {/* Mission/Story Section */}
        <motion.div
            variants={fadeIn('up')}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="max-w-4xl mx-auto text-lg text-gray-600 dark:text-gray-300 space-y-6 text-center"
        >
            <p>
                Founded in 2013, Swiftera Technology was born from a desire to provide transparent, results-driven digital marketing solutions. We saw a gap in the market for an agency that not only delivered exceptional work but also built lasting partnerships with its clients.
            </p>
            <p>
                Our mission is to empower brands to achieve their full potential through innovative strategies, cutting-edge technology, and a deep understanding of the ever-evolving digital landscape. We believe in data-driven decisions, creative storytelling, and an unwavering commitment to our clients' growth.
            </p>
        </motion.div>
      </div>

      {/* Stats Section */}
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
              {COMPANY_STATS.map((stat, index) => (
                  <motion.div
                      key={stat.label}
                      variants={fadeIn('up', index * 0.1)}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.5 }}
                  >
                      <StatCard value={stat.value} label={stat.label} />
                  </motion.div>
              ))}
          </div>
      </section>

      {/* Team Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer(0.3, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeIn('down')} className="text-3xl font-bold text-gray-900 dark:text-white">
            Meet Our Team
          </motion.h2>
          <motion.p variants={fadeIn('down', 0.2)} className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            The masterminds behind our success.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.2, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8"
        >
          {TEAM_MEMBERS.map((member) => (
            <motion.div key={member.name} variants={fadeIn('up')}>
              <TeamMemberCard member={member} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
