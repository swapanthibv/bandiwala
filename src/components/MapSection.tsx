
import React from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const MapSection = () => {
  const { toast } = useToast();
  
  const handleFindNearMe = () => {
    toast({
      title: "Finding street food near you",
      description: "Accessing your location..."
    });
  };
  
  return (
    <div className="px-4 py-6">
      <h2 className="text-xl font-bold mb-3">Street Food Near You</h2>
      
      <div className="bg-gray-100 rounded-xl overflow-hidden h-48 relative">
        {/* This is a placeholder for the actual map integration */}
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <MapPin className="h-10 w-10 text-bandiwala-orange mb-2" />
          <p className="text-sm font-medium text-gray-700">Street Food Map</p>
        </div>
        
        {/* Decorative map markers */}
        <div className="absolute top-1/4 left-1/4">
          <div className="w-3 h-3 bg-bandiwala-orange rounded-full animate-pulse"></div>
        </div>
        <div className="absolute top-1/3 right-1/3">
          <div className="w-3 h-3 bg-bandiwala-yellow rounded-full animate-pulse"></div>
        </div>
        <div className="absolute bottom-1/4 right-1/4">
          <div className="w-3 h-3 bg-amber-600 rounded-full animate-pulse"></div>
        </div>
      </div>
      
      <button 
        className="mt-4 w-full py-2 bg-bandiwala-yellow text-white rounded-full font-medium flex items-center justify-center"
        onClick={handleFindNearMe}
      >
        <Navigation className="mr-2 h-4 w-4" />
        Find Street Food Near Me
      </button>
    </div>
  );
};

export default MapSection;
