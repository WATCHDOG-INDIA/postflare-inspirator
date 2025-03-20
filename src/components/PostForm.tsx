
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

const PostForm = () => {
  const [postIdea, setPostIdea] = useState('');
  const navigate = useNavigate();
  const { user } = useAuth();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!postIdea.trim()) {
      return;
    }
    
    if (!user) {
      // If user is not logged in, redirect to auth page
      toast({
        title: "Authentication required",
        description: "Please sign in to generate posts.",
      });
      navigate('/auth');
      return;
    }
    
    // If logged in, proceed to generator
    navigate('/generator', { state: { postIdea } });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="glass-card rounded-xl p-6 shadow-sm">
        <div className="mb-4">
          <label htmlFor="postIdea" className="block text-gray-700 text-sm font-medium mb-2">
            Your Post Idea
          </label>
          <textarea
            id="postIdea"
            value={postIdea}
            onChange={(e) => setPostIdea(e.target.value)}
            placeholder="What would you like to post about? (e.g., 'A success story about overcoming challenges in my career')"
            className="glass-input w-full h-28 rounded-xl px-4 py-3 text-gray-700 focus:outline-none transition-all-300"
            required
          />
        </div>
        
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg px-6 py-2.5 inline-flex items-center group transition-all-300"
          >
            <span>Continue</span>
            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostForm;
