
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap, BadgePercent, Heart, ThumbsUp } from 'lucide-react';

const PricingSection = () => {
  const features = [
    { 
      icon: <Check className="text-green-500" />, 
      text: "Unlimited post generation" 
    },
    { 
      icon: <Zap className="text-amber-500" />, 
      text: "Advanced AI engine" 
    },
    { 
      icon: <BadgePercent className="text-blue-500" />, 
      text: "Yearly subscribers save 59%" 
    },
    { 
      icon: <Heart className="text-rose-500" />, 
      text: "Personalized content" 
    },
    { 
      icon: <ThumbsUp className="text-indigo-500" />, 
      text: "LinkedIn-specific copy" 
    },
    { 
      icon: <Star className="text-yellow-500" />, 
      text: "Premium support" 
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-medium mb-3">
            Pricing
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the plan that works best for you. No hidden fees, cancel anytime.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8 max-w-4xl mx-auto">
          {/* Monthly Plan */}
          <div className="flex-1 glass-card rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg">
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-2">Monthly</h3>
              <div className="flex items-end gap-1 mb-6">
                <span className="text-4xl font-bold">$9.99</span>
                <span className="text-gray-500 mb-1">/month</span>
              </div>
              
              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    {feature.icon}
                    <span className="text-gray-700">{feature.text}</span>
                  </div>
                ))}
              </div>
              
              <Link to="/auth">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Yearly Plan */}
          <div className="flex-1 glass-card rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg border-2 border-blue-200 relative">
            <Badge className="absolute top-6 right-6 bg-blue-600">Best Value</Badge>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-2">Yearly</h3>
              <div className="flex items-end gap-1 mb-2">
                <span className="text-4xl font-bold">$49</span>
                <span className="text-gray-500 mb-1">/year</span>
              </div>
              <div className="mb-6 text-sm text-blue-600 font-medium">
                Save 59% compared to monthly
              </div>
              
              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    {feature.icon}
                    <span className="text-gray-700">{feature.text}</span>
                  </div>
                ))}
              </div>
              
              <Link to="/auth">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            All plans include a 7-day free trial. No credit card required to start.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
