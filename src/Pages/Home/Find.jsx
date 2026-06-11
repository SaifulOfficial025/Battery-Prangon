import React from 'react';
import Container from '../../Layout/Container/Container';

const findItems = [
  {
    name: 'Automobile',
    icon: '/automobile.png',
  },
  {
    name: 'E- Rickshaw',
    icon: '/rickshaw.png',
  },
  {
    name: 'Inverter system',
    icon: '/inverter.png',
  },
  {
    name: 'Institutional',
    icon: '/institutional.png',
  },
  {
    name: 'Industrial',
    icon: '/industrial.png',
  },
  {
    name: 'Genset ',
    icon: '/genset.png',
  },
  {
    name: 'Old',
    icon: '/old.png',
  },
  {
    name: 'By Voltage',
    icon: '/voltage.png',
  },
  {
    name: 'Charging Station',
    icon: '/chargingstation.png',
  },
];

function Find() {
  return (
    <section className="py-4 sm:py-8 bg-white">
      <Container>
        
        {/* Title */}
        <h2 className="text-[#1a1a1a] font-semibold text-xl sm:text-2xl md:text-3xl text-center font-sans mb-6 sm:mb-8 md:mb-12">
          Find Battery For
        </h2>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 border-t border-l border-gray-300 shadow-sm rounded-sm overflow-hidden">
          {findItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 sm:p-6 border-r border-b border-gray-300 bg-white hover:bg-slate-50 transition-colors duration-200 aspect-square text-center group cursor-pointer"
            >
              {/* Icon Container */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mb-3 sm:mb-4">
                <img
                  src={item.icon}
                  alt={item.name}
                  className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-200 select-none"
                  draggable={false}
                />
              </div>

              {/* Text Label */}
              <span className="text-slate-700 font-bold text-xs sm:text-[13px] md:text-sm font-sans max-w-[125px] leading-tight select-none">
                {item.name}
              </span>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}

export default Find;