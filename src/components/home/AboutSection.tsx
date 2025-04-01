"use client";

import Link from "next/link";

export default function AboutUs() {
  return (
    <div className='w-full bg-gradient-to-br from-orange-50 via-white to-orange-50'>
      <div className='container mx-auto px-4 py-12 md:py-20'>
        <div className='text-center mb-8'>
          <h1 className='text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500 inline-block'>
            ABOUT US
          </h1>
          <div className='h-1 w-16 bg-[#1A0D05] mx-auto mt-2'></div>
        </div>

        <div className='text-center max-w-3xl mx-auto mb-16'>
          <p className='text-gray-600 text-lg'>
            Our mission is to drive innovation and empower businesses with
            cutting-edge technology solutions that exceed expectations and fuel
            long-term success.
          </p>
        </div>

        <div className='grid md:grid-cols-2 gap-8 items-center'>
          <div className='relative min-h-[500px] md:min-h-[600px] lg:min-h-[500px] flex flex-col items-center justify-center space-y-6 p-6'>
            {/* User Stats Card */}
            <div className='md:absolute md:top-56 md:left-4 lg:left-16 lg:top-40 w-full md:w-[264px]'>
              <div className='relative w-auto md:w-[264px] h-[146px] bg-[#FFFFFF] flex items-center rounded-xl p-6 shadow-sm'>
                <div className='flex flex-col'>
                  <h3 className='text-2xl font-bold text-gray-800'>Our User</h3>
                  <div className='flex items-center'>
                    <span className='text-orange-500 text-2xl font-bold'>
                      +12.66%
                    </span>
                  </div>
                  <div className='text-gray-500 text-sm'>
                    Total user: 12.21K
                  </div>
                  <div className='absolute right-0 bottom-0'>
                    <svg
                      width='122'
                      height='102'
                      viewBox='0 0 122 102'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M1 101.409L2.25 97.43C3.5 93.4509 6 85.4926 8.5 82.0866C11 78.6806 13.5 79.8269 16 81.3127C18.5 82.7984 21 84.6236 23.5 81.7513C26 78.879 28.5 61.3093 31 59.4379C33.5 57.5666 36 61.3936 38.5 66.2389C41 71.0842 43.5 76.9477 46 79.8864C48.5 82.825 51 82.8388 53.5 81.9451C56 81.0515 58.5 79.2504 61 73.2712C62.6235 69.3884 64 50.5 67 44.5C70 39 77.1235 53.757 78 51.5C80.5 45.0628 73 12.9369 78 8C80.5 6.02007 82.5 23 85 14.5C87.5 10.5 88.5 21.698 91 21.2717C93.5 20.8454 96 6.69286 98.5 10.7233C101 14.7537 103.5 26.9671 106 26.0771C108.5 25.1872 111 1.19388 113.5 0.66146C116 0.12904 118.5 13.0575 119.75 19.5218L121 25.986'
                        stroke='#FF6C0A'
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Feedback Card */}
            <div className='md:absolute md:right-4 md:top-4 lg:right-20 lg:top-16 w-full md:w-[264px] min-h-[146px] bg-[#FFFFFF] rounded-3xl p-6 shadow-sm'>
              <div className='flex flex-col items-center text-center'>
                <h3 className='text-[32px] font-bold text-[#FF6C0A] mb-2'>
                  95%
                </h3>
                <h4 className='text-2xl font-medium text-[#303030] mb-2'>
                  Positive Feedback
                </h4>
                <p className='text-[#505050] font-light text-base'>
                  We believe innovation drives successful tech solutions
                </p>
              </div>
            </div>

            {/* Experience Card */}
            <div className='md:absolute md:right-14 md:bottom-10 lg:left-48 lg:bottom-8 w-full md:w-[264px] min-h-[146px] flex items-center justify-center bg-[#FFFFFF] rounded-3xl p-6 shadow-sm'>
              <div className='flex items-center text-center'>
                <h3 className='text-4xl md:text-[60px] font-bold text-[#FF6C0A] mb-2'>
                  15+
                </h3>
                <h4 className='text-xl font-light text-[#FF6C0A]'>
                  Years Of
                  <br />
                  Experience
                </h4>
              </div>
            </div>
          </div>

          <div className='space-y-6'>
            <h2 className='text-3xl md:text-5xl font-semibold text-[#331B0A] mb-6'>
              Orange Tech Consultants
            </h2>

            <p className='text-[#4D3A2E] text-xl font-normal mb-6'>
              At Orange Tech Consultants, we redefine innovation in technology
              services. Specializing in AI/ML, Generative AI, DevSecOps, Cloud &
              Data Engineering, SRE, and Full Stack Development, we deliver
              cutting-edge solutions for a digital-first world.
            </p>

            <p className='text-[#4D3A2E] text-xl font-normal mb-6'>
              We help businesses unlock their potential through custom
              solutions, automation, and modern web applications. With a focus
              on security, scalability, and performance, we navigate challenges
              and drive lasting success.
            </p>

            <Link
              href='/about'
              className='inline-flex w-[189px] h-[50px] items-center justify-center px-6 py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-colors'
            >
              <span className='mr-2'>Read More</span>
              <svg
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M1.83337 9.99992H18.1667M18.1667 9.99992L10 1.83325M18.1667 9.99992L10 18.1666'
                  stroke='white'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
