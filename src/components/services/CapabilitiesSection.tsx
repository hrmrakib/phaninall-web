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
        "Model development, training, and deployment Custom AI solutions for automation and analytics",
      image: "/services/1.jpg",
      expanded: false,
    },
    {
      id: 2,
      title: "Generative AI & Agentic AI",
      description:
        "LLM fine-tuning, Retrieval-Augmented Generation (RAG) Development of agent-based AI applications",
      image: "/services/2.jpg",
      expanded: false,
    },
    {
      id: 3,
      title: "Cloud & Data Engineering",
      description:
        "Scalable AI infrastructure and cloud solutions Data pipelines and real-time data processing",
      image: "/services/3.jpg",
      expanded: false,
    },
    {
      id: 4,
      title: "MLOps & DevOps",
      description:
        "Continuous integration/deployment (CI/CD) for AI/ML models Model monitoring, retraining, and automation",
      image: "/services/4.jpg",
      expanded: false,
    },
    {
      id: 5,
      title: "SRE & Reliability Engineering",
      description: "AI system resilience, observability, and fault tolerance",
      image: "/services/5.jpg",
      expanded: false,
    },
    {
      id: 6,
      title: "Full-Stack Development",
      description:
        "AI-powered applications, dashboards, and custom software solutions",
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

      <div className='space-y-6'>
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
                } w-10 h-10 md:w-10 md:h-10 rounded-full bg-transparent border border-[#B29D8F] p-1 flex items-center justify-center flex-shrink-0 transition-transform duration-300`}
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
                    capability.expanded
                      ? "bg-[#FF6C0A] text-white"
                      : "bg-[#B29D8F]"
                  } group-hover:bg-[#46362D group-hover:text-[#feffff] text-2xl rounded-full p-1 transition-transform duration-300 ${
                    !capability.expanded ? "group-hover:bg-[#46362D]" : ""
                  }`}
                />
              </button>
            </div>

            {capability.expanded && (
              <div className='pb-6 pt-2 ml-20 md:ml-26 transition-transform duration-500 ease-in-out overflow-hidden'>
                <p className='text-[#555555] text-xl transition-opacity duration-500 ease-in-out delay-200'>
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
