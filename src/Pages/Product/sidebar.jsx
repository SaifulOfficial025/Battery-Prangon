import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

function Sidebar({ 
  onFilterChange, // Optional callback to pass selected filters up to parent
}) {
  // Collapsible sections state
  const [expandedSections, setExpandedSections] = useState({
    category: true,
    voltage: true,
    capacity: true,
  });

  // Selected filter states
  const [selectedCategory, setSelectedCategory] = useState('cat-solar');
  const [selectedVoltage, setSelectedVoltage] = useState('volt-3.2v-1');
  const [selectedCapacity, setSelectedCapacity] = useState('cap-50ah');

  // Filter Option Data (Exactly matching mock names in the reference image)
  const categories = [
    { id: 'cat-solar', name: 'Solar System' },
    { id: 'cat-bike-1', name: 'Easy Bike' },
    { id: 'cat-bike-2', name: 'Easy Bike' },
    { id: 'cat-bike-3', name: 'Easy Bike' },
  ];

  const voltages = [
    { id: 'volt-3.2v-1', name: '3.2V' },
    { id: 'volt-3.2v-2', name: '3.2V' },
    { id: 'volt-3.2v-3', name: '3.2V' },
    { id: 'volt-3.2v-4', name: '3.2V' },
  ];

  const capacities = [
    { id: 'cap-50ah', name: '50Ah' },
    { id: 'cap-500ah-1', name: '500Ah' },
    { id: 'cap-500ah-2', name: '500Ah' },
    { id: 'cap-500ah-3', name: '500Ah' },
  ];

  // Section toggle handler
  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Selection change handlers
  const handleCategorySelect = (id, name) => {
    setSelectedCategory(id);
    if (onFilterChange) {
      onFilterChange({ type: 'category', id, name });
    }
  };

  const handleVoltageSelect = (id, name) => {
    setSelectedVoltage(id);
    if (onFilterChange) {
      onFilterChange({ type: 'voltage', id, name });
    }
  };

  const handleCapacitySelect = (id, name) => {
    setSelectedCapacity(id);
    if (onFilterChange) {
      onFilterChange({ type: 'capacity', id, name });
    }
  };

  return (
    <aside className="w-full md:max-w-[280px] bg-[#fdfdfd] border border-gray-100 p-4 md:p-6 flex flex-col gap-5 md:gap-8 select-none">
      
      {/* 1. Product Category Section */}
      <div className="flex flex-col">
        {/* Header (Collapsible) */}
        <button
          type="button"
          onClick={() => toggleSection('category')}
          className="flex items-center justify-between w-full text-left font-sans font-semibold text-[#1a1a1a] text-sm sm:text-base md:text-md hover:opacity-80 transition-opacity focus:outline-none"
        >
          <span>Product Category</span>
          <FiChevronDown 
            className={`text-lg md:text-xl text-slate-800 transition-transform duration-300 ${
              expandedSections.category ? 'rotate-0' : '-rotate-90'
            }`} 
          />
        </button>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gray-200/60 mt-2 mb-3.5 md:mt-3.5 md:mb-5" />

        {/* Options List */}
        <div 
          className={`flex flex-col gap-2.5 md:gap-4 overflow-hidden transition-all duration-300 ${
            expandedSections.category ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
          }`}
        >
          {categories.map((item) => {
            const isSelected = selectedCategory === item.id;
            return (
              <div
                key={item.id}
                onClick={() => handleCategorySelect(item.id, item.name)}
                className="flex items-center gap-2 md:gap-3 cursor-pointer py-0.5 group"
              >
                {/* Radio Circle Indicator */}
                {isSelected ? (
                  <div className="w-[14px] h-[14px] md:w-[18px] md:h-[18px] rounded-full bg-[#C51C1C] flex-shrink-0 flex items-center justify-center transition-all duration-200" />
                ) : (
                  <div className="w-[14px] h-[14px] md:w-[18px] md:h-[18px] rounded-full border-2 border-slate-600 flex-shrink-0 transition-colors duration-200 group-hover:border-slate-850" />
                )}
                
                {/* Label Text */}
                <span 
                  className={`text-xs sm:text-sm md:text-[15px] font-semibold tracking-wide transition-colors duration-200 ml-1.5 md:ml-2 ${
                    isSelected ? 'text-[#C51C1C]' : 'text-[#333333] hover:text-black'
                  }`}
                >
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* 2. Voltage Section */}
      <div className="flex flex-col">
        {/* Header (Collapsible) */}
        <button
          type="button"
          onClick={() => toggleSection('voltage')}
          className="flex items-center justify-between w-full text-left font-sans font-semibold text-[#1a1a1a] text-sm sm:text-base md:text-md hover:opacity-80 transition-opacity focus:outline-none"
        >
          <span>Voltage</span>
          <FiChevronDown 
            className={`text-lg md:text-xl text-slate-800 transition-transform duration-300  ${
              expandedSections.voltage ? 'rotate-0' : '-rotate-90'
            }`} 
          />
        </button>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gray-200/60 mt-2 mb-3.5 md:mt-3.5 md:mb-5" />

        {/* Options List */}
        <div 
          className={`flex flex-col gap-2.5 md:gap-4 overflow-hidden transition-all duration-300 ${
            expandedSections.voltage ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
          }`}
        >
          {voltages.map((item) => {
            const isSelected = selectedVoltage === item.id;
            return (
              <div
                key={item.id}
                onClick={() => handleVoltageSelect(item.id, item.name)}
                className="flex items-center gap-2 md:gap-3 cursor-pointer py-0.5 group"
              >
                {/* Radio Circle Indicator */}
                {isSelected ? (
                  <div className="w-[14px] h-[14px] md:w-[18px] md:h-[18px] rounded-full bg-[#C51C1C] flex-shrink-0 flex items-center justify-center transition-all duration-200" />
                ) : (
                  <div className="w-[14px] h-[14px] md:w-[18px] md:h-[18px] rounded-full border-2 border-slate-600 flex-shrink-0 transition-colors duration-200 group-hover:border-slate-850" />
                )}
                
                {/* Label Text */}
                <span 
                  className={`text-xs sm:text-sm md:text-[15px] font-semibold tracking-wide transition-colors duration-200 ml-1.5 md:ml-2 ${
                    isSelected ? 'text-[#C51C1C]' : 'text-[#333333] hover:text-black'
                  }`}
                >
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. Capacity Section */}
      <div className="flex flex-col">
        {/* Header (Collapsible) */}
        <button
          type="button"
          onClick={() => toggleSection('capacity')}
          className="flex items-center justify-between w-full text-left font-sans font-semibold text-[#1a1a1a] text-sm sm:text-base md:text-md hover:opacity-80 transition-opacity focus:outline-none"
        >
          <span>Capacity</span>
          <FiChevronDown 
            className={`text-lg md:text-xl text-slate-800 transition-transform duration-300 ${
              expandedSections.capacity ? 'rotate-0' : '-rotate-90'
            }`} 
          />
        </button>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gray-200/60 mt-2 mb-3.5 md:mt-3.5 md:mb-5" />

        {/* Options List */}
        <div 
          className={`flex flex-col gap-2.5 md:gap-4 overflow-hidden transition-all duration-300  ${
            expandedSections.capacity ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
          }`}
        >
          {capacities.map((item) => {
            const isSelected = selectedCapacity === item.id;
            return (
              <div
                key={item.id}
                onClick={() => handleCapacitySelect(item.id, item.name)}
                className="flex items-center gap-2 md:gap-3 cursor-pointer py-0.5 group"
              >
                {/* Radio Circle Indicator */}
                {isSelected ? (
                  <div className="w-[14px] h-[14px] md:w-[18px] md:h-[18px] rounded-full bg-[#C51C1C] flex-shrink-0 flex items-center justify-center transition-all duration-200" />
                ) : (
                  <div className="w-[14px] h-[14px] md:w-[18px] md:h-[18px] rounded-full border-2 border-slate-600 flex-shrink-0 transition-colors duration-200 group-hover:border-slate-850" />
                )}
                
                {/* Label Text */}
                <span 
                  className={`text-xs sm:text-sm md:text-[15px] font-semibold tracking-wide transition-colors duration-200 ml-1.5 md:ml-2 ${
                    isSelected ? 'text-[#C51C1C]' : 'text-[#333333] hover:text-black'
                  }`}
                >
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>

    </aside>
  );
}

export default Sidebar;