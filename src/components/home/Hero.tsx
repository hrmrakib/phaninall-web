import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <section className='container mx-auto px-4 py-12 md:py-20 grid md:grid-cols-2 gap-8 items-center'>
      <div className='space-y-6'>
        <h1 className='text-5xl md:text-6xl lg:text-7xl text-[#000000] font-bold tracking-tight'>
          Orange Tech Consultants
        </h1>
        <p className='text-lg text-[#5A5A5A] max-w-lg'>
          To be a trusted leader in AI-driven technology solutions that enhance
          security, innovation, and operational excellence.
        </p>
        <div className='flex flex-wrap gap-4 pt-4'>
          <Button
            variant='outline'
            className='text-xl border-[#FF6C0A] text-[#FF6C0A] hover:bg-orange-50 hover:text-[#ff6c0ae3] py-6 px-6 cursor-pointer'
          >
            Explore Now
          </Button>
          <Button className='text-xl bg-[#FF6C0A] border-[#FF6C0A] text-[#FFFFFF] hover:text-white hover:bg-[#ff6c0ae3] py-6 px-6 cursor-pointer'>
            Connect Us
          </Button>
        </div>
      </div>

      <div className='relative h-[400px] md:h-[500px] lg:h-[600px]'>
        <Image
          src='/hero-image.png'
          alt='AI Technology Visualization'
          fill
          className='object-contain'
          priority
        />
      </div>
    </section>
  );
};

export default Hero;
