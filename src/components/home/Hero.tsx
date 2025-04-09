import React from "react";
import { Button } from "../ui/button";
import { MobileNav } from "../header/MobileNav";
import { Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const Hero = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className='h-screen bg-[url("/hero-bg2.png")] md:bg-[url("/hero-bg.png")] bg-cover bg-center bg-no-repeat'>
      {/* This header is for the home page */}
      <header className='z-0 bg-transparent container mx-auto h-[90px] xl:h-[142px] py-4 px-4 flex items-center justify-between'>
        <Link href={"/"} className='flex items-center'>
          <Image
            src='/logo.svg'
            alt='Orange Tech Consultants Logo'
            width={250}
            height={250}
            className='w-[100px] h-[42px]'
          />
        </Link>

        <nav className='hidden md:flex items-center space-x-8'>
          <Link
            href='/'
            className={`text-lg hover:text-[#FF6C0A] transition-colors ${
              pathname === "/" ? "text-[#FF6C0A]" : "text-[#000000]"
            }`}
          >
            Home
          </Link>
          <Link
            href='/about'
            className={`text-lg hover:text-[#FF6C0A] transition-colors ${
              pathname === "/about" ? "text-[#FF6C0A]" : "text-[#000000]"
            }`}
          >
            About Us
          </Link>
          <Link
            href='/services'
            className={`text-lg hover:text-[#FF6C0A] transition-colors ${
              pathname === "/services" ? "text-[#FF6C0A]" : "text-[#000000]"
            }`}
          >
            Our Services
          </Link>
          <Link
            href='/capability'
            className={`text-lg hover:text-[#FF6C0A] transition-colors ${
              pathname === "/capability" ? "text-[#FF6C0A]" : "text-[#000000]"
            }`}
          >
            Capability Statement
          </Link>
          <Link
            href='/careers'
            className={`text-lg hover:text-[#FF6C0A] transition-colors ${
              pathname === "/careers" ? "text-[#FF6C0A]" : "text-[#000000]"
            }`}
          >
            Careers
          </Link>
          <Link
            href='/contact'
            className={`text-lg hover:text-[#FF6C0A] transition-colors ${
              pathname === "/contact" ? "text-[#FF6C0A]" : "text-[#000000]"
            }`}
          >
            Contact Us
          </Link>
        </nav>

        <div className='hidden md:flex items-center gap-2'>
          <Phone className='h-5 w-5' />
          <span className='font-medium'>+1 636-244-3219</span>
        </div>

        <MobileNav />
      </header>

      {/* This section is for the home page */}
      <section className='container mx-auto px-4 py-12 md:py-20 grid md:grid-cols-2 gap-8 items-center'>
        <div className='space-y-6'>
          <h1 className='text-5xl md:text-6xl lg:text-7xl text-[#000000] font-bold tracking-tight'>
            Orange Tech Consultants
          </h1>
          <p className='text-lg text-black md:text-[#5A5A5A] max-w-lg'>
            To be a trusted leader in AI-driven technology solutions that
            enhance security, innovation, and operational excellence.
          </p>
          <div className='flex flex-wrap gap-4 pt-4'>
            <Button
              onClick={() => router.push("/services")}
              variant='outline'
              className='text-xl border-[#FF6C0A] text-[#FF6C0A] hover:bg-orange-50 hover:text-[#ff6c0ae3] py-6 px-6 cursor-pointer'
            >
              Explore Now
            </Button>
            <Button
              onClick={() => router.push("/contact")}
              className='text-xl bg-[#FF6C0A] border-[#FF6C0A] text-[#FFFFFF] hover:text-white hover:bg-[#ff6c0ae3] py-6 px-6 cursor-pointer'
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
