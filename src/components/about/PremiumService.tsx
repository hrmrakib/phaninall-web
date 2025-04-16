"use client";

import Image from "next/image";
import { ArrowDownRight, ArrowRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [services, setServices] = useState([
    {
      id: 1,
      title: "AI & ML Applications",
      subtitle: "Lifecycle",
      image: "/about/1.jpg",
      alt: "Machine Learning Life Cycle diagram",
      expanded: false,
      detail: [
        {
          id: 1,
          title: "Discovery & Strategy",
          description:
            "Discovery and strategy in AI and ML involve identifying valuable problems where intelligent automation can create meaningful impact. The discovery phase includes assessing data availability, understanding business objectives, and exploring potential AI use cases through workshops and cross-functional collaboration. Strategy focuses on aligning AI initiatives with organizational goals, building scalable infrastructure, and setting clear KPIs for success. It also involves managing risks, ensuring ethical use, and fostering a culture of innovation and experimentation. A successful AI strategy balances quick wins with long-term vision, enabling continuous learning and value delivery across the organization.",
          image: "/services/1.jpg",
          expanded: false,
        },
        {
          id: 2,
          title: "Data Engineering & Preparation",
          description:
            "Data engineering and preparation are critical steps in building effective AI and ML solutions. This process involves collecting, cleaning, and transforming raw data into a structured and usable format. Data pipelines are created to automate data flow and ensure scalability and reliability. Feature engineering and handling missing values are key tasks during preparation to enhance model accuracy. High-quality, well-prepared data forms the backbone of any successful machine learning model.",
          image: "/services/2.jpg",
          expanded: false,
        },
        {
          id: 3,
          title: "Model Development",
          description:
            "Model development is the core phase where machine learning algorithms are trained on prepared data to learn patterns and make predictions. It starts with selecting the right model based on the problem type—classification, regression, clustering, etc. The process includes training, validation, and tuning hyperparameters to optimize performance. Evaluation metrics like accuracy, precision, recall, or RMSE are used to assess model effectiveness. Iteration and experimentation are key to refining models for reliable, real-world deployment.",
          image: "/services/4.jpg",
          expanded: false,
        },
        {
          id: 4,
          title: "Deployment & Integration",
          description:
            "Deployment and integration involve taking a trained machine learning model and making it available for use in real-world applications. This includes packaging the model, exposing it via APIs, and integrating it into existing systems or user interfaces. Monitoring tools are set up to track performance, detect drift, and ensure reliability over time. Continuous integration and deployment (CI/CD) pipelines help automate updates and streamline model lifecycle management. Effective deployment ensures the model delivers consistent, scalable, and actionable insights in production environments.",
          image: "/services/5.jpg",
          expanded: false,
        },
        {
          id: 5,
          title: "MLOps & Monitoring",
          description:
            "MLOps (Machine Learning Operations) focuses on streamlining and automating the end-to-end ML lifecycle, from development to deployment and beyond. It combines principles from DevOps with data and model management to ensure reliability, scalability, and reproducibility. Monitoring is a key part of MLOps, involving tracking model performance, data drift, and system health in real time. Alerts and logs help identify issues like degrading accuracy or changes in input data distributions. Together, MLOps and monitoring enable continuous improvement, faster iteration, and trustworthy AI systems in production.",
          image: "/services/mlops.png",
          expanded: false,
        },
      ],
    },
    {
      id: 2,
      title: "Agentic AI Applications",
      subtitle: "Lifecycle",
      image: "/about/2.png",
      alt: "Generative AI Lifecycle diagram",
      expanded: false,
      detail: [
        {
          id: 1,
          title: "Use Case Identification",
          description:
            "Use case identification is the process of defining specific problems that AI and ML can address within an organization. It involves understanding business goals, pain points, and opportunities where automation or intelligence can provide value. Key stakeholders collaborate to prioritize use cases based on impact, feasibility, and alignment with strategic objectives. Data availability, technical complexity, and potential ROI are critical factors in selecting use cases. The goal is to choose use cases that offer the highest potential for tangible business outcomes and long-term scalability.",
          image: "/services/use-case.jpg",
          expanded: false,
        },
        {
          id: 2,
          title: "Data & Model Selection",
          description:
            "Data and model selection are crucial steps in building effective AI and ML solutions. The data selection process involves identifying relevant datasets that are rich, clean, and aligned with the problem at hand. Model selection focuses on choosing the right algorithm or architecture (e.g., decision trees, neural networks, SVM) based on the problem type, data characteristics, and performance goals. This phase often includes experimentation with different models to evaluate accuracy, efficiency, and scalability. A successful combination of high-quality data and the right model leads to robust, actionable predictions and insights.",
          image: "/services/model-select.jpg",
          expanded: false,
        },
        {
          id: 3,
          title: "Autonomous Agent Development",
          description:
            "Autonomous agent development involves creating systems that can operate independently and make decisions to achieve specific goals without constant human intervention. This process includes designing the agent’s architecture, which typically integrates perception (to sense the environment), reasoning (to analyze situations), and action (to execute decisions). Key technologies include reinforcement learning, where agents learn from interacting with their environment, and multi-agent systems that allow agents to work collaboratively or competitively. The development phase also includes safety and ethical considerations, ensuring agents act within predefined boundaries. Successful autonomous agents can be deployed in applications such as self-driving cars, robotic process automation, and AI-driven customer service systems.",
          image: "/services/autonomous-agent.png",
          expanded: false,
        },
        {
          id: 4,
          title: "Testing & Optimization",
          description:
            "Testing and optimization are vital steps in ensuring that AI and ML models perform effectively in real-world scenarios. Testing involves evaluating the model’s accuracy, reliability, and generalization across various datasets and use cases to ensure it meets business goals. Common techniques include cross-validation, A/B testing, and performance benchmarking against baseline models. Optimization focuses on improving model efficiency, reducing computation costs, and enhancing performance by tuning hyperparameters, refining features, or choosing alternative algorithms. Continuous testing and optimization ensure the model remains accurate, scalable, and adaptable to evolving data and conditions.",
          image: "/services/4.jpg",
          expanded: false,
        },
        {
          id: 5,
          title: "Production Deployment & Scaling",
          description:
            "Production deployment and scaling involve taking a trained machine learning model and integrating it into a live environment where it can provide real-time insights or make automated decisions. Deployment includes packaging the model, exposing it through APIs, and ensuring it works seamlessly with existing systems or applications. Scaling ensures that the model can handle increased workloads by optimizing infrastructure, often utilizing cloud platforms or containerization technologies like Docker and Kubernetes. This phase also includes monitoring the model's performance to ensure it remains effective and efficient over time. Proper scaling allows the system to grow with user demand while maintaining reliability and speed in production environments.",
          image: "/services/production-deployment-scaling.jpg",
          expanded: false,
        },
      ],
    },
    {
      id: 3,
      title: "Generative AI Applications",
      subtitle: "Lifecycle",
      image: "/about/1.jpg",
      alt: "Generative AI Lifecycle diagram",
      expanded: false,
      detail: [
        {
          id: 1,
          title: "Use Case Discovery & Strategic Alignment",
          description:
            "Use case discovery and strategic alignment are essential steps in ensuring that AI and ML initiatives align with an organization's overall business goals. The discovery process involves identifying specific business challenges or opportunities where AI can deliver significant value, such as automating repetitive tasks, improving decision-making, or enhancing customer experience. Once potential use cases are identified, they must be prioritized based on factors like business impact, feasibility, data availability, and resource requirements. Strategic alignment ensures that the chosen use cases directly contribute to the company’s long-term vision and key performance indicators (KPIs). By aligning AI projects with broader business objectives, organizations ensure that their AI investments lead to measurable, sustainable outcomes.",
          image: "/services/use-case-discovery.jpg",
          expanded: false,
        },
        {
          id: 2,
          title: "Data Curation & Prompt Engineering",
          description:
            "Data curation and prompt engineering are crucial elements in developing effective AI models, especially for generative and natural language processing (NLP) tasks. Data curation involves collecting, cleaning, and organizing high-quality datasets to ensure they are relevant, accurate, and aligned with the problem being solved. This process may include data augmentation, labeling, and validation to improve the dataset’s diversity and comprehensiveness. Prompt engineering focuses on designing and refining the inputs (prompts) used to interact with generative AI models, like GPT, to ensure they produce desired and coherent outputs. Effective prompt engineering requires a deep understanding of the model’s behavior, linguistic patterns, and the specific task requirements. Together, data curation and prompt engineering enable the creation of more accurate, relevant, and impactful AI systems by optimizing how models understand and generate responses.",
          image: "/services/prompt-engineering.jpg",
          expanded: false,
        },
        {
          id: 3,
          title: "Generative Model Development",
          description:
            "Generative model development involves designing and training AI systems that can create new data resembling the patterns found in their training datasets. This includes models like Generative Adversarial Networks (GANs), Variational Autoencoders (VAEs), and large language models (LLMs) such as GPT. The development process includes selecting the right architecture, preparing training data, and fine-tuning the model to ensure outputs are high-quality, coherent, and contextually relevant. Evaluation metrics vary by modality—e.g., FID score for images or BLEU score for text—to assess the realism and accuracy of the generated content. Generative model development requires iterative testing, tuning, and safety measures to ensure reliability, creativity, and ethical use in real-world applications.",
          image: "/services/generative-model-development.jpg",
          expanded: false,
        },
        {
          id: 4,
          title: "Integration & Scalable Deployment",
          description:
            "Integration and scalable deployment of generative AI models involve embedding these models into real-world applications and ensuring they perform reliably under varying loads. Integration includes connecting the generative model with front-end interfaces, APIs, or existing business systems to deliver content, automate workflows, or assist users in real time. Scalable deployment ensures the model can handle increasing user demands by leveraging cloud infrastructure, load balancing, and containerization technologies like Docker and Kubernetes. Monitoring tools are implemented to track performance, latency, and output quality, ensuring the model remains effective and efficient in production. This approach enables businesses to harness generative AI at scale while maintaining responsiveness, reliability, and compliance with operational standards.",
          image: "/services/integration-scalable-deployment.jpg",
          expanded: false,
        },
        {
          id: 5,
          title: "GenAI Ops & Responsible Monitoring",
          description:
            "GenAI Ops and responsible monitoring are critical for maintaining the quality, safety, and reliability of generative AI systems in production. GenAI Ops extends traditional MLOps to include version control, prompt tracking, output evaluation, and lifecycle management specific to generative models. It ensures seamless updates, rollback capabilities, and performance optimization of models like GPT, DALL·E, or Stable Diffusion. Responsible monitoring involves continuously evaluating outputs for bias, toxicity, hallucinations, and ethical risks, using human-in-the-loop systems and automated tools. Together, GenAI Ops and responsible monitoring enable organizations to scale generative AI solutions safely, transparently, and in alignment with regulatory and societal expectations.",
          image: "/services/genAI-ops-responsible-monitoring.png",
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
    <main className='container mx-auto px-4 mb-16'>
      <div className=' px-4 sm:px-6'>
        <div className='flex flex-col lg:flex-row gap-6 lg:py-24 lg:gap-8'>
          {/* Left side - Images collage */}
          <div className='lg:w-1/2 relative'>
            <div className='relative h-full space-y-6'>
              {/* Top left image */}
              <div className='group w-full md:w-[312px] h-[370px] overflow-hidden rounded-3xl lg:ml-24 z-10'>
                <Image
                  src='/about/about-big-img.png'
                  alt='Woman with notebook'
                  width={700}
                  height={700}
                  className='object-cover w-full h-full transition-transform duration-700 group-hover:scale-110'
                />
              </div>

              <div className='md:absolute top-10 right-6 col-span-1g items-self-center group w-[240px] h-[220px] overflow-hidden rounded-3xl z-50'>
                <Image
                  src='/about/about-small-img.png'
                  alt='Woman with notebook'
                  width={700}
                  height={700}
                  className='object-cover w-full h-full transition-transform duration-700 group-hover:scale-110'
                />
              </div>

              <div className='md:absolute bottom-20 right-40 col-span-1g items-self-center group w-[240px] h-[220px] overflow-hidden rounded-3xl z-50'>
                <Image
                  src='/about/about-medium-img.png'
                  alt='Woman with notebook'
                  width={700}
                  height={700}
                  className='object-cover w-full h-full transition-transform duration-700 group-hover:scale-110'
                />
              </div>

              {/* Experience box */}
              <div className='md:absolute -bottom-32 md:left-48 transform md:-translate-x-1/2 md:-translate-y-1/2 bg-[#F26B21] text-white p-6 rounded-lg w-full md:w-[170px] h-[210px] flex flex-col justify-center items-center z-10'>
                <h3 className='text-5xl font-bold'>15+</h3>
                <p className='text-center mt-2'>Years Of Experience</p>
              </div>

              {/* Dotted pattern */}
              <div className='hidden md:block absolute bottom-16 left-24 w-64 h-64 -z-50'>
                <div className='grid grid-cols-10 gap-2'>
                  {[...Array(200)].map((_, i) => (
                    <div
                      key={i}
                      className='w-[3px] h-[3px] rounded-full bg-[#d34c31] opacity-60'
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Text content */}
          <div className='lg:w-1/2'>
            <div className='space-y-6'>
              <p className='text-[#f8893f] font-medium uppercase tracking-wider'>
                ABOUT US
              </p>

              <h1 className='text-5xl font-bold text-[#f8893f] leading-tight'>
                Orange Tech Consultants
              </h1>

              <div className='space-y-6 text-[#727272] text-base leading-[30px]'>
                <p>
                  At Orange Tech Consultants, we are redefining innovation in
                  technology services. With expertise in AI/ML, Generative AI,
                  DevSecOps, Cloud Engineering, Data Engineering, SRE, and Full
                  Stack Web Development, we deliver cutting-edge solutions that
                  empower businesses to thrive in a digital- first world.
                </p>

                <p className='space-y-6 text-[#727272] text-base leading-[30px]'>
                  Our commitment lies in helping organizations unlock their true
                  potential through custom solutions, streamlined processes, and
                  transformative strategies. Whether it&apos;s building scalable
                  data pipelines, automating infrastructure, or designing secure
                  and modern web applications, our team excels in delivering
                  results that matter.
                </p>

                <p className='space-y-6 text-[#727272] text-base leading-[30px]'>
                  With a focus on operational excellence, security, and
                  scalability, we partner with clients to navigate challenges,
                  optimize performance, and stay ahead of the curve. At Orange
                  Tech Consultants, innovation meets execution to drive lasting
                  success.
                </p>
              </div>

              <div className='pt-4'>
                <Link
                  href='/contact'
                  className='inline-flex items-center px-6 lg:px-7 py-3 lg:py-4 bg-[#F26B21] text-white font-medium rounded-full hover:bg-[#e05e15] transition-colors'
                >
                  Contact Us
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5 ml-2'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z'
                      clipRule='evenodd'
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h1 className='text-center text-4xl md:text-5xl font-medium mt-14 lg:mt-0 mb-10 md:mb-16'>
        <span className='text-[#FF6B00]'>Our </span>{" "}
        <span className='text-[#4A4A4A]'>Expertise</span>
      </h1>

      <div className='flex flex-col gap-8 md:gap-12'>
        {services.map((service) => (
          <div
            key={service.id}
            className='bg-[#FFFFFF] border border-[#B29D8F] rounded-2xl p-4 md:p-6 transition-shadow duration-300 flex flex-col gap-6 cursor-pointer'
          >
            <div
              onClick={() => handleToggle(service.id)}
              className='group flex flex-col md:flex-row items-center md:justify-between'
            >
              <div className='flex flex-row items-center justify-center gap-4 md:gap-8  self-start md:self-center'>
                <div className='w-24 h-24 md:w-32 md:h-32 relative flex-shrink-0 group-hover:opacity-70'>
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.alt}
                    fill
                    className='object-contain'
                  />
                </div>
                <div>
                  <h3 className='text-[#FF6C0A] text-xl md:text-[32px] group-hover:opacity-70'>
                    {service?.title}
                  </h3>
                  {/* <p className='text-[#4D3F36] text-xl md:text-[32px]'>
                    {service?.subtitle}
                  </p> */}
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
                      <div className='w-[140px] h-[90px] md:w-[175px] md:h-[120px] flex-shrink-0 rounded-md overflow-hidden mr-4 md:mr-6 group-hover:opacity-70'>
                        <Image
                          src={capability.image || "/placeholder.svg"}
                          alt={capability.title}
                          width={480}
                          height={480}
                          className='w-full h-full object-cover rounded-md'
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
