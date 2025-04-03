
import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Search, ShoppingBag, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          {/* Logo */}
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/" className="flex items-center group">
              <span className="text-2xl font-display font-bold text-bandiwala-orange">Bandi<span className="text-bandiwala-dark group-hover:text-bandiwala-brown transition-colors duration-300">wala</span></span>
            </a>
          </div>

          {/* Location selector */}
          <div className="hidden md:flex items-center text-sm">
            <MapPin className="w-4 h-4 text-bandiwala-orange mr-1 animate-bounce-light" />
            <span className="font-medium">Deliver to:</span>
            <button className="ml-1 text-bandiwala-orange hover:text-bandiwala-dark font-semibold flex items-center transition-colors duration-300">
              Current Location
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {/* Search bar */}
          <div className="hidden md:flex items-center flex-1 max-w-md">
            <div className="w-full relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search for food or vendors..."
                className="block w-full pl-10 pr-3 py-2 border border-bandiwala-orange/30 rounded-full bg-bandiwala-light/20 focus:ring-bandiwala-orange focus:border-bandiwala-orange transition-all duration-300"
              />
            </div>
          </div>

          {/* Navigation items */}
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 space-x-4">
            <Button variant="ghost" className="flex items-center text-bandiwala-dark hover:text-bandiwala-orange transition-colors duration-300">
              <ShoppingBag className="h-5 w-5 mr-2" />
              Cart
            </Button>
            <Button variant="outline" className="flex items-center border-bandiwala-orange text-bandiwala-orange hover:bg-bandiwala-light hover:text-bandiwala-dark transition-all duration-300">
              <User className="h-5 w-5 mr-2" />
              Login
            </Button>
            <Button className="bg-bandiwala-orange hover:bg-bandiwala-dark text-white transition-all duration-300">
              Sign up
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="icon" className="text-bandiwala-orange hover:text-bandiwala-dark transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
