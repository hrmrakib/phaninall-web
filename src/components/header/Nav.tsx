"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import { usePathname } from "next/navigation";
import { MobileNav } from "@/components/header/MobileNav";

export default function Nav() {
  const pathname = usePathname();

  if (pathname === "/") {
    return null;
  }

  return (
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
          Services
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
  );
}
