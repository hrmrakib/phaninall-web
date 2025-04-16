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
        {/* <Card className='overflow-hidden'>
          <CardContent className='p-4'>
            <div className='relative aspect-video overflow-hidden rounded-md'>
              <Image
                src='/capability/statement.jpg'
                alt={"image"}
                fill
                className='object-cover transition-transform hover:scale-105'
              />
            </div>
          </CardContent>
          <CardFooter className='p-4 pt-0'>
            <Button
              variant='outline'
              className='w-full'
              onClick={() => setIsOpen(true)}
            >
              <Eye className='mr-2 h-4 w-4' />
              View
            </Button>
          </CardFooter>
        </Card> */}

        {isOpen && (
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
                <div className='relative h-full w-full'>
                  <img
                    src='/capability/statement.jpg'
                    alt={"image"}
                    // fill
                    className='object-contain'
                    // sizes='100vw'
                    // priority
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    </div>
  );
};

export default CapabilityStatement;
