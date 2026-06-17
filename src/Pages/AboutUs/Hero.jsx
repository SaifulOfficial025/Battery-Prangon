import React from 'react';
import Container from '../../Layout/Container/Container';

function Hero() {
  return (
    <div className="w-full bg-white text-slate-800 py-8 md:py-12">
      <Container>
        <div className="flex flex-col gap-12 md:gap-16">
          {/* Top Banner Card */}
          <div 
            className="relative w-full  overflow-hidden bg-cover bg-center bg-no-repeat shadow-sm"
            style={{ 
              backgroundImage: "url('/aboutusherobg.png')",
              minHeight: '280px'
            }}
          >
            {/* Dark gradient overlay for text readability */}
            <div className="absolute inset-0 "></div>
            
            {/* Content inside Top Banner */}
            <div className="relative z-10 flex flex-col justify-center h-full px-6 py-12 md:px-12 md:py-16 lg:px-16 lg:py-20 max-w-4xl">
              <h1 className="text-white text-3xl md:text-4xl lg:text-[52px] font-bold mb-4 md:mb-6 font-serif leading-tight">
                আমাদের সম্পর্কে
              </h1>
              <p className="text-white/95 text-sm md:text-base lg:text-[18px] font-sans leading-relaxed tracking-wide">
                Powerix Technology Ltd প্রতিষ্ঠিত হয়েছে একটি দীর্ঘমেয়াদী মিশন নিয়ে—বাংলাদেশের এনার্জি খাতকে আধুনিক প্রযুক্তির মাধ্যমে সম্পূর্ণরূপান্তর করা  আমরা বিশ্বাস করি—ভবিষ্যতের শক্তি হবে Lithium-based Smart Energy System
              </p>
            </div>
          </div>

          {/* Bottom Grid Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Bengali Text */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <p className="text-gray-700 text-sm md:text-base lg:text-[18px] leading-[1.8] font-sans text-justify">
                বর্তমানে বিশ্বে সবচেয়ে গুরুত্বপূর্ণ প্রযুক্তিগুলোর একটি হলো Energy Storage Technology, যা বিদ্যুৎকে সংরক্ষণ করে প্রয়োজন অনুযায়ী ব্যবহার করার সুযোগ দেয়  Powerix Technology Ltd মূলত Lithium Battery Technology, Battery Management System (BMS), Energy Storage System (ESS) এবং Renewable Energy Integration-এর উপর কাজ করে  আমাদের লক্ষ্য শুধুমাত্র ব্যাটারি বিক্রি করা নয়—বরং একটি সম্পূর্ণ Smart Energy Ecosystem তৈরি করা, যেখানে মানুষ সহজে, নিরাপদে এবং দীর্ঘমেয়াদে বিদ্যুৎ সংরক্ষণ ও ব্যবহার করতে পারবে
              </p>
            </div>

            {/* Right Column: Image */}
            <div className="lg:col-span-5 flex justify-center w-full">
              <img 
                src="/aboutusherosideimage.png" 
                alt="Powerix Battery Technology" 
                className="w-full h-auto object-cover  shadow-md border border-gray-100"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Hero;