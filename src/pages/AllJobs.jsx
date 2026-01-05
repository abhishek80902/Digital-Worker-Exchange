// src/pages/AllJobs.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  MapPin,
  SlidersHorizontal,
  ChevronDown,
} from "lucide-react";

const allJobs = [
  {
    id: 1,
    title: "Electrician Needed",
    employer: "BuildPro Construction",
    salary: "₹500-700/day",
    location: "Mumbai, Maharashtra",
    type: "Full-time",
    tags: ["Wiring", "Repair", "Safety"],
    time: "2 days ago",
  },
  {
    id: 2,
    title: "Plumber Required",
    employer: "HomeServe Solutions",
    salary: "₹400-600/day",
    location: "Delhi NCR",
    type: "Contract",
    tags: ["Pipe Fitting", "Drainage"],
    time: "1 day ago",
  },
  {
    id: 3,
    title: "Delivery Driver",
    employer: "QuickShip Logistics",
    salary: "₹300-500/day",
    location: "Bangalore",
    type: "Part-time",
    tags: ["Driving", "Navigation"],
    time: "3 hours ago",
  },
  {
    id: 4,
    title: "Home Cleaner",
    employer: "UrbanHome Services",
    salary: "₹400/day",
    location: "near you",
    type: "Daily Wage",
    tags: ["Cleaning", "Housekeeping"],
    time: "5 hours ago",
  },
  {
    id: 5,
    title: "Construction Helper",
    employer: "BuildRight Co.",
    salary: "₹450/day",
    location: "near you",
    type: "Daily Wage",
    tags: ["Labour", "Construction"],
    time: "1 day ago",
  },
  {
    id: 6,
    title: "Cook Needed",
    employer: "Private Home",
    salary: "₹500/day",
    location: "near you",
    type: "Contract",
    tags: ["Cooking", "Kitchen Help"],
    time: "9 hours ago",
  },
];

const AllJobs = () => {
  const [sort, setSort] = useState("Newest");

  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-6">

      {/* PAGE HEADER */}
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">
          All Available Jobs
        </h1>
        <p className="text-slate-600 mt-1 text-lg">
          Browse through verified and active job listings near you.
        </p>
      </div>

      {/* SEARCH & FILTER BAR */}
      <div className="max-w-7xl mx-auto mt-10 bg-white shadow-xl border border-slate-200 rounded-3xl p-6">
        <div className="flex flex-col lg:flex-row gap-4">

          {/* Search Bar */}
          <div className="flex items-center gap-3 flex-grow bg-slate-50 px-4 py-3 rounded-2xl">
            <Search size={20} className="text-slate-500" />
            <input
              type="text"
              placeholder="Search job by skill or role…"
              className="bg-transparent w-full outline-none text-slate-700"
            />
          </div>

          {/* Location */}
          <div className="flex items-center gap-3 flex-grow bg-slate-50 px-4 py-3 rounded-2xl">
            <MapPin size={20} className="text-slate-500" />
            <input
              type="text"
              placeholder="Enter location…"
              className="bg-transparent w-full outline-none text-slate-700"
            />
          </div>

          {/* Filters Button */}
          <button className="px-6 py-3 rounded-2xl bg-[#00796b] text-white font-semibold shadow-md hover:bg-[#00695c] transition flex items-center gap-2">
            <SlidersHorizontal size={18} />
            Filters
          </button>
        </div>
      </div>

      {/* FILTER CHIPS + SORT */}
      <div className="max-w-7xl mx-auto mt-6 flex flex-wrap gap-3">
        {["Full-time", "Part-time", "Contract", "Nearby", "Daily Wage", "Highly Rated"].map(
          (chip, i) => (
            <span
              key={i}
              className="px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-sm cursor-pointer hover:bg-slate-200 transition"
            >
              {chip}
            </span>
          )
        )}

        <div className="ml-auto relative">
          <button className="px-4 py-2 rounded-xl bg-slate-100 border border-slate-200 flex items-center gap-2 text-slate-700">
            Sort: {sort} <ChevronDown size={18} />
          </button>
        </div>
      </div>

      {/* JOB GRID — 3 COLUMNS */}
      <div className="max-w-7xl mx-auto mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allJobs.map((job, i) => (
          <div
            key={i}
            className="bg-white border border-slate-200 p-6 rounded-3xl shadow-sm hover:shadow-xl transition cursor-pointer"
          >
            <h3 className="text-xl font-bold text-slate-900">{job.title}</h3>
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

      {/* PAGINATION */}
      <div className="max-w-7xl mx-auto mt-12 flex justify-center gap-3">
        {[1, 2, 3, 4].map((n) => (
          <button
            key={n}
            className="px-4 py-2 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-200 transition"
          >
            {n}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AllJobs;

