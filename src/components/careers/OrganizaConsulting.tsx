"use client";

import { useState } from "react";
import Image from "next/image";

interface Capability {
  id: number;
  title: string;
  description: string;
  image: string;
  expanded: boolean;
}

export default function OrganizeConsulting() {
  const [capabilities, setCapabilities] = useState<Capability[]>([
    {
      id: 1,
      title: "Expert Team ",
      description:
        "Our team specializes in developing custom machine learning models and AI solutions tailored to your business needs. We leverage cutting-edge algorithms and techniques to extract valuable insights from your data.",
      image: "/careers/1.png",
      expanded: false,
    },
    {
      id: 2,
      title: "Proven Track Record",
      description:
        "We build advanced generative AI systems and autonomous agents that can create content, solve complex problems, and automate decision-making processes for your organization.",
      image: "/careers/2.png",
      expanded: false,
    },
    {
      id: 3,
      title: "Competitive  Pricing",
      description:
        "Our cloud and data engineering expertise helps you build scalable, reliable infrastructure and data pipelines to support your AI and analytics initiatives.",
      image: "/careers/3.png",
      expanded: false,
    },
    {
      id: 4,
      title: "Scalability &  Customization ",
      description:
        "We implement robust MLOps and DevOps practices to streamline your development workflows, ensure model reliability, and accelerate deployment cycles.",
      image: "/careers/4.png",
      expanded: false,
    },
  ]);

  const toggleExpand = (id: number) => {
    setCapabilities(
      capabilities.map((cap) =>
        cap.id === id ? { ...cap, expanded: !cap.expanded } : cap
      )
    );
  };

  return (
    <section className='max-w-6xl mx-auto pb-20'>
      <h2 className='text-2xl md:text-[40px] font-medium text-center mb-8 md:mb-12'>
        <span className='text-[#FF6C0A]'>Why Orange </span>{" "}
        <span className='text-[#4D3F36]'>Consulting</span>
      </h2>

      <div className='space-y-6'>
        {capabilities.map((capability) => (
          <div
            key={capability.id}
            className='bg-white rounded-lg overflow-hidden'
          >
            <div
              className='flex items-center p-4 cursor-pointer'
              onClick={() => toggleExpand(capability.id)}
            >
              <div className='w-[175px] h-[120px] md:w-[175px] md:h-[120px] flex-shrink-0 rounded-md overflow-hidden mr-4 md:mr-6'>
                <Image
                  src={capability.image || "/placeholder.svg"}
                  alt={capability.title}
                  width={480}
                  height={480}
                  className='w-full h-full object-cover'
                />
              </div>

              <div className='flex-grow'>
                <h3 className='text-[#B29D8F] text-base md:text-[28px]'>
                  {capability.title}
                </h3>
              </div>

              <button
                className='w-10 h-10 md:w-12 md:h-12 rounded-full bg-transparent border border-[#B29D8F] p-1 flex items-center justify-center flex-shrink-0 transition-transform duration-300'
                aria-label={
                  capability.expanded ? "Collapse section" : "Expand section"
                }
                style={{
                  transform: capability.expanded
                    ? "rotate(180deg)"
                    : "rotate(0)",
                }}
              >
                <svg
                  width='48'
                  height='48'
                  viewBox='0 0 48 48'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <rect width='48' height='48' rx='24' fill='#B29D8F' />
                  <path
                    d='M18.1668 18.1666L29.8335 29.8333M29.8335 29.8333V18.1666M29.8335 29.8333H18.1668'
                    stroke='#4D3F36'
                    stroke-width='1.5'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
              </button>
            </div>

            {capability.expanded && (
              <div className='px-4 pb-6 pt-2 ml-20 md:ml-26'>
                <p className='text-[#555555]'>{capability.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
