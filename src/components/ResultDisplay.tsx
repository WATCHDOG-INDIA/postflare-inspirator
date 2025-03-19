
import React, { useState, useEffect } from 'react';
import { ClipboardCopy } from 'lucide-react';

interface ResultDisplayProps {
  postIdea: string;
  selectedStyle: string;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ postIdea, selectedStyle }) => {
  const [generatedContent, setGeneratedContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Simulate API call to Gemini for content generation
    const timer = setTimeout(() => {
      const dummyResponses = {
        professional: `I'm excited to share some insights on ${postIdea}! 🚀\n\nOver the past year, I've discovered that the key to success in this area isn't just about technical knowledge, but strategic implementation.\n\nThree key takeaways from my experience:\n\n1️⃣ Start with clear objectives\n2️⃣ Consistently measure results\n3️⃣ Adapt based on data, not assumptions\n\nWhat strategies have worked for you in this space?\n\n#ProfessionalDevelopment #Innovation #CareerGrowth #Leadership`,
        casual: `Hey LinkedIn fam! ✌️\n\nBeen thinking a lot about ${postIdea} lately.\n\nIt's crazy how something so simple can have such a big impact on our day-to-day, right?\n\nJust yesterday I had this "aha moment" that completely changed my perspective on it.\n\nAnyone else obsessing over this lately? Drop your thoughts below!\n\n#RealTalk #GrowthMindset #DailyInsights #ConnectWithMe`,
        storytelling: `I remember the moment everything changed with ${postIdea}. ✨\n\nIt was a Tuesday morning. Coffee in hand, stress levels high.\n\nI was facing what seemed like an impossible challenge - one many of us in this industry know all too well.\n\nThen it hit me: what if I approached it completely differently?\n\nWhat followed was a journey of ups and downs, late nights and early breakthroughs.\n\nThe result? Not just a solution, but a whole new perspective.\n\nHere's what I learned...\n\n#PersonalJourney #Resilience #SuccessStory #Inspiration`
      };
      
      setGeneratedContent(dummyResponses[selectedStyle as keyof typeof dummyResponses]);
      setLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, [postIdea, selectedStyle]);

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full glass-card rounded-2xl p-6 shadow-md animate-fade-in">
      {loading ? (
        <div className="flex flex-col items-center justify-center py-10">
          <div className="w-10 h-10 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mb-4"></div>
          <p className="text-gray-500">Generating your LinkedIn post...</p>
        </div>
      ) : (
        <div className="relative">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium">Generated LinkedIn Post</h3>
            <button
              onClick={handleCopy}
              className="text-gray-500 hover:text-blue-600 transition-colors p-2 rounded-full hover:bg-blue-50 flex items-center gap-1"
            >
              <ClipboardCopy size={16} />
              <span className="text-sm">{copied ? 'Copied!' : 'Copy'}</span>
            </button>
          </div>
          
          <div className="bg-white border border-gray-100 rounded-xl p-5 mb-6 whitespace-pre-line">
            {generatedContent}
          </div>
          
          <div className="flex justify-center mb-2">
            <button
              onClick={() => window.location.reload()}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-blue-800"
            >
              <span>Create Another Post</span>
            </button>
          </div>
          
          <p className="text-center text-sm text-gray-500">
            Start fresh with a new LinkedIn post idea
          </p>
        </div>
      )}
    </div>
  );
};

export default ResultDisplay;
