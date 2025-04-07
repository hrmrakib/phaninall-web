"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowDownRight } from "lucide-react";

interface Capability {
  id: number;
  title: string;
  description: string;
  image: string;
  expanded: boolean;
}

export default function CapabilitiesSection() {
  const [capabilities, setCapabilities] = useState<Capability[]>([
    {
      id: 1,
      title: "Machine Learning & AI Solutions",
      description:
        "Our team specializes in developing custom machine learning models and AI solutions tailored to your business needs. We leverage cutting-edge algorithms and techniques to extract valuable insights from your data.",
      image: "/services/1.jpg",
      expanded: false,
    },
    {
      id: 2,
      title: "Generative AI & Agentic AI",
      description:
        "We build advanced generative AI systems and autonomous agents that can create content, solve complex problems, and automate decision-making processes for your organization.",
      image: "/services/2.jpg",
      expanded: false,
    },
    {
      id: 3,
      title: "Cloud & Data Engineering",
      description:
        "Our cloud and data engineering expertise helps you build scalable, reliable infrastructure and data pipelines to support your AI and analytics initiatives.",
      image: "/services/3.jpg",
      expanded: false,
    },
    {
      id: 4,
      title: "MLOps & DevOps",
      description:
        "We implement robust MLOps and DevOps practices to streamline your development workflows, ensure model reliability, and accelerate deployment cycles.",
      image: "/services/4.jpg",
      expanded: false,
    },
    {
      id: 5,
      title: "SRE & Reliability Engineering",
      description:
        "Our Site Reliability Engineering practices ensure your systems remain available, scalable, and performant, even under high load or during critical operations.",
      image: "/services/5.jpg",
      expanded: false,
    },
    {
      id: 6,
      title: "Full-Stack Development",
      description:
        "From front-end interfaces to back-end systems, our full-stack development team builds complete, integrated solutions that deliver exceptional user experiences.",
      image: "/services/6.png",
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
    <section className='max-w-5xl mx-auto pb-20'>
      <h2 className='text-2xl md:text-[40px] font-medium mb-8 md:mb-12 p-4  text-center'>
        <span className='text-[#FF6B00]'>Our Capabilities &</span>{" "}
        <span className='text-[#333333]'>Expertise</span>
      </h2>

      {/* <div className='space-y-6'>
        {capabilities.map((capability) => (
          <div
            key={capability.id}
            className='bg-white transition rounded-lg overflow-hidden group'
          >
            <div
              className='flex border-b border-b-[#FFE0CC] items-center p-4 cursor-pointer'
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
                className={`${
                  capability.expanded ? "bg-[#FF6C0A]" : ""
                } w-10 h-10 md:w-12 md:h-12 rounded-full bg-transparent border border-[#B29D8F] p-1 flex items-center justify-center flex-shrink-0 transition-transform duration-300`}
                aria-label={
                  capability.expanded ? "Collapse section" : "Expand section"
                }
                style={{
                  transform: capability.expanded
                    ? "rotate(-90deg)"
                    : "rotate(0deg)",
                }}
              >
                <svg
                  width='48'
                  height='48'
                  viewBox='0 0 48 48'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <rect
                    width='48'
                    height='48'
                    rx='24'
                    className='group-hover:bg-[#3b3a38]'
                    fill={`${capability.expanded ? "#FF6C0A" : "#B29D8F"}`}
                  />
                  <path
                    d='M18.1668 18.1666L29.8335 29.8333M29.8335 29.8333V18.1666M29.8335 29.8333H18.1668'
                    stroke='#FFF'
                    stroke-width='1.5'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
              </button>
            </div>

            {capability.expanded && (
              <div className='pb-6 pt-2 ml-20 md:ml-26 transition-transform duration-500 ease-in-out overflow-hidden'>
                <p className='text-[#555555] text-xl'>
                  {capability.description}
                </p>
              </div>
            )}
          </div>
        ))}
      </div> */}
      <div className='space-y-6'>
        {capabilities.map((capability) => (
          <div
            key={capability.id}
            className='bg-white transition rounded-lg overflow-hidden group' // parent group for hover effect
          >
            <div
              className='flex border-b border-b-[#FFE0CC] items-center p-4 cursor-pointer'
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
                className={`${
                  capability.expanded ? "bg-[#FF6C0A]" : ""
                } w-10 h-10 md:w-12 md:h-12 rounded-full bg-transparent border border-[#B29D8F] p-1 flex items-center justify-center flex-shrink-0 transition-transform duration-300`}
                aria-label={
                  capability.expanded ? "Collapse section" : "Expand section"
                }
                style={{
                  transform: capability.expanded
                    ? "rotate(-90deg)"
                    : "rotate(0deg)",
                }}
              >
                <ArrowDownRight
                  className={`${
                    capability.expanded ? "bg-[#FF6C0A]" : "bg-[#B29D8F]"
                  } group-hover:bg-[#282625] group-hover:text-[#feffff] text-xl rounded-full p-1 transition-transform duration-300`}
                />
              </button>
            </div>

            {capability.expanded && (
              <div className='pb-6 pt-2 ml-20 md:ml-26 transition-transform duration-500 ease-in-out overflow-hidden'>
                <p className='text-[#555555] text-xl'>
                  {capability.description}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
