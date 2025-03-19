
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PostForm = () => {
  const navigate = useNavigate();
  const [postIdea, setPostIdea] = useState('');
  const [loading, setLoading] = useState(false);
  const [ideaError, setIdeaError] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!postIdea.trim()) {
      setIdeaError('Please enter a post idea');
      return;
    }
    
    setIdeaError('');
    setLoading(true);
    
    // Simulate loading
    setTimeout(() => {
      setLoading(false);
      navigate('/generator', { state: { postIdea } });
    }, 800);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-6 transition-all-300">
        <div className="mb-5">
          <label htmlFor="postIdea" className="block text-gray-700 text-sm font-medium mb-2">
            What would you like to post about?
          </label>
          <textarea
            id="postIdea"
            value={postIdea}
            onChange={(e) => setPostIdea(e.target.value)}
            placeholder="Enter your post idea or topic (e.g., 'A success story about overcoming challenges in my career')"
            className="glass-input w-full h-32 rounded-xl px-4 py-3 text-gray-700 focus:outline-none transition-all-300"
            required
          />
          {ideaError && <p className="mt-1 text-sm text-red-500">{ideaError}</p>}
        </div>
        
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-medium transition-all-300 flex items-center justify-center min-w-[120px]"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              'Continue'
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostForm;
