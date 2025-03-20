
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
        professional: `Excited to share my thoughts on ${postIdea}! 🚀\n\nIn today's fast-paced environment, finding innovative approaches to this has become crucial for sustained success.\n\nThree key insights from my experience:\n\n1️⃣ Focus on value creation first\n2️⃣ Build meaningful connections\n3️⃣ Embrace continuous learning\n\nWhat strategies have worked for you in this area? I'd love to hear your perspective.\n\n#ProfessionalGrowth #Innovation #Leadership #NetworkingTips`,
        
        casual: `Hey LinkedIn fam! 👋\n\nBeen exploring ${postIdea} lately and wow - what a journey!\n\nIt's fascinating how something so seemingly simple can transform your perspective. Just yesterday I had one of those lightbulb moments that completely changed my approach.\n\nAnyone else diving into this topic? Would love to hear your experiences!\n\n#CuriosityWins #LearningJourney #ProfessionalDevelopment #ConversationStarter`,
        
        storytelling: `I remember the exact moment ${postIdea} changed everything for me... ✨\n\nIt was an ordinary Tuesday. Coffee in hand, deadlines looming.\n\nI was facing what seemed like an impossible challenge - one that many professionals encounter but few discuss openly.\n\nThen it clicked. The solution wasn't what I initially thought.\n\nWhat followed was a journey of experiments, setbacks, and unexpected breakthroughs that completely transformed my approach.\n\nThe biggest lesson? Sometimes the most valuable insights come from embracing uncertainty.\n\nHas anyone else experienced a similar revelation?\n\n#PersonalGrowth #ProfessionalJourney #LeadershipLessons #CareerDevelopment`
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
