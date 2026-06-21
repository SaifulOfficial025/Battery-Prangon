import React from 'react';
import { useSelector } from 'react-redux';
import Container from '../../Layout/Container/Container';
import { FiZap, FiAward, FiTool, FiFeather, FiSun, FiCpu } from 'react-icons/fi';

const featuresData = [
  {
    id: 1,
    icon: <FiZap />,
    colorClasses: {
      bg: 'bg-amber-50/40',
      border: 'border-amber-100',
      text: 'text-amber-700',
      iconBg: 'bg-amber-100/60',
      hover: 'hover:bg-amber-50 hover:border-amber-300 hover:shadow-amber-100/50 hover:-translate-y-1'
    },
    en: {
      title: 'Fast Charging',
      description: 'Full charge in just 2 hours',
    },
    bn: {
      title: 'দ্রুত চার্জিং',
      description: 'মাত্র ২ ঘন্টায় ফুল চার্জ',
    }
  },
  {
    id: 2,
    icon: <FiAward />,
    colorClasses: {
      bg: 'bg-emerald-50/40',
      border: 'border-emerald-100',
      text: 'text-emerald-700',
      iconBg: 'bg-emerald-100/60',
      hover: 'hover:bg-emerald-50 hover:border-emerald-300 hover:shadow-emerald-100/50 hover:-translate-y-1'
    },
    en: {
      title: 'Long-lasting Performance',
      description: '10+ years stable backup',
    },
    bn: {
      title: 'দীর্ঘস্থায়ী পারফরম্যান্স',
      description: '১০+ বছরের স্থিতিশীল ব্যাকআপ',
    }
  },
  {
    id: 3,
    icon: <FiTool />,
    colorClasses: {
      bg: 'bg-sky-50/40',
      border: 'border-sky-100',
      text: 'text-sky-700',
      iconBg: 'bg-sky-100/60',
      hover: 'hover:bg-sky-50 hover:border-sky-300 hover:shadow-sky-100/50 hover:-translate-y-1'
    },
    en: {
      title: 'Low Maintenance',
      description: 'Zero water topup, no acid',
    },
    bn: {
      title: 'কম রক্ষণাবেক্ষণ',
      description: 'পানি টপআপ ও অ্যাসিডের ঝামেলা নেই',
    }
  },
  {
    id: 4,
    icon: <FiFeather />,
    colorClasses: {
      bg: 'bg-purple-50/40',
      border: 'border-purple-100',
      text: 'text-purple-700',
      iconBg: 'bg-purple-100/60',
      hover: 'hover:bg-purple-50 hover:border-purple-300 hover:shadow-purple-100/50 hover:-translate-y-1'
    },
    en: {
      title: 'Lightweight Design',
      description: '70% lighter and compact',
    },
    bn: {
      title: 'হালকা ডিজাইন',
      description: '৭০% পর্যন্ত হালকা এবং কমপ্যাক্ট',
    }
  },
  {
    id: 5,
    icon: <FiSun />,
    colorClasses: {
      bg: 'bg-rose-50/40',
      border: 'border-rose-100',
      text: 'text-rose-700',
      iconBg: 'bg-rose-100/60',
      hover: 'hover:bg-rose-50 hover:border-rose-300 hover:shadow-rose-100/50 hover:-translate-y-1'
    },
    en: {
      title: 'Solar Friendly',
      description: 'Perfect match with solar',
    },
    bn: {
      title: 'সোলার বান্ধব',
      description: 'সোলার সিস্টেমের জন্য সেরা উপযোগী',
    }
  },
  {
    id: 6,
    icon: <FiCpu />,
    colorClasses: {
      bg: 'bg-indigo-50/40',
      border: 'border-indigo-100',
      text: 'text-indigo-700',
      iconBg: 'bg-indigo-100/60',
      hover: 'hover:bg-indigo-50 hover:border-indigo-300 hover:shadow-indigo-100/50 hover:-translate-y-1'
    },
    en: {
      title: 'Energy Efficient',
      description: '98% efficiency rate',
    },
    bn: {
      title: 'উচ্চ শক্তি দক্ষ',
      description: '৯৮% পর্যন্ত এনার্জি ইফিসিয়েন্ট',
    }
  }
];

function Why() {
  const lang = useSelector((state) => state.lang.lang);
  const sectionTitle = lang === 'bn' ? 'লিথিয়াম ব্যাটারি কেন সেরা পছন্দ?' : 'Why is Lithium Battery the Best Choice?';

  return (
    <section id="about-us" className="py-4 sm:py-8 bg-white">
      <Container>
        
        {/* Section Heading */}
        <h2 className="text-[#1a1a1a] font-semibold text-xl sm:text-2xl md:text-3xl text-center font-sans mb-6 sm:mb-8 md:mb-12">
          {sectionTitle}
        </h2>

        {/* 6-Card Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 justify-items-center">
          {featuresData.map((item) => {
            const content = item[lang] || item.en;
            return (
              <div
                key={item.id}
                className={`w-full max-w-[360px] p-4 sm:p-6 lg:p-8 border text-center transition-all duration-300 cursor-pointer shadow-sm ${item.colorClasses.bg} ${item.colorClasses.border} ${item.colorClasses.hover}`}
              >
                
                {/* Icon Container */}
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 text-lg sm:text-xl ${item.colorClasses.iconBg} ${item.colorClasses.text}`}>
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-[#1a1a1a] font-semibold text-sm sm:text-base lg:text-lg mb-1 sm:mb-2">
                  {content.title}
                </h3>

                {/* Description */}
                <p className="text-slate-500 text-xs sm:text-sm font-medium">
                  {content.description}
                </p>

              </div>
            );
          })}
        </div>

      </Container>
    </section>
  );
}

export default Why;