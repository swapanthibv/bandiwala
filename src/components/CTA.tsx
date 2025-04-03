
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, ShoppingBag } from 'lucide-react';

const CTA = () => {
  return (
    <div className="bg-gradient-to-r from-bandiwala-orange to-bandiwala-dark py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-fade-in text-shadow-md">
          Ready to Explore Street Food & Home Cooking?
        </h2>
        <p className="text-white text-opacity-90 text-lg mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Download our app to discover the best street food vendors and home chefs near you. Order food delivery, pickup, or book catering services.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button className="bg-white hover:bg-gray-100 text-bandiwala-orange hover:text-bandiwala-dark px-6 py-6 h-auto font-semibold transition-all duration-300 hover:shadow-lg">
            <Download className="mr-2 h-5 w-5 animate-bounce-light" />
            Download App
          </Button>
          <Button className="bg-bandiwala-yellow hover:bg-bandiwala-yellow/90 text-bandiwala-brown px-6 py-6 h-auto font-semibold transition-all duration-300 hover:shadow-lg">
            <ShoppingBag className="mr-2 h-5 w-5 animate-bounce-light" style={{ animationDelay: '0.3s' }} />
            Order Now
          </Button>
        </div>
        
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto text-center">
          <div className="bg-white/20 p-6 rounded-xl animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-4xl font-bold text-white mb-2 animate-pulse-subtle">15K+</h3>
            <p className="text-white text-opacity-80">Food Items</p>
          </div>
          <div className="bg-white/20 p-6 rounded-xl animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <h3 className="text-4xl font-bold text-white mb-2 animate-pulse-subtle">10K+</h3>
            <p className="text-white text-opacity-80">Happy Customers</p>
          </div>
          <div className="bg-white/20 p-6 rounded-xl animate-fade-in" style={{ animationDelay: '1s' }}>
            <h3 className="text-4xl font-bold text-white mb-2 animate-pulse-subtle">1K+</h3>
            <p className="text-white text-opacity-80">Vendors</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
