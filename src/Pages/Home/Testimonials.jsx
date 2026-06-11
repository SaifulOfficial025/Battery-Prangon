import React, { useState, useEffect, useRef } from 'react';
import Container from '../../Layout/Container/Container';
import { FaStar } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const testimonialsData = [
  {
    id: 1,
    name: 'Rahim Uddin',
    location: 'Khulna',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80',
    text: '"Been using for two years, Backup performance is extraordinary"'
  },
  {
    id: 2,
    name: 'Selina Akter',
    location: 'Sylhet',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80',
    text: '"Working great with Solar, electricity bills have reduced"'
  },
  {
    id: 3,
    name: 'Mohammad Faisal',
    location: 'Chittagong',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80',
    text: '"Increased our office work speed since usage"'
  },
  {
    id: 4,
    name: 'Anisur Rahman',
    location: 'Dhaka',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&h=120&q=80',
    text: '"Best battery solution for IPS backup in our factory"'
  },
  {
    id: 5,
    name: 'Farhana Islam',
    location: 'Rajshahi',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80',
    text: '"No maintenance hassle, charging completes very fast"'
  },
  {
    id: 6,
    name: 'Kamrul Hasan',
    location: 'Barisal',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80',
    text: '"Provides stable voltage during power load, I am very satisfied"'
  }
];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  // Update visible cards based on client screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonialsData.length - visibleCards);

  // Keep index in bounds on resize
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [visibleCards, maxIndex, currentIndex]);

  // Auto-play sliding right-to-left
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [maxIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Touch / swipe handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    const SWIPE_THRESHOLD = 40;
    if (diff > SWIPE_THRESHOLD) {
      nextSlide();
    } else if (diff < -SWIPE_THRESHOLD) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const totalDots = maxIndex + 1;

  return (
    <section className="py-4 sm:py-8 bg-white overflow-hidden">
      <Container>

        {/* Title + Nav row */}
        <div className="flex items-center justify-between mb-6 sm:mb-8 md:mb-12">
          <h2 className="text-[#1a1a1a] font-semibold text-xl sm:text-2xl md:text-3xl font-sans">
            Customer Experiences
          </h2>

          {/* Arrow buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gray-200 bg-white hover:bg-slate-50 text-slate-800 flex items-center justify-center transition-all duration-200 active:scale-95"
              aria-label="Previous testimonial"
            >
              <FiChevronLeft className="text-lg sm:text-xl" />
            </button>
            <button
              onClick={nextSlide}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gray-200 bg-white hover:bg-slate-50 text-slate-800 flex items-center justify-center transition-all duration-200 active:scale-95"
              aria-label="Next testimonial"
            >
              <FiChevronRight className="text-lg sm:text-xl" />
            </button>
          </div>
        </div>

        {/* Carousel Slider */}
        <div
          className="relative w-full overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / testimonialsData.length)}%)`,
              width: `${(testimonialsData.length / visibleCards) * 100}%`
            }}
          >
            {testimonialsData.map((item) => (
              <div
                key={item.id}
                className="px-1.5 sm:px-3 box-border"
                style={{ width: `${100 / testimonialsData.length}%` }}
              >
                {/* Testimonial Card */}
                <div className="w-full bg-[#f8f9fa] border border-gray-100 p-5 sm:p-6 md:p-8 text-left flex flex-col justify-between min-h-[190px] sm:min-h-[230px] shadow-sm select-none rounded-sm">

                  {/* User Profile Block */}
                  <div className="flex items-center gap-3 sm:gap-4">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-11 h-11 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-white shadow-sm flex-shrink-0"
                      draggable={false}
                    />
                    <div>
                      <h4 className="text-slate-800 font-semibold text-[14px] sm:text-[15px] leading-tight">
                        {item.name}
                      </h4>
                      <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider">
                        {item.location}
                      </span>
                    </div>
                  </div>

                  {/* Body Text */}
                  <p className="text-slate-600 text-sm md:text-[15px] leading-relaxed font-medium my-4 flex-grow italic">
                    {item.text}
                  </p>

                  {/* Star Rating Footer */}
                  <div className="flex items-center gap-0.5 text-amber-400 mt-auto">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-sm" />
                    ))}
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dot Navigation */}
        <div className="flex items-center justify-center gap-1.5 mt-4 sm:mt-8">
          {Array.from({ length: totalDots }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'w-6 bg-[#C51C1C]'
                  : 'w-2 bg-slate-200 hover:bg-slate-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </Container>
    </section>
  );
}

export default Testimonials;