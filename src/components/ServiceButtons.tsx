
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, ShoppingBag, Utensils } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { Drawer, DrawerContent, DrawerTrigger, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";

const ServiceButtons = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null);
  const [activeDialog, setActiveDialog] = useState<number | null>(null);
  const [openDrawer, setOpenDrawer] = useState<number | null>(null);

  const services = [
    {
      title: 'Food Delivery',
      description: 'Order your favorite food from local vendors',
      icon: <ShoppingBag className="h-8 w-8 mb-4 text-white" />,
      bgColor: 'bg-bandiwala-orange',
      action: () => {
        console.log('Food Delivery clicked');
        setActiveDialog(0);
      },
      details: 'Get hot, fresh food delivered to your doorstep within 30 minutes. Choose from hundreds of local vendors.'
    },
    {
      title: 'Pickup',
      description: 'Skip the line, order ahead for pickup',
      icon: <MapPin className="h-8 w-8 mb-4 text-white" />,
      bgColor: 'bg-bandiwala-dark',
      action: () => {
        console.log('Pickup clicked');
        setActiveDialog(1);
      },
      details: 'Order ahead and skip the waiting. Your food will be ready when you arrive at the vendor location.'
    },
    {
      title: 'Catering',
      description: 'Perfect for events and gatherings',
      icon: <Utensils className="h-8 w-8 mb-4 text-white" />,
      bgColor: 'bg-bandiwala-brown',
      action: () => {
        console.log('Catering clicked');
        setActiveDialog(2);
      },
      details: 'Plan your next event with our catering services. We offer customized menus for all types of gatherings.'
    },
  ];

  return (
    <div className="section-container relative overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-bandiwala-yellow/20 rounded-full blur-3xl animate-pulse-subtle"></div>
        <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-bandiwala-orange/20 rounded-full blur-3xl animate-pulse-subtle" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-bandiwala-light/30 rounded-full blur-3xl animate-pulse-subtle" style={{ animationDelay: '0.8s' }}></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto relative z-10">
        {services.map((service, index) => (
          <div key={index}>
            {/* Mobile view: Drawer */}
            <div className="lg:hidden">
              <Drawer open={openDrawer === index} onOpenChange={(open) => setOpenDrawer(open ? index : null)}>
                <DrawerTrigger asChild>
                  <div 
                    className={`${service.bgColor} rounded-xl p-8 text-center shadow-lg transform transition-all duration-500 hover:scale-105 cursor-pointer
                      ${expandedService === index ? 'scale-105 shadow-xl' : ''}
                      animate-fade-in`}
                    style={{ animationDelay: `${index * 0.3}s` }}
                    onMouseEnter={() => setExpandedService(index)}
                    onMouseLeave={() => setExpandedService(null)}
                  >
                    <div className="flex flex-col items-center">
                      <div className={`mb-2 flex items-center justify-center rounded-full p-4 bg-white/10 
                        ${expandedService === index ? 'animate-[pulse_1.5s_ease-in-out_infinite]' : ''}`}>
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-semibold text-white mb-2 text-shadow-sm">{service.title}</h3>
                      <p className="text-white text-opacity-90 mb-6">{service.description}</p>
                      <Button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold transition-all duration-300 hover:shadow-lg group">
                        <span className="transition-all group-hover:pr-2">Order Now</span>
                        <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                      </Button>
                    </div>
                  </div>
                </DrawerTrigger>
                <DrawerContent className="bg-gradient-to-b from-bandiwala-light to-white">
                  <DrawerHeader>
                    <DrawerTitle className="text-2xl text-bandiwala-orange flex items-center gap-4">
                      {service.icon}
                      <span>{service.title}</span>
                    </DrawerTitle>
                  </DrawerHeader>
                  <div className="p-6">
                    <p className="text-lg mb-4">{service.details}</p>
                    <Button className="w-full bg-bandiwala-orange hover:bg-bandiwala-dark text-white mt-4">
                      Continue
                    </Button>
                  </div>
                </DrawerContent>
              </Drawer>
            </div>

            {/* Desktop view: Dialog with hover effects */}
            <div className="hidden lg:block">
              <HoverCard>
                <HoverCardTrigger asChild>
                  <div 
                    className={`${service.bgColor} rounded-xl p-8 text-center shadow-md transform transition-all duration-500
                      hover:shadow-[0_20px_70px_-15px_rgba(238,161,37,0.8)] hover:scale-105 cursor-pointer
                      ${expandedService === index ? 'scale-105 shadow-xl' : ''}
                      animate-fade-in relative overflow-hidden group`}
                    style={{ animationDelay: `${index * 0.3}s` }}
                    onMouseEnter={() => setExpandedService(index)}
                    onMouseLeave={() => setExpandedService(null)}
                    onClick={service.action}
                  >
                    {/* Visual effects on hover */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.8)_0%,_transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                    <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    
                    <div className="flex flex-col items-center relative z-10">
                      <div className={`mb-2 flex items-center justify-center rounded-full p-4 bg-white/10 
                        transition-all duration-700 group-hover:scale-110
                        ${expandedService === index ? 'animate-[pulse_1.5s_ease-in-out_infinite]' : ''}`}>
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-semibold text-white mb-2 text-shadow-sm transition-transform duration-500 group-hover:translate-y-[-5px]">{service.title}</h3>
                      <p className="text-white text-opacity-90 mb-6 transition-all duration-500 group-hover:text-opacity-100">{service.description}</p>
                      <Button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold transition-all duration-300 hover:shadow-lg group relative overflow-hidden">
                        <span className="relative z-10 transition-all group-hover:pr-2">Order Now</span>
                        <span className="inline-block transition-transform group-hover:translate-x-1 relative z-10">→</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-bandiwala-yellow to-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
                      </Button>
                    </div>
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="bg-white/90 backdrop-blur-lg border-bandiwala-light w-80">
                  <h4 className="text-lg font-semibold text-bandiwala-orange">{service.title}</h4>
                  <p className="mt-2 text-sm text-gray-600">{service.details}</p>
                </HoverCardContent>
              </HoverCard>
            </div>

            {/* Dialog for service details */}
            <Dialog open={activeDialog === index} onOpenChange={(open) => setActiveDialog(open ? index : null)}>
              <DialogContent className="bg-white max-w-md rounded-xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl text-bandiwala-orange flex items-center gap-4">
                    {service.icon}
                    <span>{service.title}</span>
                  </DialogTitle>
                  <DialogDescription>
                    Start ordering your favorite street food now
                  </DialogDescription>
                </DialogHeader>
                <div className="p-4">
                  <p className="text-lg mb-6">{service.details}</p>
                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" onClick={() => setActiveDialog(null)}>
                      Cancel
                    </Button>
                    <Button className="bg-bandiwala-orange hover:bg-bandiwala-dark text-white">
                      Continue
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceButtons;
