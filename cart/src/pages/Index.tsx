
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <section className="bg-gradient-to-r from-amber-50 to-yellow-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold text-bandiwala-dark mb-4">
                Authentic <span className="text-bandiwala-button">Street Food</span> Delivered
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                From local street corners to your doorstep. Enjoy the taste of authentic street food and home-cooked meals.
              </p>
              <Link 
                to="/cart" 
                className="inline-flex items-center gap-2 bandiwala-button-primary px-6 py-3 text-lg"
              >
                View Cart
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;
