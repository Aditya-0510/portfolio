import React from 'react';
import Image from '../assets/photo.jpg';

const About = () => {
    return (
        <section id="about" className="w-full py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-gray-300">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-blue-400">About Me</h2>
                <div className="md:flex items-center gap-8">
                    
                    {/* Image Section */}
                    <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
                        <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-blue-400 shadow-lg">
                            <img 
                                src={Image} 
                                alt="Sai Aditya" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Text Section */}
                    <div className="md:w-2/3">
                        <p className="text-lg mb-4 leading-relaxed">
                            Hi there! I'm a passionate web developer specializing in building modern, responsive, and visually appealing websites. 
                            With expertise in <span className="text-blue-400">React, Tailwind CSS</span>, and cutting-edge technologies, I bring designs to life.
                        </p>
                        <p className="text-lg mb-6 leading-relaxed">
                            Outside of coding, I enjoy exploring new technologies, watching movies, playing sports and engaging in competitive programming.
                            I’m always excited to work on meaningful projects and collaborate with like-minded individuals.
                        </p>

                        {/* Contact Button */}
                        <a 
                            href="https://www.linkedin.com/in/sai-aditya-10x/" 
                            target = "_blank"
                            className="inline-block bg-blue-500 text-white px-6 py-3 rounded-md font-medium shadow-lg transition duration-300 hover:bg-blue-600 hover:shadow-lg hover:scale-105"
                        >
                            Let's Connect
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
