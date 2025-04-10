"use client";

import Image from "next/image";
import { Dot } from "lucide-react";
import Masonry from "react-masonry-css";

const services = [
  {
    id: 1,
    title: "Generative AI",
    image: "/service.svg",
    features: [
      "AI-Powered Content Creation: Use generative AI to automate creating articles, designs, and multimedia, boosting creativity and efficiency.",
      "AI-Powered Content Creation: Use generative AI to automate creating articles, designs, and multimedia, boosting creativity and efficiency.",
      "AI-Powered Content Creation: Use generative AI to automate creating articles, designs, and multimedia, boosting creativity and efficiency.",
    ],
  },
  {
    id: 2,
    title: "AI & MLOps",
    image: "/service.svg",
    features: [
      "AI-Powered Content Creation: Use generative AI to automate creating articles, designs, and multimedia, boosting creativity and efficiency.",
      "AI-Powered Content Creation: Use generative AI to automate creating articles, designs, and multimedia, boosting creativity and efficiency.",
      "AI-Powered Content Creation: Use generative AI to automate creating articles, designs, and multimedia, boosting creativity and efficiency.",
    ],
  },
  {
    id: 3,
    title: "Site Reliability Engineering (SRE)",
    image: "/service.svg",
    features: [
      "AI-Powered Content Creation: Use generative AI to automate creating articles, designs, and multimedia, boosting creativity and efficiency.",
      "AI-Powered Content Creation: Use generative AI to automate creating articles, designs, and multimedia, boosting creativity and efficiency.",
      "AI-Powered Content Creation: Use generative AI to automate creating articles, designs, and multimedia, boosting creativity and efficiency.",
    ],
  },
  {
    id: 4,
    title: "Cloud Infrastructure Management",
    image: "/service.svg",
    features: [
      "Cloud-Based Solutions: Implement scalable cloud infrastructure to ensure system availability, reliability, and performance.",
      "Efficient Resource Allocation: Optimize cloud resource usage to reduce costs and improve system efficiency.",
      "Automated Monitoring and Alerts: Set up automated alerts to detect and resolve potential issues proactively.",
    ],
  },
  {
    id: 5,
    title: "DevOps Automation",
    image: "/service.svg",
    features: [
      "CI/CD Pipeline Integration: Automate the software development lifecycle to increase deployment speed and quality.",
      "Infrastructure as Code: Implement IAC to manage cloud infrastructure more effectively.",
      "Automated Testing and Validation: Reduce human errors and ensure consistent quality with automated testing.",
    ],
  },
  {
    id: 6,
    title: "Cybersecurity Solutions",
    image: "/service.svg",
    features: [
      "Threat Detection and Response: Use AI-driven tools to identify and respond to security threats in real-time.",
      "Data Encryption: Ensure the protection of sensitive data with end-to-end encryption.",
      "Compliance and Auditing: Automate compliance processes to meet regulatory standards and provide audit trails.",
    ],
  },
];

export default function ServicesSection2() {
  return (
    <div className='bg-gradient-to-br from-[#ff6c0a00] via-[#ff6c0a00] to-[#ff6c0a00] p-4 md:p-8'>
      <div className='container mx-auto'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500 inline-block text-shadow-sm relative'>
            Our Services
            <div className='h-0.5 w-12 bg-orange-500 absolute left-1/2 transform -translate-x-1/2 bottom-0 mt-1'></div>
          </h2>
        </div>

        {/* <div className='flex flex-wrap  gap-6'>
          <div className='w-full md:w-1/2 lg:w-[32%] transition-transform duration-300 ease-in-out'>
            <div className='group bg-gradient-to-br from-[#ffffff] via-[#ffffff] to-[#ff6c0a57] border border-[#ff6c0a44] rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow transform'>
              <div className='flex items-start gap-4'>
                <div className='w-[80px] h-[80px]'>
                  <Image
                    src={"/service.svg"}
                    alt={"service"}
                    width={24}
                    height={24}
                    className='w-[80px] h-[80px]'
                  />
                </div>
                <h3 className='text-2xl font-bold text-[#1A0D05]'>
                  Generative AI
                </h3>
              </div>

              <div className='mt-4'>
                <ul className='list-disc space-y-2'>
                  <li className='flex items-start justify-start gap-1 text-base text-[#1A0D05]   h-auto overflow-hidden'>
                    <Dot className='w-20' /> AI-Powered Content Creation: Use
                    generative AI to automate creating articles, designs, and
                    multimedia, boosting creativity and efficiency.
                  </li>
                  <li className='flex items-start justify-start gap-1 text-base text-[#1A0D05] opacity-0 group-hover:opacity-100 h-0 group-hover:h-auto overflow-hidden'>
                    <Dot className='w-20' /> Enhances design workflows with
                    AI-generated visuals and concepts.
                  </li>
                  <li className='flex items-start justify-start gap-1 text-base text-[#1A0D05] opacity-0 group-hover:opacity-100 h-0 group-hover:h-auto overflow-hidden'>
                    <Dot className='w-20' /> AI-Powered Content Creation: Use
                    generative AI to automate creating articles, designs, and
                    multimedia, boosting creativity and efficiency.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='w-full md:w-1/2 lg:w-[32%] transition-transform duration-300 ease-in-out'>
            <div className='group bg-gradient-to-br from-[#ffffff] via-[#ffffff] to-[#ff6c0a57] border border-[#ff6c0a44] rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow transform'>
              <div className='flex items-start gap-4'>
                <div className='w-[80px] h-[80px]'>
                  <Image
                    src={"/service.svg"}
                    alt={"service"}
                    width={24}
                    height={24}
                    className='w-[80px] h-[80px]'
                  />
                </div>
                <h3 className='text-2xl font-bold text-[#1A0D05]'>
                  Generative AI
                </h3>
              </div>

              <div className='mt-4'>
                <ul className='list-disc space-y-2'>
                  <li className='flex items-start justify-start gap-1 text-base text-[#1A0D05]   h-auto overflow-hidden'>
                    <Dot className='w-20' /> AI-Powered Content Creation: Use
                    generative AI to automate creating articles, designs, and
                    multimedia, boosting creativity and efficiency.
                  </li>
                  <li className='flex items-start justify-start gap-1 text-base text-[#1A0D05] opacity-0 group-hover:opacity-100 h-0 group-hover:h-auto overflow-hidden'>
                    <Dot className='w-20' /> AI-Powered Content Creation: Use
                    generative AI to automate creating articles, designs, and
                    multimedia, boosting creativity and efficiency.
                  </li>
                  <li className='flex items-start justify-start gap-1 text-base text-[#1A0D05] opacity-0 group-hover:opacity-100 h-0 group-hover:h-auto overflow-hidden'>
                    <Dot className='w-20' /> AI-Powered Content Creation: Use
                    generative AI to automate creating articles, designs, and
                    multimedia, boosting creativity and efficiency.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='w-full md:w-1/2 lg:w-[32%] transition-transform duration-300 ease-in-out'>
            <div className='group bg-gradient-to-br from-[#ffffff] via-[#ffffff] to-[#ff6c0a57] border border-[#ff6c0a44] rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow transform'>
              <div className='flex items-start gap-4'>
                <div className='w-[80px] h-[80px]'>
                  <Image
                    src={"/service.svg"}
                    alt={"service"}
                    width={24}
                    height={24}
                    className='w-[80px] h-[80px]'
                  />
                </div>
                <h3 className='text-2xl font-bold text-[#1A0D05]'>
                  Generative AI
                </h3>
              </div>

              <div className='mt-4'>
                <ul className='list-disc space-y-2'>
                  <li className='flex items-start justify-start gap-1 text-base text-[#1A0D05]   h-auto overflow-hidden'>
                    <Dot className='w-20' /> AI-Powered Content Creation: Use
                    generative AI to automate creating articles, designs, and
                    multimedia, boosting creativity and efficiency.
                  </li>
                  <li className='flex items-start justify-start gap-1 text-base text-[#1A0D05] opacity-0 group-hover:opacity-100 h-0 group-hover:h-auto overflow-hidden'>
                    <Dot className='w-20' /> AI-Powered Content Creation: Use
                    generative AI to automate creating articles, designs, and
                    multimedia, boosting creativity and efficiency.
                  </li>
                  <li className='flex items-start justify-start gap-1 text-base text-[#1A0D05] opacity-0 group-hover:opacity-100 h-0 group-hover:h-auto overflow-hidden'>
                    <Dot className='w-20' /> AI-Powered Content Creation: Use
                    generative AI to automate creating articles, designs, and
                    multimedia, boosting creativity and efficiency.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='w-full md:w-1/2 lg:w-[32%] transition-transform duration-300 ease-in-out'>
            <div className='group bg-gradient-to-br from-[#ffffff] via-[#ffffff] to-[#ff6c0a57] border border-[#ff6c0a44] rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow transform'>
              <div className='flex items-start gap-4'>
                <div className='w-[80px] h-[80px]'>
                  <Image
                    src={"/service.svg"}
                    alt={"service"}
                    width={24}
                    height={24}
                    className='w-[80px] h-[80px]'
                  />
                </div>
                <h3 className='text-2xl font-bold text-[#1A0D05]'>
                  Generative AI
                </h3>
              </div>

              <div className='mt-4'>
                <ul className='list-disc space-y-2'>
                  <li className='flex items-start justify-start gap-1 text-base text-[#1A0D05]   h-auto overflow-hidden'>
                    <Dot className='w-20' /> AI-Powered Content Creation: Use
                    generative AI to automate creating articles, designs, and
                    multimedia, boosting creativity and efficiency.
                  </li>
                  <li className='flex items-start justify-start gap-1 text-base text-[#1A0D05] opacity-0 group-hover:opacity-100 h-0 group-hover:h-auto overflow-hidden'>
                    <Dot className='w-20' /> AI-Powered Content Creation: Use
                    generative AI to automate creating articles, designs, and
                    multimedia, boosting creativity and efficiency.
                  </li>
                  <li className='flex items-start justify-start gap-1 text-base text-[#1A0D05] opacity-0 group-hover:opacity-100 h-0 group-hover:h-auto overflow-hidden'>
                    <Dot className='w-20' /> AI-Powered Content Creation: Use
                    generative AI to automate creating articles, designs, and
                    multimedia, boosting creativity and efficiency.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='w-full md:w-1/2 lg:w-[32%] transition-transform duration-300 ease-in-out'>
            <div className='group bg-gradient-to-br from-[#ffffff] via-[#ffffff] to-[#ff6c0a57] border border-[#ff6c0a44] rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow transform'>
              <div className='flex items-start gap-4'>
                <div className='w-[80px] h-[80px]'>
                  <Image
                    src={"/service.svg"}
                    alt={"service"}
                    width={24}
                    height={24}
                    className='w-[80px] h-[80px]'
                  />
                </div>
                <h3 className='text-2xl font-bold text-[#1A0D05]'>
                  Generative AI
                </h3>
              </div>

              <div className='mt-4'>
                <ul className='list-disc space-y-2'>
                  <li className='flex items-start justify-start gap-1 text-base text-[#1A0D05]   h-auto overflow-hidden'>
                    <Dot className='w-20' /> AI-Powered Content Creation: Use
                    generative AI to automate creating articles, designs, and
                    multimedia, boosting creativity and efficiency.
                  </li>
                  <li className='flex items-start justify-start gap-1 text-base text-[#1A0D05] opacity-0 group-hover:opacity-100 h-0 group-hover:h-auto overflow-hidden'>
                    <Dot className='w-20' /> AI-Powered Content Creation: Use
                    generative AI to automate creating articles, designs, and
                    multimedia, boosting creativity and efficiency.
                  </li>
                  <li className='flex items-start justify-start gap-1 text-base text-[#1A0D05] opacity-0 group-hover:opacity-100 h-0 group-hover:h-auto overflow-hidden'>
                    <Dot className='w-20' /> AI-Powered Content Creation: Use
                    generative AI to automate creating articles, designs, and
                    multimedia, boosting creativity and efficiency.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='w-full md:w-1/2 lg:w-[32%] transition-transform duration-300 ease-in-out'>
            <div className='group bg-gradient-to-br from-[#ffffff] via-[#ffffff] to-[#ff6c0a57] border border-[#ff6c0a44] rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow transform'>
              <div className='flex items-start gap-4'>
                <div className='w-[80px] h-[80px]'>
                  <Image
                    src={"/service.svg"}
                    alt={"service"}
                    width={24}
                    height={24}
                    className='w-[80px] h-[80px]'
                  />
                </div>
                <h3 className='text-2xl font-bold text-[#1A0D05]'>
                  Generative AI
                </h3>
              </div>

              <div className='mt-4'>
                <ul className='list-disc space-y-2'>
                  <li className='flex items-start justify-start gap-1 text-base text-[#1A0D05]   h-auto overflow-hidden'>
                    <Dot className='w-20' /> AI-Powered Content Creation: Use
                    generative AI to automate creating articles, designs, and
                    multimedia, boosting creativity and efficiency.
                  </li>
                  <li className='flex items-start justify-start gap-1 text-base text-[#1A0D05] opacity-0 group-hover:opacity-100 h-0 group-hover:h-auto overflow-hidden'>
                    <Dot className='w-20' /> AI-Powered Content Creation: Use
                    generative AI to automate creating articles, designs, and
                    multimedia, boosting creativity and efficiency.
                  </li>
                  <li className='flex items-start justify-start gap-1 text-base text-[#1A0D05] opacity-0 group-hover:opacity-100 h-0 group-hover:h-auto overflow-hidden'>
                    <Dot className='w-20' /> AI-Powered Content Creation: Use
                    generative AI to automate creating articles, designs, and
                    multimedia, boosting creativity and efficiency.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div> */}

        <Masonry
          breakpointCols={{
            default: 3,
            1100: 3,
            700: 2,
            500: 1,
          }}
          className='flex gap-6 mb-6'
          columnClassName='bg-clip-padding'
        >
          {services.map((service) => (
            <div key={service?.id} className='mb-6'>
              <div className='w transition-transform duration-300 ease-in-out'>
                <div className='group bg-gradient-to-br from-[#ffffff] via-[#ffffff] to-[#ff6c0a57] border border-[#ff6c0a44] rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow transform'>
                  <div className='flex items-start gap-4'>
                    <div className='w-[80px] h-[80px]'>
                      <Image
                        src={"/service.svg"}
                        alt={"service"}
                        width={24}
                        height={24}
                        className='w-[80px] h-[80px]'
                      />
                    </div>
                    <h3 className='text-2xl font-bold text-[#1A0D05]'>
                      {service?.title}
                    </h3>
                  </div>

                  <div className='mt-4'>
                    <ul className='list-disc space-y-2'>
                      <li className='flex items-start justify-start gap-1 text-base text-[#1A0D05]   h-auto overflow-hidden'>
                        <Dot className='w-20' /> AI-Powered Content Creation:
                        Use generative AI to automate creating articles,
                        designs, and multimedia, boosting creativity and
                        efficiency.
                      </li>
                      <li className='flex items-start justify-start gap-1 text-base text-[#1A0D05] opacity-0 group-hover:opacity-100 h-0 group-hover:h-auto overflow-hidden'>
                        <Dot className='w-20' /> AI-Powered Content Creation:
                        Use generative AI to automate creating articles,
                        designs, and multimedia, boosting creativity and
                        efficiency.
                      </li>
                      <li className='flex items-start justify-start gap-1 text-base text-[#1A0D05] opacity-0 group-hover:opacity-100 h-0 group-hover:h-auto overflow-hidden'>
                        <Dot className='w-20' /> AI-Powered Content Creation:
                        Use generative AI to automate creating articles,
                        designs, and multimedia, boosting creativity and
                        efficiency.
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
