import React from 'react';
import Container from '../../Layout/Container/Container';
import { Zap, Cpu, Globe, Car, Leaf } from 'lucide-react';

function MissionVision() {
  const missions = [
    {
      icon: Zap,
      title: "শক্তির সহজলভ্যতা নিশ্চিত করা",
      description: "বাংলাদেশের প্রতিটি মানুষ যেন সহজে ও কম খরচে উন্নত এনার্জি সলিউশন পায়।"
    },
    {
      icon: Cpu,
      title: "প্রযুক্তি পরিবর্তনের নেতৃত্ব দেওয়া",
      description: "পুরাতন লিড-অ্যাসিড ব্যাটারির পরিবর্তে Lithium প্রযুক্তিকে জনপ্রিয় করা।"
    },
    {
      icon: Globe,
      title: "রিনিউয়েবল এনার্জি প্রসার",
      description: "সোলার এনার্জি ব্যবহার বৃদ্ধি করে বিদ্যুৎ খরচ কমানো।"
    },
    {
      icon: Car,
      title: "EV ইন্ডাস্ট্রি উন্নয়ন",
      description: "ইলেকট্রিক যানবাহনের জন্য শক্তিশালী ব্যাটারি সাপোর্ট তৈরি করা।"
    },
    {
      icon: Leaf,
      title: "পরিবেশ রক্ষা",
      description: "কার্বন নিঃসরণ কমিয়ে একটি সবুজ বাংলাদেশ গড়ন করা।"
    }
  ];

  const visions = [
    { num: "1", text: "দক্ষিণ এশিয়ার শীর্ষ Energy Storage Company হওয়া" },
    { num: "2", text: "সম্পূর্ণ Smart Energy Ecosystem তৈরি করা" },
    { num: "3", text: "১০০% Renewable Energy Adoption" },
    { num: "4", text: "একটি Green & Sustainable Bangladesh গড়ন" },
    { num: "5", text: "বাংলাদেশকে Battery Technology Hub হিসেবে প্রতিষ্ঠা করা" }
  ];

  return (
    <div className="w-full bg-white text-slate-800 py-12 md:py-16 flex flex-col gap-16 md:gap-24">
      <Container>
        {/* Mission Section */}
        <div className="flex flex-col gap-8 md:gap-12">
          <div className="flex items-center gap-3">
            <div className="w-6 h-[5px] bg-[#C51C1C] rounded-sm"></div>
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-slate-900">
              আমাদের মিশন
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {missions.map((mission, index) => {
              const IconComponent = mission.icon;
              return (
                <div 
                  key={index}
                  className="group relative flex flex-col p-6 bg-white border border-gray-200/70  cursor-pointer transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_12px_24px_rgba(197,28,28,0.04)] hover:border-[#C51C1C]/30"
                >
                  {/* Icon Container */}
                  <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center border border-gray-150 mb-5 transition-all duration-300 group-hover:bg-[#C51C1C]/10 group-hover:border-[#C51C1C]/20 group-hover:scale-105">
                    <IconComponent className="w-6 h-6 text-slate-600 transition-colors duration-300 group-hover:text-[#C51C1C]" />
                  </div>
                  
                  {/* Card Title */}
                  <h3 className="text-slate-900 text-lg font-bold mb-2 transition-colors duration-300 group-hover:text-[#C51C1C] font-sans">
                    {mission.title}
                  </h3>
                  
                  {/* Card Description */}
                  <p className="text-gray-500 text-sm leading-relaxed font-sans">
                    {mission.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        {/* Vision Section */}
        <div className="flex flex-col gap-8 md:gap-12 mt-28">
          <div className="flex items-center gap-3">
            <div className="w-6 h-[5px] bg-[#C51C1C] "></div>
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-slate-900">
              আমাদের ভিশন
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {visions.map((vision, index) => (
              <div 
                key={index}
                className="group flex items-center gap-3 p-5 bg-white border border-gray-200/70 cursor-pointer transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_8px_16px_rgba(197,28,28,0.03)] hover:border-[#C51C1C]/30"
              >
                <div className="flex items-center gap-2 font-sans font-medium text-slate-700 text-sm md:text-base">
                  <span className="font-bold text-slate-900 mr-1 group-hover:text-[#C51C1C] transition-colors duration-300">
                    {vision.num}.
                  </span>
                  <span className="group-hover:text-slate-900 transition-colors duration-300">
                    {vision.text}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>

  
    </div>
  );
}

export default MissionVision;