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
              <div className='sm:text-center md:text-left '>
                <button className='absolute top-1/4 left-0 inline-block bg-orange-500 px-8 py-3 mb-6 text-white font-medium'>
                  Service Section
                </button>
                <h1 className='max-w-[900px] text-3xl md:text-5xl text-[#4D3F36] tracking-tight'>
                  Comprehensive {" "}
                  <span className='text-gray-900 font-semibold'>
                    ML Training! <br />
                  </span>
                  <br className='hidden md:block' />
                  Tailored for Every Level
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
    </div>
  );
}
