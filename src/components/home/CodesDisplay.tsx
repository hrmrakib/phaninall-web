"use client";

import { useState } from "react";
import NAICSCODES from "./NAICS-Codes";
import PSCCODES from "./PSCCodes";

interface CodeData {
  id: string;
  code: string;
  title?: string;
  description?: string;
  isExpanded?: boolean;
}

export default function CodesDisplay() {
  // const naicsCodes: CodeData[] = [
  //   { id: "1", code: "541511" },
  //   { id: "2", code: "541512" },
  //   { id: "3", code: "541513" },
  //   { id: "4", code: "541519" },
  //   { id: "5", code: "541715" },
  //   { id: "6", code: "518210" },
  //   { id: "7", code: "519190" },
  //   { id: "8", code: "541990" },
  //   { id: "9", code: "611420" },
  // ];

  // const pscCodes: CodeData[] = [
  //   { id: "1", code: "541511" },
  //   { id: "2", code: "541512" },
  //   { id: "3", code: "541513" },
  //   { id: "4", code: "541519" },
  //   { id: "5", code: "541715" },
  //   { id: "6", code: "518210" },
  //   { id: "7", code: "519190" },
  //   { id: "8", code: "541990" },
  //   { id: "9", code: "611420" },
  // ];

  

  return (
    <div className='relative min-h-screen bg-gradient-to-br from-[#ff6c0a00] via-[#ff6c0a05] to-[#ff6c0a00] p-4 md:p-8'>
      <div className='z-50 container mx-auto space-y-12'>

    {/* <NAICSCODES /> */}
    <PSCCODES />

        {/* NAICS Codes Section */}
        {/* <section className='z-50 bg-gradient-to-br from-[#FFF0E5] via-[#FFF0E5] to-[#FFF0E5] rounded-3xl p-6 md:p-10'>
          <div className='text-center mb-8'>
            <h2 className='text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500 inline-block text-shadow-sm'>
              NAICS Codes
            </h2>
            <div className='h-0.5 w-16 bg-[#303030] mx-auto mt-1'></div>
          </div>

          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6`}
          >
            {cards.map((item) => (
              <div
                onClick={() => toggleExpand(item.id)}
                key={item.id}
                className='bg-gradient-to-br from-[#ffffff] via-[#ffffff] to-[#ff6c0a57] border border-[#ff6c0a44] rounded-2xl px-4 py-7 shadow-sm transition-transform'
              >
                <div className='text-center'>
                  <p className='text-[#1A0D05] text-base mb-1'>Code</p>
                  <div className='h-px w-full bg-[#FFD1B2] mb-2'></div>
                  <p className='font-bold text-base text-[#1A0D05]'>
                    {item.code}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section> */}

        {/* PSC Codes Section */}
        {/* <section className='z-50 bg-gradient-to-br from-[#FFF0E5] via-[#FFF0E5] to-[#FFF0E5] rounded-3xl p-6 md:p-10'>
          <div className='text-center mb-8'>
            <h2 className='text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500 inline-block text-shadow-sm'>
              PSC Codes
            </h2>
            <div className='h-0.5 w-16 bg-[#303030] mx-auto mt-1'></div>
          </div>

          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6`}
          >
            {pscCodes.map((item) => (
              <div
                key={item.id}
                className='bg-gradient-to-br from-[#ffffff] via-[#ffffff] to-[#ff6c0a57] border border-[#ff6c0a44] rounded-2xl px-4 py-7 shadow-sm transition-transform hover:scale-105'
              >
                <div className='text-center'>
                  <p className='text-[#1A0D05] text-base mb-1'>Code</p>
                  <div className='h-px w-full bg-[#FFD1B2] mb-2'></div>
                  <p className='font-bold text-base text-[#1A0D05]'>
                    {item.code}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section> */}
      </div>
    </div>
  );
}
