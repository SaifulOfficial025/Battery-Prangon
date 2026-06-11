import React, { useState, useEffect } from 'react';
import Container from '../../Layout/Container/Container';
import { FaWhatsapp, FaPhone } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { contactInfo } from '../../Shared/ContactInfo';

function Dealership() {
  const [bgImage, setBgImage] = useState('/dealershipbg.png');

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

  return (
    <section className="py-4 sm:py-8 bg-white">
      <Container>
        <div 
          className="relative w-full overflow-hidden bg-cover bg-center text-white p-5 sm:p-8 md:p-12 lg:p-16 flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-8 md:pr-[240px] lg:pr-[280px] xl:pr-[320px] shadow-sm select-none"
          style={{ backgroundImage: `url('${bgImage}')` }}
        >
          {/* Left Column: Text Content */}
          <div className="flex flex-col max-w-xl text-left z-10">
            <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-[40px]  leading-tight font-semibold mb-2 sm:mb-4 font-sans text-white">
              Become a Dealer <br className="hidden sm:inline" /> or Partner
            </h2>
            <p className="text-[11px] sm:text-sm lg:text-[15px] leading-relaxed text-white/90 font-medium">
              Interested in distributing our premium lithium technology? Reach out via WhatsApp, phone, or email to register as a dealership or partnership.
            </p>
          </div>

          {/* Right Column: Contact Details */}
          <div className="flex flex-col gap-4 text-left justify-center flex-shrink-0 z-10">
            {/* WhatsApp Contact */}
            <a 
              href={`https://wa.me/${contactInfo.whatsapp.replace(/[^+\d]/g, '')}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-3.5 hover:opacity-85 transition-opacity duration-200 group"
            >
              <div className="w-9 h-9 rounded-full border border-white flex items-center justify-center text-white text-lg flex-shrink-0 group-hover:scale-105 transition-transform duration-200">
                <FaWhatsapp />
              </div>
              <span className="text-sm sm:text-base font-semibold tracking-wide text-white font-sans">
                Message to {contactInfo.whatsapp}
              </span>
            </a>

            {/* Phone Contact */}
            <a 
              href={`tel:${contactInfo.phone.replace(/[^+\d]/g, '')}`} 
              className="flex items-center gap-3.5 hover:opacity-85 transition-opacity duration-200 group"
            >
              <div className="w-9 h-9 rounded-full border border-white flex items-center justify-center text-white text-base flex-shrink-0 group-hover:scale-105 transition-transform duration-200">
                <FaPhone />
              </div>
              <span className="text-sm sm:text-base font-semibold tracking-wide text-white font-sans">
                {contactInfo.phone}
              </span>
            </a>

            {/* Email Contact */}
            <a 
              href={`mailto:${contactInfo.mail}`} 
              className="flex items-center gap-3.5 hover:opacity-85 transition-opacity duration-200 group"
            >
              <div className="w-9 h-9 rounded-full border border-white flex items-center justify-center text-white text-base flex-shrink-0 group-hover:scale-105 transition-transform duration-200">
                <MdEmail />
              </div>
              <span className="text-sm sm:text-base font-semibold tracking-wide text-white font-sans">
                {contactInfo.mail}
              </span>
            </a>
          </div>

        </div>
      </Container>
    </section>
  );
}

export default Dealership;