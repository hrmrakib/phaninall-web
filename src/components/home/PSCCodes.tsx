"use client";

import { useState } from "react";

interface CodeCardData {
  id: string;
  code: string;
  title?: string;
  description?: string;
  isExpanded?: boolean;
}

export default function CodeCards() {
  const [cards, setCards] = useState<CodeCardData[]>([
    {
      id: "1",
      code: "541511",
      title: "Custom Computer Programming Services",
      description:
        "Focuses on designing, developing, and implementing software solutions tailored to meet specific client needs. Includes custom applications, system software, and web development.",
      isExpanded: false,
    },
    {
      id: "2",
      code: "541512",
      title: "Computer Systems Design Services",
      description:
        "Planning and designing computer systems that integrate hardware, software, and communication technologies. Includes consulting on system requirements, security, and implementation.",
      isExpanded: false,
    },
    {
      id: "3",
      code: "541513",
      title: "Computer Facilities Management Services",
      description:
        "On-site management and operation of client's computer systems and/or data processing facilities. Includes support services and ongoing management of systems or facilities.",
      isExpanded: false,
    },
    {
      id: "4",
      code: "541519",
      title: "Other Computer Related Services",
      description:
        "Specialized computer services not classified elsewhere. Includes disaster recovery services, software installation, and computer system auditing services.",
      isExpanded: false,
    },
    {
      id: "5",
      code: "518210",
      title: "Data Processing, Hosting, and Related Services",
      description:
        "Providing infrastructure for hosting, data processing services, and related services. Includes specialized hosting activities and automated data processing.",
      isExpanded: false,
    },
    {
      id: "6",
      code: "519190",
      title: "All Other Information Services",
      description:
        "Information services not classified elsewhere. Includes database and information retrieval services, news syndicates, and libraries or archives.",
      isExpanded: false,
    },
    {
      id: "7",
      code: "541990",
      title: "All Other Professional, Scientific, and Technical Services",
      description:
        "Professional, scientific, and technical services not classified elsewhere. Includes arbitration and mediation services, patent brokering, and weather forecasting.",
      isExpanded: false,
    },
    {
      id: "8",
      code: "541715",
      title:
        "Research and Development in the Physical, Engineering, and Life Sciences",
      description:
        "Conducting research and experimental development in physical, engineering, and life sciences. Includes biotechnology, environmental, and industrial research.",
      isExpanded: false,
    },
    {
      id: "9",
      code: "611420",
      title: "Computer Training",
      description:
        "Providing computer training (except as part of formal educational programs). Includes training in the use of computer software, hardware, and programming languages.",
      isExpanded: false,
    },
  ]);

  const toggleExpand = (id: string) => {
    setCards(
      cards.map((card) => ({
        ...card,
        isExpanded: card.id === id ? !card.isExpanded : card.isExpanded,
      }))
    );
  };

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {cards.map((card) => (
        <div key={card.id} className='grid  grid-cols-1 border-2'>
          {/* Card Header */}
          <div
            className={`rounded-xl p-6 cursor-pointer transition-all duration-200 hover:shadow-md 
              ${
                card.isExpanded
                  ? "bg-[#FF6B00] text-white rounded-b-none"
                  : "bg-white/80 hover:bg-white"
              }`}
            onClick={() => toggleExpand(card.id)}
          >
            <div className='text-center'>
              <p className='text-lg font-medium'>Code</p>
              <h2 className='text-2xl font-bold mt-2'>{card.code}</h2>
            </div>
          </div>

          {/* Expanded Content */}
          <div
            className={`
              overflow-hidden transition-all duration-300 bg-white rounded-b-xl shadow-md
              ${
                card.isExpanded
                  ? "max-h-96 opacity-100 p-6"
                  : "max-h-0 opacity-0 p-0 border-0"
              }
            `}
          >
            <h3 className='font-medium'>{card.title}</h3>
            <p className='text-sm mt-2'>{card.description}</p>
            <div className='flex justify-end mt-4'>
              <button className='flex items-center text-sm font-medium text-[#FF6B00]'>
                View more
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='ml-1 h-4 w-4'
                >
                  <path d='M5 12h14' />
                  <path d='m12 5 7 7-7 7' />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
