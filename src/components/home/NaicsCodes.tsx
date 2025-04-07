import Link from "next/link";
import { useState } from "react";
import Masonry from "react-masonry-css";

const services = [
  {
    code: "541511",
    title: "Custom Computer Programming Services",
    description:
      "Custom Computer Programming Services – Focuses on designing, developing, and implementing software solutions tailored to meet specific client needs. Includes custom applications, system software, and web development.",
  },
  {
    code: "541512",
    title: "Computer Systems Design Services",
    description:
      "Data Processing, Hosting, and Related Services – Includes cloud computing services, data storage, and data hosting services.",
  },
  {
    code: "541513",
    title: "Computer Facilities Management Services",
    description:
      "Custom Computer Programming Services – Focuses on designing, developing, and implementing software solutions tailored to meet specific client needs. Includes custom applications, system software, and web development.",
  },
  {
    code: "541519",
    title: "Other Computer-Related Services",
    description:
      "Other Computer-Related Services – Covers all other IT-related services, including cloud services, cybersecurity, and IT consulting that aren't classified under other NAICS codes.",
  },
  {
    code: "541511",
    title: "Custom Computer Programming Services",
    description:
      "Research and Development in the Physical, Engineering, and Life Sciences (except Nanotechnology and Biotechnology) Involves advanced research and development activities in AI, machine learning, data science, and engineering projects.",
  },
  {
    code: "541512",
    title: "Computer Systems Design Services",
    description:
      "Data Processing, Hosting, and Related Services – Includes cloud computing services, data storage, and data hosting services.",
  },
  {
    code: "541513",
    title: "Computer Facilities Management Services",
    description:
      "Computer Training – Provides training services in IT-related fields, including programming, cloud engineering, cybersecurity, and AI/ML training sessions.",
  },
  {
    code: "541430",
    title: "Computer Facilities Management Services",
    description:
      "Computer Training – Provides training services in IT-related fields, including programming, cloud engineering, cybersecurity, and AI/ML training sessions.",
  },
  {
    code: "541519",
    title: "Other Computer-Related Services",
    description:
      "All Other Professional, Scientific, and Technical Services –Encompasses a variety of professional services such as DevSecOps, SRE, and AI/ML implementation that don't fall under other specific categories.",
  },
];

export default function NaicsCodes() {
  return (
    <div className='container mx-auto px-4 mb-14 md:mb-20'>
      <div className='w-full pt-[40px] pb-[3px] bg-[#FFF0E5] rounded-3xl'>
        <h2 className='text-3xl md:text-4xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500'>
          NAICS Codes
          <div className='w-[60px] border-t-2 border-black mx-auto'></div>
        </h2>
        <div className='m-[40px]'>
          <Masonry
            breakpointCols={{
              default: 4,
              1100: 3,
              700: 2,
              500: 1,
            }}
            className='flex gap-[17px]'
            columnClassName='bg-clip-padding'
          >
            {services.map((service) => (
              <CodeService key={service.code} service={service} />
            ))}
          </Masonry>
        </div>
      </div>
    </div>
  );
}

function CodeService({ service }: any) {
  const { code, description } = service;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className='group hover:py-7 w-full p-5 mb-[17px] bg-white bg-gradient-to-br from-[#ffffff] via-[#ffffff] to-[#ff6c0a57] border border-[#ff6c0a44] rounded-2xl px-4 py-7 transition-transform duration-150 cursor-pointer'
    >
      <div className='text-center'>
        <div
          className={`${
            isOpen ? "bg-[#FF6C0A] py-6" : "hover:py-7 hover:bg-[#FF6C0A]"
          } rounded-md transition-all duration-100`}
        >
          <p
            className={`border-b ${
              isOpen
                ? "border-[#FFD1B2] text-white"
                : "border-[#FFD1B2] text-black"
            } mx-[5px] text-[#1A0D05] pb-2 hover:text-white group-hover:text-white font-bold`}
          >
            Codes
          </p>
          <p
            className={`${
              isOpen ? "text-white" : "text-[#1A0D05]"
            } font-bold group-hover:text-white text-base pt-2`}
          >
            {code}
          </p>
        </div>

        {isOpen && (
          <div className='flex flex-col mt-4'>
            <p className='mt-2 text-left'>{description}</p>

            <Link
              className='mt-5 text-[#FF6C0A] text-lg ml-auto flex items-center gap-2'
              href={"/"}
            >
              View more{" "}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                className='lucide lucide-arrow-down-right-icon lucide-arrow-down-right -rotate-90'
              >
                <path d='m7 7 10 10' />
                <path d='M17 7v10H7' />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
