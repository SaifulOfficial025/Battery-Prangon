import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../Shared/Header';
import Footer from '../../Shared/Footer';
import Container from '../../Layout/Container/Container';
import Sidebar from './sidebar';
import ProductCard from '../../Shared/ProductCard';
import Pagination from '../../Shared/Pagination';
import { IoSearchOutline } from 'react-icons/io5';
import { FiFilter } from 'react-icons/fi';

function Home() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('Solar System');
  const [activeVoltage, setActiveVoltage] = useState('3.2V');
  const [activeCapacity, setActiveCapacity] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Filter change callback from Sidebar
  const handleFilterChange = (filter) => {
    if (filter.type === 'category') {
      setActiveCategory(filter.name);
    } else if (filter.type === 'voltage') {
      setActiveVoltage(filter.name);
    } else if (filter.type === 'capacity') {
      setActiveCapacity(filter.name);
    }
  };

  // Mock products list (English titles & descriptions, formatted pricing)
  const products = Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    title: '12V 100Ah Lithium Battery',
    description: 'Ideal solution for IPS, Solar and Home Backup',
    price: '৳32,500',
    originalPrice: '৳32,500',
    image: '/dummyproductimage.png',
  }));

  // Filter products based on search input
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-grow py-4 sm:py-8 bg-white">
        <Container>
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
            
            {/* Left Column: Sidebar Filters */}
            <div className={`w-full md:w-[260px] lg:w-[280px] flex-shrink-0 ${showMobileFilters ? 'block' : 'hidden md:block'}`}>
              <Sidebar onFilterChange={handleFilterChange} />
            </div>

            {/* Right Column: Search & Products Grid */}
            <div className="flex-grow w-full flex flex-col gap-6">
              
              {/* Search bar & Mobile Filters trigger row */}
              <div className="flex flex-col sm:flex-row gap-3 w-full">
                
                {/* Search input field */}
                {/* <div className="relative flex-grow w-full">
                  <input
                    type="text"
                    placeholder="Search product..."
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setCurrentPage(1); // Reset page on new search
                    }}
                    className="w-full bg-[#f1f1f1] text-slate-800 placeholder-slate-400 py-3 pl-6 pr-12 focus:outline-none focus:ring-1 focus:ring-[#C51C1C] text-sm font-normal rounded-sm"
                  />
                  <button
                    type="button"
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-black transition-colors"
                    aria-label="Search"
                  >
                    <IoSearchOutline className="text-xl" />
                  </button>
                </div> */}

                {/* Filter toggle button on mobile */}
                <button
                  type="button"
                  onClick={() => setShowMobileFilters(!showMobileFilters)}
                  className="md:hidden flex items-center justify-center gap-2 bg-white border border-gray-200 text-slate-700 py-3 px-5 text-sm font-bold transition-all duration-200 active:scale-[0.98] select-none hover:bg-slate-50 rounded-sm"
                >
                  <FiFilter className="text-base" />
                  <span>{showMobileFilters ? 'Hide Filters' : 'Filters'}</span>
                </button>

              </div>

              {/* Active Filter Tags */}
              <div className="flex flex-wrap gap-2.5 items-center">
                {activeCategory && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#ffd2d2]/40 text-[#C51C1C] text-xs font-bold font-sans">
                    {activeCategory}
                    <button
                      type="button"
                      onClick={() => setActiveCategory('')}
                      className="hover:text-black transition-colors text-sm font-bold p-0.5 leading-none focus:outline-none"
                      aria-label={`Clear ${activeCategory} filter`}
                    >
                      &times;
                    </button>
                  </span>
                )}
                {activeVoltage && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#ffd2d2]/40 text-[#C51C1C] text-xs font-bold font-sans">
                    {activeVoltage}
                    <button
                      type="button"
                      onClick={() => setActiveVoltage('')}
                      className="hover:text-black transition-colors text-sm font-bold p-0.5 leading-none focus:outline-none"
                      aria-label={`Clear ${activeVoltage} filter`}
                    >
                      &times;
                    </button>
                  </span>
                )}
                {activeCapacity && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#ffd2d2]/40 text-[#C51C1C] text-xs font-bold font-sans">
                    {activeCapacity}
                    <button
                      type="button"
                      onClick={() => setActiveCapacity('')}
                      className="hover:text-black transition-colors text-sm font-bold p-0.5 leading-none focus:outline-none"
                      aria-label={`Clear ${activeCapacity} filter`}
                    >
                      &times;
                    </button>
                  </span>
                )}
              </div>

              {/* 2-Column (Mobile) or 3-Column (Desktop) Products Grid */}
              {filteredProducts.length === 0 ? (
                <div className="text-center py-16 text-slate-400 font-sans">
                  No products found matching your search.
                </div>
              ) : (
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8 justify-items-center mt-2">
                  {filteredProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      title={product.title}
                      description={product.description}
                      price={product.price}
                      originalPrice={product.originalPrice}
                      image={product.image}
                      onSeeProduct={() => navigate(`/product-details/${product.id}`)}
                    />
                  ))}
                </div>
              )}

              {/* Pagination Section */}
              {filteredProducts.length > 0 && (
                <div className="mt-8 border-t border-gray-100 pt-6">
                  <Pagination
                    currentPage={currentPage}
                    totalPages={4}
                    onPageChange={setCurrentPage}
                  />
                </div>
              )}

            </div>

          </div>
        </Container>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;