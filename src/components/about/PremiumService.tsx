import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className='container mx-auto px-4 py-12 md:py-20'>
      <h1 className='text-center text-4xl md:text-5xl font-medium mb-10 md:mb-16'>
        <span className='text-[#FF6B00]'>Our Premium</span>{" "}
        <span className='text-[#4A4A4A]'>Services</span>
      </h1>

      <div className='flex flex-col gap-6'>
        <ServiceCard
          image='/about/1.jpg'
          title='AI & ML Project'
          subtitle='Lifecycle'
          alt='Machine Learning Life Cycle diagram'
        />

        <ServiceCard
          image='/about/2.png'
          title='Generative AI Lifecycle'
          subtitle='Management'
          alt='Generative AI Lifecycle diagram'
        />

        <ServiceCard
          image='/about/3.jpg'
          title='Agentic AI Project'
          subtitle='Lifecycle'
          alt='Agent development lifecycle diagram'
        />
      </div>
    </main>
  );
}

interface ServiceCardProps {
  image: string;
  title: string;
  subtitle: string;
  alt: string;
}

function ServiceCard({ image, title, subtitle, alt }: ServiceCardProps) {
  return (
    <div className='bg-[#FFFFFF] border border-[#B29D8F] rounded-2xl p-4 md:p-6 flex flex-col md:flex-row items-center md:justify-between hover:shadow-md transition-shadow duration-300'>
      <div className='flex flex-row items-center justify-center gap-4 md:gap-8  self-start md:self-center'>
        <div className='w-24 h-24 md:w-32 md:h-32 relative flex-shrink-0'>
          <Image
            src={image || "/placeholder.svg"}
            alt={alt}
            fill
            className='object-contain'
          />
        </div>
        <div>
          <h3 className='text-[#FF6C0A] text-xl md:text-[32px]'>{title}</h3>
          <p className='text-[#4D3F36] text-xl md:text-[32px]'>{subtitle}</p>
        </div>
      </div>
      <button
        className='w-10 h-10 rotate-45 md:w-12 md:h-12 bg-[#FF6B00] rounded-full flex items-center justify-center self-end md:self-center flex-shrink-0'
        aria-label='Learn more'
      >
        <ArrowRight className='w-5 h-5 md:w-6 md:h-6 text-white' />
      </button>
    </div>
  );
}
