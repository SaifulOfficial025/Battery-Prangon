import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const slidesData = [
  {
    id: 1,
    image: '/dummysliderimage.jpg'
  },
  {
    id: 2,
    image: '/dummysliderimage.png'
  },
  {
    id: 3,
    image: '/dummysliderimage.jpg'
  },
  {
    id: 4,
    image: '/dummysliderimage.png'
  }
];

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slidesData.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slidesData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slidesData.length) % slidesData.length);
  };

  return (
    <div className="w-full flex flex-col  overflow-hidden  ">
      
      {/* Slider Area (16:6 Aspect Ratio) */}
      <div className="w-full aspect-[16/6] relative overflow-hidden group">
        
        {/* Slides Wrapper */}
        <div className="w-full h-full relative">
          {slidesData.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              {/* Slide Image */}
              <img
                src={slide.image}
                alt="Slide Image"
                className="w-full h-full object-fill select-none"
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

        {/* Custom Navigation Indicator Dots (Positioned absolutely over the slider) */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-30">
          {slidesData.map((_, index) => (
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

      </div>

    </div>
  );
}

export default Slider;