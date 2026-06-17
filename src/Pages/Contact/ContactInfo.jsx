import React from 'react';
import Container from '../../Layout/Container/Container';
import { Phone, Clock, Building2 } from 'lucide-react';
import { contactInfo } from '../../Shared/ContactInfo';

function ContactInfo() {
  return (
    <div className="w-full bg-white text-slate-800 py-12 md:py-16">
      <Container>
        {/* Centered Heading */}
        <h2 className="text-2xl md:text-3xl font-bold font-serif text-slate-900 text-center mb-8 md:mb-12">
          যোগাযোগের তথ্য
        </h2>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Card 1: WhatsApp / Phone 1 */}
          <div className="group relative flex items-start gap-5 p-6 md:p-8 bg-white border border-gray-150  cursor-pointer transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_12px_24px_rgba(197,28,28,0.04)] hover:border-[#C51C1C]/40">
            <div className="w-12 h-12 flex-shrink-0 bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 rounded-2xl transition-all duration-300 group-hover:bg-[#C51C1C]/10 group-hover:border-[#C51C1C]/20 group-hover:scale-105 group-hover:text-[#C51C1C]">
              <Phone className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-slate-400 font-sans transition-colors duration-300 group-hover:text-slate-500">WhatsApp / ফোন</span>
              <span className="text-slate-800 font-bold text-base md:text-lg font-sans mt-1 transition-colors duration-300 group-hover:text-slate-950">
                {contactInfo.phone}
              </span>
            </div>
          </div>

          {/* Card 2: Office Address */}
          <div className="group relative flex items-start gap-5 p-6 md:p-8 bg-white border border-gray-150  cursor-pointer transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_12px_24px_rgba(197,28,28,0.04)] hover:border-[#C51C1C]/40">
            <div className="w-12 h-12 flex-shrink-0 bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 rounded-2xl mt-0.5 transition-all duration-300 group-hover:bg-[#C51C1C]/10 group-hover:border-[#C51C1C]/20 group-hover:scale-105 group-hover:text-[#C51C1C]">
              <Building2 className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-slate-400 font-sans transition-colors duration-300 group-hover:text-slate-500">অফিস ঠিকানা</span>
              <p className="text-slate-800 font-bold text-sm md:text-base font-sans mt-2 leading-relaxed transition-colors duration-300 group-hover:text-slate-950">
                {contactInfo.addressLines[0]} <br />
                {contactInfo.addressLines[1]} <br />
                {contactInfo.addressLines[2]}
              </p>
            </div>
          </div>

          {/* Card 3: WhatsApp / Phone 2 */}
          <div className="group relative flex items-start gap-5 p-6 md:p-8 bg-white border border-gray-150  cursor-pointer transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_12px_24px_rgba(197,28,28,0.04)] hover:border-[#C51C1C]/40">
            <div className="w-12 h-12 flex-shrink-0 bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 rounded-2xl transition-all duration-300 group-hover:bg-[#C51C1C]/10 group-hover:border-[#C51C1C]/20 group-hover:scale-105 group-hover:text-[#C51C1C]">
              <Phone className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-slate-400 font-sans transition-colors duration-300 group-hover:text-slate-500 font-sans">WhatsApp / ফোন</span>
              <span className="text-slate-800 font-bold text-base md:text-lg font-sans mt-1 transition-colors duration-300 group-hover:text-slate-950 font-sans">
                {contactInfo.phone2}
              </span>
            </div>
          </div>

          {/* Card 4: Office Hours */}
          <div className="group relative flex items-start gap-5 p-6 md:p-8 bg-white border border-gray-150  cursor-pointer transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_12px_24px_rgba(197,28,28,0.04)] hover:border-[#C51C1C]/40">
            <div className="w-12 h-12 flex-shrink-0 bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 rounded-2xl mt-0.5 transition-all duration-300 group-hover:bg-[#C51C1C]/10 group-hover:border-[#C51C1C]/20 group-hover:scale-105 group-hover:text-[#C51C1C]">
              <Clock className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-slate-400 font-sans transition-colors duration-300 group-hover:text-slate-500 font-sans">অফিস সময়</span>
              <p className="text-slate-800 font-bold text-sm md:text-base font-sans mt-2 leading-relaxed transition-colors duration-300 group-hover:text-slate-950 font-sans">
                {contactInfo.officeHours[0]} <br />
                {contactInfo.officeHours[1]}
              </p>
            </div>
          </div>

        </div>
      </Container>
    </div>
  );
}

export default ContactInfo;
