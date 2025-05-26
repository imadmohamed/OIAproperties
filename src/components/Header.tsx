import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  // State for dropdowns
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  // Data for dropdowns
  const languages = ['English', 'Arabic', 'French', 'German'];
  const abuDhabiAreas = ['Jumeirah Lake Towers', 'Yas Island', 'Saadiyat Island', 'Ramhan Island', 'Hudayriyat Island', 'Al Reem Island', 'Al Raha Beach'];
  const dubaiAreas = ['Business Bay', 'Dubai Marina', 'Palm Jumeirah', 'Arabian Ranches', 'Dubai Hills Estate'];
  const projects = ['Luxury Villas', 'Waterfront Apartments', 'Commercial Towers', 'Mixed Use Developments'];
  const developers = ['Emaar Properties', 'Aldar Properties', 'Damac', 'Nakheel', 'Meraas'];

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Desktop hover handlers
  const handleDropdownEnter = (dropdownName: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(dropdownName);
  };

  const handleDropdownLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300);
  };

  // Mobile toggle handlers
  const toggleMobileDropdown = (dropdownName: string) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null);
  };

  // Render dropdown content (same structure for all dropdowns)
  const renderDropdownContent = (type: string) => {
    const contentMap = {
      area: {
        left: { title: 'Abu Dhabi', items: abuDhabiAreas },
        middle: { title: 'Dubai', items: dubaiAreas },
        image: '/area.webp'
      },
      project: {
        left: { title: 'Residential', items: projects.slice(0, 2) },
        middle: { title: 'Commercial', items: projects.slice(2) },
        image: '/projects.webp'
      },
      developer: {
        left: { title: 'Major Developers', items: developers.slice(0, 3) },
        middle: { title: 'Other Developers', items: developers.slice(3) },
        image: '/developers.webp'
      }
    };

    const { left, middle, image } = contentMap[type as keyof typeof contentMap] || {};
    
    return (
      <div className="absolute left-0 top-full mt-2 w-[600px] bg-white rounded-lg shadow-xl p-6 flex space-x-6 font-light text-gray-800 z-50">
        <div className="w-1/3">
          <h3 className="mb-3 text-[#aeb2b6] font-semibold text-base">{left.title}</h3>
          <ul className="space-y-1">
            {left.items.map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-[#fba300] block py-1">{item}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-1/3">
          <h3 className="mb-3 text-[#aeb2b6] font-semibold text-base">{middle.title}</h3>
          <ul className="space-y-1">
            {middle.items.map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-[#fba300] block py-1">{item}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-1/3 flex justify-center items-start">
          <img src={image} alt={type} className="rounded-lg shadow-md object-cover w-40 h-40" />
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Top Blue Bar - COMPLETELY UNCHANGED */}
      <div className="text-white py-4" style={{ backgroundColor: '#01062d' }}>
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm relative">
            <div>{/* Empty left slot */}</div>
            <div className="ml-auto relative group inline-block z-50">
              <button className="flex items-center space-x-0 hover:text-blue-200 transition-colors">
                <span className="text-2xl">🇬🇧</span>
                <span style={{ paddingLeft: '10px' }}>{selectedLanguage}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute right-0 top-full mt-1 bg-white text-gray-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200 z-50" style={{ minWidth: '8rem' }}>
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setSelectedLanguage(lang)}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 first:rounded-t-md last:rounded-b-md"
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header with New Dropdowns */}
      <header className="bg-white shadow-sm relative z-40">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex items-center">
              <img src="/logo.svg" alt="Logo" className="h-10 w-auto" />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-[#fba300] font-medium hover:text-[#fba300]">RENT/BUY</a>

              {/* AREA Dropdown */}
              <div
                className="relative inline-block"
                onMouseEnter={() => handleDropdownEnter('area')}
                onMouseLeave={handleDropdownLeave}
              >
                <button className="text-gray-500 hover:text-[#fba300] flex items-center font-semibold">
                  AREA
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeDropdown === 'area' && renderDropdownContent('area')}
              </div>

              {/* PROJECT Dropdown - Identical to AREA */}
              <div
                className="relative inline-block"
                onMouseEnter={() => handleDropdownEnter('project')}
                onMouseLeave={handleDropdownLeave}
              >
                <button className="text-gray-500 hover:text-[#fba300] flex items-center font-semibold">
                  PROJECT
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeDropdown === 'project' && renderDropdownContent('project')}
              </div>

              {/* DEVELOPER Dropdown - Identical to AREA */}
              <div
                className="relative inline-block"
                onMouseEnter={() => handleDropdownEnter('developer')}
                onMouseLeave={handleDropdownLeave}
              >
                <button className="text-gray-500 hover:text-[#fba300] flex items-center font-semibold">
                  DEVELOPER
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeDropdown === 'developer' && renderDropdownContent('developer')}
              </div>

              <a href="#" className="text-gray-700 hover:text-[#f3a725]">LIST YOUR PROPERTY</a>
            </nav>

            {/* Right side buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button className="bg-[#f3a725] hover:[#f3a725] text-black hover:text-white px-6 py-2 rounded-full">

                Free Consultation
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
              <button className="text-gray-400 hover:text-[#f3a725]">


        <div className="p-1 bg-gray-100 inline-block group">
          <svg
              className="w-8 h-8 stroke-[#f3a725] group-hover:stroke-[#223248]"
              fill="none"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
          >
    <rect width="24" height="24" fill="#f0f0f0" stroke="none" />
    <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
</div>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMobileMenu} className="text-gray-700 hover:text-[f3a725]">
                {isMobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-white py-4 px-4 shadow-lg rounded-b-lg">
              <nav className="flex flex-col space-y-4">
                <a href="#" className="text-[#fba300] font-medium py-2">RENT/BUY</a>
                
                {/* Mobile AREA Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => toggleMobileDropdown('area')}
                    className="text-gray-500 hover:text-[#fba300] flex items-center justify-between w-full py-2"
                  >
                    <span>AREA</span>
                    <svg className={`w-4 h-4 ml-1 transition-transform ${activeDropdown === 'area' ? 'rotate-180' : ''}`}>
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {activeDropdown === 'area' && (
                    <div className="mt-2">
                      {renderDropdownContent('area')}
                    </div>
                  )}
                </div>

                {/* Mobile PROJECT Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => toggleMobileDropdown('project')}
                    className="text-gray-700 hover:text-[#f3a725] flex items-center justify-between w-full py-2"
                  >
                    <span>PROJECT</span>
                    <svg className={`w-4 h-4 ml-1 transition-transform ${activeDropdown === 'project' ? 'rotate-180' : ''}`}>
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {activeDropdown === 'project' && (
                    <div className="mt-2">
                      {renderDropdownContent('project')}
                    </div>
                  )}
                </div>

                {/* Mobile DEVELOPER Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => toggleMobileDropdown('developer')}
                    className="text-gray-700 hover:text-[#f3a725] flex items-center justify-between w-full py-2"
                  >
                    <span>DEVELOPER</span>
                    <svg className={`w-4 h-4 ml-1 transition-transform ${activeDropdown === 'developer' ? 'rotate-180' : ''}`}>
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {activeDropdown === 'developer' && (
                    <div className="mt-2">
                      {renderDropdownContent('developer')}
                    </div>
                  )}
                </div>

                <a href="#" className="text-gray-700 hover:text-[#f3a725] py-2">LIST YOUR PROPERTY</a>

                <div className="pt-4 border-t border-gray-200 mt-2">
                <Button className="w-20px bg-[#f3a725] hover:bg-[#01062d] text-white px-6 py-3 rounded-full mb-4">
                    Free Consultation
                  </Button>
                  <button className="text-gray-400 hover:text-[#01062d]">
                    
                  </button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;