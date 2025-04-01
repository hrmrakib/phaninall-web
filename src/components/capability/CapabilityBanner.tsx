"use client";

import { useState } from "react";
import Image from "next/image";

export default function ContactBanner() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='w-full'>
      {/* Main banner */}
      <div className='relative bg-[#FFFFFF] overflow-hidden'>
        <div className='container mx-auto'>
          <div className='z-10 pb-8 bg-white'>
            <div className='h-[612px] flex flex-col md:flex-row items-center justify-between'>
              <div className='sm:text-center md:text-left'>
                <button className='inline-block bg-[#FF6C0A] text-[32px] font-bold px-8 py-3 mb-6 text-[#FFFFFF]'>
                  Capability Statement
                </button>
                <h1 className='max-w-[600px] text-3xl md:text-5xl text-[#4D3F36] tracking-tight leading-tight'>
                  Driving Excellence in AI &{" "}
                  <span className='text-gray-900 font-semibold'>
                    Machine Learning Education
                  </span>
                </h1>
              </div>

              <div className='relative z-40'>
                <div
                  className={`relative transition-transform duration-300 ease-in-out ${
                    isHovered ? "transform translate-y-[-8px]" : ""
                  }`}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <div className='relative z-10'>
                    <Image
                      src='/capability/banner.svg'
                      alt='Customer Support Agent'
                      width={700}
                      height={700}
                      className='relative z-10'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
