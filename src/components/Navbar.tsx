
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LogOut, Menu, User, X } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();
  const { user, signOut } = useAuth();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleSignOut = async () => {
    await signOut();
    setMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 ${
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
        
        {isMobile ? (
          <>
            <button 
              onClick={toggleMobileMenu} 
              className="text-gray-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
            
            {mobileMenuOpen && (
              <div className="absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-6 flex flex-col gap-4 animate-fade-down">
                {user ? (
                  <>
                    <Link 
                      to="/generator" 
                      className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm py-2 px-4 rounded-full transition-all-300 shadow-md hover:shadow-lg text-center"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Generate Post
                    </Link>
                    <button
                      onClick={handleSignOut}
                      className="flex items-center gap-2 text-gray-600 hover:text-red-600 font-medium text-sm py-2"
                    >
                      <LogOut size={16} />
                      <span>Sign Out</span>
                    </button>
                  </>
                ) : (
                  <Link 
                    to="/auth" 
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm py-2 px-4 rounded-full transition-all-300 shadow-md hover:shadow-lg text-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                )}
              </div>
            )}
          </>
        ) : (
          <div className="flex items-center gap-6">
            <Link 
              to="/" 
              className={`font-medium text-sm transition-all-300 hover:text-blue-600 ${
                location.pathname === '/' ? 'text-blue-600' : 'text-gray-600'
              }`}
            >
              Home
            </Link>
            
            {user && (
              <Link 
                to="/generator" 
                className={`font-medium text-sm transition-all-300 hover:text-blue-600 ${
                  location.pathname === '/generator' ? 'text-blue-600' : 'text-gray-600'
                }`}
              >
                Generate
              </Link>
            )}
            
            {user ? (
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <User size={14} />
                </div>
                <button
                  onClick={signOut}
                  className="text-gray-600 hover:text-red-600 transition-colors"
                >
                  <LogOut size={18} />
                </button>
              </div>
            ) : (
              <Link
                to="/auth"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm py-2 px-4 rounded-full transition-all-300 shadow-md hover:shadow-lg"
              >
                Sign In
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
