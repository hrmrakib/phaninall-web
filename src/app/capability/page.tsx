import React from "react";
import CapabilityBanner from "@/components/capability/CapabilityBanner";
import CapabilityStatement from "@/components/capability/CapabilityStatement";
import ContactUs from "@/components/share/ContactUs";
const Capability = () => {
  return (
    <div>
      <CapabilityBanner />

      <CapabilityStatement />

      <ContactUs/>
    </div>
  );
};

export default Capability;
