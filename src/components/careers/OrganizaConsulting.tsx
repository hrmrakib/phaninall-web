"use client";

import { useState } from "react";
// import Image from "next/image";
import { ArrowDownRight } from "lucide-react";

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
        "Our expert team at Orange Tech Consultants brings deep domain knowledge, hands-on experience, and a passion for solving complex challenges. <br /> <br /> With specialists across AI/ML, Generative AI, Cloud, and Full Stack Development, we deliver high-impact, innovative solutions. We stay ahead of the curve by continuously learning and applying the latest technologies. Our collaborative, client-focused approach ensures every project is aligned with your goals. Simply put, we turn expertise into results.",
      image: "/careers/1.png",
      expanded: false,
    },
    {
      id: 2,
      title: "Proven Track Record",
      description:
        "Orange Tech Consultants has a proven track record of delivering successful, high-impact solutions across diverse industries. <br /> <br /> Our portfolio includes transformative projects in AI/ML, Generative AI, Cloud Engineering, and Full Stack Development. Clients trust us for our consistency, technical excellence, and ability to drive measurable results. We pride ourselves on turning complex challenges into scalable, long-term successes. Our results speak for themselves—built on innovation, reliability, and client satisfaction.",
      image: "/careers/2.png",
      expanded: false,
    },
    {
      id: 3,
      title: "Competitive Pricing",
      description:
        "We offer competitive pricing without compromising on quality or innovation. Our flexible engagement models are designed to fit a variety of budgets and project scopes. <br /> <br /> We focus on maximizing value, ensuring you get the most efficient and cost-effective solutions for your investment. By optimizing resources and leveraging automation, we reduce overhead while delivering top-tier results. Partnering with us means smart spending with high ROI.",
      image: "/careers/3.png",
      expanded: false,
    },
    {
      id: 4,
      title: "Scalability & Customization",
      description:
        "At Orange Tech Consultants, scalability and customization are at the heart of every solution we build. We design systems that grow with your business, ensuring long-term flexibility and performance. <br /> <br /> Whether it’s AI/ML, Cloud, or Full Stack Development, our solutions are tailored to your unique needs and evolving goals. From startups to enterprise-scale operations, we adapt seamlessly to your requirements. With us, you get technology that fits—today and tomorrow.",
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
        <span className='text-[#4D3F36]'>Consulting?</span>
      </h2>

      <div className='space-y-6'>
        {capabilities.map((capability) => (
          <div
            key={capability.id}
            className='bg-white rounded-lg overflow-hidden group'
          >
            <div
              className='flex items-center p-4 border-b border-b-[#FFE0CC] cursor-pointer'
              onClick={() => toggleExpand(capability.id)}
            >
              <div className='w-[175px] h-[120px] md:w-[175px] md:h-[120px] flex-shrink-0 rounded-md overflow-hidden mr-4 md:mr-6 group-hover:opacity-70 transition-opacity duration-300'>
                <img
                  src={capability.image || "/placeholder.svg"}
                  alt={capability.title}
                  // width={480}
                  // height={480}
                  className='w-full h-full object-cover'
                />
              </div>

              <div className='flex-grow'>
                <h3 className='text-[#B29D8F] text-base md:text-[28px] group-hover:opacity-70'>
                  {capability.title}
                </h3>
              </div>

              <button
                className='w-10 h-10 md:w-10 md:h-10 rounded-full bg-transparent border border-[#B29D8F] p-1 flex items-center justify-center flex-shrink-0 transition-transform duration-300'
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
                  } group-hover:bg-[#46362D group-hover:text-[#feffff] text-2xl rounded-full p-1 transition-all duration-500 ease-in-out ${
                    !capability.expanded ? "group-hover:bg-[#46362D]" : ""
                  }`}
                />
              </button>
            </div>

            {capability.expanded && (
              <div className='px-4 pb-6 pt-2 ml-20 md:ml-26'>
                <p
                  className='text-[#555555] text-xl transition-opacity duration-500 ease-in-out delay-200'
                  dangerouslySetInnerHTML={{
                    __html: capability.description,
                  }}
                >
                  {/* {capability.description} */}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
