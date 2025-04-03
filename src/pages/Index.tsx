
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ServiceButtons from '@/components/ServiceButtons';
import MapSection from '@/components/MapSection';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <Hero />
      <ServiceButtons />
      <MapSection />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
