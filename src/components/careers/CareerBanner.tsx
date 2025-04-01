"use client";

import { useState } from "react";
import Image from "next/image";

export default function CareersBanner() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='w-full'>
      {/* Main banner */}
      <div className='relative bg-[#FFFFFF] overflow-hidden'>
        <div className='z-10 pb-8 bg-white'>
          <div className='container mx-auto'>
            <div className='h-[678px] flex flex-col md:flex-row items-center justify-between'>
              <div className='mt-6 md:mt-0 sm:text-center md:text-left '>
                <button className='inline-block bg-[#FF6C0A] text-[32px] font-bold px-8 py-3 mb-6 text-[#FFFFFF]'>
                  Careers
                </button>
                <h1 className='max-w-[600px] text-3xl md:text-5xl text-[#4D3F36] tracking-tight leading-tight p-2 md:p-0'>
                  Join Our Mission to Shape the Future of{" "}
                  <span className='text-gray-900 font-semibold'>
                    AI & Machine Learning
                  </span>
                </h1>
              </div>

              <div className='relative'>
                <div
                  className={`relative transition-transform duration-300 ease-in-out ${
                    isHovered ? "transform translate-y-[-8px]" : ""
                  }`}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <div className='relative z-10'>
                    <Image
                      src='/careers/banner.svg'
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
