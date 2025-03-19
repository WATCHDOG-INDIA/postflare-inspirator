
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StyleSelector from '../components/StyleSelector';
import ResultDisplay from '../components/ResultDisplay';
import { ArrowLeft } from 'lucide-react';

const Generator = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [postIdea, setPostIdea] = useState('');
  const [idealOutcome, setIdealOutcome] = useState('');
  const [selectedStyle, setSelectedStyle] = useState('professional');
  const [error, setError] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Check if post idea was passed from home page
    if (location.state?.postIdea) {
      setPostIdea(location.state.postIdea);
    }
  }, [location.state]);

  const handleNext = () => {
    if (step === 1) {
      if (!postIdea.trim()) {
        setError('Please enter your post idea');
        return;
      }
      setError('');
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      navigate('/');
    }
  };

  const handleReset = () => {
    setPostIdea('');
    setIdealOutcome('');
    setSelectedStyle('professional');
    setStep(1);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={handleBack}
            className="flex items-center text-gray-500 hover:text-blue-600 mb-8 transition-all-300"
          >
            <ArrowLeft size={16} className="mr-1" />
            <span>{step === 1 ? 'Back to Home' : 'Back'}</span>
          </button>
          
          <div className="glass-panel rounded-2xl p-8 shadow-sm mb-10 animate-fade-in">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-2xl font-display font-bold">LinkedIn Post Generator</h1>
              
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${step >= 1 ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
                <div className={`w-12 h-0.5 ${step >= 2 ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
                <div className={`w-3 h-3 rounded-full ${step >= 2 ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
                <div className={`w-12 h-0.5 ${step >= 3 ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
                <div className={`w-3 h-3 rounded-full ${step >= 3 ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
              </div>
            </div>
            
            {step === 1 && (
              <div className="animate-fade-in">
                <h2 className="text-xl font-medium mb-6">What would you like to post about?</h2>
                
                <div className="mb-6">
                  <label htmlFor="postIdea" className="block text-gray-700 text-sm font-medium mb-2">
                    Post Idea or Topic
                  </label>
                  <textarea
                    id="postIdea"
                    value={postIdea}
                    onChange={(e) => setPostIdea(e.target.value)}
                    placeholder="Enter your post idea or topic (e.g., 'A success story about overcoming challenges in my career')"
                    className="glass-input w-full h-32 rounded-xl px-4 py-3 text-gray-700 focus:outline-none transition-all-300"
                    required
                  />
                  {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
                </div>
                
                <div className="mb-6">
                  <label htmlFor="idealOutcome" className="block text-gray-700 text-sm font-medium mb-2">
                    Ideal Outcome (Optional)
                  </label>
                  <textarea
                    id="idealOutcome"
                    value={idealOutcome}
                    onChange={(e) => setIdealOutcome(e.target.value)}
                    placeholder="What do you want to achieve with this post? (e.g., 'Generate discussion about industry trends')"
                    className="glass-input w-full h-24 rounded-xl px-4 py-3 text-gray-700 focus:outline-none transition-all-300"
                  />
                </div>
              </div>
            )}
            
            {step === 2 && (
              <div className="animate-fade-in">
                <h2 className="text-xl font-medium mb-6">Choose Your Post Style</h2>
                
                <StyleSelector 
                  selectedStyle={selectedStyle} 
                  onStyleSelect={(style) => setSelectedStyle(style)} 
                />
              </div>
            )}
            
            {step === 3 && (
              <div className="animate-fade-in">
                <h2 className="text-xl font-medium mb-6">Your Generated LinkedIn Post</h2>
                
                <ResultDisplay 
                  postIdea={postIdea} 
                  selectedStyle={selectedStyle} 
                />
                
                <div className="mt-8 text-center">
                  <button
                    onClick={handleReset}
                    className="text-blue-600 hover:text-blue-800 font-medium transition-all-300"
                  >
                    Create Another Post
                  </button>
                </div>
              </div>
            )}
            
            {step < 3 && (
              <div className="flex justify-end mt-8">
                <button
                  onClick={handleNext}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-medium transition-all-300"
                >
                  {step === 1 ? 'Continue' : 'Generate Post'}
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Generator;
