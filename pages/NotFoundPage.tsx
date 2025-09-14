import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-[60vh] text-center">
      <div>
        <h1 className="text-9xl font-extrabold text-accent">404</h1>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-4">Page Not Found</h2>
        <p className="text-gray-500 dark:text-gray-400 mt-2">Sorry, the page you are looking for does not exist.</p>
        <Link 
          to="/" 
          className="mt-8 inline-block bg-accent hover:bg-accent-hover text-white font-bold py-3 px-8 rounded-full transition-colors"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
