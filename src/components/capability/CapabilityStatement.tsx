import Image from "next/image";
import React from "react";

const CapabilityStatement = () => {
  return (
    <div className='container mx-auto px-4 py-12 md:py-20'>
      <div className="mb-10">
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

      <div className="max-w-[772px] mx-auto">
        <Image
          src={"/capability/statement.jpg"}
          width={800}
          height={1100}
          alt='statement' 
          className="rounded-2xl"
        />
      </div>
    </div>
  );
};

export default CapabilityStatement;
