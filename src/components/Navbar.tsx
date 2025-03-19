
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all-300 px-6 py-4 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="text-xl font-display font-bold flex items-center gap-2 transition-all-300 hover:opacity-80"
        >
          <span className="text-gradient">POST PRO</span>
        </Link>
        
        <div className="flex items-center gap-6">
          <Link 
            to="/" 
            className={`font-medium text-sm transition-all-300 hover:text-blue-600 ${
              location.pathname === '/' ? 'text-blue-600' : 'text-gray-600'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/generator" 
            className={`font-medium text-sm transition-all-300 hover:text-blue-600 ${
              location.pathname === '/generator' ? 'text-blue-600' : 'text-gray-600'
            }`}
          >
            Generate
          </Link>
          <Link
            to="/generator"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm py-2 px-4 rounded-full transition-all-300 shadow-md hover:shadow-lg"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
