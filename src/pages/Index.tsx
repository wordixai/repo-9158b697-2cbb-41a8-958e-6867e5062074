import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import PhoenixSection from '@/components/PhoenixSection';
import EnterpriseSection from '@/components/EnterpriseSection';
import TechSection from '@/components/TechSection';
import PostgresSection from '@/components/PostgresSection';
import JavaScriptSection from '@/components/JavaScriptSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="relative w-full h-full overflow-hidden -mt-24 pt-24">
        <div className="absolute inset-0 bg-gray-100 bg-gradient-to-b from-gray-100 via-white to-white"></div>
        
        <Header />
        
        <main>
          <Hero />
          <Features />
          <PhoenixSection />
          <EnterpriseSection />
          <TechSection />
          <PostgresSection />
          <JavaScriptSection />
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;