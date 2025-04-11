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
        "At Orange Tech Consultants, our Machine Learning and AI solutions are designed to drive smarter business outcomes. We develop custom models that harness the power of data to predict trends, automate processes, and enhance decision-making. Our team specializes in supervised, unsupervised, and reinforcement learning techniques tailored to your unique needs. With a focus on scalability, we integrate these models seamlessly into your existing systems for real-time insights and automation. From concept to deployment, we ensure your AI solutions are innovative, secure, and impactful.",
      image: "/services/1.jpg",
      expanded: false,
    },
    {
      id: 2,
      title: "Generative AI & Agentic AI",
      description:
        "At Orange Tech Consultants, we specialize in both Generative AI and Agentic AI to help businesses unlock new levels of creativity and automation. Generative AI allows us to create custom content, from text to images, music, and more, driving personalized experiences and enhancing product development. Meanwhile, Agentic AI focuses on building autonomous agents that can make decisions, learn from interactions, and carry out tasks with minimal human intervention. Our expertise in both areas enables us to design solutions that adapt to your needs, drive innovation, and increase efficiency. Whether it’s generating new ideas or automating complex workflows, our AI-driven solutions empower businesses to stay ahead in a digital-first world.",
      image: "/services/2.jpg",
      expanded: false,
    },
    {
      id: 3,
      title: "Cloud & Data Engineering",
      description:
        "At Orange Tech Consultants, our Cloud & Data Engineering services empower businesses to scale and leverage their data effectively. We design and implement cloud infrastructures that are secure, scalable, and optimized for performance, ensuring seamless data storage, management, and access. Our data engineering expertise enables us to build robust data pipelines, transforming raw data into actionable insights through real-time analytics and efficient data integration. We also specialize in cloud migrations, ensuring smooth transitions to cloud platforms with minimal disruption. By combining cloud technologies and data engineering best practices, we help businesses unlock the full potential of their data while optimizing costs and performance.",
      image: "/services/3.jpg",
      expanded: false,
    },
    {
      id: 4,
      title: "MLOps & DevOps",
      description:
        "At Orange Tech Consultants, we offer MLOps and DevOps services that streamline and automate the development, deployment, and monitoring of AI/ML models and applications. MLOps integrates machine learning into the CI/CD pipeline, ensuring models are deployed seamlessly, monitored for performance, and continuously improved. Our DevOps practices focus on automating infrastructure, enhancing collaboration between development and operations teams, and ensuring scalable, reliable software delivery. Together, MLOps and DevOps enable faster, more efficient workflows, ensuring your AI models and applications run smoothly in production environments. We provide end-to-end solutions that drive innovation while maintaining high standards of quality, security, and performance.",
      image: "/services/4.jpg",
      expanded: false,
    },
    {
      id: 5,
      title: "SRE (Site Reliability Engineering) & Reliability Engineering",
      description:
        "At Orange Tech Consultants, SRE (Site Reliability Engineering) and Reliability Engineering are key components of our approach to building and maintaining resilient, high-performing systems. We focus on ensuring that your infrastructure, applications, and services are reliable, scalable, and always available, even during traffic spikes or unexpected challenges. Our SRE practices combine software engineering with systems management to automate operations, reduce manual intervention, and proactively identify and address potential issues before they impact end-users. We implement robust monitoring, incident response, and disaster recovery strategies to guarantee continuous uptime and swift issue resolution. By applying these reliability engineering principles, we help businesses deliver seamless, high-quality user experiences while optimizing resource usage and maintaining system stability.",
      image: "/services/5.jpg",
      expanded: false,
    },
    {
      id: 6,
      title: "Full-Stack Development",
      description:
        "At Orange Tech Consultants, our Full-Stack Development services cover both front-end and back-end technologies to deliver robust, scalable, and high-performance web and mobile applications. We specialize in creating intuitive user interfaces with cutting-edge front-end frameworks like React, Angular, and Vue.js, while leveraging powerful back-end technologies such as Node.js, Python, and Java for seamless server-side integration. Our team ensures that your applications are not only functional but also secure, responsive, and optimized for performance. We follow agile development practices to ensure continuous delivery and timely updates, ensuring your product evolves in line with business goals. From concept to deployment, we provide end-to-end development services to build customized, future-proof applications that drive business success.",
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
              <div className='w-[175px] h-[120px] md:w-[175px] md:h-[120px] flex-shrink-0 group-hover:opacity-70 rounded-md overflow-hidden mr-4 md:mr-6'>
                <Image
                  src={capability.image || "/placeholder.svg"}
                  alt={capability.title}
                  width={480}
                  height={480}
                  className='w-full h-full object-cover'
                />
              </div>

              <div className='flex-grow'>
                <h3 className='text-[#B29D8F] text-base md:text-[28px] group-hover:opacity-70'>
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
