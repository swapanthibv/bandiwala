
import React from 'react';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Text Content */}
        <div className="flex flex-col justify-center z-10 animate-fade-in">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
              Find the Best <span className="text-bandiwala-yellow">Street Food</span> Near You
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              Order delivery or pickup from your favorite street food vendors
            </p>
            
            {/* Search Bar */}
            <div className="mt-4 flex">
              <div className="w-full relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search for street food..."
                  className="block w-full pl-10 pr-3 py-2 text-sm border border-gray-300 rounded-l-full focus:ring-bandiwala-yellow focus:border-bandiwala-yellow shadow-sm"
                />
              </div>
              <Button className="bg-bandiwala-yellow hover:bg-bandiwala-orange text-white rounded-r-full px-4 py-2 text-sm">
                Search
              </Button>
            </div>
          </div>
        </div>
        
        {/* Food Image (optional and simplified) */}
        <div className="mt-4 overflow-hidden rounded-xl">
          <img 
            src="https://source.unsplash.com/photo-1493962853295-0fd70327578a" 
            alt="Street food" 
            className="w-full h-32 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
