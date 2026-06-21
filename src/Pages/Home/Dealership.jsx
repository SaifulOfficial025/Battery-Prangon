import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Container from '../../Layout/Container/Container';
import { FaWhatsapp, FaPhone } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { getContactInfo } from '../../Shared/ContactInfo';

const translations = {
  en: {
    heading: <>Become a Dealer <br className="hidden sm:inline" /> or Partner</>,
    description: 'Interested in distributing our premium lithium technology? Reach out via WhatsApp, phone, or email to register as a dealership or partnership.',
    whatsappLabel: (whatsapp) => `Message to ${whatsapp}`,
  },
  bn: {
    heading: <>ডিলার অথবা <br className="hidden sm:inline" /> পার্টনার হোন</>,
    description: 'আমাদের প্রিমিয়াম লিথিয়াম প্রযুক্তি ছড়িয়ে দিতে আগ্রহী? ডিলারশিপ বা পার্টনারশিপের জন্য হোয়াটসঅ্যাপ, ফোন অথবা ইমেলের মাধ্যমে যোগাযোগ করুন।',
    whatsappLabel: (whatsapp) => `${whatsapp} এ মেসেজ করুন`,
  }
};

function Dealership() {
  const [bgImage, setBgImage] = useState('/dealershipbg.png');
  const lang = useSelector((state) => state.lang.lang);
  const info = getContactInfo(lang);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setBgImage('/mobiledealershipbg.png');
      } else {
        setBgImage('/dealershipbg.png');
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const t = translations[lang] || translations.en;

  return (
    <section className="py-4 sm:py-8 bg-white">
      <Container>
        <div 
          className="relative w-full overflow-hidden bg-cover bg-center text-white p-5 sm:p-8 md:p-12 lg:p-16 flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-8 md:pr-[240px] lg:pr-[280px] xl:pr-[320px] shadow-sm select-none"
          style={{ backgroundImage: `url('${bgImage}')` }}
        >
          {/* Left Column: Text Content */}
          <div className="flex flex-col max-w-xl text-left z-10">
            <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight font-semibold mb-2 sm:mb-4 font-sans text-white">
              {t.heading}
            </h2>
            <p className="text-[11px] sm:text-sm lg:text-[15px] leading-relaxed text-white/90 font-medium">
              {t.description}
            </p>
          </div>

          {/* Right Column: Contact Details */}
          <div className="flex flex-col gap-4 text-left justify-center flex-shrink-0 z-10">
            {/* WhatsApp Contact */}
            <a 
              href={`https://wa.me/${info.whatsapp.replace(/[^+\d]/g, '')}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-3.5 hover:opacity-85 transition-opacity duration-200 group"
            >
              <div className="w-9 h-9 rounded-full border border-white flex items-center justify-center text-white text-lg flex-shrink-0 group-hover:scale-105 transition-transform duration-200">
                <FaWhatsapp />
              </div>
              <span className="text-sm sm:text-base font-semibold tracking-wide text-white font-sans">
                {t.whatsappLabel(info.whatsapp)}
              </span>
            </a>

            {/* Phone Contact */}
            <a 
              href={`tel:${info.phone.replace(/[^+\d]/g, '')}`} 
              className="flex items-center gap-3.5 hover:opacity-85 transition-opacity duration-200 group"
            >
              <div className="w-9 h-9 rounded-full border border-white flex items-center justify-center text-white text-base flex-shrink-0 group-hover:scale-105 transition-transform duration-200">
                <FaPhone />
              </div>
              <span className="text-sm sm:text-base font-semibold tracking-wide text-white font-sans">
                {info.phone}
              </span>
            </a>

            {/* Email Contact */}
            <a 
              href={`mailto:${info.mail}`} 
              className="flex items-center gap-3.5 hover:opacity-85 transition-opacity duration-200 group"
            >
              <div className="w-9 h-9 rounded-full border border-white flex items-center justify-center text-white text-base flex-shrink-0 group-hover:scale-105 transition-transform duration-200">
                <MdEmail />
              </div>
              <span className="text-sm sm:text-base font-semibold tracking-wide text-white font-sans">
                {info.mail}
              </span>
            </a>
          </div>

        </div>
      </Container>
    </section>
  );
}

export default Dealership;