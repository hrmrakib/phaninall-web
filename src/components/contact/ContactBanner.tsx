"use client";

import { useState } from "react";
import Image from "next/image";

export default function ContactBanner() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='w-full'>
      {/* Main banner */}
      <div className='relative h-[500px] md:h-[512px] bg-[#FFFFFF] overflow-hidden'>
        <div className='container mx-auto'>
          <div className='z-10 pb-8 bg-white'>
            <div className='flex flex-col md:flex-row items-center justify-between'>
              <div className='sm:text-center md:text-left '>
                <button className='xl:absolute md:top-[8%] lg:top-[25%] left-0 inline-block bg-[#FF6C0A] px-12 py-5 mb-6 text-white text-2xl md:text-[32px] font-bold'>
                  Contact Us
                </button>
                <h1 className='p-2 md:p-0 max-w-[900px] text-3xl md:text-5xl text-[#4D3F36] tracking-tight leading-tight'>
                  Connect with Us for Inquiries,{" "}
                  <br className='hidden md:block' />
                  Support, and{" "}
                  <span className='text-gray-900 font-semibold'>
                    Collaboration!
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
                  {/* <div className='w-64 h-64 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-md'></div> */}
                  {/* <div className='w-48 h-48 rounded-full  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'></div> */}
                  <div className='relative z-10'>
                    <Image
                      src='/contact-banner.svg'
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

      {/* Working hours bar */}
      <div className=''>
        <div className='bg-orange-500 h-[74px] flex items-center justify-center text-center'>
          <h2 className='text-[#FFFFFF] text-4xl font-bold text-center'>
            Working Hours
          </h2>
        </div>
        <div className='bg-white py-4 text-center text-gray-800'>
          <p className='text-2xl md:text-[28px] font-semibold text-[#1A0E05]'>
            Monday to Friday 8 AM to 5 PM CST
          </p>
        </div>
      </div>
    </div>
  );
}
