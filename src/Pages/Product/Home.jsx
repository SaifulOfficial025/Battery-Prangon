import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../Shared/Header';
import Footer from '../../Shared/Footer';
import Container from '../../Layout/Container/Container';
import Sidebar from './sidebar';
import ProductCard from '../../Shared/ProductCard';
import Pagination from '../../Shared/Pagination';
import { FiFilter } from 'react-icons/fi';

import { fetchProducts, setFilters, setPage } from '../../Redux/Product/Products';

const PAGE_SIZE = 9;

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const lang = useSelector((state) => state.lang.lang);
  const { items: products, count, loading, error, currentPage, filters } = useSelector((state) => state.products);
  const sidebarCategories = useSelector((state) => state.sidebar.categories);

  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Active filter display names (just for the tags in UI)
  const [activeCategory, setActiveCategory] = useState('');
  const [activeVoltage, setActiveVoltage] = useState('');
  const [activeCapacity, setActiveCapacity] = useState('');

  const totalPages = Math.ceil(count / PAGE_SIZE);

  // Sync activeCategory display name when Redux filter is pre-set (e.g. from Find page)
  // filters.category is always the English name (e.g. 'automobile'), match by c.name
  useEffect(() => {
    if (filters.category && sidebarCategories.length > 0) {
      const match = sidebarCategories.find((c) => c.name === filters.category);
      if (match) {
        setActiveCategory(lang === 'bn' ? match.bangla_name : match.name);
      }
    } else if (!filters.category) {
      setActiveCategory('');
    }
  }, [filters.category, sidebarCategories, lang]);

  // Fetch products whenever filters or page changes

  useEffect(() => {
    dispatch(fetchProducts({
      page: currentPage,
      pageSize: PAGE_SIZE,
      category: filters.category,
      voltage: filters.voltage,
      capacity: filters.capacity,
      search: filters.search,
    }));
  }, [dispatch, currentPage, filters]);

  // Filter change callback from Sidebar — receives { type, id, apiName, name }
  // apiName = English name used for API calls (e.g. 'automobile', '2000', '10')
  // name    = localised display name for the tag badge
  const handleFilterChange = useCallback((filter) => {
    if (filter.type === 'category') {
      setActiveCategory(filter.id === 'all' ? '' : filter.name);
      dispatch(setFilters({ category: filter.apiName ?? null }));
    } else if (filter.type === 'voltage') {
      setActiveVoltage(filter.id === 'all' ? '' : filter.name);
      dispatch(setFilters({ voltage: filter.apiName ?? null }));
    } else if (filter.type === 'capacity') {
      setActiveCapacity(filter.id === 'all' ? '' : filter.name);
      dispatch(setFilters({ capacity: filter.apiName ?? null }));
    }
  }, [dispatch]);

  const handlePageChange = (page) => {
    dispatch(setPage(page));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Skeleton cards for loading state
  const renderSkeletonGrid = () => (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8 justify-items-center mt-2">
      {Array.from({ length: PAGE_SIZE }).map((_, i) => (
        <div key={i} className="bg-white border border-gray-100 shadow-sm overflow-hidden flex flex-col max-w-[320px] w-full rounded-sm animate-pulse">
          <div className="bg-slate-100 aspect-square" />
          <div className="p-3 sm:p-5 flex flex-col gap-3">
            <div className="h-5 bg-slate-200 rounded w-3/4" />
            <div className="h-4 bg-slate-200 rounded w-full" />
            <div className="h-4 bg-slate-200 rounded w-2/3" />
            <div className="flex items-center justify-between mt-2">
              <div className="h-6 bg-slate-200 rounded w-1/3" />
              <div className="h-9 bg-slate-200 rounded w-1/3" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Main Content Area */}
      {/* Desktop: fixed-height split panel (sidebar fixed, right column scrolls) */}
      {/* Mobile: normal scrolling page */}
      <main className="flex-grow bg-white">
        <Container>
          <div className="flex flex-col md:flex-row md:h-[calc(100vh-72px)] gap-0 md:gap-8 items-stretch">
            
            {/* Left Column: Sidebar — fixed height, its own internal scroll, never moves */}
            <div className={`w-full md:w-[260px] lg:w-[280px] flex-shrink-0 md:overflow-y-auto no-scrollbar md:border-r md:border-gray-100 py-4 md:py-8 md:pr-4 ${showMobileFilters ? 'block' : 'hidden md:block'}`}>
              <Sidebar onFilterChange={handleFilterChange} />
            </div>

            {/* Right Column: Products — its own independent scroll on desktop */}
            <div className="flex-grow w-full md:overflow-y-auto no-scrollbar flex flex-col gap-5 py-4 md:py-8">

              {/* Mobile Filters trigger row */}
              <div className="flex flex-col sm:flex-row gap-3 w-full">
                {/* Filter toggle button on mobile */}
                <button
                  type="button"
                  onClick={() => setShowMobileFilters(!showMobileFilters)}
                  className="md:hidden flex items-center justify-center gap-2 bg-white border border-gray-200 text-slate-700 py-3 px-5 text-sm font-bold transition-all duration-200 active:scale-[0.98] select-none hover:bg-slate-50 rounded-sm"
                >
                  <FiFilter className="text-base" />
                  <span>{showMobileFilters ? (lang === 'bn' ? 'ফিল্টার লুকান' : 'Hide Filters') : (lang === 'bn' ? 'ফিল্টার' : 'Filters')}</span>
                </button>
              </div>

              {/* Active Filter Tags */}
              {(activeCategory || activeVoltage || activeCapacity || filters.search) && (
                <div className="flex flex-wrap gap-2.5 items-center">
                  {/* Search tag */}
                  {filters.search && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#ffd2d2]/40 text-[#C51C1C] text-xs font-bold font-sans">
                      🔍 {filters.search}
                      <button
                        type="button"
                        onClick={() => dispatch(setFilters({ search: null }))}
                        className="hover:text-black transition-colors text-sm font-bold p-0.5 leading-none focus:outline-none"
                        aria-label="Clear search filter"
                      >
                        &times;
                      </button>
                    </span>
                  )}
                  {activeCategory && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#ffd2d2]/40 text-[#C51C1C] text-xs font-bold font-sans">
                      {activeCategory}
                      <button
                        type="button"
                        onClick={() => {
                          setActiveCategory('');
                          dispatch(setFilters({ category: null }));
                        }}
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
                        onClick={() => {
                          setActiveVoltage('');
                          dispatch(setFilters({ voltage: null }));
                        }}
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
                        onClick={() => {
                          setActiveCapacity('');
                          dispatch(setFilters({ capacity: null }));
                        }}
                        className="hover:text-black transition-colors text-sm font-bold p-0.5 leading-none focus:outline-none"
                        aria-label={`Clear ${activeCapacity} filter`}
                      >
                        &times;
                      </button>
                    </span>
                  )}
                </div>
              )}

              {/* Products Grid */}
              {loading ? (
                renderSkeletonGrid()
              ) : error ? (
                <div className="text-center py-16 text-red-500 font-sans text-sm">
                  {lang === 'bn' ? 'পণ্য লোড করতে ব্যর্থ হয়েছে।' : 'Failed to load products. Please try again.'}
                </div>
              ) : products.length === 0 ? (
                <div className="text-center py-16 text-slate-400 font-sans">
                  {lang === 'bn' ? 'কোনো পণ্য পাওয়া যায়নি।' : 'No products found.'}
                </div>
              ) : (
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8 justify-items-center mt-2">
                  {products.map((product) => {
                    const title = lang === 'bn' ? (product.bangla_name || product.name) : product.name;
                    const description = lang === 'bn' ? (product.bangla_description || product.description) : product.description;
                    const price = lang === 'bn' ? `৳${product.bangla_current_price}` : `৳${Number(product.current_price).toLocaleString('en-BD')}`;
                    const originalPrice = lang === 'bn' ? `৳${product.bangla_old_price}` : `৳${Number(product.old_price).toLocaleString('en-BD')}`;

                    return (
                      <ProductCard
                        key={product.id}
                        title={title}
                        description={description}
                        price={price}
                        originalPrice={originalPrice}
                        image={product.primary_image}
                        onSeeProduct={() => navigate(`/product-details/${product.id}`)}
                      />
                    );
                  })}
                </div>
              )}

              {/* Pagination — always show when products exist */}
              {!loading && products.length > 0 && (
                <div className="mt-8 border-t border-gray-100 pt-6">
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages > 0 ? totalPages : 1}
                    onPageChange={handlePageChange}
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
