import React from 'react';
import Container from '../Layout/Container/Container';
import { IoLogoInstagram, IoLogoFacebook } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

function Footer() {
  return (
    <footer className="bg-black text-white py-16 md:py-20 border-t border-neutral-900 mt-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Column 1: Brand Info */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2.5">
              {/* Logo */}
              <img 
                src="/logo.png" 
                alt="Voltra Logo" 
                className="h-9 w-auto object-contain" 
              />
              <span className="text-white font-black text-xl tracking-wider font-sans uppercase">
                VOLTRA.
              </span>
            </div>
            <p className="text-[#a0a0a0] text-sm leading-relaxed max-w-[280px]">
              Bangladesh's premium lithium battery brand — a trusted name for reliable power solutions
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {/* Instagram Button */}
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] flex items-center justify-center text-white text-xl hover:opacity-90 transition-opacity"
                title="Instagram"
              >
                <IoLogoInstagram />
              </a>
              {/* Facebook Button */}
              <a 
                href="https://facebook.com" 
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
              Quick Links
            </h3>
            <ul className="flex flex-col gap-4 text-sm">
              <li className="flex items-center text-[#a0a0a0]">
                <span className="text-neutral-600 mr-2 font-mono">&gt;</span>
                <a href="#home" className="underline underline-offset-4 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li className="flex items-center text-[#a0a0a0]">
                <span className="text-neutral-600 mr-2 font-mono">&gt;</span>
                <a href="#products" className="underline underline-offset-4 hover:text-white transition-colors">
                  Products
                </a>
              </li>
              <li className="flex items-center text-[#a0a0a0]">
                <span className="text-neutral-600 mr-2 font-mono">&gt;</span>
                <a href="#contact" className="underline underline-offset-4 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h3 className="text-white font-bold tracking-wider text-xs uppercase mb-6">
              Legal
            </h3>
            <ul className="flex flex-col gap-4 text-sm">
              <li className="flex items-center text-[#a0a0a0]">
                <span className="text-neutral-600 mr-2 font-mono">&gt;</span>
                <a href="#warranty" className="hover:text-white transition-colors">
                  Warranty Policy
                </a>
              </li>
              <li className="flex items-center text-[#a0a0a0]">
                <span className="text-neutral-600 mr-2 font-mono">&gt;</span>
                <a href="#terms" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li className="flex items-center text-[#a0a0a0]">
                <span className="text-neutral-600 mr-2 font-mono">&gt;</span>
                <a href="#disclosure" className="hover:text-white transition-colors">
                  Commercial Disclosure
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-white font-bold tracking-wider text-xs uppercase mb-6">
              Contact
            </h3>
            <ul className="flex flex-col gap-4 text-sm text-[#a0a0a0]">
              <li className="flex items-center gap-3">
                <FaPhone className="text-base text-neutral-400 flex-shrink-0" />
                <a href="tel:+8111XXXXXXXX" className="hover:text-white transition-colors">
                  +81 11-XXX-XXXX
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MdEmail className="text-base text-neutral-400 flex-shrink-0" />
                <a href="mailto:info@hokkaidotaxi.com" className="hover:text-white transition-colors">
                  info@hokkaidotaxi.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <IoLocationOutline className="text-lg text-neutral-400 flex-shrink-0 mt-0.5" />
                <span>Dhaka, Bangladesh</span>
              </li>
            </ul>
          </div>

        </div>
      </Container>
    </footer>
  );
}

export default Footer;