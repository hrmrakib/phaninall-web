"use client";

// import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className='relative bg-[#FFF0E5]'>
      {/* Header bar */}
      <div className='relative z-10'>
        <div className='flex'>
          <div className='bg-transparent py-3 px-4 flex items-center justify-center w-60'>
            <img
              src='/logo2.png'
              alt='Orange Tech Consultants Logo'
              // width={250}
              // height={250}
              className='w-[55px] h-[55px]'
            />
            <div className='ml-1'>
              <h2 className='text-[#FF6C0A] font-semibold'>Orange </h2>
              <p className='text-[#FF6C0A] text-sm'>Tech Consultants</p>
            </div>
          </div>
          <div className='bg-transparent w-4'></div>
          <div className='hidden md:block bg-[#FF6C0A] py-4 flex-1'>
            <h2 className='text-[#FFFFFF] text-xl text-center md:text-[36px] font-bold -ml-56'>
              Orange <span className='text-black'>Tech Consultants</span>
            </h2>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className='relative z-10 bg-[url("/footer-bg.png")] bg-cover bg-center px-6 md:px-0 pt-8 md:pt-12'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 lg:pl-10'>
          {/* Company info and social */}
          <div className='space-y-6'>
            <div className='max-w-[350px]'>
              <p className='text-[#443e39] font-light text-xl'>
                We are dedicated to providing innovative and strategic IT
                solutions that drive business success.
              </p>
            </div>

            <div className='w-max space-y-2'>
              <p className='text-[#331b0ae9] font-medium text-base border-b  border-b-[#331B0A]'>
                Follow Us
              </p>
              <div className='flex space-x-4'>
                <Link
                  target='_blank'
                  href='https://www.linkedin.com/company/orangetechconsultants/'
                  className='text-gray-600 hover:text-orange-500 transition-colors'
                >
                  <svg
                    width='18'
                    height='19'
                    viewBox='0 0 18 19'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M4.06655 18.4678H0.34676V6.50977H4.06655V18.4678ZM2.16883 4.80022C0.969667 4.80022 0 3.82892 0 2.63337C0 1.43782 0.970928 0.467773 2.16883 0.467773C3.3642 0.467773 4.33639 1.43908 4.33639 2.63337C4.33639 3.82892 3.3642 4.80022 2.16883 4.80022ZM18 18.4678H14.2827V12.6525C14.2827 11.2655 14.2575 9.48163 12.3497 9.48163C10.4142 9.48163 10.1166 10.9921 10.1166 12.5518V18.4678H6.3993V6.50977H9.96778V8.14373H10.0182C10.515 7.20392 11.7281 6.21245 13.5375 6.21245C17.304 6.21245 18 8.68922 18 11.9093V18.4678Z'
                      fill='#331B0A'
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Useful links */}
          <div>
            <h3 className='text-xl font-bold text-[#000000a3] mb-4'>
              Useful Links
            </h3>
            <nav className='space-y-2'>
              <Link
                href='/'
                className='block text-base font-medium text-[#1e1d1caa] hover:text-[#331B0A] transition-colors'
              >
                Home
              </Link>
              <Link
                href='/about'
                className='block text-base font-medium text-[#1e1d1caa] hover:text-[#331B0A] transition-colors'
              >
                About Us
              </Link>
              <Link
                href='/services'
                className='block text-base font-medium text-[#1e1d1caa] hover:text-[#331B0A] transition-colors'
              >
                Services
              </Link>
              <Link
                href='/capability'
                className='block text-base font-medium text-[#1e1d1caa] hover:text-[#331B0A] transition-colors'
              >
                Capability Statement
              </Link>
              <Link
                href='/careers'
                className='block text-base font-medium text-[#1e1d1caa] hover:text-[#331B0A] transition-colors'
              >
                Careers
              </Link>
              <Link
                href='/contact'
                className='block text-base font-medium text-[#1e1d1caa] hover:text-[#331B0A] transition-colors'
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact info */}
          <div>
            <h3 className='text-xl font-bold text-[#000000a3] mb-4'>
              Get In Touch
            </h3>
            <div className='space-y-3'>
              <p className='text-base font-medium text-[#1e1d1caa]'>
                7827 Town Square Ave Suite 104-1167 Ofallon, MO 63368 United
                States
              </p>
              <p className='text-base font-medium text-[#1e1d1caa]'>
                Phone: +1 636-244-3219
              </p>
              <p className='text-base font-medium text-[#1e1d1caa]'>
                Email: info@orangetechconsultants.com
              </p>
            </div>
          </div>
        </div>

        {/* Copyright bar */}
        <div className='relative z-10 border-t border-[#331B0A]'>
          <div className='container mx-auto px-4 py-4'>
            <p className='text-[#331B0A] text-base font-light text-center'>
              © Orange Tech Consultants 2024 | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
