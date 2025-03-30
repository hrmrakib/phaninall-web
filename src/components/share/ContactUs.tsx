"use client";

import Image from "next/image";
import type React from "react";

import { useState, type FormEvent } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

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

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Form submitted:", formData);
    setSubmitSuccess(true);
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
    }, 3000);
  };

  return (
    <div className='bg-gradient-to-br from-orange-100 via-orange-50 to-orange-100 p-4 md:p-8 relative overflow-hidden'>
      <div className='text-center mb-24'>
        <h2 className='text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500 inline-block text-shadow-sm relative'>
          Contact Us
          <div className='h-0.5 w-12 bg-[#303030] absolute left-1/2 transform -translate-x-1/2 bottom-0 mt-1'></div>
        </h2>
      </div>

      {/* <div className='container mx-auto bg-[url(/contact.png)] bg-cover bg-center bg-no-repeat'> */}
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

            <form onSubmit={handleSubmit}>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
                <div>
                  <label
                    htmlFor='firstName'
                    className='block text-[#4C3A2E] text-base mb-1'
                  >
                    Your Mail
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
                    Your Phone
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
                  className={`px-6 py-3 bg-[#FF6C0A] text-white font-medium rounded-lg transition-all
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
