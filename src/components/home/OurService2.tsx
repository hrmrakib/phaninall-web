"use client";

// import Image from "next/image";
import { Dot } from "lucide-react";
import Masonry from "react-masonry-css";
import { useState } from "react";

const services = [
  {
    id: 1,
    title: "Generative AI",
    image: "/service.svg",
    features: [
      "Leverage generative AI for high-quality text, image, and code creation to boost productivity, automate tasks, and inspire innovation.",
      "Automate creative workflows with generative AI to generate articles, designs, and concepts while maintaining speed and originality.",
      "Generate text, visuals, and media automatically using generative AI, streamlining content creation for design, blogs, and branding.",
    ],
  },
  {
    id: 2,
    title: "AI & MLOps",
    image: "/service.svg",
    features: [
      "Integrate MLOps tools to streamline ML pipelines, improve model lifecycle management, and ensure scalable AI deployment practices.",
      "Build and deploy AI models at scale with MLOps strategies that enhance performance monitoring, retraining, and collaboration.",
      "Enable reliable ML operations by combining automation and orchestration tools with monitoring, CI/CD, and scalable deployment.",
    ],
  },
  {
    id: 3,
    title: "Site Reliability Engineering (SRE)",
    image: "/service.svg",
    features: [
      "Improve uptime and service resilience by applying SRE principles such as SLAs, monitoring, automation, and incident response.",
      "Use SRE best practices to automate recovery, reduce toil, and measure system health using SLIs and error budgets effectively.",
      "SRE ensures service availability and performance through reliability targets, alerting systems, and continuous infrastructure tuning.",
    ],
  },
  {
    id: 4,
    title: "Cloud Infrastructure Management",
    image: "/service.svg",
    features: [
      "Manage scalable cloud environments by automating provisioning, cost optimization, and real-time performance monitoring tools.",
      "Use cloud-native tools to optimize infrastructure, manage resources efficiently, and scale systems automatically on demand.",
      "Ensure secure, scalable infrastructure using monitoring, resource planning, and automated backups across cloud platforms.",
    ],
  },
  {
    id: 5,
    title: "DevOps Automation",
    image: "/service.svg",
    features: [
      "Automate CI/CD workflows to deliver faster, more reliable software releases with consistent testing, validation, and monitoring.",
      "Use infrastructure as code (IaC) and pipeline automation to streamline deployment processes and reduce manual configuration errors.",
      "Enhance delivery speed with DevOps tools that automate builds, testing, and deployments for continuous integration and delivery.",
    ],
  },
  {
    id: 6,
    title: "Cybersecurity Solutions",
    image: "/service.svg",
    features: [
      "Detect threats in real-time using AI-powered tools and automate responses to defend critical systems against evolving attacks.",
      "Secure sensitive data through encryption, identity access control, and proactive vulnerability management and patching tools.",
      "Meet compliance requirements with automated audits, policy enforcement, and reporting for data protection and risk reduction.",
    ],
  },
];

export default function ServicesSection2() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <div className='bg-gradient-to-br from-[#ff6c0a00] via-[#ff6c0a00] to-[#ff6c0a00] p-4 md:p-8'>
      <div className='container mx-auto'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500 inline-block text-shadow-sm relative'>
            Our Services
            <div className='h-0.5 w-12 bg-orange-500 absolute left-1/2 transform -translate-x-1/2 bottom-0 mt-1'></div>
          </h2>
        </div>

        {/* mobile view component */}
        <Masonry
          breakpointCols={{ default: 3, 1100: 3, 700: 2, 500: 1 }}
          className='md:hidden flex gap-6 mb-6'
          columnClassName='bg-clip-padding'
        >
          {services.map((service) => {
            const isExpanded = expandedCard === service.id;

            return (
              <div
                key={service.id}
                className='mb-6 cursor-pointer'
                onClick={() => toggleExpand(service.id)}
              >
                <div className='transition-transform duration-300 ease-in-out'>
                  <div className='bg-gradient-to-br from-[#ffffff] via-[#ffffff] to-[#ff6c0a57] border border-[#ff6c0a44] rounded-2xl p-6 shadow-sm hover:shadow-md transform transition-shadow'>
                    <div className='flex items-start gap-4'>
                      <div className='w-[80px] h-[80px]'>
                        <img
                          src={service.image}
                          alt={"service"}
                          // width={24}
                          // height={24}
                          className='w-[80px] h-[80px]'
                        />
                      </div>
                      <h3 className='text-2xl font-bold text-[#1A0D05]'>
                        {service.title}
                      </h3>
                    </div>

                    <div className='mt-4'>
                      <ul className='list-disc space-y-2'>
                        <li className='flex items-start gap-1 text-base text-[#1A0D05]'>
                          <Dot className='w-20' /> {service.features[0]}
                        </li>

                        <li
                          className={`flex items-start gap-1 text-base text-[#1A0D05] transition-all duration-300 ${
                            isExpanded
                              ? "h-auto opacity-100 mt-2"
                              : "h-0 opacity-0"
                          } overflow-hidden`}
                        >
                          <Dot className='w-20' /> {service.features[1]}
                        </li>
                        <li
                          className={`flex items-start gap-1 text-base text-[#1A0D05] transition-all duration-300 ${
                            isExpanded
                              ? "h-auto opacity-100 mt-2"
                              : "h-0 opacity-0"
                          } overflow-hidden`}
                        >
                          <Dot className='w-20' /> {service.features[2]}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Masonry>

        {/* desktop view component */}
        <Masonry
          breakpointCols={{
            default: 3,
            1100: 3,
            700: 2,
            500: 1,
          }}
          className='hidden md:flex gap-6 mb-6'
          columnClassName='bg-clip-padding'
        >
          {services.map((service) => (
            <div key={service?.id} className='mb-6 cursor-pointer'>
              <div className='w transition-transform duration-300 ease-in-out'>
                <div className='group bg-gradient-to-br from-[#ffffff] via-[#ffffff] to-[#ff6c0a57] border border-[#ff6c0a44] rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow transform'>
                  <div className='flex items-start gap-4'>
                    <div className='w-[80px] h-[80px]'>
                      <img
                        src={"/service.svg"}
                        alt={"service"}
                        // width={24}
                        // height={24}
                        className='w-[80px] h-[80px]'
                      />
                    </div>
                    <h3 className='text-2xl font-bold text-[#1A0D05]'>
                      {service?.title}
                    </h3>
                  </div>

                  <div className='mt-4'>
                    <ul className='list-disc space-y-2'>
                      <li className='flex items-start justify-start gap-1 text-base text-[#1A0D05] h-auto overflow-hidden'>
                        <Dot className='w-20' /> {service?.features[0]}
                      </li>
                      <li className='flex items-start justify-start gap-1 text-base text-[#1A0D05] opacity-0 group-hover:opacity-100 h-0 group-hover:h-auto overflow-hidden'>
                        <Dot className='w-20' /> {service?.features[1]}
                      </li>
                      <li className='flex items-start justify-start gap-1 text-base text-[#1A0D05] opacity-0 group-hover:opacity-100 h-0 group-hover:h-auto overflow-hidden'>
                        <Dot className='w-20' /> {service?.features[2]}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Masonry>
      </div>
    </div>
  );
}
