import React from 'react';
import Container from '../../Layout/Container/Container';
import { FaWhatsapp, FaPhone } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

function Dealership() {
  return (
    <section className="py-8 bg-white">
      <Container>
        <div 
          className="relative w-full overflow-hidden bg-cover bg-right md:bg-center text-white p-8 sm:p-10 md:p-12 lg:p-16 flex flex-col md:flex-row md:items-center justify-between gap-8 md:pr-[240px] lg:pr-[280px] xl:pr-[320px] shadow-sm select-none"
          style={{ backgroundImage: "url('/dealershipbg.png')" }}
        >
          {/* Left Column: Text Content */}
          <div className="flex flex-col max-w-xl text-left z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-black leading-tight mb-4 font-sans text-white">
              Become a Dealer <br className="hidden sm:inline" /> or Partner
            </h2>
            <p className="text-xs sm:text-sm lg:text-[15px] leading-relaxed text-white/90 font-medium">
              Interested in distributing our premium lithium technology? Reach out via WhatsApp, phone, or email to register as a dealership or partnership.
            </p>
          </div>

          {/* Right Column: Contact Details */}
          <div className="flex flex-col gap-4 text-left justify-center flex-shrink-0 z-10">
            {/* WhatsApp Contact */}
            <a 
              href="https://wa.me/01710000000" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-3.5 hover:opacity-85 transition-opacity duration-200 group"
            >
              <div className="w-9 h-9 rounded-full border border-white flex items-center justify-center text-white text-lg flex-shrink-0 group-hover:scale-105 transition-transform duration-200">
                <FaWhatsapp />
              </div>
              <span className="text-sm sm:text-base font-bold tracking-wide text-white font-sans">
                Message to 01710000000
              </span>
            </a>

            {/* Phone Contact */}
            <a 
              href="tel:01710000000" 
              className="flex items-center gap-3.5 hover:opacity-85 transition-opacity duration-200 group"
            >
              <div className="w-9 h-9 rounded-full border border-white flex items-center justify-center text-white text-base flex-shrink-0 group-hover:scale-105 transition-transform duration-200">
                <FaPhone />
              </div>
              <span className="text-sm sm:text-base font-bold tracking-wide text-white font-sans">
                01710000000
              </span>
            </a>

            {/* Email Contact */}
            <a 
              href="mailto:abc@gmail.com" 
              className="flex items-center gap-3.5 hover:opacity-85 transition-opacity duration-200 group"
            >
              <div className="w-9 h-9 rounded-full border border-white flex items-center justify-center text-white text-base flex-shrink-0 group-hover:scale-105 transition-transform duration-200">
                <MdEmail />
              </div>
              <span className="text-sm sm:text-base font-bold tracking-wide text-white font-sans">
                abc@gmail.com
              </span>
            </a>
          </div>

        </div>
      </Container>
    </section>
  );
}

export default Dealership;