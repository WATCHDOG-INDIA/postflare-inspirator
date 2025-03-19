
import React from 'react';

interface StyleSelectorProps {
  selectedStyle: string;
  onStyleSelect: (style: string) => void;
}

const StyleSelector: React.FC<StyleSelectorProps> = ({ selectedStyle, onStyleSelect }) => {
  const styles = [
    {
      id: 'professional',
      title: 'Professional',
      description: 'Formal tone with industry insights and expertise',
      icon: '💼'
    },
    {
      id: 'casual',
      title: 'Casual',
      description: 'Conversational and approachable content',
      icon: '☕'
    },
    {
      id: 'storytelling',
      title: 'Storytelling',
      description: 'Narrative format with personal experiences',
      icon: '📖'
    }
  ];

  return (
    <div className="w-full">
      <h3 className="text-lg font-medium text-gray-700 mb-4">Select Post Style</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {styles.map((style) => (
          <div
            key={style.id}
            onClick={() => onStyleSelect(style.id)}
            className={`glass-card cursor-pointer rounded-xl p-5 transition-all-300 ${
              selectedStyle === style.id
                ? 'border-blue-400 shadow-md bg-blue-50/50'
                : 'hover:border-gray-300 hover:shadow-sm'
            }`}
          >
            <div className="flex flex-col items-center text-center">
              <div className="text-2xl mb-2">{style.icon}</div>
              <h4 className="text-base font-medium mb-2">{style.title}</h4>
              <p className="text-sm text-gray-500">{style.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StyleSelector;
