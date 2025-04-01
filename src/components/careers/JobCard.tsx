"use client";

export default function JobCard() {
  const jobs = [
    {
      id: 1,
      title: "Machine Learning Engineer",
      location: "Remote / New York, USA",
      jobType: "Full-time / Part-time / Freelance",
      salaryRange: "$60,000 - $80,000 per year",
      availablePosts: 4,
    },
    {
      id: 2,
      title: "Machine Learning Engineer",
      location: "Remote / New York, USA",
      jobType: "Full-time / Part-time / Freelance",
      salaryRange: "$60,000 - $80,000 per year",
      availablePosts: 4,
    },
    {
      id: 3,
      title: "Machine Learning Engineer",
      location: "Remote / New York, USA",
      jobType: "Full-time / Part-time / Freelance",
      salaryRange: "$60,000 - $80,000 per year",
      availablePosts: 4,
    },
  ];

  function handleApply(jobId: number) {
    console.log(jobId);
  }

  return (
    <main className='container mx-auto px-4 pb-12'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {jobs.map((job) => (
          <div
            key={job?.id}
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
                <span className='text-[#1A0E05]'>{job?.jobType}</span>
              </div>

              <div className='flex'>
                <span className='font-semibold text-[#1A0E05]'>
                  Salary Range:
                </span>
                <span className='text-[#1A0E05]'>{job?.salaryRange}</span>
              </div>
            </div>

            <div className='flex justify-between items-center'>
              <div className='text-base text-[#1A0E05]'>
                Available Post: {job?.availablePosts}
              </div>

              <button
                onClick={() => handleApply(job?.id)}
                className='bg-[#FF6C0A] text-[#FFF] font-semibold px-6 py-2.5 rounded-md hover:bg-[#E05F00] transition-colors'
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
