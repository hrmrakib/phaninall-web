"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function JobCard() {
  const router = useRouter();
  // const jobs = [
  //   {
  //     id: 1,
  //     title: "Machine Learning Engineer",
  //     location: "Remote / New York, USA",
  //     jobType: "Full-time / Part-time / Freelance",
  //     salaryRange: "$60,000 - $80,000 per year",
  //     availablePosts: 4,
  //   },
  //   {
  //     id: 2,
  //     title: "Machine Learning Engineer",
  //     location: "Remote / New York, USA",
  //     jobType: "Full-time / Part-time / Freelance",
  //     salaryRange: "$60,000 - $80,000 per year",
  //     availablePosts: 4,
  //   },
  //   {
  //     id: 3,
  //     title: "Machine Learning Engineer",
  //     location: "Remote / New York, USA",
  //     jobType: "Full-time / Part-time / Freelance",
  //     salaryRange: "$60,000 - $80,000 per year",
  //     availablePosts: 4,
  //   },
  // ];

  function handleApply(jobId: number) {
    console.log(jobId);
    window.open(
      `https://docs.google.com/forms/d/e/1FAIpQLSf_AHdUEusl_7dXSMOmFs_zA3-nyvmDBOd0MToqeNixCMBCiw/viewform?usp=header`,
      "_blank"
    );
  }

  interface Job {
    id: number;
    title: string;
    location: string;
    job_type: string;
    salary_max: number;
    available_posts: number;
  }

  const [jobsData, setJobsData] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch(
          "https://phanibackend.pythonanywhere.com/api/jobs/",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!res.ok) {
          throw new Error("Failed to fetch jobs");
        }
        const data = await res.json();
        setJobsData(data);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching jobs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) return <div className='text-center h-12 text-xl font-semibold'>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  console.log({ jobsData });

  return (
    <main className='container mx-auto px-4 pb-12'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {jobsData.map((job, index) => (
          <div
            key={index}
            className='rounded-xl border border-[#FFE8D9] bg-gradient-to-br from-[#ff6c0a07] via-[#ff6c0a13] to-[#ff6c0a4f] p-6'
          >
            <h2 className='max-w-[90%] text-[#FF6B00] text-2xl md:text-[32px] font-semibold mb-4'>
              {job?.title}
            </h2>

            <div className='space-y-2 mb-6'>
              <div className='flex'>
                <span className='font-semibold text-[#1A0E05]'>Location: </span>{" "}
                <span className='text-[#1A0E05]'> {job?.location}</span>
              </div>

              <div className='flex'>
                <span className='font-semibold text-[#1A0E05]'>Job Type:</span>
                <span className='text-[#1A0E05]'>{job?.job_type}</span>
              </div>

              <div className='flex'>
                <span className='font-semibold text-[#1A0E05]'>
                  Salary Range:
                </span>
                <span className='text-[#1A0E05]'>{job?.salary_max}</span>
              </div>
            </div>

            <div className='flex justify-between items-center'>
              <div className='text-base text-[#1A0E05]'>
                Available Post: {job?.available_posts}
              </div>

              <button
                onClick={() => handleApply(job?.id)}
                className='bg-[#FF6C0A] text-[#FFF] font-semibold px-6 py-2.5 rounded-md hover:bg-[#E05F00] transition-colors cursor-pointer'
              >
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
