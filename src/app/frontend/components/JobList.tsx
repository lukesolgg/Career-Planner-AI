"use client";
import { useEffect, useState } from 'react';

type Job = {
  title: string;
  description: string;
};

function JobList() {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    fetch('/api/jobs')
      .then(response => response.json())
      .then(data => setJobs(data))
      .catch(error => console.error('Error fetching jobs:', error));
  }, []);

  return (
    <div>
      {jobs.map(job => (
        <div key={job.title}>{job.title} - {job.description}</div>
      ))}
    </div>
  );
}

export default JobList;