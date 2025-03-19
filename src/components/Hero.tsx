
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set initial opacity to ensure visibility even before animation
    if (titleRef.current) {
      titleRef.current.style.opacity = '1';
      titleRef.current.classList.add('animate-fade-down');
    }
    
    const subtitleTimer = setTimeout(() => {
      if (subtitleRef.current) {
        subtitleRef.current.classList.add('animate-fade-up');
        subtitleRef.current.style.opacity = '1';
      }
    }, 300);
    
    const ctaTimer = setTimeout(() => {
      if (ctaRef.current) {
        ctaRef.current.classList.add('animate-fade-up');
        ctaRef.current.style.opacity = '1';
      }
    }, 600);
    
    return () => {
      clearTimeout(subtitleTimer);
      clearTimeout(ctaTimer);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white -z-10"></div>
      
      {/* Animated shapes */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow opacity-70 -z-10"></div>
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow opacity-60 -z-10"></div>
      
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex flex-col items-center gap-2 mb-3">
          <div className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-medium">
            LinkedIn Content Generator
          </div>
        </div>
        
        <h1 
          ref={titleRef}
          className="text-4xl md:text-5xl font-display font-bold mb-5" 
        >
          Turn Ideas into 
          <span className="text-gradient"> Viral LinkedIn Posts</span>
        </h1>
        
        <p 
          ref={subtitleRef}
          className="text-lg text-gray-600 mb-8 max-w-xl mx-auto opacity-0"
        >
          Create professional, casual, or storytelling LinkedIn posts that get engagement with our AI-powered content generator.
        </p>
        
        <div 
          ref={ctaRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 opacity-0"
        >
          <Link
            to="/generator"
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-all-300 shadow-lg hover:shadow-xl"
          >
            Create Your Post
          </Link>
          <a 
            href="#features"
            className="w-full sm:w-auto px-6 py-3 text-gray-600 hover:text-blue-600 font-medium transition-all-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
