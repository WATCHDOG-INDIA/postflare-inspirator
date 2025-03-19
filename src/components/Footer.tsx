
import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-white py-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-xl font-display font-bold">
              <span className="text-gradient">POST PRO</span>
            </div>
            <p className="text-sm text-gray-500 mt-1">
              Turn Ideas into Viral LinkedIn Posts
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div className="space-y-2 text-center md:text-left">
              <h4 className="text-sm font-medium">Product</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="space-y-2 text-center md:text-left">
              <h4 className="text-sm font-medium">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="space-y-2 text-center md:text-left">
              <h4 className="text-sm font-medium">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-100 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} POST PRO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
