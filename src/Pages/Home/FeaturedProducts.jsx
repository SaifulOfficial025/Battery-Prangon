import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../../Layout/Container/Container';
import ProductCard from '../../Shared/ProductCard';
import { fetchPopularProducts } from '../../Redux/Product/PopularProduct';

const translations = {
  en: {
    title: 'Popular Battery Collection',
    loading: 'Loading popular products...',
    error: 'Failed to load popular products. Please try again later.',
    seeMore: 'See more',
  },
  bn: {
    title: 'জনপ্রিয় ব্যাটারি সংগ্রহ',
    loading: 'জনপ্রিয় পণ্য লোড হচ্ছে...',
    error: 'জনপ্রিয় পণ্য লোড করতে ব্যর্থ হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।',
    seeMore: 'আরো দেখুন',
  },
};


function FeaturedProducts() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const { products, loading, error } = useSelector((state) => state.popularProduct);
  const lang = useSelector((state) => state.lang.lang);

  useEffect(() => {
    dispatch(fetchPopularProducts());
  }, [dispatch]);

  const t = translations[lang] || translations.en;

  return (
    <section id="products" className=" bg-white">
      <Container>
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between mb-6 sm:mb-8 border-b border-gray-100 pb-3 sm:pb-4 gap-2 sm:gap-0">
          <h2 className="text-[#1a1a1a] font-semibold text-xl md:text-3xl font-sans text-center sm:text-left">
            {t.title}
          </h2>
        </div>

        {/* Loading Skeleton Grid Layout */}
        {loading && (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8 justify-items-center w-full">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="bg-white border border-gray-100 shadow-sm overflow-hidden flex flex-col max-w-[320px] w-full rounded-sm animate-pulse">
                {/* Product Image Section Skeleton */}
                <div className="bg-gray-100 aspect-square w-full" />
                {/* Product Content Section Skeleton */}
                <div className="p-3 sm:p-5 flex flex-col flex-grow gap-2 sm:gap-3">
                  <div className="h-4 bg-gray-200 rounded w-3/4" />
                  <div className="hidden sm:block h-3 bg-gray-200 rounded w-full" />
                  <div className="hidden sm:block h-3 bg-gray-200 rounded w-5/6" />
                  <div className="flex items-center justify-between mt-3 sm:mt-auto gap-2">
                    <div className="flex flex-col gap-1 w-1/3">
                      <div className="h-2 bg-gray-200 rounded w-1/2" />
                      <div className="h-4 bg-gray-200 rounded w-full" />
                    </div>
                    <div className="h-8 bg-gray-200 rounded w-24" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <p className="text-center text-red-500 font-medium text-sm py-8 font-sans">
            {t.error}
          </p>
        )}

        {/* Empty State */}
        {!loading && !error && products.length === 0 && (
          <p className="text-center text-slate-400 font-medium text-sm py-8 font-sans">
            {lang === 'bn' ? 'কোন জনপ্রিয় পণ্য পাওয়া যায়নি।' : 'No popular products found.'}
          </p>
        )}

        {/* 6-Card Grid Layout */}
        {!loading && !error && products.length > 0 && (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8 justify-items-center">
            {products.slice(0, 6).map((product) => {
              const titleText = lang === 'bn' ? (product.bangla_name || product.name || null) : (product.name || null);
              const descText = lang === 'bn' ? (product.bangla_description || product.description || null) : (product.description || null);
              const badgeText = lang === 'bn' ? product.badge_bangla : product.badge;
              const discountText = product.discount 
                ? (lang === 'bn' ? `${product.discount}% ছাড়` : `${product.discount}% off`)
                : null;

              const formatPrice = (priceVal) => {
                if (!priceVal) return null;
                const str = String(priceVal).trim();
                return str.startsWith('৳') ? str : `৳${str}`;
              };

              const displayPrice = lang === 'bn'
                ? (formatPrice(product.bangla_current_price) || formatPrice(product.current_price))
                : formatPrice(product.current_price);

              const displayOldPrice = lang === 'bn'
                ? (formatPrice(product.bangla_old_price) || formatPrice(product.old_price))
                : formatPrice(product.old_price);

              return (
                <div key={product.id} className="relative w-full flex justify-center">
                  <div className="relative max-w-[320px] w-full">
                    
                    {/* Custom badge label in the top-left */}
                    {badgeText && (
                      <div className="absolute top-2 left-2 z-10 bg-[#C51C1C] text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm shadow-sm select-none">
                        {badgeText}
                      </div>
                    )}

                    {/* Highlight badge on discounted card */}
                    {/* {discountText && (
                      <div className="absolute top-1 right-1 sm:top-3 sm:right-3 z-10 w-12 h-12 sm:w-12 sm:h-12 flex items-center justify-center">
                        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-[#C51C1C] fill-current drop-shadow-md">
                          <path d="M50 0 L58 15 L74 8 L74 26 L92 23 L85 40 L100 50 L85 60 L92 77 L74 74 L74 92 L58 85 L50 100 L42 85 L26 92 L26 74 L8 77 L15 60 L0 50 L15 40 L8 23 L26 26 L26 8 L42 15 Z" />
                        </svg>
                        <span className="relative z-10 text-white font-semibold text-[8px] sm:text-[9px] leading-tight text-center select-none uppercase">
                          {product.discount}%<br />{lang === 'bn' ? 'ছাড়' : 'off'}
                        </span>
                      </div>
                    )} */}

                    <ProductCard 
                      title={titleText}
                      description={descText}
                      price={displayPrice}
                      originalPrice={displayOldPrice}
                      image={product.primary_image || null}
                      onSeeProduct={() => navigate(`/product-details/${product.id}`)}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <div className="flex justify-center mt-8">
          <Link 
            to="/products" 
            className="text-sm md:text-md font-semibold text-slate-500 hover:text-[#C51C1C] transition-colors duration-200"
          >
            {t.seeMore}
          </Link>
        </div>
      </Container>
    </section>
  );
}

export default FeaturedProducts;