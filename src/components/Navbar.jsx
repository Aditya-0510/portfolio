import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-10 w-full bg-gray-900 shadow-md">
      <div className="w-full max-w-7xl mx-auto px-8 lg:px-24 md:px-16">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="#" className="text-xl font-bold text-white hover:text-blue-400">Sai Aditya</a>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#about" className="text-white hover:text-blue-400">About</a>
            <a href="#projects" className="text-white hover:text-blue-400">Projects</a>
            <a href="#skills" className="text-white hover:text-blue-400">Skills</a>
            <a href="#contact" className="text-white hover:text-blue-400">Contact</a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-white hover:bg-gray-700 focus:outline-none"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 rounded-lg shadow-md mt-2">
            <div className="px-4 pt-2 pb-3 space-y-2">
              <a href="#about" className="block text-white hover:text-blue-400 py-2">About</a>
              <a href="#projects" className="block text-white hover:text-blue-400 py-2">Projects</a>
              <a href="#skills" className="block text-white hover:text-blue-400 py-2">Skills</a>
              <a href="#contact" className="block text-white hover:text-blue-400 py-2">Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
