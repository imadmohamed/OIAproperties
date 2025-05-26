
// import React, { useState } from 'react';
// import { Button } from '@/components/ui/button';

// const OffPlanSection = () => {
//   const [currentProject, setCurrentProject] = useState(0);
//   const [isTransitioning, setIsTransitioning] = useState(false);

//   const projects = [
//     {
//       title: "SAADIYAT LAGOONS",
//       villaTypes: ["4 BHK VILLA + MAID'S", "5 BHK VILLA + MAID'S", "6 BHK VILLA + MAID'S"],
//       activeVilla: 1,
//       description: "Explore The Adventure Park, Stroll Across The Stunning Eco-corniche, Soak In Unparalleled Cultural Experiences—In A Choice Of 4 To 6-bed Villas Surrounded By Over 900,000m2 Of Protected Wilderness.",
//       startingPrice: "AED 6,200,000",
//       bedrooms: "4, 5 & 6",
//       areaSize: "4,560 SQ. FT",
//       image: "https://www.oiaproperties.com/images/blogs/Saadiyat_Island_4dea3ff834_1744272791_e7580d40.webp",
//       location: "SAADIYAT"
//     },
//     {
//       title: "DUBAI HILLS ESTATE",
//       villaTypes: ["3 BHK VILLA + MAID'S", "4 BHK VILLA + MAID'S", "5 BHK VILLA + MAID'S"],
//       activeVilla: 0,
//       description: "Experience luxury living in the heart of Dubai with stunning golf course views, world-class amenities, and exceptional connectivity to the city's key destinations.",
//       startingPrice: "AED 4,800,000",
//       bedrooms: "3, 4 & 5",
//       areaSize: "3,200 SQ. FT",
//       image: "https://cdn.dxbproperties.ae/media/blog/content/w3q2w-g519w_cropped.webp",
//       location: "DUBAI HILLS"
//     },
//     {
//       title: "EMAAR BEACHFRONT",
//       villaTypes: ["2 BHK APARTMENT", "3 BHK APARTMENT", "4 BHK PENTHOUSE"],
//       activeVilla: 2,
//       description: "Wake up to breathtaking sea views in this exclusive beachfront community. Enjoy direct beach access, marina views, and world-class dining and retail destinations.",
//       startingPrice: "AED 3,500,000",
//       bedrooms: "2, 3 & 4",
//       areaSize: "2,800 SQ. FT",
//       image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Dubai_Marina_Skyline.jpg/2880px-Dubai_Marina_Skyline.jpg",
//       location: "EMAAR"
//     },
//     {
//       title: "DOWNTOWN VISTA",
//       villaTypes: ["1 BHK APARTMENT", "2 BHK APARTMENT", "3 BHK APARTMENT"],
//       activeVilla: 1,
//       description: "Live in the heart of the city with spectacular skyline views, premium amenities, and unmatched convenience to business districts and entertainment hubs.",
//       startingPrice: "AED 2,800,000",
//       bedrooms: "1, 2 & 3",
//       areaSize: "1,800 SQ. FT",
//       image: "https://blog.sothebysrealty.ae/hubfs/Imported_Blog_Media/52562bbb-b866-478f-8c6e-d4a3d7b8260d-1.jpg",
//       location: "DOWNTOWN"
//     },
//     {
//       title: "MARINA HEIGHTS",
//       villaTypes: ["2 BHK PENTHOUSE", "3 BHK PENTHOUSE", "4 BHK PENTHOUSE"],
//       activeVilla: 0,
//       description: "Enjoy waterfront living with panoramic marina views, yacht access, and world-class dining. Perfect for those seeking luxury and tranquility by the water.",
//       startingPrice: "AED 5,500,000",
//       bedrooms: "2, 3 & 4",
//       areaSize: "3,800 SQ. FT",
//       image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Dubai_Marina_Skyline.jpg/2880px-Dubai_Marina_Skyline.jpg",
//       location: "MARINA"
//     }
//   ];

//   const handlePrevious = () => {
//     setIsTransitioning(true);
//     setTimeout(() => {
//       setCurrentProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
//       setIsTransitioning(false);
//     }, 150);
//   };

//   const handleNext = () => {
//     setIsTransitioning(true);
//     setTimeout(() => {
//       setCurrentProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
//       setIsTransitioning(false);
//     }, 150);
//   };

//   const current = projects[currentProject];

//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="container mx-auto px-4 ">
//         {/* Section Header */}
//         <div className="flex items-center mb-8">
//           <div className="w-1.5 h-12 bg-[#f3a725] mr-4"></div>
//           <h2 className="text-6xl font-bold text-gray-900">OFF-PLAN PROJECTS</h2>
//         </div>
// <div>
//         {/* Navigation */}
//         <div className="flex items-center justify-between mb-8 ">
//           <button 
//             onClick={handlePrevious}
//             className="bg-gray-200 hover:bg-gray-300 p-4 rounded-2xl transition-all duration-300"
//           >
//             <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//             </svg>
//           </button>
          
//           <h3 className={`text-3xl font-bold text-gray-900 transition-opacity duration-300 ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}>
//             {current.title}
//           </h3>
          
//           <button 
//             onClick={handleNext}
//             className="bg-gray-200 hover:bg-gray-300 p-4 rounded-2xl transition-all duration-300"
//           >
//             <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//             </svg>
//           </button>
//         </div>

//         {/* Villa Types */}
//         <div className="text-center mb-8">
//           <div className={`flex justify-center space-x-8 text-xl font-medium text-gray-700 transition-opacity duration-300 ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}>
//             {current.villaTypes.map((villa, index) => (
//               <span 
//                 key={index}
//                 className={index === current.activeVilla ? "text-[#f3a725]" : ""}
//               >
//                 {villa}
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* Main Content with Background Shadow */}
//         <div className="bg-white rounded-3xl p-8 shadow-lg">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch ">
//             {/* Left Content */}
//             <div className={`space-y-6 flex flex-col justify-center transition-all duration-300 ${isTransitioning ? 'opacity-50 transform translate-x-[-20px]' : 'opacity-100 transform translate-x-0'}`}>
//               <p className="text-gray-600 leading-relaxed">
//                 {current.description}
//               </p>

//               <div className="space-y-4">
//                 <div className="flex items-center">
//                   <span className="font-semibold text-gray-700 w-32">Starting Prices:</span>
//                   <span className="text-[#f3a725] font-bold">{current.startingPrice}</span>
//                 </div>

//                 <div className="flex items-center whitespace-nowrap space-x-2">
//                   <span className="font-semibold text-gray-700">Number of Bedrooms:</span>
//                   <span className="text-[#f3a725] font-bold">{current.bedrooms}</span>
//                 </div>

//                 <div className="flex items-center">
//                   <span className="font-semibold text-gray-700 w-32">Area Size From:</span>
//                   <span className="text-[#f3a725] font-bold">{current.areaSize}</span>
//                 </div>
//               </div>

//               <Button className="bg-[#f3a725] hover:bg-[#01062d] text-white px-6 py-2 rounded-full w-fit">
//                 Book Your Property
//               </Button>
//             </div>

//             {/* Right Content - Project Image */}
//             <div className="relative">
//               <div className={`relative overflow-hidden rounded-lg shadow-xl h-full min-h-[420px] transition-all duration-300 ${isTransitioning ? 'opacity-50 transform translate-x-[20px]' : 'opacity-100 transform translate-x-0'}`}>
//                 <img 
//                   src={current.image} 
//                   alt={current.title}
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-br from-green-900/80 to-green-700/80 flex items-center justify-center text-white">
//                   <div className="text-center">
//                     <div className="mb-4">
//                       <div className="w-16 h-16 mx-auto mb-4 border-2 border-white rounded-full flex items-center justify-center">
//                         <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-6m-2 0H3m2-4h14M7 7h.01M7 11h.01M11 7h.01M11 11h.01" />
//                         </svg>
//                       </div>
//                     </div>
                    
//                     <div className="text-xs tracking-wider mb-2 opacity-80">{current.location}</div>
//                     <h4 className="text-4xl font-bold mb-4">{current.title.split(' ')[1] || current.title}</h4>
                    
//                     {/* Decorative Elements */}
//                     <div className="flex justify-center space-x-2 mb-6">
//                       <div className="w-2 h-2 bg-white rounded-full opacity-60"></div>
//                       <div className="w-2 h-2 bg-white rounded-full"></div>
//                       <div className="w-2 h-2 bg-white rounded-full opacity-60"></div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
// </div>
            
//           </div>
//         </div>
//       </div>

//       {/* WhatsApp Float Button */}
//       <div className="fixed bottom-6 right-6 z-50">
//         <button className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110">
//           <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//             <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z"/>
//           </svg>
//         </button>
//       </div>
//     </section>
//   );
// };

// export default OffPlanSection;

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const OffPlanSection = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const projects = [
    {
      title: "SAADIYAT LAGOONS",
      villaTypes: ["4 BHK VILLA + MAID'S", "5 BHK VILLA + MAID'S", "6 BHK VILLA + MAID'S"],
      activeVilla: 1,
      description: "Explore The Adventure Park, Stroll Across The Stunning Eco-corniche, Soak In Unparalleled Cultural Experiences—In A Choice Of 4 To 6-bed Villas Surrounded By Over 900,000m2 Of Protected Wilderness.",
      startingPrice: "AED 6,200,000",
      bedrooms: "4, 5 & 6",
      areaSize: "4,560 SQ. FT",
      image: "https://www.oiaproperties.com/images/blogs/Saadiyat_Island_4dea3ff834_1744272791_e7580d40.webp",
      location: "SAADIYAT"
    },
    {
      title: "DUBAI HILLS ESTATE",
      villaTypes: ["3 BHK VILLA + MAID'S", "4 BHK VILLA + MAID'S", "5 BHK VILLA + MAID'S"],
      activeVilla: 0,
      description: "Experience luxury living in the heart of Dubai with stunning golf course views, world-class amenities, and exceptional connectivity to the city's key destinations.",
      startingPrice: "AED 4,800,000",
      bedrooms: "3, 4 & 5",
      areaSize: "3,200 SQ. FT",
      image: "https://cdn.dxbproperties.ae/media/blog/content/w3q2w-g519w_cropped.webp",
      location: "DUBAI HILLS"
    },
    {
      title: "EMAAR BEACHFRONT",
      villaTypes: ["2 BHK APARTMENT", "3 BHK APARTMENT", "4 BHK PENTHOUSE"],
      activeVilla: 2,
      description: "Wake up to breathtaking sea views in this exclusive beachfront community. Enjoy direct beach access, marina views, and world-class dining and retail destinations.",
      startingPrice: "AED 3,500,000",
      bedrooms: "2, 3 & 4",
      areaSize: "2,800 SQ. FT",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Dubai_Marina_Skyline.jpg/2880px-Dubai_Marina_Skyline.jpg",
      location: "EMAAR"
    },
    {
      title: "DOWNTOWN VISTA",
      villaTypes: ["1 BHK APARTMENT", "2 BHK APARTMENT", "3 BHK APARTMENT"],
      activeVilla: 1,
      description: "Live in the heart of the city with spectacular skyline views, premium amenities, and unmatched convenience to business districts and entertainment hubs.",
      startingPrice: "AED 2,800,000",
      bedrooms: "1, 2 & 3",
      areaSize: "1,800 SQ. FT",
      image: "https://blog.sothebysrealty.ae/hubfs/Imported_Blog_Media/52562bbb-b866-478f-8c6e-d4a3d7b8260d-1.jpg",
      location: "DOWNTOWN"
    },
    {
      title: "MARINA HEIGHTS",
      villaTypes: ["2 BHK PENTHOUSE", "3 BHK PENTHOUSE", "4 BHK PENTHOUSE"],
      activeVilla: 0,
      description: "Enjoy waterfront living with panoramic marina views, yacht access, and world-class dining. Perfect for those seeking luxury and tranquility by the water.",
      startingPrice: "AED 5,500,000",
      bedrooms: "2, 3 & 4",
      areaSize: "3,800 SQ. FT",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Dubai_Marina_Skyline.jpg/2880px-Dubai_Marina_Skyline.jpg",
      location: "MARINA"
    }
  ];

  const handlePrevious = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
      setIsTransitioning(false);
    }, 150);
  };

  const handleNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
      setIsTransitioning(false);
    }, 150);
  };

  const current = projects[currentProject];

  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center mb-6 sm:mb-8">
          <div className="w-1.5 h-10 sm:h-12 bg-[#f3a725] mr-3 sm:mr-4"></div>
          <h2 className="text-4xl sm:text-6xl font-bold text-gray-900">OFF-PLAN PROJECTS</h2>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
          <button 
            onClick={handlePrevious}
            className="bg-gray-200 hover:bg-gray-300 p-3 sm:p-4 rounded-2xl transition-all duration-300"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <h3 className={`text-2xl sm:text-3xl font-bold text-gray-900 transition-opacity duration-300 ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}>
            {current.title}
          </h3>
          
          <button 
            onClick={handleNext}
            className="bg-gray-200 hover:bg-gray-300 p-3 sm:p-4 rounded-2xl transition-all duration-300"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Villa Types */}
        <div className="overflow-x-auto scrollbar-hide mb-6">
          <div className={`flex gap-4 sm:gap-8 text-base sm:text-xl font-medium text-gray-700 transition-opacity duration-300 ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}>
            {current.villaTypes.map((villa, index) => (
              <span 
                key={index}
                className={`whitespace-nowrap ${index === current.activeVilla ? "text-[#f3a725]" : ""}`}
              >
                {villa}
              </span>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-stretch">
            {/* Left Content */}
            <div className={`space-y-4 sm:space-y-6 flex flex-col justify-center transition-all duration-300 ${isTransitioning ? 'opacity-50 transform -translate-x-5' : 'opacity-100 transform translate-x-0'}`}>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                {current.description}
              </p>

              <div className="space-y-4 text-sm sm:text-base">
                <div className="flex items-center">
                  <span className="font-semibold text-gray-700 w-24 sm:w-32">Starting Prices:</span>
                  <span className="text-[#f3a725] font-bold">{current.startingPrice}</span>
                </div>

                <div className="flex items-center flex-wrap gap-x-2">
                  <span className="font-semibold text-gray-700">Number of Bedrooms:</span>
                  <span className="text-[#f3a725] font-bold">{current.bedrooms}</span>
                </div>

                <div className="flex items-center">
                  <span className="font-semibold text-gray-700 w-24 sm:w-32">Area Size From:</span>
                  <span className="text-[#f3a725] font-bold">{current.areaSize}</span>
                </div>
              </div>

              <Button className="bg-[#f3a725] hover:bg-[#01062d] text-white px-4 py-2 sm:px-6 rounded-full w-fit text-sm sm:text-base">
                Book Your Property
              </Button>
            </div>

            {/* Right Content - Project Image */}
            <div className="relative">
              <div className={`relative overflow-hidden rounded-lg shadow-xl h-[280px] sm:h-[420px] transition-all duration-300 ${isTransitioning ? 'opacity-50 transform translate-x-5' : 'opacity-100 transform translate-x-0'}`}>
                <img 
                  src={current.image} 
                  alt={current.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-green-900/80 to-green-700/80 flex items-center justify-center text-white">
                  <div className="text-center">
                    <div className="mb-4">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 border-2 border-white rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-6m-2 0H3m2-4h14M7 7h.01M7 11h.01M11 7h.01M11 11h.01" />
                        </svg>
                      </div>
                    </div>
                    <div className="text-xs tracking-wider mb-1 opacity-80">{current.location}</div>
                    <h4 className="text-2xl sm:text-4xl font-bold mb-2">{current.title.split(' ')[1] || current.title}</h4>
                    <div className="flex justify-center space-x-1 sm:space-x-2 mb-4">
                      <div className="w-2 h-2 bg-white rounded-full opacity-60"></div>
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <div className="w-2 h-2 bg-white rounded-full opacity-60"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 rounded-full shadow-lg transition-all hover:scale-110">
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z"/>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default OffPlanSection;
