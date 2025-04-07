"use client";

import { useState } from "react";
import Image from "next/image";
import { Download, X, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export default function ImageViewer({ image }: { image: string }) {
  const [isOpen, setIsOpen] = useState(true);

  const handleDownload = () => {
    // Create a link element
    const link = document.createElement("a");
    link.href = image;
    link.download = image;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Card className='overflow-hidden'>
        <CardContent className='p-4'>
          <div className='relative aspect-video overflow-hidden rounded-md'>
            <Image
              src={image || "/placeholder.svg"}
              alt={image}
              fill
              className='object-cover transition-transform hover:scale-105'
            />
          </div>
          {/* <h3 className='mt-4 text-xl font-semibold'>{image.title}</h3>
          <p className='mt-2 text-sm text-gray-600 dark:text-gray-400'>
            {image}
          </p> */}
        </CardContent>
        <CardFooter className='p-4 pt-0'>
          <Button
            variant='outline'
            className='w-full'
            onClick={() => setIsOpen(true)}
          >
            <Eye className='mr-2 h-4 w-4' />
            View
          </Button>
        </CardFooter>
      </Card>

      {isOpen && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4'>
          <div className='relative h-full w-full flex flex-col'>
            <div className='absolute top-4 right-4 z-10 flex gap-2'>
              <Button
                size='icon'
                variant='outline'
                className='h-10 w-10 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20'
                onClick={handleDownload}
              >
                <Download className='h-5 w-5' />
                <span className='sr-only'>Download</span>
              </Button>
              <Button
                size='icon'
                variant='outline'
                className='h-10 w-10 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20'
                onClick={() => setIsOpen(false)}
              >
                <X className='h-5 w-5' />
                <span className='sr-only'>Close</span>
              </Button>
            </div>
            <div className='flex-1 flex items-center justify-center'>
              <div className='relative h-full w-full'>
                <Image
                  src={image || "/placeholder.svg"}
                  alt={image}
                  fill
                  className='object-contain'
                  sizes='100vw'
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
