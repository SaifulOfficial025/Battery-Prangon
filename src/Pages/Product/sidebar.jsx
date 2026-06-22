import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiChevronDown } from 'react-icons/fi';
import { fetchCategories, fetchVoltages, fetchCapacities } from '../../Redux/Sidebar';
import Button from '../../Shared/Button';

function Sidebar({ 
  onFilterChange, // Optional callback to pass selected filters up to parent
}) {
  const dispatch = useDispatch();
  
  // Get sidebar data, loading state, error state, and current language from Redux
  const lang = useSelector((state) => state.lang.lang);
  const { categories, voltages, capacities, loading, error } = useSelector((state) => state.sidebar);
  const productFilters = useSelector((state) => state.products.filters);

  // Collapsible sections state
  const [expandedSections, setExpandedSections] = useState({
    category: true,
    voltage: true,
    capacity: true,
  });

  // Selected filter states — initialise from Redux so external navigation (e.g. Find page) is reflected
  const [selectedCategory, setSelectedCategory] = useState(() => productFilters.category ?? 'all');
  const [selectedVoltage, setSelectedVoltage] = useState(() => productFilters.voltage ?? 'all');
  const [selectedCapacity, setSelectedCapacity] = useState(() => productFilters.capacity ?? 'all');

  const allLabel = lang === 'bn' ? 'সব' : 'All';

  // Fetch sidebar data on mount
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchVoltages());
    dispatch(fetchCapacities());
  }, [dispatch]);

  // Sync selection when Redux filters change externally (e.g. navigating from Find page)
  // productFilters stores English names — find the matching item ID for radio UI
  useEffect(() => {
    if (productFilters.category && categories.length > 0) {
      const match = categories.find((c) => c.name === productFilters.category);
      setSelectedCategory(match ? match.id : 'all');
    } else if (!productFilters.category) {
      setSelectedCategory('all');
    }
  }, [productFilters.category, categories]);

  useEffect(() => {
    if (productFilters.voltage && voltages.length > 0) {
      const match = voltages.find((v) => v.name === productFilters.voltage);
      setSelectedVoltage(match ? match.id : 'all');
    } else if (!productFilters.voltage) {
      setSelectedVoltage('all');
    }
  }, [productFilters.voltage, voltages]);

  useEffect(() => {
    if (productFilters.capacity && capacities.length > 0) {
      const match = capacities.find((c) => c.name === productFilters.capacity);
      setSelectedCapacity(match ? match.id : 'all');
    } else if (!productFilters.capacity) {
      setSelectedCapacity('all');
    }
  }, [productFilters.capacity, capacities]);

  // Push default "All" states to parent initially — skip if a filter is already pre-set from Redux
  useEffect(() => {
    if (onFilterChange) {
      if (!productFilters.category) onFilterChange({ type: 'category', id: 'all', apiName: null, name: allLabel });
      if (!productFilters.voltage) onFilterChange({ type: 'voltage', id: 'all', apiName: null, name: allLabel });
      if (!productFilters.capacity) onFilterChange({ type: 'capacity', id: 'all', apiName: null, name: allLabel });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]); // only run when mounted or language changes

  // Section titles based on language
  const sectionHeaders = {
    category: lang === 'bn' ? 'পণ্যের ক্যাটাগরি' : 'Product Category',
    voltage: lang === 'bn' ? 'ভোল্টেজ (ভোল্ট)' : 'Voltage (V)',
    capacity: lang === 'bn' ? 'ক্যাপাসিটি (অ্যাম্পিয়ার)' : 'Capacity (Ah)',
  };

  // Section toggle handler
  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Selection change handlers
  // apiName = item.name (English, for API), displayName = localised label (for tags)
  const handleCategorySelect = (id, apiName, displayName) => {
    setSelectedCategory(id);
    if (onFilterChange) {
      onFilterChange({ type: 'category', id, apiName, name: displayName });
    }
  };

  const handleVoltageSelect = (id, apiName, displayName) => {
    setSelectedVoltage(id);
    if (onFilterChange) {
      onFilterChange({ type: 'voltage', id, apiName, name: displayName });
    }
  };

  const handleCapacitySelect = (id, apiName, displayName) => {
    setSelectedCapacity(id);
    if (onFilterChange) {
      onFilterChange({ type: 'capacity', id, apiName, name: displayName });
    }
  };

  const handleClearAll = () => {
    setSelectedCategory('all');
    setSelectedVoltage('all');
    setSelectedCapacity('all');
    
    if (onFilterChange) {
      onFilterChange({ type: 'category', id: 'all', apiName: null, name: allLabel });
      onFilterChange({ type: 'voltage', id: 'all', apiName: null, name: allLabel });
      onFilterChange({ type: 'capacity', id: 'all', apiName: null, name: allLabel });
    }
  };

  // Loading skeleton UI
  const renderSkeleton = () => (
    <div className="flex flex-col gap-3.5 animate-pulse">
      {Array.from({ length: 3 }).map((_, index) => (
        <div key={index} className="flex items-center gap-3 py-0.5">
          <div className="w-[14px] h-[14px] md:w-[18px] md:h-[18px] rounded-full bg-slate-200 flex-shrink-0" />
          <div className="h-4 bg-slate-200 rounded w-2/3" />
        </div>
      ))}
    </div>
  );

  // Error state UI
  const renderError = () => (
    <span className="text-xs text-red-500 font-medium font-sans select-none">
      {lang === 'bn' ? 'লোড করতে ব্যর্থ হয়েছে' : 'Failed to load options'}
    </span>
  );

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
          <span>{sectionHeaders.category}</span>
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
            expandedSections.category ? 'max-h-[300px] overflow-y-auto opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
          }`}
        >
          {/* 'All' Option */}
          <div
            onClick={() => handleCategorySelect('all', null, allLabel)}
            className="flex items-center gap-2 md:gap-3 cursor-pointer py-0.5 group"
          >
            {selectedCategory === 'all' ? (
              <div className="w-[14px] h-[14px] md:w-[18px] md:h-[18px] rounded-full bg-[#C51C1C] flex-shrink-0 flex items-center justify-center transition-all duration-200" />
            ) : (
              <div className="w-[14px] h-[14px] md:w-[18px] md:h-[18px] rounded-full border-2 border-slate-600 flex-shrink-0 transition-colors duration-200 group-hover:border-slate-850" />
            )}
            <span 
              className={`text-xs sm:text-sm md:text-[15px] font-semibold tracking-wide transition-colors duration-200 ml-1.5 md:ml-2 ${
                selectedCategory === 'all' ? 'text-[#C51C1C]' : 'text-[#333333] hover:text-black'
              }`}
            >
              {allLabel}
            </span>
          </div>

          {loading.categories ? (
            renderSkeleton()
          ) : error.categories ? (
            renderError()
          ) : (
            categories.map((item) => {
              const isSelected = selectedCategory === item.id;
              const displayName = lang === 'bn' ? item.bangla_name : item.name;
              return (
                <div
                  key={item.id}
                  onClick={() => handleCategorySelect(item.id, item.name, displayName)}
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
                    {displayName}
                  </span>
                </div>
              );
            })
          )}
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
          <span>{sectionHeaders.voltage}</span>
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
            expandedSections.voltage ? 'max-h-[300px] overflow-y-auto opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
          }`}
        >
          {/* 'All' Option */}
          <div
            onClick={() => handleVoltageSelect('all', null, allLabel)}
            className="flex items-center gap-2 md:gap-3 cursor-pointer py-0.5 group"
          >
            {selectedVoltage === 'all' ? (
              <div className="w-[14px] h-[14px] md:w-[18px] md:h-[18px] rounded-full bg-[#C51C1C] flex-shrink-0 flex items-center justify-center transition-all duration-200" />
            ) : (
              <div className="w-[14px] h-[14px] md:w-[18px] md:h-[18px] rounded-full border-2 border-slate-600 flex-shrink-0 transition-colors duration-200 group-hover:border-slate-850" />
            )}
            <span 
              className={`text-xs sm:text-sm md:text-[15px] font-semibold tracking-wide transition-colors duration-200 ml-1.5 md:ml-2 ${
                selectedVoltage === 'all' ? 'text-[#C51C1C]' : 'text-[#333333] hover:text-black'
              }`}
            >
              {allLabel}
            </span>
          </div>

          {loading.voltages ? (
            renderSkeleton()
          ) : error.voltages ? (
            renderError()
          ) : (
            voltages.map((item) => {
              const isSelected = selectedVoltage === item.id;
              const displayName = lang === 'bn' ? item.bangla_name : item.name;
              return (
                <div
                  key={item.id}
                  onClick={() => handleVoltageSelect(item.id, item.name, displayName)}
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
                    {displayName}
                  </span>
                </div>
              );
            })
          )}
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
          <span>{sectionHeaders.capacity}</span>
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
            expandedSections.capacity ? 'max-h-[300px] overflow-y-auto opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
          }`}
        >
          {/* 'All' Option */}
          <div
            onClick={() => handleCapacitySelect('all', null, allLabel)}
            className="flex items-center gap-2 md:gap-3 cursor-pointer py-0.5 group"
          >
            {selectedCapacity === 'all' ? (
              <div className="w-[14px] h-[14px] md:w-[18px] md:h-[18px] rounded-full bg-[#C51C1C] flex-shrink-0 flex items-center justify-center transition-all duration-200" />
            ) : (
              <div className="w-[14px] h-[14px] md:w-[18px] md:h-[18px] rounded-full border-2 border-slate-600 flex-shrink-0 transition-colors duration-200 group-hover:border-slate-850" />
            )}
            <span 
              className={`text-xs sm:text-sm md:text-[15px] font-semibold tracking-wide transition-colors duration-200 ml-1.5 md:ml-2 ${
                selectedCapacity === 'all' ? 'text-[#C51C1C]' : 'text-[#333333] hover:text-black'
              }`}
            >
              {allLabel}
            </span>
          </div>

          {loading.capacities ? (
            renderSkeleton()
          ) : error.capacities ? (
            renderError()
          ) : (
            capacities.map((item) => {
              const isSelected = selectedCapacity === item.id;
              const displayName = lang === 'bn' ? item.bangla_name : item.name;
              return (
                <div
                  key={item.id}
                  onClick={() => handleCapacitySelect(item.id, item.name, displayName)}
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
                    {displayName}
                  </span>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* Clear and Show all Button */}
      <div className="mt-4 md:mt-6 w-full pt-4 border-t border-gray-100">
        <Button 
          variant="danger" 
          onClick={handleClearAll} 
          className="w-full py-2.5 text-[13px] md:text-sm"
        >
          {lang === 'bn' ? 'ক্লিয়ার করুন এবং সবগুলো দেখুন' : 'Clear and Show all'}
        </Button>
      </div>

    </aside>
  );
}

export default Sidebar;