import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

interface PropertyCardProps {
  images?: string[];
  price: string;
  buildingName: string;
  location: string;
  beds: number;
  baths: number;
  sqft: string;
  agentName: string;
  agentImage: string;
  tag?: string;
  // For backward compatibility
  image?: string;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  images = [],
  price,
  buildingName,
  location,
  beds,
  baths,
  sqft,
  agentName,
  agentImage,
  tag,
  image
}) => {
  // Combine both image props for backward compatibility
  const propertyImages = images.length > 0 ? images : image ? [image] : [];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentImageIndex(prev => 
      prev === 0 ? propertyImages.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex(prev => 
      prev === propertyImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      {/* Image Container */}
      <div className="relative">
        <img 
          src={propertyImages[currentImageIndex]} 
          alt={buildingName}
          className="w-full h-48 object-cover"
        />
        
        {tag && (
          <div className="absolute top-3 left-3 bg-[#f3a725] text-white px-3 py-1 rounded text-sm font-medium">
            {tag}
          </div>
        )}
        
        <div className="absolute top-12 left-3 bg-black bg-opacity-50 text-white px-2 py-1.5 rounded text-xs">
          Property Type
        </div>
        
        <button className="absolute top-3 right-2 bg-black hover:bg-opacity-30 text-[#f3a725] p-2 rounded-full transition-all">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>

        {propertyImages.length > 1 && (
          <>
            <button 
              className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all"
              onClick={goToPrevious}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all"
              onClick={goToNext}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Rest of the card content */}
      <div className="p-4">
        <div className="text-2xl font-bold text-gray-900 mb-2">{price}</div>
        <div className="font-semibold text-gray-800 mb-1">{buildingName}</div>
        
        <div className="text-[#f3a725] text-sm mb-4 flex items-center">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {location}
        </div>
        
        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-1 text-[#f3a725]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2V7z" />
            </svg>
            {beds} Bed
          </div>
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-1 text-[#f3a725]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10v11M20 10v11" />
            </svg>
            {baths} Bath
          </div>
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-1 text-[#f3a725]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
            {sqft} FT
          </div>
        </div>
        
        <div className="flex space-x-2 mb-4">
          <button className="p-2 rounded border border-gray-300 py-2 px-8 rounded text-sm transition-colors" aria-label="WhatsApp">
            <svg className="w-6 h-6" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill="#25D366" d="M16.001 2.667C8.64 2.667 2.667 8.64 2.667 16.001c0 2.933.853 5.657 2.315 7.96L2 30l6.266-2.948a13.28 13.28 0 007.735 2.282c7.361 0 13.334-5.973 13.334-13.333S23.362 2.667 16.001 2.667zm0 24.001a11.296 11.296 0 01-6.1-1.782l-.437-.268-3.713 1.749.782-3.61-.282-.444a11.34 11.34 0 01-1.785-6.012c0-6.268 5.098-11.334 11.333-11.334 6.266 0 11.333 5.066 11.333 11.334S22.267 26.668 16.001 26.668zm6.275-8.33c-.343-.171-2.032-1-2.349-1.114-.314-.116-.542-.171-.77.171-.228.343-.885 1.114-1.084 1.343-.2.228-.4.257-.743.086s-1.457-.537-2.776-1.713c-1.026-.914-1.717-2.045-1.915-2.388-.2-.343-.021-.528.15-.7.154-.152.343-.4.514-.6.171-.2.228-.343.343-.571.114-.228.057-.428-.028-.6-.086-.171-.77-1.857-1.056-2.543-.277-.665-.562-.571-.77-.571h-.657c-.229 0-.6.086-.914.428s-1.2 1.171-1.2 2.857c0 1.686 1.228 3.314 1.4 3.543.171.228 2.417 3.69 5.864 5.171 3.448 1.485 3.448.991 4.065.928.628-.057 2.032-.828 2.317-1.628.286-.8.286-1.486.2-1.628-.086-.143-.314-.228-.657-.4z"/>
            </svg>
          </button>
          <button className="flex-1 border border-gray-300 text-gray-700 hover:bg-gray-50 py-2 px-4 rounded text-sm transition-colors">
            Call
          </button>
          <button className="flex-1 border border-gray-300 text-gray-700 hover:bg-gray-50 py-2 px-4 rounded text-sm transition-colors">
            Email
          </button>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src={agentImage} alt={agentName} className="w-8 h-8 rounded-full mr-2"/>
            <span className="text-sm text-gray-700">{agentName}</span>
          </div>
          <Button variant="outline" size="sm" className="text-[#f3a725] border-[#f3a725] hover:bg-[#f3a725] hover:text-white transition-colors">
            Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;

