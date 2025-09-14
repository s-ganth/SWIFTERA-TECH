import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SERVICES, PROJECTS, TESTIMONIALS, COMPANY_STATS } from '../constants';
import { fadeIn, staggerContainer } from '../animations';

const StatCard: React.FC<{ value: string; label: string }> = ({ value, label }) => (
    <div className="text-center">
        <p className="text-4xl md:text-5xl font-bold text-accent">{value}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{label}</p>
    </div>
);

const HomePage: React.FC = () => {
    return (
        <div className="space-y-24 md:space-y-32 pb-24">
            {/* Hero Section */}
            <motion.section
                variants={staggerContainer(0.3, 0.2)}
                initial="hidden"
                animate="show"
                className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 text-center"
            >
                <motion.h1 variants={fadeIn('down')} className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
                    Elevate Your Digital Presence
                </motion.h1>
                <motion.p variants={fadeIn('down', 0.2)} className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                    We are Swiftera Technology, a full-service digital marketing agency dedicated to helping your brand thrive in the digital landscape.
                </motion.p>
                <motion.div variants={fadeIn('up', 0.4)} className="mt-8 flex justify-center space-x-4">
                    <Link to="/services" className="bg-accent hover:bg-accent-hover text-white font-bold py-3 px-8 rounded-full transition-colors">
                        Our Services
                    </Link>
                    <Link to="/contact" className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-full transition-colors">
                        Get in Touch
                    </Link>
                </motion.div>
            </motion.section>

            {/* Services Section */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">What We Do</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SERVICES.map((service, index) => (
                        <Link to={`/services/${service.id}`} key={service.id}>
                            <motion.div
                                variants={fadeIn('up', index * 0.1)}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.3 }}
                                className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg text-center h-full transform hover:-translate-y-2 transition-transform duration-300"
                            >
                                <div className="flex justify-center mb-4">
                                    <service.icon className="w-16 h-16 text-accent" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{service.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </section>
            
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

            {/* Portfolio Section */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Our Recent Work</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS.slice(0, 3).map((project, index) => (
                        <Link to={`/portfolio/${project.id}`} key={project.id}>
                            <motion.div 
                                variants={fadeIn('up', index * 0.1)}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.3 }}
                                className="group relative overflow-hidden rounded-lg h-full"
                            >
                                <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-end p-6">
                                    <p className="text-sm text-accent font-semibold">{project.category}</p>
                                    <h3 className="text-xl font-bold text-white mt-1">{project.title}</h3>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <Link to="/portfolio" className="bg-accent hover:bg-accent-hover text-white font-bold py-3 px-8 rounded-full transition-colors">
                        View All Projects
                    </Link>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">What Our Clients Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {TESTIMONIALS.map((testimonial, index) => (
                        <motion.div 
                            key={index}
                            variants={fadeIn('up', index * 0.1)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.3 }}
                            className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg flex flex-col"
                        >
                            <p className="text-gray-600 dark:text-gray-300 italic mb-6 flex-grow">"{testimonial.quote}"</p>
                            <div className="flex items-center mt-auto">
                                <img src={testimonial.imageUrl} alt={testimonial.author} className="w-12 h-12 rounded-full mr-4" />
                                <div>
                                    <p className="font-bold text-gray-900 dark:text-white">{testimonial.author}</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default HomePage;
