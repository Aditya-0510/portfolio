import React from "react";
import { motion } from "framer-motion";
import LegalVizierImage from "../assets/Legal_Vizier_final.jpg";
import ProxyPakkiImage from "../assets/Proxy_Pakki.jpg";
import PortfolioImage from "../assets/portfolio.png";


const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Attendance Management App",
      description: "A modern React-Native application for managing student attendance for University.",
      image: ProxyPakkiImage,
      tags: ["React-Native", "Node.js", "MongoDB"],
      link: "https://github.com/Aditya-0510/attendance-final",
    },
    {
      id: 2,
      title: "Personal Portfolio",
      description: "A portfolio website showcasing skills, projects, and contact information.",
      image: PortfolioImage,
      tags: ["React", "Tailwind CSS"],
      link: "#",
    },
    {
      id: 3,
      title: "Legal Vizier",
      description: "A web application showcasing legal rights for users in a visual manner.",
      image: LegalVizierImage,
      tags: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/Aditya-0510/legal-vizier",
    },
  ];

  return (
    <section id="projects" className="w-full py-20 bg-gray-900 text-gray-300">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow border border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex flex-col">
                <h3 className="text-2xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap mb-4 gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="mt-auto text-blue-400 hover:text-blue-300 font-medium transition-colors"
                >
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;