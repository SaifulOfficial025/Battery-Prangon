import React, { useState, useEffect } from 'react';
import Container from '../../Layout/Container/Container';
import { FaStar } from 'react-icons/fa';

const testimonialsData = [
  {
    id: 1,
    name: 'Rahim Uddin',
    location: 'Khulna',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80',
    text: '"দুই বছর ধরে ব্যবহার করছি, Backup performance অসাধারণ"'
  },
  {
    id: 2,
    name: 'Selina Akter',
    location: 'Sylhet',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80',
    text: '"Solar এর সাথে দারুণ কাজ করছে, বিদ্যুৎ বিল কমে গেছে"'
  },
  {
    id: 3,
    name: 'Mohammad Faisal',
    location: 'Chittagong',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80',
    text: '"ব্যবহারের পর থেকে আমাদের অফিসের কাজের গতি বাড়িয়েছে"'
  },
  {
    id: 4,
    name: 'Anisur Rahman',
    location: 'Dhaka',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&h=120&q=80',
    text: '"আমাদের কারখানায় আইপিএস ব্যাকআপের জন্য সেরা ব্যাটারি সলিউশন"'
  },
  {
    id: 5,
    name: 'Farhana Islam',
    location: 'Rajshahi',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80',
    text: '"কোনো মেইনটেন্যান্সের ঝামেলা নেই, চার্জও খুব দ্রুত সম্পন্ন হয়"'
  },
  {
    id: 6,
    name: 'Kamrul Hasan',
    location: 'Barisal',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80',
    text: '"পাওয়ার লোডের সময় স্থিতিশীল ভোল্টেজ প্রদান করে, আমি খুবই সন্তুষ্ট"'
  }
];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

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

  // Auto-play sliding right-to-left
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= maxIndex) {
          return 0;
        }
        return prev + 1;
      });
    }, 4000);
    return () => clearInterval(timer);
  }, [maxIndex]);

  return (
    <section className="py-16 bg-white overflow-hidden">
      <Container>
        
        {/* Title */}
        <h2 className="text-[#1a1a1a] font-extrabold text-2xl md:text-3xl text-center font-sans mb-12">
          গ্রাহকদের অভিজ্ঞতা
        </h2>

        {/* Carousel Slider */}
        <div className="relative w-full overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
              width: `${(testimonialsData.length / visibleCards) * 100}%`
            }}
          >
            {testimonialsData.map((item) => (
              <div
                key={item.id}
                className="px-3 box-border"
                style={{ width: `${100 / testimonialsData.length}%` }}
              >
                {/* Testimonial Card */}
                <div className="w-full bg-[#f8f9fa] border border-gray-100 rounded-[24px] p-8 text-left flex flex-col justify-between h-[230px] shadow-sm select-none">
                  
                  {/* User Profile Block */}
                  <div className="flex items-center gap-4">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm flex-shrink-0"
                    />
                    <div>
                      <h4 className="text-slate-800 font-extrabold text-[15px] leading-tight">
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

        {/* Navigation Indicator Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {testimonialsData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(Math.min(index, maxIndex))}
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