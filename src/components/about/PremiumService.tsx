"use client";

import Image from "next/image";
import { ArrowDownRight, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [services, setServices] = useState([
    {
      id: 1,
      title: "AI & ML Project",
      subtitle: "Lifecycle",
      image: "/about/1.jpg",
      alt: "Machine Learning Life Cycle diagram",
      expanded: false,
      detail: [
        {
          id: 1,
          title: "Discovery & Strategy",
          description: "Business case assessment and AI roadmap development",
          image: "/services/1.jpg",
          expanded: false,
        },
        {
          id: 2,
          title: "Data Engineering & Preparation",
          description: "Data collection, cleaning, and feature engineering",
          image: "/services/2.jpg",
          expanded: false,
        },
        {
          id: 3,
          title: "Model Development",
          description:
            "Training, tuning, validation, and performance evaluation",
          image: "/services/4.jpg",
          expanded: false,
        },
        {
          id: 4,
          title: "Deployment & Integration",
          description:
            "API development, cloud deployment, and realtime inference",
          image: "/services/5.jpg",
          expanded: false,
        },
        {
          id: 5,
          title: "MLOps & Monitoring",
          description:
            "Continuous performance tracking, retraining, and optimization",
          image: "/services/6.png",
          expanded: false,
        },
      ],
    },
    {
      id: 2,
      title: "Agentic AI Project",
      subtitle: "Lifecycle",
      image: "/about/2.png",
      alt: "Generative AI Lifecycle diagram",
      expanded: false,
      detail: [
        {
          id: 1,
          title: "Use Case Identification",
          description: "Defining agent-based AI needs",
          image: "/services/1.jpg",
          expanded: false,
        },
        {
          id: 2,
          title: "Data & Model Selection",
          description: "Evaluating LLMs, RAG integration, and data processing",
          image: "/services/2.jpg",
          expanded: false,
        },
        {
          id: 3,
          title: "Autonomous Agent Development",
          description: "Building multi-agent workflows, memory, and reasoning",
          image: "/services/3.jpg",
          expanded: false,
        },
        {
          id: 4,
          title: "Testing & Optimization",
          description: "Benchmarking performance, implementing failsafes",
          image: "/services/4.jpg",
          expanded: false,
        },
        {
          id: 5,
          title: "Production Deployment & Scaling",
          description:
            "Deployment on cloud/edge infrastructure with continuous monitoring",
          image: "/services/5.jpg",
          expanded: false,
        },
      ],
    },
  ]);

  const handleToggle = (id: number) => {
    setServices((prevServices) =>
      prevServices.map((service) =>
        service.id === id
          ? { ...service, expanded: !service.expanded }
          : service
      )
    );
  };

  const toggleExpand = (serviceId: number, capabilityId: number) => {
    setServices((prevServices) =>
      prevServices.map((service) =>
        service.id === serviceId
          ? {
              ...service,
              detail: service.detail.map((capability) =>
                capability.id === capabilityId
                  ? { ...capability, expanded: !capability.expanded }
                  : capability
              ),
            }
          : service
      )
    );
  };

  return (
    <main className='container mx-auto px-4 py-12 md:py-20'>
      <h1 className='text-center text-4xl md:text-5xl font-medium mb-10 md:mb-16'>
        <span className='text-[#FF6B00]'>Our Premium</span>{" "}
        <span className='text-[#4A4A4A]'>Services</span>
      </h1>

      <div className='flex flex-col gap-8 md:gap-12'>
        {services.map((service) => (
          <div
            key={service.id}
            className='bg-[#FFFFFF] border border-[#B29D8F] rounded-2xl p-4 md:p-6 transition-shadow duration-300 flex flex-col gap-6 cursor-pointer'
          >
            <div
              onClick={() => handleToggle(service.id)}
              className='flex flex-col md:flex-row items-center md:justify-between'
            >
              <div className='flex flex-row items-center justify-center gap-4 md:gap-8  self-start md:self-center'>
                <div className='w-24 h-24 md:w-32 md:h-32 relative flex-shrink-0'>
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.alt}
                    fill
                    className='object-contain'
                  />
                </div>
                <div>
                  <h3 className='text-[#FF6C0A] text-xl md:text-[32px]'>
                    {service?.title}
                  </h3>
                  <p className='text-[#4D3F36] text-xl md:text-[32px]'>
                    {service?.subtitle}
                  </p>
                </div>
              </div>
              <button
                className='w-10 h-10 rotate-45 md:w-12 md:h-12 bg-[#FF6B00] rounded-full flex items-center justify-center self-end md:self-center flex-shrink-0  transition-transform duration-300'
                aria-label='Learn more'
                style={{
                  transform: service.expanded
                    ? "rotate(-90deg)"
                    : "rotate(0deg)",
                }}
              >
                <ArrowRight className='w-5 h-5 md:w-6 md:h-6 text-white' />
              </button>
            </div>

            {service?.expanded && (
              <div className='space-y-6'>
                {service?.detail?.map((capability) => (
                  <div
                    key={capability.id}
                    className='bg-white transition rounded-lg overflow-hidden group'
                  >
                    <div
                      className='flex border-b border-b-[#FFE0CC] items-center p-4 cursor-pointer'
                      onClick={() => toggleExpand(service.id, capability.id)}
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
                          capability.expanded
                            ? "Collapse section"
                            : "Expand section"
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
                              ? "bg-[#FF6C0A]"
                              : "bg-[#B29D8F]"
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
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
