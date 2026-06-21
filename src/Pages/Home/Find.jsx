import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../../Layout/Container/Container';
import { fetchCategories } from '../../Redux/Category';

// Fallback icon map (used when category has no image from API)
const fallbackIcons = {
  default: '/automobile.png',
};

// Translations for the section title
const translations = {
  en: { title: 'Find Battery For' },
  bn: { title: 'ব্যাটারি খুঁজুন' },
};

function Find() {
  const dispatch = useDispatch();
  const { categories, loading, error } = useSelector((state) => state.category);
  const lang = useSelector((state) => state.lang.lang);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const t = translations[lang] || translations.en;

  return (
    <section className="py-4 sm:py-8 bg-white">
      <Container>

        {/* Title */}
        <h2 className="text-[#1a1a1a] font-semibold text-xl sm:text-2xl md:text-3xl text-center font-sans mb-6 sm:mb-8 md:mb-12">
          {t.title}
        </h2>

        {/* Loading State */}
        {loading && (
          <div className="flex flex-wrap justify-center border-t border-l border-gray-300 shadow-sm rounded-sm overflow-hidden w-fit mx-auto max-w-full">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="w-[145px] sm:w-[170px] md:w-[180px] lg:w-[190px] aspect-square flex flex-col items-center justify-center p-4 sm:p-6 border-r border-b border-gray-300 bg-white"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 rounded-full animate-pulse mb-3 sm:mb-4" />
                <div className="h-3 w-16 bg-gray-200 rounded animate-pulse" />
              </div>
            ))}
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <p className="text-center text-red-500 text-sm py-6">
            Failed to load categories. Please try again later.
          </p>
        )}

        {/* Responsive Grid Layout */}
        {!loading && !error && categories.length > 0 && (
          <div className="flex flex-wrap justify-center border-t border-l border-gray-300 shadow-sm rounded-sm overflow-hidden w-fit mx-auto max-w-full">
            {categories.map((item) => {
              const displayName = lang === 'bn' ? item.bangla_name : item.name;
              const iconSrc = item.image || fallbackIcons.default;

              return (
                <div
                  key={item.id}
                  className="w-[145px] sm:w-[170px] md:w-[180px] lg:w-[190px] aspect-square flex flex-col items-center justify-center p-4 sm:p-6 border-r border-b border-gray-300 bg-white hover:bg-slate-50 transition-colors duration-200 text-center group cursor-pointer"
                >
                  {/* Icon Container */}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mb-3 sm:mb-4">
                    <img
                      src={iconSrc}
                      alt={displayName}
                      className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-200 select-none"
                      draggable={false}
                      onError={(e) => {
                        e.currentTarget.src = fallbackIcons.default;
                      }}
                    />
                  </div>

                  {/* Text Label */}
                  <span className="text-slate-700 font-bold text-xs sm:text-[13px] md:text-sm font-sans max-w-[125px] leading-tight select-none">
                    {displayName}
                  </span>
                </div>
              );
            })}
          </div>
        )}

      </Container>
    </section>
  );
}

export default Find;