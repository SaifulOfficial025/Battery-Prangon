import React from 'react';
import Container from '../../Layout/Container/Container';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

function WorkingArea() {
  const areas = [
    "Lithium Battery Import & Distribution",
    "Battery Pack Assembly & Manufacturing",
    "Custom Battery Engineering",
    "Battery Management System (BMS) Integration",
    "Solar Energy Storage System",
    "EV Battery Solution Development",
    "Dealer & Franchise Network Expansion"
  ];

  return (
    <div className="w-full bg-white text-slate-800 py-12 md:py-16">
      <Container>
        {/* Title Section */}
        <div className="flex items-center gap-3 mb-8 md:mb-12">
          <div className="w-6 h-[5px] bg-[#C51C1C]"></div>
          <h2 className="text-2xl md:text-3xl font-bold font-serif text-slate-900">
            আমাদের কাজের ক্ষেত্র
          </h2>
        </div>

        {/* Working Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {areas.map((area, index) => (
            <div 
              key={index}
              className="flex items-center gap-4 p-5 md:p-6 bg-white border border-gray-200/70  transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:shadow-[0_12px_24px_rgba(197,28,28,0.06)] hover:border-[#C51C1C]/40 cursor-pointer"
            >
              <IoMdCheckmarkCircleOutline className="text-slate-500 text-2xl flex-shrink-0" />
              <span className="text-slate-700 text-sm md:text-base font-sans font-medium">
                {area}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default WorkingArea;