import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, ease: "easeOut" }} 
            className="w-full bg-gradient-to-r from-gray-900 to-gray-800 text-gray-300 py-24"
        >
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.h1 
                    initial={{ opacity: 0, y: -20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }} 
                    className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
                >
                    Hi, I'm <span className="text-blue-400">Sai Aditya</span>
                </motion.h1>

                <motion.p 
                    initial={{ opacity: 0, y: -20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }} 
                    className="text-xl sm:text-2xl md:text-3xl mb-8 font-light"
                >
                    Web Developer & Competitive Programmer
                </motion.p>

                <div className="flex justify-center space-x-4">
                    <motion.a 
                        href="/resume.pdf" 
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }} 
                        whileTap={{ scale: 0.95 }}
                        className="bg-blue-500 text-white px-6 py-3 rounded-md font-medium shadow-lg transition duration-300 hover:bg-blue-600 hover:shadow-lg"
                    >
                        Resume
                    </motion.a>

                    <motion.a 
                        href="#projects"
                        whileHover={{ scale: 1.1 }} 
                        whileTap={{ scale: 0.95 }}
                        className="border-2 border-gray-300 text-gray-300 px-6 py-3 rounded-md font-medium transition duration-300 hover:bg-gray-700 hover:text-white hover:shadow-lg"
                    >
                        View My Work
                    </motion.a>
                </div>
            </div>
        </motion.div>
    );
};

export default Hero;
