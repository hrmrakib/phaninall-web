"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import type React from "react";
import emailjs from "@emailjs/browser";
import { useRef, useState, type FormEvent } from "react";
import toast from "react-hot-toast";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const pathname = usePathname();
  const form = useRef<HTMLFormElement | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send the email through EmailJS
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current!, // Form reference passed here
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      if (result.status === 200) {
        toast.success("Successfully sent your message!");
        setSubmitSuccess(true);
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      toast.error("Error sending message: " + errorMessage);
      console.log(error);
    }

    setIsSubmitting(false);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
      setSubmitSuccess(false);
    }, 1500);
  };

  return (
    <div
      className={`bg-gradient-to-br from-orange-100 via-orange-50 to-orange-100 p-4 md:p-8 relative overflow-hidden ${
        pathname === "/contact" ? "mb-28" : "my-[140px]"
      }`}
    >
      <div className='text-center mb-24'>
        <h2 className='text-3xl md:text-[32px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500 inline-block text-shadow-sm relative'>
          Contact <span className='text-[#080808b9]'>Us</span>
          <div className='h-0.5 w-12 bg-[#303030] absolute left-1/2 transform -translate-x-1/2 bottom-0 mt-1'></div>
        </h2>
      </div>

      <div className='relative container mx-auto flex justify-center items-center'>
        <div className='absolute left-0 z-0 p-10'>
          <Image src='/contact.png' alt='contact' width={1000} height={1000} />
        </div>
        <div className='w-full lg:w-[1170px] lg:ml-auto flex justify-center items-center z-10'>
          <div className='bg-white rounded-3xl shadow-lg p-8 md:p-10 w-full max-w-2xl'>
            <div className='text-[#B29D8F] text-base mb-2'>
              Contact Information
            </div>
            <h3 className='text-2xl md:text-[32px] font-bold text-[#331B0A] mb-6'>
              Get In Touch
            </h3>

            <form onSubmit={handleSubmit} ref={form}>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
                <div>
                  <label
                    htmlFor='firstName'
                    className='block text-[#4C3A2E] text-base mb-1'
                  >
                    First Name
                  </label>
                  <input
                    type='text'
                    id='firstName'
                    name='firstName'
                    placeholder='First Name'
                    value={formData.firstName}
                    onChange={handleChange}
                    className='w-full px-4 py-2 border border-[#FF6C0A80] rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor='lastName'
                    className='block text-[#4C3A2E] text-base mb-1'
                  >
                    Last Name
                  </label>
                  <input
                    type='text'
                    id='lastName'
                    name='lastName'
                    placeholder='Last Name'
                    value={formData.lastName}
                    onChange={handleChange}
                    className='w-full px-4 py-2 border border-[#FF6C0A80] rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'
                    required
                  />
                </div>
              </div>

              <div className='mb-4'>
                <label
                  htmlFor='email'
                  className='block text-[#4C3A2E] text-base mb-1'
                >
                  Your Address
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  placeholder='E-mail or Number'
                  value={formData.email}
                  onChange={handleChange}
                  className='w-full px-4 py-2 border border-[#FF6C0A80] rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'
                  required
                />
              </div>

              <div className='mb-6'>
                <label
                  htmlFor='message'
                  className='block text-[#4C3A2E] text-base mb-1'
                >
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  placeholder='Leave us message...'
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className='w-full px-4 py-2 border border-[#FF6C0A80] rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none'
                  required
                />
              </div>

              <div className='flex justify-end'>
                <button
                  type='submit'
                  disabled={isSubmitting}
                  className={`px-6 py-3 bg-[#FF6C0A] text-white font-medium rounded-lg transition-all cursor-pointer 
                    ${
                      isSubmitting
                        ? "opacity-70 cursor-not-allowed"
                        : "hover:bg-[#FF6C0A]"
                    }
                    ${submitSuccess ? "bg-green-500 hover:bg-green-600" : ""}
                  `}
                >
                  {isSubmitting
                    ? "Sending..."
                    : submitSuccess
                    ? "Message Sent!"
                    : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
