import React, { useState } from 'react';
import PropertyCard from './PropertyCard';

const PropertiesSection = () => {
  const [activeTab, setActiveTab] = useState('FOR SALE');

  const properties = [
    {
      id: 1,
      images: [
        'https://www.oiaproperties.com/images/properties/Images-12_1748157763_18938f2d.webp',
        'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=400&q=80'
      ],
      price: '$1,249,000',
      buildingName: 'BUILDING NAME',
      location: 'Abu Dhabi, Yas Island',
      beds: 3,
      baths: 3,
      sqft: '1,142',
      agentName: 'Jane Smith',
      agentImage: '/agent.png',
      tag: 'For Sale'
    },
    {
      id: 2,
      images: [
        'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=400&q=80'
      ],
      price: '$1,249,000',
      buildingName: 'BUILDING NAME',
      location: 'Abu Dhabi, Yas Island',
      beds: 3,
      baths: 3,
      sqft: '1,142',
      agentName: 'Jane Smith',
      agentImage: '/agent.png',
      tag: 'For Sale'
    },
    {
      id: 3,
      images: [
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=400&q=80'
      ],
      price: '$1,249,000',
      buildingName: 'BUILDING NAME',
      location: 'Abu Dhabi, Yas Island',
      beds: 3,
      baths: 3,
      sqft: '1,142',
      agentName: 'Jane Smith',
      agentImage: '/agent.png',
      tag: 'For Sale'
    },
    {
      id: 4,
      images: [
        'https://www.oiaproperties.com/images/properties/Images-11_1747921660_42a70db0.webp',
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80'
      ],
      price: '$1,249,000',
      buildingName: 'BUILDING NAME',
      location: 'Abu Dhabi, Yas Island',
      beds: 3,
      baths: 3,
      sqft: '1,142',
      agentName: 'Jane Smith',
      agentImage: '/agent.png',
      tag: 'For Sale'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center mb-8">
          <div className="w-1 h-12 bg-[#f3a725] mr-4"></div>
          <h2 className="text-5xl font-bold text-gray-900">LATEST PROPERTIES</h2>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-4 mb-8">
          <button
            onClick={() => setActiveTab('FOR SALE')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeTab === 'FOR SALE'
                ? 'bg-[#f3a725] text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            FOR SALE
          </button>
          <button
            onClick={() => setActiveTab('FOR RENT')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeTab === 'FOR RENT'
                ? 'bg-[#f3a725] text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            FOR RENT
          </button>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {properties.map((property) => (
            <PropertyCard 
              key={property.id}
              images={property.images}
              price={property.price}
              buildingName={property.buildingName}
              location={property.location}
              beds={property.beds}
              baths={property.baths}
              sqft={property.sqft}
              agentName={property.agentName}
              agentImage={property.agentImage}
              tag={property.tag}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;
