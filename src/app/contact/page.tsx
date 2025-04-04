import ContactBanner from "@/components/contact/ContactBanner";
import ContactUs from "@/components/share/ContactUs";
import React from "react";

const Contact = () => {
  return (
    <div>
      <ContactBanner />

      <ContactUs />

      <div className='w-full my-20 md:my-[140px]'>
        {/* Mobile uses a common aspect-video, and on large screens, we set a custom ratio */}
        <div className='w-full aspect-video lg:aspect-[1900/720]'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7303.244619873768!2d90.416018494896!3d23.760844284087913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8783ab9882f%3A0x50f429f46d937f3c!2sRampura%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1743334691340!5m2!1sen!2sbd'
            className='w-full h-full'
            style={{ border: 0 }}
            allowFullScreen
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
