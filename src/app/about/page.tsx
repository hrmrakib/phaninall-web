import React from "react";
// import AboutBanner from "@/components/about/AboutBanner";
import ContactUs from "@/components/share/ContactUs";
import PremiumService from "@/components/about/PremiumService";
import OrganizeConsulting from "@/components/careers/OrganizaConsulting";

const AboutPage = () => {
  return (
    <div>
      {/* <AboutBanner /> */}

      <PremiumService />

      <OrganizeConsulting />

      <ContactUs />
    </div>
  );
};

export default AboutPage;
