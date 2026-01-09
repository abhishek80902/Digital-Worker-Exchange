// src/pages/FindWork.jsx
import React from "react";
import { Search, MapPin, Mic } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  { title: "Electrician", jobs: "45 jobs", icon: "⚡" },
  { title: "Plumber", jobs: "38 jobs", icon: "🔧" },
  { title: "Driver", jobs: "62 jobs", icon: "🚗" },
  { title: "Maid", jobs: "29 jobs", icon: "👩🏻‍⚖️" },
  { title: "Mason", jobs: "41 jobs", icon: "🧱" },
  { title: "Painter", jobs: "33 jobs", icon: "🎨" },
  { title: "Guard", jobs: "27 jobs", icon: "🔌" },
  { title: "Delivery", jobs: "54 jobs", icon: "📦" },
];

const aiJobs = [
  {
    id: 1,
    title: "Electrician Needed",
    employer: "BuildPro Construction",
    salary: "₹500-700/day",
    location: "Mumbai, Maharashtra",
    type: "Full-time",
    tags: ["Wiring", "Panel Installation", "Safety"],
    time: "2 days ago",
  },
  {
    id: 2,
    title: "Plumber Required",
    employer: "HomeServe Solutions",
    salary: "₹400-600/day",
    location: "Delhi NCR",
    type: "Contract",
    tags: ["Pipe Fitting", "Repair", "Maintenance"],
    time: "1 day ago",
  },
  {
    id: 3,
    title: "Delivery Driver",
    employer: "QuickShip Logistics",
    salary: "₹300-500/day",
    location: "Bangalore",
    type: "Part-time",
    tags: ["Driving", "Delivery", "Navigation"],
    time: "3 hours ago",
  },
];

const nearbyJobs = [
  {
    id: 4,
    title: "Home Cleaner",
    employer: "UrbanHome Services",
    salary: "₹400/day",
    location: "near you",
    type: "Part-time",
    tags: ["Cleaning", "Housekeeping"],
    time: "5 hours ago",
  },
  {
    id: 5,
    title: "Cook for Home",
    employer: "Private Employer",
    salary: "₹500/day",
    location: "near you",
    type: "Contract",
    tags: ["Cooking", "Kitchen Help"],
    time: "12 hours ago",
  },
  {
    id: 6,
    title: "Construction Helper",
    employer: "BuildRight Co.",
    salary: "₹450/day",
    location: "near you",
    type: "Daily Wage",
    tags: ["Labour", "Construction"],
    time: "1 day ago",
  },
];

const FindWork = () => {
  return (
    <div className="min-h-screen bg-white">

      {/* HERO + SEARCH */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-purple-600/10 to-orange-500/10">
        <div className="max-w-5xl mx-auto text-center">

          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">
            Find the Best Jobs Near You
          </h1>

          <p className="text-slate-600 mt-3 text-lg">
            Search jobs by skill, location, wage, and more.
          </p>

          {/* Premium Search Bar */}
          <div className="mt-8 bg-white rounded-3xl shadow-xl p-6 border border-slate-200 
          flex flex-col md:flex-row gap-4">

            {/* Skill Input */}
            <div className="flex items-center gap-3 flex-grow bg-slate-50 px-4 py-3 rounded-2xl">
              <Search size={20} className="text-slate-500" />
              <input
                type="text"
                placeholder="Search by skill (Electrician, Driver...)"
                className="bg-transparent w-full outline-none text-slate-700"
              />
            </div>

            {/* Location Input */}
            <div className="flex items-center gap-3 flex-grow bg-slate-50 px-4 py-3 rounded-2xl">
              <MapPin size={20} className="text-slate-500" />
              <input
                type="text"
                placeholder="Enter your location…"
                className="bg-transparent w-full outline-none text-slate-700"
              />
            </div>

            {/* Search Button */}
            <button className="px-8 py-3 rounded-2xl bg-[#00796b] text-white font-semibold shadow-md hover:bg-[#00695c] transition">
              Search Jobs
            </button>

            {/* Voice */}
            <button className="px-6 py-3 rounded-2xl bg-[#ffa74f] text-white shadow-md hover:bg-[#ff8f24] transition">
              <Mic size={20} />
            </button>

          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-900 mb-8">
          Browse by Category
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-xl 
              transition hover:-translate-y-1 text-center cursor-pointer"
            >
              <div className="text-4xl mb-2">{cat.icon}</div>
              <p className="font-semibold text-slate-800">{cat.title}</p>
              <p className="text-sm text-slate-500">{cat.jobs}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AI RECOMMENDED */}
      <section className="py-16 px-6 bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <span className="text-yellow-500 text-xl">✨</span>
            AI Recommended Jobs
          </h2>

          <JobPreviewGrid jobs={aiJobs} />
        </div>
      </section>

      {/* NEARBY JOBS */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <span className="text-green-500 text-xl">📍</span>
            Nearby Jobs
          </h2>

          <JobPreviewGrid jobs={nearbyJobs} />
        </div>
      </section>

      {/* VIEW ALL JOBS */}
      <div className="text-center py-10">
        <Link
          to="/jobs"
          className="px-8 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-orange-500 text-white font-semibold shadow-lg hover:shadow-xl transition"
        >
          View All Available Jobs →
        </Link>
      </div>

    </div>
  );
};

const JobPreviewGrid = ({ jobs }) => (
  <div className="grid md:grid-cols-3 gap-6">
    {jobs.map((job, i) => (
      <div
        key={i}
        className="bg-white border border-slate-200 p-6 rounded-3xl shadow-sm hover:shadow-xl transition"
      >
        <h3 className="text-lg font-bold text-slate-900">{job.title}</h3>
        <p className="text-slate-600 text-sm">{job.employer}</p>

        <div className="mt-3 grid gap-1">
          <div className="text-emerald-600 font-semibold">{job.salary}</div>
          <div className="text-sm text-slate-600">📍 {job.location}</div>
        </div>

        <div className="mt-3">
          <span className="px-3 py-1 rounded-full text-xs bg-slate-200 text-slate-700">
            {job.type}
          </span>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {job.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-full text-xs bg-slate-100 text-slate-700"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="text-xs text-slate-500 mt-3">
          🕒 {job.time}
        </div>

        <Link to={`/job/${job.id}`}>
  <button className="mt-5 w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-orange-500 text-white font-semibold shadow-md hover:shadow-lg transition">
    Apply Now
  </button>
</Link>

      </div>
    ))}
  </div>
);

export default FindWork;

