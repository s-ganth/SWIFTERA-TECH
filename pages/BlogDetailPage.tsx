import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { BLOG_POSTS } from '../constants';
import NotFoundPage from './NotFoundPage';
import { fadeIn, staggerContainer } from '../animations';
import SocialShareButtons from '../components/SocialShareButtons';

const BlogDetailPage: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const post = BLOG_POSTS.find(p => p.id === postId);

  if (!post) {
    return <NotFoundPage />;
  }

  const pageUrl = window.location.href;

  return (
    <div className="py-24 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer(0.2, 0.2)}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={fadeIn('down')} className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{post.title}</h1>
            <p className="text-gray-500 dark:text-gray-400">
              By {post.author} • {post.date}
            </p>
          </motion.div>

          {/* Image */}
          <motion.div variants={fadeIn('up')} className="mb-12 rounded-lg shadow-2xl overflow-hidden">
            <img src={post.imageUrl} alt={post.title} className="w-full h-auto object-cover" />
          </motion.div>

          {/* Content */}
          <motion.div 
            variants={fadeIn('up', 0.2)}
            className="prose prose-lg dark:prose-invert max-w-none text-lg leading-relaxed text-gray-700 dark:text-gray-300"
          >
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
          </motion.div>
          
          {/* Social Share */}
          <motion.div variants={fadeIn('up', 0.4)} className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
              <h3 className="text-xl font-bold mb-4">Share this post</h3>
              <SocialShareButtons url={pageUrl} title={post.title} />
          </motion.div>

          {/* Back to Blog Link */}
          <motion.div variants={fadeIn('up', 0.6)} className="text-center mt-12">
            <Link 
              to="/blog" 
              className="inline-block bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-bold py-3 px-8 rounded-full transition-colors"
            >
              &larr; Back to Blog
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogDetailPage;