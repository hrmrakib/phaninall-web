"use client";

import Image from "next/image";
import { Dot } from "lucide-react";

interface ServiceData {
  id: string;
  title: string;
  icon: string;
  description: string[] | string;
  isExpanded?: boolean;
}

export default function ServicesSection() {
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

  return (
    <div className='bg-gradient-to-br from-[#ff6c0a00] via-[#ff6c0a00] to-[#ff6c0a00] p-4 md:p-8'>
      <div className='container mx-auto'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500 inline-block text-shadow-sm relative'>
            Our Service
            <div className='h-0.5 w-12 bg-orange-500 absolute left-1/2 transform -translate-x-1/2 bottom-0 mt-1'></div>
          </h2>
        </div>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 md:gap-8`}
        >
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
                <ul className='space-y-2'>
                  {Array.isArray(service.description) &&
                    service.description.map((desc: string, index: number) => (
                      <li
                        key={index}
                        className={`flex items-start justify-start gap-1 text-base text-[#1A0D05] duration-700 ease-in-out ${
                          index > 0
                            ? "opacity-0 group-hover:opacity-100 h-0 group-hover:h-auto overflow-hidden"
                            : ""
                        }`}
                      >
                        <Dot className='w-20' />{" "}
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
