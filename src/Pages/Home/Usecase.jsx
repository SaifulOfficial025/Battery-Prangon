import React from 'react';
import { useSelector } from 'react-redux';
import Container from '../../Layout/Container/Container';

const usecasesData = {
  en: [
    {
      id: 1,
      title: 'IPS & Home Backup',
      image: '/usecase1.png',
    },
    {
      id: 2,
      title: 'Solar System',
      image: '/usecase2.png',
    },
    {
      id: 3,
      title: 'Fishing & Marine',
      image: '/usecase3.png',
    },
    {
      id: 4,
      title: 'Office & Business Backup',
      image: '/usecase4.png',
    },
  ],
  bn: [
    {
      id: 1,
      title: 'আইপিএস ও হোম ব্যাকআপ',
      image: '/usecase1.png',
    },
    {
      id: 2,
      title: 'সোলার সিস্টেম',
      image: '/usecase2.png',
    },
    {
      id: 3,
      title: 'ফিশিং ও মেরিন',
      image: '/usecase3.png',
    },
    {
      id: 4,
      title: 'অফিস ও বিজনেস ব্যাকআপ',
      image: '/usecase4.png',
    },
  ]
};

function Usecase() {
  const lang = useSelector((state) => state.lang.lang);
  const currentUsecases = usecasesData[lang] || usecasesData.en;
  const sectionTitle = lang === 'bn' ? 'আপনার প্রয়োজনীয় পাওয়ার সলিউশন' : 'Power Solutions For Your Needs';

  return (
    <section className="py-4 sm:py-8 bg-white">
      <Container>
        
        {/* Title Section */}
        <h2 className="text-[#1a1a1a] font-semibold text-xl sm:text-2xl md:text-3xl text-center font-sans mb-6 sm:mb-10 md:mb-12">
          {sectionTitle}
        </h2>

        {/* 4-Column Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 justify-items-center">
          {currentUsecases.map((item) => (
            <div 
              key={item.id}
              className="relative w-full aspect-[1/1] overflow-hidden group shadow-sm cursor-pointer transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-md"
            >
              {/* Background Image */}
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-in-out select-none"
              />

              {/* Bottom Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" />

              {/* Absolute Text Title over Image */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 z-20 text-left">
                <h3 className="text-white font-bold text-sm sm:text-lg md:text-xl leading-tight tracking-wide max-w-[200px] select-none">
                  {item.title}
                </h3>
              </div>

            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}

export default Usecase;