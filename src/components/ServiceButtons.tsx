
import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, ShoppingBag, Navigation } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ServiceButtons = () => {
  const { toast } = useToast();
  
  const services = [
    {
      title: 'Delivery',
      description: 'Order street food delivery',
      icon: <ShoppingBag className="h-6 w-6 mb-2 text-white" />,
      bgColor: 'bg-bandiwala-yellow',
      action: () => toast({
        title: "Delivery Selected",
        description: "Redirecting to delivery options..."
      })
    },
    {
      title: 'Pickup',
      description: 'Order ahead for pickup',
      icon: <MapPin className="h-6 w-6 mb-2 text-white" />,
      bgColor: 'bg-bandiwala-orange',
      action: () => toast({
        title: "Pickup Selected",
        description: "Redirecting to pickup options..."
      })
    },
    {
      title: 'Navigate',
      description: 'Find street food near you',
      icon: <Navigation className="h-6 w-6 mb-2 text-white" />,
      bgColor: 'bg-amber-600',
      action: () => toast({
        title: "Navigation Selected",
        description: "Opening map view..."
      })
    },
  ];

  return (
    <div className="px-4 py-6">
      <div className="grid grid-cols-3 gap-2">
        {services.map((service, index) => (
          <div 
            key={index}
            className={`${service.bgColor} rounded-lg p-3 text-center shadow-md transform transition-all duration-200 active:scale-95 cursor-pointer`}
            onClick={service.action}
          >
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center">
                {service.icon}
              </div>
              <h3 className="text-sm font-semibold text-white">{service.title}</h3>
              <p className="text-white text-opacity-90 text-xs hidden sm:block">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceButtons;
