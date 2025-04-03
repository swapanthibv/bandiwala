
import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Search, ShoppingBag } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-xl font-display font-bold text-bandiwala-yellow">Bandi<span className="text-bandiwala-orange">wala</span></span>
            </a>
          </div>

          {/* Location selector (small screen) */}
          <div className="flex items-center text-xs">
            <MapPin className="w-3 h-3 text-bandiwala-orange mr-1" />
            <span className="font-medium truncate max-w-[100px]">Current Location</span>
          </div>

          {/* Cart */}
          <Button variant="ghost" size="icon" className="text-bandiwala-orange">
            <ShoppingBag className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
