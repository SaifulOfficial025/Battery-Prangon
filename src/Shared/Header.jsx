import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from '../Layout/Container/Container';
import { IoSearchOutline, IoMenu, IoClose } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import { contactInfo } from './ContactInfo';
import CartModal from './CartModal';

function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState('en'); // 'en' or 'bn'

  useEffect(() => {
    const handleOpenCart = () => setIsCartOpen(true);
    window.addEventListener('open-cart', handleOpenCart);
    return () => window.removeEventListener('open-cart', handleOpenCart);
  }, []);

  return (
    <header className="bg-white border-b border-gray-100 py-3 sticky top-0 z-50 shadow-md">
      <Container>
        <div className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-y-3 gap-x-4">
          
          {/* Mobile Hamburger + Logo Section */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <button 
              className="xl:hidden text-2xl text-slate-800 p-1 hover:text-[#C51C1C] transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open mobile menu"
            >
              <IoMenu />
            </button>
            <Link to="/">
              <img 
                src="/logo.png" 
                alt="Battery Logo" 
                className="h-9 sm:h-10 md:h-[48px] w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation Menu */}
          <nav className="hidden xl:flex items-center gap-8 text-[#0a0a0a] font-semibold text-base">
            <Link to="/products" className="hover:text-emerald-500 transition-colors duration-200 whitespace-nowrap">
              Products
            </Link>
            <Link to="/#contact" className="hover:text-emerald-500 transition-colors duration-200 whitespace-nowrap">
              Contact
            </Link>
            <Link to="/#about-us" className="hover:text-emerald-500 transition-colors duration-200 whitespace-nowrap">
              About Us
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="w-full lg:w-auto flex-grow lg:max-w-[400px] order-last lg:order-none mx-0 lg:mx-2">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search product.."
                className="w-full bg-[#f1f1f1] text-slate-800 placeholder-slate-400 py-2.5 pl-6 pr-12 focus:outline-none focus:ring-1 focus:ring-red-600 text-sm font-normal"
              />
              <button 
                type="button"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-600 hover:text-black transition-colors"
                aria-label="Search"
              >
                <IoSearchOutline className="text-xl" />
              </button>
            </div>
          </div>

          {/* Contact Details & Circle Buttons */}
          <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
            {/* Call Block */}
            <div className="hidden lg:flex flex-col text-right">
              <span className="text-[11px] text-slate-700 font-medium uppercase tracking-wider leading-none mb-1">
                Call Us Now:
              </span>
              <span className="text-[15px] text-[#0a0a0a] font-bold leading-none">
                {contactInfo.phone}
              </span>
            </div>

            {/* Icon Group */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              {/* Language Changer Button */}
              <button
                type="button"
                onClick={() => setLang(lang === 'en' ? 'bn' : 'en')}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#f1f1f1] hover:bg-slate-200 text-slate-800 flex items-center justify-center font-bold text-xs sm:text-sm font-sans transition-colors duration-200 active:scale-95 select-none"
                title={lang === 'en' ? 'Switch to Bangla' : 'Switch to English'}
              >
                {lang === 'en' ? 'বাং' : 'EN'}
              </button>

              {/* Phone Icon Button */}
              <a
                href={`tel:${contactInfo.phone.replace(/[^+\d]/g, '')}`}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#f1f1f1] hover:bg-slate-200 text-slate-800 flex items-center justify-center transition-colors duration-200 text-lg"
                title="Call Us"
              >
                <FaPhone />
              </a>

              {/* WhatsApp Icon Button */}
              <a
                href={`https://wa.me/${contactInfo.whatsapp.replace(/[^+\d]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#f1f1f1] hover:bg-slate-200 text-[#25D366] flex items-center justify-center transition-colors duration-200 text-2xl"
                title="WhatsApp"
              >
                <FaWhatsappSquare />
              </a>

              {/* Cart Icon Button */}
              <button
                type="button"
                onClick={() => setIsCartOpen(true)}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#f1f1f1] hover:bg-slate-200 text-slate-800 flex items-center justify-center transition-colors duration-200 text-xl relative"
                title="Cart"
              >
                <BsCart />
                <span className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 w-2.5 h-2.5 bg-red-600 rounded-full border border-white"></span>
              </button>
            </div>
          </div>

        </div>
      </Container>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300 xl:hidden ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Slide-out */}
      <div className={`fixed top-0 left-0 w-[280px] h-full bg-white z-[70] transform transition-transform duration-300 ease-in-out xl:hidden flex flex-col shadow-2xl ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        
        <div className="flex items-center justify-between p-4 border-b border-gray-300">
          <img src="/logo.png" alt="Battery Logo" className="h-8 w-auto object-contain" />
          <button 
            type="button"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-2xl text-slate-800 p-1 hover:text-[#C51C1C] transition-colors"
          >
            <IoClose />
          </button>
        </div>

        <nav className="flex flex-col p-4 gap-4">
          <Link 
            to="/" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-md font-semibold text-slate-800 hover:text-[#C51C1C] transition-colors"
          >
            Home
          </Link>
          <Link 
            to="/products" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-md font-semibold text-slate-800 hover:text-[#C51C1C] transition-colors"
          >
            Products
          </Link>
          <Link 
            to="/#contact" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-md font-semibold text-slate-800 hover:text-[#C51C1C] transition-colors"
          >
            Contact
          </Link>
          <Link 
            to="/#about-us" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-md font-semibold text-slate-800 hover:text-[#C51C1C] transition-colors"
          >
            About Us
          </Link>
          {/* Language Selector In Mobile Menu drawer */}
          {/* <div className="flex items-center justify-between border-t border-gray-100 pt-4 mt-2">
            <span className="text-sm font-semibold text-slate-500">Language / ভাষা</span>
            <button
              type="button"
              onClick={() => {
                setLang(lang === 'en' ? 'bn' : 'en');
                setIsMobileMenuOpen(false);
              }}
              className="px-3 py-1.5 bg-[#f1f1f1] hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-full transition-colors duration-200 select-none"
            >
              {lang === 'en' ? 'বাংলা (BN)' : 'English (EN)'}
            </button>
          </div> */}
        </nav>

        <div className="mt-auto p-4 border-t border-gray-100 bg-gray-50">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
            Need Help?
          </div>
          <a 
            href={`tel:${contactInfo.phone.replace(/[^+\d]/g, '')}`} 
            className="flex items-center gap-3 mb-4 text-slate-800 hover:text-[#C51C1C] transition-colors"
          >
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
              <FaPhone className="text-lg" />
            </div>
            <span className="font-semibold text-md">{contactInfo.phone}</span>
          </a>
          <a 
            href={`https://wa.me/${contactInfo.whatsapp.replace(/[^+\d]/g, '')}`} 
            className="flex items-center gap-3 text-slate-800 hover:text-[#C51C1C] transition-colors"
          >
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
              <FaWhatsappSquare className="text-2xl text-[#25D366]" />
            </div>
            <span className="font-semibold text-md">WhatsApp Us</span>
          </a>
        </div>

      </div>

      {/* Slide-over Cart Modal */}
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
}

export default Header;