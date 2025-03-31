import React from "react";
import AboutBanner from "@/components/about/AboutBanner";
import ContactUs from "@/components/share/ContactUs";
import PremiumService from "@/components/about/PremiumService";

const AboutPage = () => {
  return (
    <div>
      <AboutBanner />

      <PremiumService />

      <ContactUs />
    </div>
  );
};

export default AboutPage;
