import React from 'react';
import Container from '../../Layout/Container/Container';
import { FiCheck } from 'react-icons/fi';

function QualityControl() {
  const tests = [
    { title: "Voltage Stability Test" },
    { title: "Load Capacity Test" },
    { title: "Heat Resistance Test" },
    { title: "Cycle Life Test" },
    { title: "Safety Protection Test" },
    { title: "BMS Performance Test" }
  ];

  return (
    <div className="w-full bg-white text-slate-800 py-12 md:py-16">
      <Container>
        {/* Title Section */}
        <div className="mb-10 md:mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-[5px] bg-[#C51C1C] rounded-sm"></div>
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-slate-900">
              গ্লোবাল কোয়ালিটি কন্ট্রোল সিস্টেম
            </h2>
          </div>
          <p className="text-gray-500 text-sm md:text-base font-sans max-w-2xl leading-relaxed">
            প্রতিটি ব্যাটারি কঠোর পরীক্ষার মাধ্যমে যাচাই করা হয়। প্রতিটি প্রোডাক্ট বাজারে আসার আগে ১০০% টেস্টেড ও যাচাইকৃত।
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tests.map((test, index) => (
            <div 
              key={index}
              className="group relative flex flex-col items-center justify-center p-8 bg-white border border-gray-200/70 cursor-pointer transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_12px_24px_rgba(197,28,28,0.06)] hover:border-[#C51C1C]/40"
            >
              {/* Checkmark Container */}
              <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-[#C51C1C]/10 group-hover:scale-110">
                <FiCheck className="text-slate-800 text-lg transition-colors duration-300 group-hover:text-[#C51C1C]" />
              </div>
              
              {/* Card Title */}
              <span className="text-slate-800 text-base font-sans font-medium text-center transition-colors duration-300 group-hover:text-slate-950">
                {test.title}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default QualityControl;