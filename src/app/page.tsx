"use client";

import Nav from "@/components/header/Nav";
import AboutUs from "@/components/home/AboutSection";
import Hero from "@/components/home/Hero";
import CodesDisplay from "@/components/home/CodesDisplay";

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Nav />

      <main className='flex-1'>
        <Hero />

        <AboutUs />

        <CodesDisplay />
      </main>
    </div>
  );
}
