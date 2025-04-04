"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface ServiceData {
  id: string;
  title: string;
  icon: string;
  description: string[] | string;
  isExpanded?: boolean;
}

export default function ServicesSection() {
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const services: ServiceData[] = [
    {
      id: "1",
      title: "Generative AI",
      icon: "/service.svg",
      description: [
        "AI-Powered Content Creation: Use generative AI to automate creating articles, designs, and multimedia, boosting creativity and efficiency.",
        "Use generative AI to automate creating articles, designs, and multimedia, boosting creativity and efficiency.",
        "AI to automate creating articles, designs, and multimedia, boosting creativity and efficiency.",
        "Creation: Use generative AI to automate creating articles, designs, and multimedia, boosting creativity and efficiency.",
      ],
    },
    {
      id: "2",
      title: "AI & MLOps",
      icon: "/service.svg",
      description: [
        "AI-Powered Content Creation: Use generative AI to automate creating articles, designs, and multimedia, boosting creativity and efficiency.",
        "Use generative AI to automate creating articles, designs, and multimedia, boosting creativity and efficiency.",
        "AI to automate creating articles, designs, and multimedia, boosting creativity and efficiency.",
        "Creation: Use generative AI to automate creating articles, designs, and multimedia, boosting creativity and efficiency.",
      ],
    },
    {
      id: "3",
      title: "Site Reliability Engineering (SRE)",
      icon: "/service.svg",
      description: [
        "AI-Powered Content Creation: Use generative AI to automate creating articles, designs, and multimedia, boosting creativity and efficiency.",
        "Use generative AI to automate creating articles, designs, and multimedia, boosting creativity and efficiency.",
        "AI to automate creating articles, designs, and multimedia, boosting creativity and efficiency.",
        "Creation: Use generative AI to automate creating articles, designs, and multimedia, boosting creativity and efficiency.",
      ],
    },
    {
      id: "4",
      title: "Generative AI",
      icon: "/service.svg",
      description: [
        "AI-Powered Content Creation: Use generative AI to automate creating articles, designs, and multimedia, boosting creativity and efficiency.",
        "Use generative AI to automate creating articles, designs, and multimedia, boosting creativity and efficiency.",
        "AI to automate creating articles, designs, and multimedia, boosting creativity and efficiency.",
        "Creation: Use generative AI to automate creating articles, designs, and multimedia, boosting creativity and efficiency.",
      ],
    },
    {
      id: "5",
      title: "AI & MLOps",
      icon: "/service.svg",
      description: [
        "AI-Powered Content Creation: Use generative AI to automate creating articles, designs, and multimedia, boosting creativity and efficiency.",
        "Use generative AI to automate creating articles, designs, and multimedia, boosting creativity and efficiency.",
        "AI to automate creating articles, designs, and multimedia, boosting creativity and efficiency.",
        "Creation: Use generative AI to automate creating articles, designs, and multimedia, boosting creativity and efficiency.",
      ],
    },
    {
      id: "6",
      title: "Site Reliability Engineering (SRE)",
      icon: "/service.svg",
      description: [
        "AI-Powered Content Creation: Use generative AI to automate creating articles, designs, and multimedia, boosting creativity and efficiency.",
        "Use generative AI to automate creating articles, designs, and multimedia, boosting creativity and efficiency.",
        "AI to automate creating articles, designs, and multimedia, boosting creativity and efficiency.",
        "Creation: Use generative AI to automate creating articles, designs, and multimedia, boosting creativity and efficiency.",
      ],
    },
  ];

  const getGridCols = () => {
    if (windowWidth < 640) return "grid-cols-1";
    if (windowWidth < 1024) return "grid-cols-2";
    return "grid-cols-3";
  };

  return (
    <div className='bg-gradient-to-br from-[#ff6c0a00] via-[#ff6c0a00] to-[#ff6c0a00] p-4 md:p-8'>
      <div className='container mx-auto'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500 inline-block text-shadow-sm relative'>
            Our Service
            <div className='h-0.5 w-12 bg-orange-500 absolute left-1/2 transform -translate-x-1/2 bottom-0 mt-1'></div>
          </h2>
        </div>

        <div className={`grid ${getGridCols()} gap-6 md:gap-8`}>
          {/* {services.map((service) => (
            <div
              key={service.id}
              className='group bg-gradient-to-br from-[#ffffff] via-[#ffffff] to-[#ff6c0a57] border border-[#ff6c0a44] rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow'
            >
              <div className='flex items-start gap-4'>
                <div className='w-[80px] h-[80px]'>
                  <Image
                    src={service.icon || "/placeholder.svg"}
                    alt={service.title}
                    width={24}
                    height={24}
                    className='w-[80px] h-[80px]'
                  />
                </div>

                <h3 className='text-2xl font-bold text-[#1A0D05]'>
                  {service.title}
                </h3>
              </div>

              <div className='mt-4'>
                <div className='group'>
                  <ul className='list-disc pl-5 space-y-2'>
                    {Array.isArray(service.description) &&
                      service.description.map((desc: string, index: number) => (
                        <li
                          key={index}
                          className={`text-base text-[#1A0D05] ${
                            index > 0 ? "hidden group-hover:block" : ""
                          }`}
                        >
                          {desc[0].toUpperCase() + desc.slice(1)}
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          ))} */}

          {services.map((service) => (
            <div
              key={service.id}
              className='group bg-gradient-to-br from-[#ffffff] via-[#ffffff] to-[#ff6c0a57] border border-[#ff6c0a44] rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow'
            >
              <div className='flex items-start gap-4'>
                <div className='w-[80px] h-[80px]'>
                  <Image
                    src={service.icon || "/placeholder.svg"}
                    alt={service.title}
                    width={24}
                    height={24}
                    className='w-[80px] h-[80px]'
                  />
                </div>
                <h3 className='text-2xl font-bold text-[#1A0D05]'>
                  {service.title}
                </h3>
              </div>

              <div className='mt-4'>
                <ul className='list-disc pl-5 space-y-2'>
                  {Array.isArray(service.description) &&
                    service.description.map((desc: string, index: number) => (
                      <li
                        key={index}
                        className={`text-base text-[#1A0D05] duration-700 ease-in-out ${
                          index > 0
                            ? "opacity-0 group-hover:opacity-100 h-0 group-hover:h-auto overflow-hidden"
                            : ""
                        }`}
                      >
                        {desc[0].toUpperCase() + desc.slice(1)}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
