"use client";

import { useEffect, useState } from "react";

export default function JobCard() {
  function handleApply(applyLink: string) {
      console.log({ applyLink });
      window.open(
        applyLink,
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
    apply_link: string;
  }

  const [jobsData, setJobsData] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
        setError((err as Error)?.message || "An unknown error occurred");
        console.error("Error fetching jobs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading)
    return (
      <div className='text-center h-12 text-xl font-semibold'>Loading...</div>
    );
  if (error) return <div>Error: {error}</div>;

  console.log({ jobsData });

  return (
    <main className='container mx-auto px-4 pb-12'>
      {!jobsData.length && (
        <div className='flex items-center justify-center mb-8'>
          <h2 className='text-3xl'>Currently, there are no open positions! </h2>
        </div>
      )}

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {jobsData.map((job, index) => (
          <div
            key={index}
            className='rounded-xl border border-[#FFE8D9] bg-gradient-to-br from-[#ff6c0a07] via-[#ff6c0a13] to-[#ff6c0a4f] p-6'
          >
            <h2 className='max-w-[90%] text-[#FF6B00] text-2xl md:text-[26px] font-semibold mb-4'>
              {job?.title}
            </h2>

            <div className='space-y-2 mb-6'>
              <div className='flex items-center gap-1'>
                <span className='font-semibold text-[#1A0E05] text-sm'>
                  Location:{" "}
                </span>{" "}
                <span className='text-[#1A0E05] text-sm'> {job?.location}</span>
              </div>

              <div className='flex items-center gap-1'>
                <span className='font-semibold text-[#1A0E05] text-sm'>
                  Job Type:{" "}
                </span>
                <span className='text-[#1A0E05] text-sm'>{job?.job_type}</span>
              </div>

              <div className='flex items-center gap-1'>
                <span className='font-semibold text-[#1A0E05] text-sm'>
                  Salary Range:
                </span>
                <span className='text-[#1A0E05] text-sm'>
                  {job?.salary_max}
                </span>
              </div>
            </div>

            <div className='flex justify-between items-center'>
              <div className='text-sm text-[#1A0E05]'>
                Available Post: {job?.available_posts}
              </div>

              <button
                onClick={() => handleApply(job?.apply_link)}
                className='bg-[#FF6C0A] text-[#FFF] text-sm font-semibold px-6 py-2.5 rounded-md hover:bg-[#E05F00] transition-colors cursor-pointer'
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
