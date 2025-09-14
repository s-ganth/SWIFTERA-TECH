import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PROJECTS } from '../constants';
import NotFoundPage from './NotFoundPage';
import { fadeIn, staggerContainer } from '../animations';

const ProjectDetailPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = PROJECTS.find(p => p.id === projectId);

  const { scrollYProgress } = useScroll();
  const yPos = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  if (!project) {
    return <NotFoundPage />;
  }

  return (
    <div className="py-24 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer(0.2, 0.2)}
          initial="hidden"
          animate="show"
        >
          {/* Header */}
          <motion.div variants={fadeIn('down')} className="text-center mb-12">
            <p className="text-accent font-semibold">{project.category}</p>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-2">{project.title}</h1>
          </motion.div>

          {/* Image with Parallax Effect */}
          <motion.div 
            variants={fadeIn('up')} 
            className="mb-12 max-w-4xl mx-auto rounded-lg shadow-2xl overflow-hidden" 
            style={{ aspectRatio: '16/9' }}
          >
            <motion.img 
              src={project.imageUrl} 
              alt={project.title} 
              className="w-full h-full object-cover"
              style={{ y: yPos, scale: 1.1 }} // Apply parallax and scale up to avoid showing edges
            />
          </motion.div>

          {/* Details Section */}
          <motion.div 
            variants={fadeIn('up', 0.4)}
            className="max-w-3xl mx-auto space-y-8 text-lg text-gray-600 dark:text-gray-300"
          >
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 border-l-4 border-accent pl-4">The Challenge</h2>
              <p>{project.description.challenge}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 border-l-4 border-accent pl-4">Our Solution</h2>
              <p>{project.description.solution}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 border-l-4 border-accent pl-4">The Result</h2>
              <p>{project.description.result}</p>
            </div>
          </motion.div>

          {/* Back to Portfolio Link */}
          <motion.div variants={fadeIn('up', 0.6)} className="text-center mt-16">
            <Link 
              to="/portfolio" 
              className="inline-block bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-bold py-3 px-8 rounded-full transition-colors"
            >
              &larr; Back to Portfolio
            </Link>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
