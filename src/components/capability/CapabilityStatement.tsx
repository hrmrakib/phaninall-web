"use client";

// import Image from "next/image";
import React, { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const CapabilityStatement = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDownload = (image: string) => {
    // Create a link element
    const link = document.createElement("a");
    link.href = image;
    link.download = image;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleImageViewer = () => {
    setIsOpen(true);
  };

  return (
    <div>
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
          <img
            src={"/capability/statement.jpg"}
            // width={800}
            // height={1100}
            alt='statement'
            className='rounded-2xl'
          />

          {/* Gradient background from bottom to half-top */}
          <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-[520px] bg-gradient-to-t from-[#000000b0] via-transparent to-transparent flex items-center justify-center gap-8'>
            <div className='absolute bottom-6  flex items-center justify-center gap-4'>
              <button
                onClick={() => handleImageViewer()}
                className='bg-[#FFF] text-black text-lg px-3 py-2 rounded-lg'
              >
                View
              </button>
              <button
                onClick={() => handleDownload("/capability/statement.jpg")}
                className='bottom-0 bg-[#FF6C0A] text-lg text-white px-3 py-2 rounded-lg cursor-pointer'
              >
                Download
              </button>
            </div>
          </div>
        </div>
      </div>

      <>
        {isOpen && (
          <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4 overflow-auto'>
            <div className='relative max-w-5xl w-full mx-auto'>
              <div className='absolute top-4 right-8 lg:right-4 z-10'>
                <Button
                  size='icon'
                  variant='outline'
                  className='h-10 w-10 rounded-full bg-white backdrop-blur-sm'
                  onClick={() => setIsOpen(false)}
                >
                  <X className='h-5 w-5' />
                  <span className='sr-only'>Close</span>
                </Button>
              </div>

              <div className='flex justify-center items-center min-h-screen'>
                <img
                  src='/capability/statement.jpg'
                  alt='Capability Statement'
                  className='w-full max-w-full max-h-screen object-contain rounded-lg'
                />
              </div>
            </div>
          </div>
        )}

        {/* {isOpen && (
          <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4'>
            <div className='relative h-full w-full flex flex-col'>
              <div className='absolute top-4 right-4 z-10 flex gap-2'>
                <Button
                  size='icon'
                  variant='outline'
                  className='h-10 w-10 rounded-full bg-white backdrop-blur-sm'
                  onClick={() => setIsOpen(false)}
                >
                  <X className='h-5 w-5' />
                  <span className='sr-only'>Close</span>
                </Button>
              </div>
              <div className='flex-1 flex items-center justify-center'>
                <div className='relative h-auto w-[50%]'>
                  <img
                    src='/capability/statement.jpg'
                    alt={"image"}
                    className='object-cover'
                  />
                </div>
              </div>
            </div>
          </div>
        )} */}
      </>
    </div>
  );
};

export default CapabilityStatement;
