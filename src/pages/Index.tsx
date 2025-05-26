
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PropertiesSection from '@/components/PropertiesSection';
import OffPlanSection from '@/components/OffPlanSection';

const Index = () => {
  return (
    <div className="min-h-screen w-full">
      <Header />
      <HeroSection />
      <PropertiesSection />
      <OffPlanSection />
    </div>
  );
};

export default Index;
