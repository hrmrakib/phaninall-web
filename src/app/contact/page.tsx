// import ContactBanner from "@/components/contact/ContactBanner";
import ContactUs from "@/components/share/ContactUs";
import React from "react";

const Contact = () => {
  return (
    <div>
      {/* <ContactBanner /> */}

      <ContactUs />

      <div className='w-full my-20 md:my-[140px]'>
        {/* Mobile uses a common aspect-video, and on large screens, we set a custom ratio */}
        <div className='w-full aspect-video lg:aspect-[1900/720]'>
          <iframe
            // src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3110.8538734485014!2d-90.76777662365971!3d38.76705545438373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1744475581990!5m2!1sen!2sbd'

            src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3110.8776129548223!2d-90.765458!3d38.766511!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87dece309738e2c1%3A0xbb2df725717fdc04!2s7827%20Town%20Square%20Ave%2C%20Dardenne%20Prairie%2C%20MO%2063368!5e0!3m2!1sen!2sus!4v1744812565321!5m2!1sen!2sus'
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
