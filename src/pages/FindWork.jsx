import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const categories = [
  { title: "Electrician", icon: "⚡" },
  { title: "Plumber", icon: "🔧" },
  { title: "Driver", icon: "🚗" },
  { title: "Maid", icon: "👩🏻‍⚖️" },
  { title: "Mason", icon: "🧱" },
  { title: "Painter", icon: "🎨" },
  { title: "Guard", icon: "🛡️" },
  { title: "Delivery", icon: "📦" },
];

const FindWork = () => {
  /* -------------------- STATE -------------------- */
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  /* -------------------- FETCH (PUBLIC) -------------------- */
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/jobs");

        if (!res.ok) {
          throw new Error("Failed to fetch jobs");
        }

        const data = await res.json();
        setJobs(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  /* -------------------- STATES -------------------- */
  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 pt-32 px-6">
        <div className="max-w-6xl mx-auto">
          <SkeletonJobGrid />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        {error}
      </div>
    );
  }

  if (jobs.length === 0) {
    return (
      <div className="min-h-screen bg-slate-50 pt-32 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-slate-900">
            No jobs available right now
          </h2>
          <p className="text-slate-600 mt-2">
            New jobs are posted frequently. Please check back later.
          </p>
        </div>
      </div>
    );
  }

  /* -------------------- UI -------------------- */
  return (
    <div className="min-h-screen bg-slate-50">

      {/* HERO */}
      <section className="pt-20 pb-8 px-6 bg-gradient-to-br from-purple-50 via-white to-orange-50 border-b">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border mb-4">
            <span>⚡</span>
            <span className="text-sm text-slate-600">
              Live local jobs
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Find work that pays today
          </h1>

          <p className="text-slate-600 mt-2">
            {jobs.length} active jobs · Verified employers · Clear daily wages
          </p>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="-mt-4 py-6 px-6">
        <div className="max-w-6xl mx-auto bg-white rounded-3xl border p-5">
          <p className="text-sm font-semibold text-slate-700 mb-3">
            Browse by skill
          </p>

          <div className="flex flex-wrap gap-3">
            {categories.map((cat, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border hover:bg-slate-100 text-sm cursor-pointer"
              >
                <span>{cat.icon}</span>
                <span className="font-medium">{cat.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOB LIST */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">

          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-slate-900">
              Available jobs
            </h2>
            <span className="text-sm text-slate-500">
              Updated recently
            </span>
          </div>

          <JobPreviewGrid jobs={jobs} />
        </div>
      </section>

    </div>
  );
};

/* -------------------- COMPONENTS -------------------- */

const JobPreviewGrid = ({ jobs }) => (
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    {jobs.map((job) => (
      <div
        key={job._id}
        className="bg-white rounded-3xl border p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition"
      >
        <div className="flex justify-between">
          <div className="text-emerald-600 font-extrabold text-xl">
            ₹{job.minPay} – ₹{job.maxPay}
            <span className="text-sm text-slate-500"> /day</span>
          </div>

          <span className="px-3 py-1 rounded-full text-xs bg-orange-100 text-orange-600">
            Hiring now
          </span>
        </div>

        <h3 className="mt-4 text-lg font-bold text-slate-900">
          {job.title}
        </h3>

        <div className="mt-2 space-y-1 text-sm text-slate-600">
          <p>📍 {job.location}</p>
          <p>👷 {job.trade}</p>
          <p>🏢 {job.employer?.name || "Employer"}</p>
        </div>

        <Link to={`/job/${job._id}`}>
          <button className="mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-orange-500 text-white font-semibold">
            View & Apply
          </button>
        </Link>
      </div>
    ))}
  </div>
);

const SkeletonJobGrid = () => (
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    {Array.from({ length: 6 }).map((_, i) => (
      <div key={i} className="bg-white rounded-3xl border p-6 animate-pulse">
        <div className="h-6 w-32 bg-slate-200 rounded mb-4"></div>
        <div className="h-5 w-3/4 bg-slate-200 rounded mb-4"></div>
        <div className="h-12 bg-slate-200 rounded-xl"></div>
      </div>
    ))}
  </div>
);

export default FindWork;
