import React from "react";
import { Linkedin, Github, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-8">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-6">
          <a href="https://www.linkedin.com/in/sai-aditya-10x/" target="_blank" className="hover:text-blue-400 transition-transform transform hover:scale-110">
            <Linkedin size={24} />
          </a>
          <a href="https://github.com/Aditya-0510" target="_blank" className="hover:text-blue-400 transition-transform transform hover:scale-110">
            <Github size={24} />
          </a>
          <a href="mailto:saiaditya6558@gmail.com" className="hover:text-blue-400 transition-transform transform hover:scale-110">
            <Mail size={24} />
          </a>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-700 mb-4"></div>

        {/* Copyright */}
        <p className="text-sm">
          © {new Date().getFullYear()} <span className="font-semibold">Sai Aditya</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
