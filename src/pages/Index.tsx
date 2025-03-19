
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import PostForm from '../components/PostForm';
import Footer from '../components/Footer';
import { ArrowRight, Sparkles, Target, Zap } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Features Section */}
      <section id="features" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-medium mb-3">
              Features
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              How POST PRO Works
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our AI-powered platform transforms your ideas into engaging LinkedIn content in just a few steps.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="glass-card rounded-xl p-6 transition-all-300 hover:shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-5">
                <Sparkles size={20} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-medium mb-3">Share Your Idea</h3>
              <p className="text-gray-600">
                Tell us what you want to post about - a project, achievement, insight, or story.
              </p>
            </div>
            
            <div className="glass-card rounded-xl p-6 transition-all-300 hover:shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-5">
                <Target size={20} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-medium mb-3">Select Your Style</h3>
              <p className="text-gray-600">
                Choose between professional, casual, or storytelling formats based on your audience.
              </p>
            </div>
            
            <div className="glass-card rounded-xl p-6 transition-all-300 hover:shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-5">
                <Zap size={20} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-medium mb-3">Generate & Refine</h3>
              <p className="text-gray-600">
                Get an AI-crafted post with hashtags, then fine-tune it with Gemini for perfection.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Try It Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-medium mb-3">
              Try It Now
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Create Your LinkedIn Post
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Start with your idea below, and we'll help you craft the perfect post to engage your network.
            </p>
          </div>
          
          <PostForm />
          
          <div className="mt-10 text-center">
            <Link 
              to="/generator" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-all-300 gap-1"
            >
              <span>Access full generator</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="glass-card rounded-2xl p-8 transition-all-300">
            <div className="text-center mb-6">
              <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-medium mb-3">
                User Success
              </div>
              <h2 className="text-3xl font-display font-bold">
                Loved by LinkedIn Professionals
              </h2>
            </div>
            
            <blockquote className="text-gray-600 text-center text-lg italic mb-6">
              "POST PRO helped me increase my LinkedIn engagement by 300%. The posts it generates feel authentic and get real responses from my network."
            </blockquote>
            
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-medium">
                JD
              </div>
              <div className="ml-3">
                <p className="font-medium">Jennifer Doe</p>
                <p className="text-sm text-gray-500">Marketing Director</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Ready to Create Engaging LinkedIn Content?
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            Join thousands of professionals who use POST PRO to increase their visibility and engagement on LinkedIn.
          </p>
          
          <Link
            to="/generator"
            className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-full font-medium transition-all-300 shadow-lg hover:shadow-xl inline-block"
          >
            Get Started — It's Free
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
