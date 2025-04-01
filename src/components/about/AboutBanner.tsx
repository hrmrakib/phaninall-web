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
          <div className='z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32'>
            <div className='flex flex-col md:flex-row items-center justify-between'>
              <div className=''>
                <button className='xl:absolute md:top-[8%] lg:top-[18%] left-0 inline-block bg-[#FF6C0A] px-8 py-3 mb-6 text-white text-2xl md:text-[32px] font-bold'>
                  About Us
                </button>
                <h1 className='max-w-[600px] text-3xl md:text-5xl text-[#4D3F36] tracking-tight leading-tight p-2 md:p-0'>
                  Empowering Innovators Through World-Class{" "}
                  <span className='text-gray-900 font-semibold'>
                    ML Education
                  </span>
                </h1>
              </div>

              <div className='mt-10 md:mt-0 relative'>
                <div
                  className={`relative transition-transform duration-300 ease-in-out ${
                    isHovered ? "transform translate-y-[-8px]" : ""
                  }`}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <div className='relative z-10'>
                    <Image
                      src='/about/about-banner.svg'
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
