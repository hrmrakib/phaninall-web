"use client";

import AboutUs from "@/components/home/AboutSection";
import Hero from "@/components/home/Hero";
// import OurService from "@/components/home/OurService";
import ContactUs from "@/components/share/ContactUs";
import NaicsCodes from "@/components/home/NaicsCodes";
import PSCCODES from "@/components/home/PSCCodes";
import ServicesSection2 from "@/components/home/OurService2";
export default function Home() {
  return (
    <div className='min-h- flex flex-col'>
      <main className='flex-1'>
        <Hero />

        <AboutUs />

        <NaicsCodes />

        <PSCCODES />

        {/* <OurService /> */}
        <ServicesSection2 />

        <ContactUs />
      </main>
    </div>
  );
}
