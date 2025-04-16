"use client";

import { useState } from "react";
import Link from "next/link";
// import Image from "next/image";
import { Menu, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className='md:hidden'>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant='ghost' size='lg' className='md:hidden'>
            <Menu className='h-6 w-6' />
            <span className='sr-only'>Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side='right' className='w-[300px] sm:w-[400px]'>
          <div className='flex flex-col h-full'>
            <div className='flex items-center justify-between border-b p-4'>
              <Link href={"/"} className='flex items-center gap-2'>
                <img
                  src='/logo.svg'
                  alt='Orange Tech Consultants Logo'
                  // width={40}
                  // height={40}
                />
                <span className='font-semibold'>Orange Tech</span>
              </Link>
              <Button
                variant='ghost'
                size='icon'
                onClick={() => setOpen(false)}
              >
                <span className='sr-only'>Close</span>
              </Button>
            </div>

            <nav className='flex flex-col gap-4 py-8 pl-5'>
              <Link
                href='/'
                className='px-2 py-1 hover:text-orange-500 transition-colors'
                onClick={() => setOpen(false)}
              >
                Home
              </Link>
              <Link
                href='/about'
                className='px-2 py-1 hover:text-orange-500 transition-colors'
                onClick={() => setOpen(false)}
              >
                About Us
              </Link>
              <Link
                href='/services'
                className='px-2 py-1 hover:text-orange-500 transition-colors'
                onClick={() => setOpen(false)}
              >
                Our Services
              </Link>
              <Link
                href='/capability'
                className='px-2 py-1 hover:text-orange-500 transition-colors'
                onClick={() => setOpen(false)}
              >
                Capability Statement
              </Link>
              <Link
                href='/careers'
                className='px-2 py-1 hover:text-orange-500 transition-colors'
                onClick={() => setOpen(false)}
              >
                Careers
              </Link>
              <Link
                href='/contact'
                className='px-2 py-1 hover:text-orange-500 transition-colors'
                onClick={() => setOpen(false)}
              >
                Contact Us
              </Link>
            </nav>

            <div className='mt-auto border-t pt-4 pl-5 pb-4'>
              <div className='flex items-center gap-2'>
                <Phone className='h-5 w-5' />
                <span className='font-medium'>+1 636-244-3219</span>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
