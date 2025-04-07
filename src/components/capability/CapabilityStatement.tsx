import Image from "next/image";
import React from "react";

const CapabilityStatement = () => {
  return (
    <div className='container mx-auto px-4 py-12 md:py-20'>
      <div className='mb-10'>
        <p className='flex items-center justify-center gap-1'>
          <span className='text-[#FF6C0A] text-2xl md:text-[40px]'>
            Capability {"  "}
          </span>
          <span className='text-[#4D3F36] text-2xl md:text-[40px]'>
            Statement
          </span>
        </p>
        <p className='text-[#B29D8F] text-base text-center'>
          View or download our Capability Statement to learn more about our
          expertise and services.
        </p>
      </div>

      <div className='max-w-[772px] mx-auto relative'>
        <Image
          src={"/capability/statement.jpg"}
          width={800}
          height={1100}
          alt='statement'
          className='rounded-2xl'
        />

        {/* Gradient background from bottom to half-top */}
        <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-[420px] bg-gradient-to-t from-[#000000b0] via-transparent to-transparent flex items-center justify-center gap-8'>
          <div className='absolute bottom-6  flex items-center justify-center gap-4'>
            <button className='bg-[#FFF] text-black text-lg px-3 py-2 rounded-lg'>
              View
            </button>
            <button className='bottom-0 bg-[#FF6C0A] text-lg text-white px-3 py-2 rounded-lg'>
              Download
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CapabilityStatement;
