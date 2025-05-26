import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, RotateCcw } from 'lucide-react';

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState('FOR RENT');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    'https://assets.kerzner.com/api/public/content/6718a5b3ceaa4c82a9972e90c0e95d52?v=0ecc7d33&t=w2880',
    'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=80'
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-500 ${
              index === currentImageIndex ? 'opacity-60' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url('${image}')` }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 py-20">
        <div className="max-w-20xl">
          <h1 className="text-xl md:text-6xl font-medium text-white mb-8 leading-tight">
            DISCOVER YOUR MOST COMFORT
            <br />
            PLACE FOR YOUR FUTURE LIFE
          </h1>

          <div className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-6 mb-12">
            <div className="flex flex-col lg:flex-row items-center gap-6 backdrop-blur-md bg-white/10 rounded-lg p-6 lg:p-10 border border-white/20 w-full lg:w-auto">
              <div className="flex items-center gap-3 text-white">
                <div className="text-5xl">5+</div>
                <div className="text-sm text-gray-200 text-left">
                  POPULAR<br />AREAS
                </div>
              </div>
              <div className="h-px w-full lg:h-10 lg:w-px bg-white/30" />
              <div className="flex items-center gap-3 text-white">
                <div className="text-5xl">11+</div>
                <div className="text-sm text-gray-200 text-left">
                  PROJECTS
                </div>
              </div>
              <div className="h-px w-full lg:h-10 lg:w-px bg-white/30" />
              <div className="flex items-center gap-3 text-white">
                <div className="text-5xl">6+</div>
                <div className="text-sm text-gray-200 text-left">
                  YEARS<br />EXPERIENCE
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center lg:justify-end mt-4 lg:mt-10">
              <Button className="bg-[#f3a725] hover:bg-[#223248] text-white text-lg font-normal px-6 py-3 rounded-full shadow-lg">
                All Projects
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
            </div>
          </div>

          <div className="pt-44">
            <div className="backdrop-blur-lg bg-none rounded-2xl p-6 md:p-8 shadow-2xl border border-white/30 max-w-full mx-auto">
              <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
                <div className="flex bg-gray-100 rounded-full p-1">
                  <button
                    onClick={() => setActiveTab('FOR SALE')}
                    className={`px-6 py-2 rounded-full transition-all text-sm font-medium ${
                      activeTab === 'FOR SALE'
                        ? 'bg-white text-gray-800 shadow-md'
                        : 'text-gray-600 hover:text-gray-800'
                    }`}
                  >
                    FOR SALE
                  </button>
                  <button
                    onClick={() => setActiveTab('FOR RENT')}
                    className={`px-6 py-2 rounded-full transition-all text-sm font-medium ${
                      activeTab === 'FOR RENT'
                        ? 'bg-[#11024d] text-white shadow-md'
                        : 'text-gray-600 hover:text-gray-800'
                    }`}
                  >
                    FOR RENT
                  </button>
                </div>
                <button className="text-white hover:text-gray-700 flex items-center text-sm font-bold border-b-2 border-current pb-[2px]">
                  <RotateCcw className="w-4 h-4 mr-2" />
                  RESET
                </button>
              </div>

              {/* Responsive Grid */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:gap-4">
                <div className="md:col-span-2 flex flex-col sm:flex-row sm:gap-4">
                  <div className="flex-1 relative bg-white rounded-xl border border-gray-200 shadow-sm mb-4 sm:mb-0">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      placeholder="City, community, area"
                      className="h-14 pl-12 border-0 bg-transparent rounded-xl text-gray-700 placeholder:text-gray-400 text-base w-full"
                    />
                  </div>
                  <div className="flex-1 relative bg-white rounded-xl border border-gray-200 shadow-sm">
                    <select className="w-full h-14 border-0 rounded-xl px-4 text-gray-700 bg-transparent appearance-none cursor-pointer text-base">
                      <option value="">Property Type</option>
                      <option value="villa">Villa</option>
                      <option value="apartment">Apartment</option>
                      <option value="townhouse">Townhouse</option>
                    </select>
                    <svg
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                <div className="md:col-span-1 relative bg-white rounded-xl border border-gray-200 shadow-sm">
                  <select className="w-full h-14 border-0 rounded-xl px-4 text-gray-700 bg-transparent appearance-none cursor-pointer text-base">
                    <option value="">Bedroom</option>
                    <option value="1">1 Bedroom</option>
                    <option value="2">2 Bedroom</option>
                    <option value="3">3 Bedroom</option>
                    <option value="4+">4+ Bedroom</option>
                  </select>
                  <svg
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>

                <div className="md:col-span-1 relative bg-white rounded-xl border border-gray-200 shadow-sm">
                  <select className="w-full h-14 border-0 rounded-xl px-4 text-gray-700 bg-transparent appearance-none cursor-pointer text-base">
                    <option value="">Property Size</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                  </select>
                  <svg
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>

                <div className="md:col-span-2 flex flex-col sm:flex-row gap-2">
                  <div className="relative bg-white rounded-xl border border-gray-200 shadow-sm flex-1">
                    <select className="w-full h-14 border-0 rounded-xl px-4 text-gray-700 bg-transparent appearance-none cursor-pointer text-base">
                      <option value="">Price</option>
                      <option value="under-500k">Under $500K</option>
                      <option value="500k-1m">$500K - $1M</option>
                      <option value="1m-2m">$1M - $2M</option>
                      <option value="2m+">$2M+</option>
                    </select>
                    <svg
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  <button className="h-14 bg-[#f3a725] hover:bg-[#223248] text-white text-base font-medium rounded-xl shadow-md transition-colors duration-200 flex-1 min-h-[48px]">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button 
        onClick={prevImage}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full z-20"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button 
        onClick={nextImage}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full z-20"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentImageIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
