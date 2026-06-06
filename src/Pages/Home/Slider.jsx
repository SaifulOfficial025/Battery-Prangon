import React, { useState, useEffect } from 'react';
import { FiShield, FiZap, FiTruck, FiBatteryCharging } from 'react-icons/fi';

const slidesData = [
  {
    id: 1,
    image: '/dummysliderimage.png',
    // Text and graphics are baked into the image. 
    // We do not add overlays here to avoid duplication.
    isBaked: true
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=1920&q=80',
    title: 'উন্নত প্রযুক্তির লিথিয়াম ব্যাটারি',
    subtitle: 'অনন্য স্থায়িত্ব এবং নির্ভরযোগ্য শক্তির নিশ্চয়তা',
    isBaked: false
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1920&q=80',
    title: 'সবুজ শক্তি, সুন্দর ভবিষ্যৎ',
    subtitle: 'পরিবেশবান্ধব সোলার ও পাওয়ার ব্যাকআপ সলিউশন',
    isBaked: false
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1548613053-220ef4b80702?auto=format&fit=crop&w=1920&q=80',
    title: 'স্মার্ট পাওয়ার ব্যাকআপ সিস্টেম',
    subtitle: 'আপনার বাড়ির জন্য নিরবচ্ছিন্ন বিদ্যুৎ সেবা',
    isBaked: false
  }
];

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slidesData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full flex flex-col">
      
      {/* Slider Area (16:9 Aspect Ratio, full screen edge-to-edge) */}
      <div className="w-full aspect-[16/9] relative overflow-hidden bg-neutral-950">
        
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
                alt={slide.title || 'Slide Image'}
                className="w-full h-full object-cover object-top select-none"
              />

              {/* Text Overlay (Only for non-baked images) */}
              {!slide.isBaked && (
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent flex items-center px-8 sm:px-16 md:px-24 z-20">
                  <div className="max-w-xl text-left">
                    <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight select-none">
                      {slide.title}
                    </h2>
                    <p className="text-xs sm:text-base md:text-lg text-slate-300 font-medium leading-relaxed select-none">
                      {slide.subtitle}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

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

      {/* Features Bar (Renders statically at the bottom) */}
      <div className="w-full bg-black text-white py-4 md:py-6 px-4 border-t border-neutral-900 z-20">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          
          <div className="flex items-center justify-center gap-3">
            <FiShield className="text-lg md:text-xl text-white flex-shrink-0" />
            <span className="text-xs md:text-sm lg:text-base font-bold whitespace-nowrap">
              ১০ বছরের ওয়ারেন্টি
            </span>
          </div>

          <div className="flex items-center justify-center gap-3">
            <FiZap className="text-lg md:text-xl text-white flex-shrink-0" />
            <span className="text-xs md:text-sm lg:text-base font-bold whitespace-nowrap">
              ৩০০০+ চার্জ সাইকেল
            </span>
          </div>

          <div className="flex items-center justify-center gap-3">
            <FiTruck className="text-lg md:text-xl text-white flex-shrink-0" />
            <span className="text-xs md:text-sm lg:text-base font-bold whitespace-nowrap">
              সারাদেশে ডেলিভারি
            </span>
          </div>

          <div className="flex items-center justify-center gap-3">
            <FiBatteryCharging className="text-lg md:text-xl text-white flex-shrink-0" />
            <span className="text-xs md:text-sm lg:text-base font-bold whitespace-nowrap">
              Fast Charging
            </span>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Slider;