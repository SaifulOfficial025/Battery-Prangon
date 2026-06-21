import React from 'react';
import { useSelector } from 'react-redux';
import Container from '../../Layout/Container/Container';
import { Zap, Cpu, Globe, Car, Leaf } from 'lucide-react';

const translations = {
  en: {
    missionHeading: "Our Mission",
    visionHeading: "Our Vision",
    missions: [
      {
        title: "Ensure Energy Availability",
        description: "To provide advanced and affordable energy solutions to every citizen of Bangladesh."
      },
      {
        title: "Lead Technological Transition",
        description: "To popularize Lithium technology as an upgrade to traditional lead-acid batteries."
      },
      {
        title: "Expand Renewable Energy",
        description: "To reduce electricity costs by increasing the utilization of solar energy."
      },
      {
        title: "Develop EV Industry",
        description: "To build high-performance battery systems for electric vehicles."
      },
      {
        title: "Protect Environment",
        description: "To foster a green Bangladesh by reducing carbon emissions."
      }
    ],
    visions: [
      { num: "1", text: "Become the leading Energy Storage Company in South Asia" },
      { num: "2", text: "Build a comprehensive Smart Energy Ecosystem" },
      { num: "3", text: "100% Renewable Energy Adoption" },
      { num: "4", text: "Develop a Green & Sustainable Bangladesh" },
      { num: "5", text: "Establish Bangladesh as a Battery Technology Hub" }
    ]
  },
  bn: {
    missionHeading: "আমাদের মিশন",
    visionHeading: "আমাদের ভিশন",
    missions: [
      {
        title: "শক্তির সহজলভ্যতা নিশ্চিত করা",
        description: "বাংলাদেশের প্রতিটি মানুষ যেন সহজে ও কম খরচে উন্নত এনার্জি সলিউশন পায়।"
      },
      {
        title: "প্রযুক্তি পরিবর্তনের নেতৃত্ব দেওয়া",
        description: "পুরাতন লিড-অ্যাসিড ব্যাটারির পরিবর্তে Lithium প্রযুক্তিকে জনপ্রিয় করা।"
      },
      {
        title: "রিনিউয়েবল এনার্জি প্রসার",
        description: "সোলার এনার্জি ব্যবহার বৃদ্ধি করে বিদ্যুৎ খরচ কমানো।"
      },
      {
        title: "EV ইন্ডাস্ট্রি উন্নয়ন",
        description: "ইলেকট্রিক যানবাহনের জন্য শক্তিশালী ব্যাটারি সাপোর্ট তৈরি করা।"
      },
      {
        title: "পরিবেশ রক্ষা",
        description: "কার্বন নিঃসরণ কমিয়ে একটি সবুজ বাংলাদেশ গড়ন করা।"
      }
    ],
    visions: [
      { num: "১", text: "দক্ষিণ এশিয়ার শীর্ষ Energy Storage Company হওয়া" },
      { num: "২", text: "সম্পূর্ণ Smart Energy Ecosystem তৈরি করা" },
      { num: "৩", text: "১০০% Renewable Energy Adoption" },
      { num: "৪", text: "একটি Green & Sustainable Bangladesh গড়ন" },
      { num: "৫", text: "বাংলাদেশকে Battery Technology Hub হিসেবে প্রতিষ্ঠা করা" }
    ]
  }
};

const icons = [Zap, Cpu, Globe, Car, Leaf];

function MissionVision() {
  const lang = useSelector((state) => state.lang.lang);
  const t = translations[lang] || translations.en;

  const missions = t.missions.map((mission, index) => ({
    ...mission,
    icon: icons[index] || Zap
  }));

  const visions = t.visions;

  return (
    <div className="w-full bg-white text-slate-800 py-12 md:py-16 flex flex-col gap-16 md:gap-24">
      <Container>
        {/* Mission Section */}
        <div className="flex flex-col gap-8 md:gap-12">
          <div className="flex items-center gap-3">
            <div className="w-6 h-[5px] bg-[#C51C1C] rounded-sm"></div>
            <h2 className="text-2xl md:text-3xl font-semibold font-serif text-slate-900">
              {t.missionHeading}
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
                  <h3 className="text-slate-900 text-lg font-semibold mb-2 transition-colors duration-300 group-hover:text-[#C51C1C] font-sans">
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
            <h2 className="text-2xl md:text-3xl font-semi font-serif text-slate-900">
              {t.visionHeading}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {visions.map((vision, index) => (
              <div 
                key={index}
                className="group flex items-center gap-3 p-5 bg-white border border-gray-200/70 cursor-pointer transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_8px_16px_rgba(197,28,28,0.03)] hover:border-[#C51C1C]/30"
              >
                <div className="flex items-center gap-2 font-sans font-medium text-slate-900 text-sm md:text-base">
                  <span className="font-semibold text-slate-900 mr-1 group-hover:text-[#C51C1C] transition-colors duration-300">
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