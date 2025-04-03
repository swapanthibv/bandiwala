
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, ShoppingBag } from 'lucide-react';

const CTA = () => {
  return (
    <div className="bg-gradient-to-r from-bandiwala-yellow to-bandiwala-orange py-8">
      <div className="px-4 text-center">
        <h2 className="text-xl font-bold text-white mb-3">
          Get Street Food Delivered!
        </h2>
        <p className="text-white text-opacity-90 text-sm mb-4">
          Download our app to discover the best street food vendors near you.
        </p>
        
        <div className="flex flex-col gap-3">
          <Button className="bg-white hover:bg-gray-100 text-bandiwala-orange w-full py-2 h-auto font-semibold">
            <Download className="mr-2 h-4 w-4" />
            Download App
          </Button>
          <Button className="bg-amber-800 hover:bg-amber-900 text-white w-full py-2 h-auto font-semibold">
            <ShoppingBag className="mr-2 h-4 w-4" />
            Order Now
          </Button>
        </div>
        
        <div className="mt-6 grid grid-cols-3 gap-2">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">5K+</h3>
            <p className="text-white text-opacity-80 text-xs">Items</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-1">8K+</h3>
            <p className="text-white text-opacity-80 text-xs">Users</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-1">500+</h3>
            <p className="text-white text-opacity-80 text-xs">Vendors</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
