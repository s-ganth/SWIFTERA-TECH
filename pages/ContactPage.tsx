import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../animations';

const ContactInfoItem: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
  <motion.div variants={fadeIn('up')} className="flex items-start">
    <div className="flex-shrink-0">
      <div className="bg-gray-100 dark:bg-gray-800 h-12 w-12 rounded-md flex items-center justify-center">
        <span className="text-accent">{icon}</span>
      </div>
    </div>
    <div className="ml-4">
      <h3 className="text-lg font-bold text-gray-900 dark:text-white">{title}</h3>
      <p className="mt-1 text-gray-600 dark:text-gray-400">{children}</p>
    </div>
  </motion.div>
);

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const FORM_ENDPOINT = "https://formspree.io/f/mzzaqprw"; 

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };


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
            Get In Touch
          </motion.h1>
          <motion.p variants={fadeIn('down', 0.2)} className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-400">
            We'd love to hear from you. Whether you have a question about our services or anything else, our team is ready to answer all your questions.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.3, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto"
        >
          {/* Contact Info */}
          <div className="space-y-8">
            <ContactInfoItem
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              }
              title="Our Address"
            >
              Block7,Incubation at Nandha<br/>Engineering College, Perundurai, Erode-52.
            </ContactInfoItem>

            <ContactInfoItem
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              }
              title="Email Us"
            >
              swiftera007@gmail.com
            </ContactInfoItem>

            <ContactInfoItem
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              }
              title="Call Us"
            >
              7548855853
            </ContactInfoItem>
          </div>
          
          {/* Contact Form */}
          <motion.div variants={fadeIn('up')}>
            <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Full name</label>
                  <div className="mt-1">
                    <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} autoComplete="name" required className="w-full px-4 py-2 text-gray-900 dark:text-white bg-white dark:bg-gray-700 placeholder-gray-500 dark:placeholder-gray-400 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-accent" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                  <div className="mt-1">
                    <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} autoComplete="email" required className="w-full px-4 py-2 text-gray-900 dark:text-white bg-white dark:bg-gray-700 placeholder-gray-500 dark:placeholder-gray-400 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-accent" />
                  </div>
                </div>
                 <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Subject</label>
                  <div className="mt-1">
                    <input type="text" name="subject" id="subject" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-2 text-gray-900 dark:text-white bg-white dark:bg-gray-700 placeholder-gray-500 dark:placeholder-gray-400 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-accent" />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                  <div className="mt-1">
                    <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} required className="w-full px-4 py-2 text-gray-900 dark:text-white bg-white dark:bg-gray-700 placeholder-gray-500 dark:placeholder-gray-400 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-accent"></textarea>
                  </div>
                </div>
                <div>
                  <button 
                    type="submit" 
                    disabled={status === 'submitting'}
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-accent hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-gray-900 focus:ring-accent disabled:bg-gray-500 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
                {status === 'success' && (
                  <p className="text-green-500 dark:text-green-400 text-center">Message sent successfully! We'll get back to you soon.</p>
                )}
                {status === 'error' && (
                  <p className="text-red-500 dark:text-red-400 text-center">Something went wrong. Please try again later.</p>
                )}
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
