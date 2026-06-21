import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Container from '../Layout/Container/Container';
import { IoLogoInstagram, IoLogoFacebook } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { getContactInfo } from './ContactInfo';

const translations = {
  en: {
    desc: "Bangladesh's premium lithium battery brand — a trusted name for reliable power solutions",
    quickLinks: 'Quick Links',
    home: 'Home',
    products: 'Products',
    contact: 'Contact',
    aboutUs: 'About Us',
    legal: 'Legal',
    warranty: 'Warranty Policy',
    terms: 'Terms of Service',
    disclosure: 'Commercial Disclosure',
    contactHeader: 'Contact',
    rights: 'All rights reserved.',
    developedBy: 'Developed by'
  },
  bn: {
    desc: 'বাংলাদেশের প্রিমিয়াম লিথিয়াম ব্যাটারি ব্র্যান্ড — নির্ভরযোগ্য পাওয়ার সলিউশনের এক বিশ্বস্ত নাম',
    quickLinks: 'কুইক লিঙ্ক',
    home: 'হোম',
    products: 'পণ্যসমূহ',
    contact: 'যোগাযোগ',
    aboutUs: 'আমাদের সম্পর্কে',
    legal: 'লিগ্যাল',
    warranty: 'ওয়ারেন্টি পলিসি',
    terms: 'টার্মস অফ সার্ভিস',
    disclosure: 'বাণিজ্যিক প্রকাশ',
    contactHeader: 'যোগাযোগ',
    rights: 'সর্বস্বত্ব সংরক্ষিত।',
    developedBy: 'ডিজাইন ও ডেভেলপমেন্টে'
  }
};

function Footer() {
  const lang = useSelector((state) => state.lang.lang);
  const t = translations[lang] || translations.en;
  const info = getContactInfo(lang);

  return (
    <footer className="bg-black text-white py-12 sm:py-16 md:py-20 border-t border-neutral-900 mt-8">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 lg:gap-8">
          
          {/* Column 1: Brand Info */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2.5">
              {/* Logo */}
              <img 
                src="/logo.png" 
                alt={`${info.nickname} Logo`} 
                className="h-9 w-auto object-contain" 
              />
              <span className="text-white font-black text-xl tracking-wider font-sans uppercase">
                {info.nickname}.
              </span>
            </div>
            <p className="text-[#a0a0a0] text-sm leading-relaxed max-w-[280px]">
              {t.desc}
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {/* Instagram Button */}
              <a 
                href={info.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] flex items-center justify-center text-white text-xl hover:opacity-90 transition-opacity"
                title="Instagram"
              >
                <IoLogoInstagram />
              </a>
              {/* Facebook Button */}
              <a 
                href={info.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center text-white text-2xl hover:opacity-90 transition-opacity"
                title="Facebook"
              >
                <IoLogoFacebook />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold tracking-wider text-xs uppercase mb-6">
              {t.quickLinks}
            </h3>
            <ul className="flex flex-col gap-4 text-sm">
              <li className="flex items-center text-[#a0a0a0]">
                <span className="text-neutral-600 mr-2 font-mono">&gt;</span>
                <Link to="/" className="underline underline-offset-4 hover:text-white transition-colors">
                  {t.home}
                </Link>
              </li>
              <li className="flex items-center text-[#a0a0a0]">
                <span className="text-neutral-600 mr-2 font-mono">&gt;</span>
                <Link to="/products" className="underline underline-offset-4 hover:text-white transition-colors">
                  {t.products}
                </Link>
              </li>
              <li className="flex items-center text-[#a0a0a0]">
                <span className="text-neutral-600 mr-2 font-mono">&gt;</span>
                <Link to="/#contact" className="underline underline-offset-4 hover:text-white transition-colors">
                  {t.contact}
                </Link>
              </li>
               <li className="flex items-center text-[#a0a0a0]">
                <span className="text-neutral-600 mr-2 font-mono">&gt;</span>
                <Link to="/about-us" className="underline underline-offset-4 hover:text-white transition-colors">
                  {t.aboutUs}
                </Link>
              </li>
              
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h3 className="text-white font-bold tracking-wider text-xs uppercase mb-6">
              {t.legal}
            </h3>
            <ul className="flex flex-col gap-4 text-sm">
              <li className="flex items-center text-[#a0a0a0]">
                <span className="text-neutral-600 mr-2 font-mono">&gt;</span>
                <a href="#warranty" className="hover:text-white transition-colors">
                  {t.warranty}
                </a>
              </li>
              <li className="flex items-center text-[#a0a0a0]">
                <span className="text-neutral-600 mr-2 font-mono">&gt;</span>
                <a href="#terms" className="hover:text-white transition-colors">
                  {t.terms}
                </a>
              </li>
              <li className="flex items-center text-[#a0a0a0]">
                <span className="text-neutral-600 mr-2 font-mono">&gt;</span>
                <a href="#disclosure" className="hover:text-white transition-colors">
                  {t.disclosure}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-white font-bold tracking-wider text-xs uppercase mb-6">
              {t.contactHeader}
            </h3>
            <ul className="flex flex-col gap-4 text-sm text-[#a0a0a0]">
              <li className="flex items-center gap-3">
                <FaPhone className="text-base text-neutral-400 flex-shrink-0" />
                <a href={`tel:${info.phone.replace(/[^+\d]/g, '')}`} className="hover:text-white transition-colors">
                  {info.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MdEmail className="text-base text-neutral-400 flex-shrink-0" />
                <a href={`mailto:${info.mail}`} className="hover:text-white transition-colors">
                  {info.mail}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <IoLocationOutline className="text-lg text-neutral-400 flex-shrink-0 mt-0.5" />
                <span>{info.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Developer Info */}
        <div className="border-t border-white/30 mt-12 md:mt-16 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 lg:text-sm text-xs text-[#757575] font-semibold font-sans select-none">
          <span>
            &copy; {new Date().getFullYear()} {info.fullname}. {t.rights}
          </span>
          <span>
            {t.developedBy}{' '}
            <a 
              href="https://www.linkedin.com/in/md-saiful-islam-rimon-0750b4187" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-neutral-400 hover:text-white transition-colors duration-200 underline underline-offset-4"
            >
              Md. Saiful Islam Rimon
            </a>
          </span>
        </div>

      </Container>
    </footer>
  );
}

export default Footer;