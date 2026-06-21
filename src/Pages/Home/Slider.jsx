import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSliders } from '../../Redux/Slider';
import { BASE_URL } from '../../Redux/config';

function Slider() {
  const dispatch = useDispatch();
  const { sliders, loading, error } = useSelector((state) => state.slider);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    dispatch(fetchSliders());
  }, [dispatch]);

  // Auto-play slides
  useEffect(() => {
    if (sliders.length === 0) return;
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliders.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [sliders.length]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    if (sliders.length === 0) return;
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sliders.length);
  };

  const prevSlide = () => {
    if (sliders.length === 0) return;
    setCurrentIndex((prevIndex) => (prevIndex - 1 + sliders.length) % sliders.length);
  };

  const getImageUrl = (imagePath) => {
    if (!imagePath) return '';
    if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
      return imagePath;
    }
    const cleanBase = BASE_URL.endsWith('/') ? BASE_URL.slice(0, -1) : BASE_URL;
    const cleanPath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
    return `${cleanBase}${cleanPath}`;
  };

  return (
    <div className="w-full flex flex-col overflow-hidden">
      
      {/* Slider Area (16:6 Aspect Ratio) */}
      <div className="w-full aspect-[16/6] relative overflow-hidden group bg-slate-100">
        
        {/* Loading State */}
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-100 animate-pulse">
            <div className="w-12 h-12 border-4 border-slate-300 border-t-slate-800 rounded-full animate-spin"></div>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-100 text-red-500 font-sans p-4 text-center">
            Failed to load slider images. Please reload the page.
          </div>
        )}

        {/* Slides Wrapper */}
        {!loading && !error && sliders.length > 0 && (
          <>
            <div className="w-full h-full relative">
              {sliders.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                    index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                >
                  {/* Slide Image */}
                  <img
                    src={getImageUrl(slide.image)}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-fill select-none"
                    draggable={false}
                  />
                </div>
              ))}
            </div>

            {/* Left Arrow */}
            <button
              onClick={prevSlide}
              className="absolute top-1/2 -translate-y-1/2 left-4 z-30 w-10 h-10 flex items-center justify-center rounded-full bg-black/30 hover:bg-black/50 text-white transition-all duration-300 opacity-0 group-hover:opacity-100"
              aria-label="Previous slide"
            >
              <FiChevronLeft className="text-2xl" />
            </button>

            {/* Right Arrow */}
            <button
              onClick={nextSlide}
              className="absolute top-1/2 -translate-y-1/2 right-4 z-30 w-10 h-10 flex items-center justify-center rounded-full bg-black/30 hover:bg-black/50 text-white transition-all duration-300 opacity-0 group-hover:opacity-100"
              aria-label="Next slide"
            >
              <FiChevronRight className="text-2xl" />
            </button>

            {/* Custom Navigation Indicator Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-30">
              {sliders.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'w-6 bg-white' 
                      : 'w-2 bg-white/40 hover:bg-white/70'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}

      </div>

    </div>
  );
}

export default Slider;