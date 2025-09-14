import React from 'react';
import { motion } from 'framer-motion';
import { BLOG_POSTS } from '../constants';
import { fadeIn, staggerContainer } from '../animations';
import { Link } from 'react-router-dom';

const BlogPage: React.FC = () => {
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
                From the Blog
            </motion.h1>
            <motion.p variants={fadeIn('down', 0.2)} className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-400">
                Stay updated with the latest trends, tips, and insights in digital marketing.
            </motion.p>
        </motion.div>

        <motion.div
            variants={staggerContainer(0.1, 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {BLOG_POSTS.map((post, index) => (
            <motion.div
              key={index}
              variants={fadeIn('up')}
              className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg flex flex-col"
            >
              <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4">
                  <p className="text-sm text-gray-500 dark:text-gray-400">{post.author} • {post.date}</p>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex-grow">{post.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
                <Link to={`/blog/${post.id}`} className="text-accent hover:text-accent-hover font-semibold mt-auto">
                    Read More &rarr;
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPage;