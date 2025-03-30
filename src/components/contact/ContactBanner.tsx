"use client";

import { useState } from "react";
import Image from "next/image";

export default function ContactBanner() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='w-full'>
      {/* Main banner */}
      <div className='relative bg-white overflow-hidden'>
        <div className='max-w-7xl mx-auto'>
          <div className='relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32'>
            <div className='relative pt-6 px-4 sm:px-6 lg:px-8'>
              <div className='mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28'>
                <div className='flex flex-col md:flex-row items-center justify-between'>
                  <div className='sm:text-center md:text-left md:max-w-2xl'>
                    <div className='inline-block bg-orange-500 px-4 py-2 mb-6 text-white font-medium'>
                      Contact Us
                    </div>
                    <h1 className='text-3xl md:text-4xl font-medium text-gray-700 tracking-tight'>
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
                      <div className='w-64 h-64 rounded-full bg-gradient-to-r from-orange-100 via-orange-200 to-orange-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-md'></div>
                      <div className='w-48 h-48 rounded-full bg-orange-500/20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'></div>
                      <div className='relative z-10'>
                        <Image
                          src='/contact-banner.png'
                          alt='Customer Support Agent'
                          width={250}
                          height={250}
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
      </div>

      {/* Working hours bar */}
      <div className='bg-orange-500 py-4 text-white text-center'>
        <h2 className='text-xl font-medium'>Working Hours</h2>
      </div>
      <div className='bg-white py-4 text-center text-gray-800'>
        <p className='text-lg'>Monday to Friday 8 AM to 5 PM CST</p>
      </div>
    </div>
  );
}
