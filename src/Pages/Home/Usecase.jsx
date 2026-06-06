import React from 'react';
import Container from '../../Layout/Container/Container';

const usecasesData = [
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
];

function Usecase() {
  return (
    <section className="py-16 bg-white">
      <Container>
        
        {/* Title Section */}
        <h2 className="text-[#1a1a1a] font-extrabold text-2xl md:text-3xl text-center font-sans mb-10 md:mb-12">
          আপনার প্রয়োজন অনুযায়ী পাওয়ার সলিউশন
        </h2>

        {/* 4-Column Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {usecasesData.map((item) => (
            <div 
              key={item.id}
              className="relative w-full aspect-[4/5] rounded-[18px] overflow-hidden group shadow-sm cursor-pointer hover:shadow-md transition-shadow duration-300"
            >
              {/* Background Image */}
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 select-none"
              />

              {/* Bottom Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" />

              {/* Absolute Text Title over Image */}
              <div className="absolute bottom-6 left-6 right-6 z-20 text-left">
                <h3 className="text-white font-bold text-lg md:text-xl leading-tight tracking-wide max-w-[200px] select-none">
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