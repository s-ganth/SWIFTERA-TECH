import React from 'react';
import { motion } from 'framer-motion';

const WhatsAppButton: React.FC = () => {
  // Add the country code (91 for India) to the phone number
  const phoneNumber = '917548855853'; 
  const message = "Hello! I'm visiting your website and would like to know more about your services.";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, type: 'spring' }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* WhatsApp SVG Icon */}
      <svg
        className="w-8 h-8"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12.04 2.01c-5.52 0-9.99 4.47-9.99 9.99 0 1.77.46 3.45 1.28 4.92L2.01 22l5.14-1.34c1.43.78 3.06 1.21 4.79 1.21 5.52 0 9.99-4.47 9.99-9.99S17.56 2.01 12.04 2.01zm0 18.23c-1.53 0-3-.38-4.32-1.07l-.31-.18-3.21.84.86-3.13-.2-.32c-.75-1.18-1.15-2.58-1.15-4.02 0-4.54 3.69-8.23 8.23-8.23 4.54 0 8.23 3.69 8.23 8.23s-3.69 8.23-8.23 8.23zm4.49-5.83c-.28-.14-1.64-.81-1.9- .9s-.45-.14-.64.14-.72.9-.88 1.08-.32.2-.59.07s-1.16-.43-2.21-1.36c-.82-.72-1.37-1.61-1.53-1.88s-.01-.42.12-.56c.12-.12.28-.32.42-.48.14-.14.19-.24.28-.41.1-.17.05-.31-.02-.45s-.64-1.53-.88-2.1c-.24-.57-.48-.49-.64-.5s-.34-.01-.51-.01c-.17 0-.45.07-.68.31s-.88.86-.88 2.1c0 1.24.9 2.43 1.03 2.6s1.77 2.7 4.3 3.82c.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.64-.67 1.87-1.32.24-.65.24-1.21.17-1.32-.07-.12-.26-.19-.54-.33z"/>
      </svg>
    </motion.a>
  );
};

export default WhatsAppButton;