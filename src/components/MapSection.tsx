
import React from 'react';
import { MapPin } from 'lucide-react';

const MapSection = () => {
  return (
    <div className="section-container">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title animate-fade-in">Find Vendors Near You</h2>
        <p className="section-subtitle animate-fade-in" style={{ animationDelay: '0.2s' }}>Discover street food vendors and home chefs in your neighborhood</p>
        
        <div className="mt-8 bg-gradient-to-br from-bandiwala-light/50 to-bandiwala-cream rounded-xl overflow-hidden h-96 relative animate-fade-in shadow-lg" style={{ animationDelay: '0.4s' }}>
          {/* This is a placeholder for the actual map integration */}
          <div className="absolute inset-0 flex items-center justify-center flex-col">
            <MapPin className="h-16 w-16 text-bandiwala-orange mb-4 animate-bounce-light" />
            <p className="text-lg font-medium text-gray-700">Map Integration Coming Soon</p>
            <p className="text-gray-500 max-w-md text-center mt-2">
              Soon, you'll be able to discover and track nearby food vendors in real-time, with directions and estimated delivery times.
            </p>
          </div>
          
          {/* Decorative map markers */}
          <div className="absolute top-1/4 left-1/4">
            <div className="w-4 h-4 bg-bandiwala-orange rounded-full animate-pulse"></div>
          </div>
          <div className="absolute top-1/3 right-1/3">
            <div className="w-4 h-4 bg-bandiwala-yellow rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
          <div className="absolute bottom-1/4 right-1/4">
            <div className="w-4 h-4 bg-bandiwala-dark rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
          
          {/* Decorative patterns */}
          <svg className="absolute -bottom-10 -left-10 text-bandiwala-orange/10 w-40 h-40 animate-rotate-slow">
            <circle cx="60" cy="60" r="40" stroke="currentColor" strokeWidth="2" fill="none" />
            <circle cx="60" cy="60" r="30" stroke="currentColor" strokeWidth="2" fill="none" />
            <circle cx="60" cy="60" r="20" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
          
          <svg className="absolute -top-10 -right-10 text-bandiwala-yellow/10 w-40 h-40 animate-rotate-slow" style={{ animationDelay: '2s' }}>
            <circle cx="60" cy="60" r="40" stroke="currentColor" strokeWidth="2" fill="none" />
            <circle cx="60" cy="60" r="30" stroke="currentColor" strokeWidth="2" fill="none" />
            <circle cx="60" cy="60" r="20" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
        </div>
        
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <button className="px-6 py-3 bg-white border border-bandiwala-orange rounded-full font-medium text-bandiwala-orange hover:bg-bandiwala-light/50 transition-colors duration-300 flex items-center justify-center shadow-sm hover:shadow-md">
            <MapPin className="mr-2 h-5 w-5 text-bandiwala-orange animate-bounce-light" />
            Find Vendors Near Me
          </button>
          <button className="px-6 py-3 bg-bandiwala-orange text-white rounded-full font-medium hover:bg-bandiwala-dark transition-colors duration-300 shadow-sm hover:shadow-md">
            Become a Food Vendor
          </button>
        </div>
      </div>
    </div>
  );
};

export default MapSection;
