'use client'

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  'BRANDS',
  'ABOUT US',
  'SERVICES',
  'SOLUTIONS',
  'RESOURCE HUB',
  'SUPPORT',
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <header className="w-full sticky top-0 z-50 bg-white border-b border-b-slate-200">
      <div className="mx-auto flex items-center justify-between h-20 px-4 md:px-12 relative">
        {/* Logo */}
        <div className="flex items-center h-full">
          <Image src="/Logo.svg" alt="ORM Systems Logo" width={120} height={48} className="h-8 sm:h-12 w-auto" priority />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-1 justify-center items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link}
              href="/products"
              className="font-forma text-[14px] text-black hover:text-blue-500 transition-colors not-italic leading-normal tracking-[0.14px]"
              style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 550, letterSpacing: '0.14px' }}
            >
              {link}
              
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <button
            className="bg-black text-white rounded-md px-8 py-3 font-forma text-[14px] font-medium not-italic leading-normal tracking-[0.7px] hover:bg-gray-800 transition-colors"
            style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 500, letterSpacing: '0.7px' }}
          >
            GET A QUOTE
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-end h-10 w-10 focus:outline-none"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Open menu"
        >
          <span className="block w-7 h-1 bg-black rounded mb-1.5"></span>
          <span className="block w-7 h-1 bg-black rounded mb-1.5"></span>
          <span className="block w-7 h-1 bg-black rounded"></span>
        </button>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="fixed inset-0 bg-black/60 z-50 flex flex-col">
            <div className="bg-white shadow-md flex flex-col w-full p-6 pt-8 relative">
              <button
                className="absolute top-4 right-4 text-2xl font-bold text-black"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                &times;
              </button>
              <div className="flex items-center mb-8">
                <Image src="/Logo.svg" alt="ORM Systems Logo" width={120} height={32} className="h-8 w-auto" />
              </div>
              <nav className="flex flex-col space-y-6">
                {navLinks.map((link) => (
                  <Link
                    key={link}
                    href="/products"
                    className="font-forma text-[14px] font-medium text-black hover:text-blue-500 transition-colors not-italic leading-normal tracking-[0.14px]"
                    style={{ fontFamily: 'Forma DJR Micro, Arial, Helvetica, sans-serif', fontWeight: 500, letterSpacing: '0.14px' }}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link}
                  </Link>
                ))}
              </nav>
              <button
                className="mt-8 bg-black text-white rounded-md px-8 py-3 font-forma text-[14px] font-medium not-italic leading-normal tracking-[0.7px] hover:bg-gray-800 transition-colors"
                style={{ fontFamily: 'Forma DJR Micro, Arial, Helvetica, sans-serif', fontWeight: 500, letterSpacing: '0.7px' }}
              >
                GET A QUOTE
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;