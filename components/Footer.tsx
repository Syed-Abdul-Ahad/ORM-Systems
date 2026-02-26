import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="w-full bg-black border-t border-t-slate-800 pt-16 pb-6 px-4 md:px-0">
      <div className="max-w-275 mx-auto flex flex-col items-center">
        {/* Logo */}
        <Image src="/Logo-White.png" alt="ORM Systems Logo" width={150} height={56} className="h-14 w-auto mb-6" />

        {/* Description */}
        <p className="text-white text-center font-forma text-[13.5px] font-normal not-italic leading-[24px] mb-6 max-w-2xl">
          Maecenas et vestibulum dolor. Proin orci mauris, fermentum quis turpis non, consectetur pretium dui. Duis congue sollicitudin metus, a volutpat odio accumsan eget.
        </p>

        {/* Contact Row */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          {/* Phone */}
          <div className="flex items-center gap-2">
            <Image src="/icons/phone.svg" alt="Phone" width={20} height={20} className="h-5 w-5" />
            <span className="text-white text-center font-forma text-[13.5px] font-normal not-italic leading-14.25 capitalize">000-000-000</span>
          </div>
          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-x-8 md:gap-x-12 gap-y-2">
            {['Home', 'Services', 'About Us', 'Blog'].map((link) => (
              <a
                key={link}
                href="#"
                className="text-white text-center font-forma text-[13.5px] font-normal not-italic leading-15 capitalize hover:text-blue-400 transition-colors"
                style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 400 }}
              >
                {link}
              </a>
            ))}
          </nav>
          {/* Email */}
          <div className="flex items-center gap-2">
            <span className="text-white text-center font-forma text-[13.5px] font-normal not-italic leading-[57px]">info@ifogroup.com</span>
          </div>
        </div>

        <div className='flex flex-col lg:flex-row justify-between items-center gap-4 w-full p-4 border-t border-white'
        >

         {/* Copyright */}
        <p className="text-white text-center font-forma text-[13.5px] font-normal not-italic leading-[24px] ">
          Copyright © 2023 Ifo Group Safety, Risk & Fire Consultants. All Rights Reserved.
        </p>

        {/* Socials */}
        <div className="flex gap-4">
          <a href="#" className="flex items-center justify-center rounded-[3px] border border-[#E2E2E2] size-[31.5px] hover:bg-white/10 transition-colors">
            <Image src="/icons/facebook.svg" alt="Facebook" width={16} height={16} className="h-4 w-4" />
          </a>
          <a href="#" className="flex items-center justify-center rounded-[3px] border border-[#E2E2E2] size-[31.5px] hover:bg-white/10 transition-colors">
            <Image src="/icons/twitter.svg" alt="Twitter" width={16} height={16} className="h-4 w-4" />
          </a>
          <a href="#" className="flex items-center justify-center rounded-[3px] border border-[#E2E2E2] size-[31.5px] hover:bg-white/10 transition-colors">
            <Image src="/icons/linkedin.svg" alt="LinkedIn" width={16} height={16} className="h-4 w-4" />
          </a>
        </div>

      
             </div>
      </div>
    </footer>
  );
};

export default Footer;