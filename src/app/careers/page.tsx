import CareersBanner from "@/components/careers/CareerBanner";
import JobCard from "@/components/careers/JobCard";
import OrganizeConsulting from "@/components/careers/OrganizaConsulting";
import React from "react";

const Careers = () => {
  return (
    <div>
      <CareersBanner />
      
      <JobCard />

      <OrganizeConsulting />
    </div>
  );
};

export default Careers;
