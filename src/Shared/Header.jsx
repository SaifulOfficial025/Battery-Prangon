import React, { useState, useEffect } from 'react';
import Container from '../Layout/Container/Container';
import { IoSearchOutline } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import CartModal from './CartModal';

function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const handleOpenCart = () => setIsCartOpen(true);
    window.addEventListener('open-cart', handleOpenCart);
    return () => window.removeEventListener('open-cart', handleOpenCart);
  }, []);

  return (
    <header className="bg-white border-b border-gray-100 py-3 sticky top-0 z-50">
      <Container>
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/">
              <img 
                src="/logo.png" 
                alt="Battery Logo" 
                className="h-10 md:h-[48px] w-auto object-contain"
              />
            </a>
          </div>

          {/* Navigation Menu (English) */}
          <nav className="hidden xl:flex items-center gap-8 text-[#0a0a0a] font-semibold text-base">
            <a href="#products" className="hover:text-emerald-500 transition-colors duration-200 whitespace-nowrap">
              Products
            </a>
            <a href="#contact" className="hover:text-emerald-500 transition-colors duration-200 whitespace-nowrap">
              Contact
            </a>
            <a href="#about-us" className="hover:text-emerald-500 transition-colors duration-200 whitespace-nowrap">
              About Us
            </a>
          </nav>

          {/* Search Bar */}
          <div className="flex-grow max-w-[400px] min-w-[150px] mx-2">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search product.."
                className="w-full bg-[#f1f1f1] text-slate-800 placeholder-slate-400  py-2.5 pl-6 pr-12 focus:outline-none focus:ring-1 focus:ring-red-600 text-sm font-normal"
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
          <div className="flex items-center gap-4 flex-shrink-0">
            {/* Call Block */}
            <div className="hidden lg:flex flex-col text-right">
              <span className="text-[11px] text-slate-400 font-medium uppercase tracking-wider leading-none mb-1">
                Call Us Now:
              </span>
              <span className="text-[15px] text-[#0a0a0a] font-extrabold leading-none">
                +(258) 2159-2159
              </span>
            </div>

            {/* Icon Group */}
            <div className="flex items-center gap-2">
              {/* Phone Icon Button */}
              <a
                href="tel:+(258) 2159-2159"
                className="w-10 h-10 rounded-full bg-[#f1f1f1] hover:bg-slate-200 text-slate-800 flex items-center justify-center transition-colors duration-200 text-lg"
                title="Call Us"
              >
                <FaPhone />
              </a>

              {/* WhatsApp Icon Button */}
              <a
                href="https://wa.me/25821592159"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#f1f1f1] hover:bg-slate-200 text-[#25D366] flex items-center justify-center transition-colors duration-200 text-2xl"
                title="WhatsApp"
              >
                <FaWhatsappSquare />
              </a>

              {/* Cart Icon Button with Red Notification Dot */}
              <button
                type="button"
                onClick={() => setIsCartOpen(true)}
                className="w-10 h-10 rounded-full bg-[#f1f1f1] hover:bg-slate-200 text-slate-800 flex items-center justify-center transition-colors duration-200 text-xl relative"
                title="Cart"
              >
                <BsCart />
                {/* Red dot notification badge */}
                <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-600 rounded-full border border-white"></span>
              </button>
            </div>
          </div>

        </div>
      </Container>

      {/* Slide-over Cart Modal */}
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
}

export default Header;