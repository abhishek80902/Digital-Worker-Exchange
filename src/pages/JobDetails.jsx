// src/pages/JobDetails.jsx
import React from "react";
import { MapPin, Building, Clock, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const JobDetails = () => {
  // Sample job — in backend you will fetch by ID later
  const job = {
    title: "Electrician for Home Wiring",
    employer: "BuildPro Construction",
    verified: true,
    salary: "₹500-700/day",
    location: "Mumbai, Maharashtra",
    distance: "2.4 km away",
    type: "Full-time",
    posted: "2 days ago",
    tags: ["Wiring", "Panel Installation", "Safety", "Maintenance"],
    description:
      "We are looking for a skilled and experienced electrician for residential home wiring and electrical panel installation. Responsibilities include wiring, troubleshooting electrical issues, and maintaining safety standards.",
    responsibilities: [
      "Install and repair residential wiring",
      "Ensure safety compliance",
      "Troubleshoot electrical faults",
      "Install switchboards and panels",
      "Coordinate with supervisor for daily tasks",
    ],
    skillsRequired: [
      "Electrical Wiring",
      "Panel Installation",
      "Safety Compliance",
      "Troubleshooting",
    ],
  };

  return (
    <div className="min-h-screen bg-white pt-28 pb-20 px-6 lg:px-0">

      {/* BACK BUTTON */}
      <div className="max-w-5xl mx-auto mb-6">
        <Link
          to="/jobs"
          className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition"
        >
          <ArrowLeft size={20} /> Back to Jobs
        </Link>
      </div>

      {/* MAIN CARD */}
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl border border-slate-200 p-8">

        {/* TITLE + EMPLOYER */}
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900">
            {job.title}
          </h1>

          <div className="flex items-center gap-3 mt-2">
            <span className="text-slate-600 text-lg">{job.employer}</span>
            {job.verified && (
              <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700 border border-green-300">
                ✔ Verified Employer
              </span>
            )}
          </div>
        </div>

        {/* SALARY + LOCATION + TYPE */}
        <div className="grid sm:grid-cols-3 gap-4 mt-8">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <p className="text-xs text-slate-500 mb-1">Salary</p>
            <p className="text-xl font-semibold text-emerald-600">{job.salary}</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <p className="text-xs text-slate-500 mb-1">Location</p>
            <p className="text-sm flex items-center gap-1 text-slate-700">
              <MapPin size={16} /> {job.location}
            </p>
            <p className="text-xs text-slate-500">{job.distance}</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <p className="text-xs text-slate-500 mb-1">Job Type</p>
            <p className="text-sm text-slate-700">{job.type}</p>
            <p className="text-xs text-slate-500">{job.posted}</p>
          </div>
        </div>

        {/* TAGS */}
        <div className="flex flex-wrap gap-2 mt-6">
          {job.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-full text-xs bg-slate-200 text-slate-700"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* DESCRIPTION */}
        <div className="mt-10">
          <h2 className="text-xl font-bold text-slate-900">Job Description</h2>
          <p className="text-slate-700 mt-2 leading-relaxed">{job.description}</p>
        </div>

        {/* RESPONSIBILITIES */}
        <div className="mt-10">
          <h2 className="text-xl font-bold text-slate-900">Responsibilities</h2>
          <ul className="mt-3 list-disc ml-6 text-slate-700 space-y-1">
            {job.responsibilities.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        {/* SKILLS REQUIRED */}
        <div className="mt-10">
          <h2 className="text-xl font-bold text-slate-900">Skills Required</h2>
          <div className="flex flex-wrap gap-2 mt-3">
            {job.skillsRequired.map((skill, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full text-xs bg-purple-100 text-purple-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* EMPLOYER INFO */}
        <div className="mt-12 p-6 rounded-3xl bg-slate-50 border border-slate-200">
          <h2 className="text-xl font-bold text-slate-900 mb-3">
            About the Employer
          </h2>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-xl border border-slate-300 flex items-center justify-center">
              <Building size={24} className="text-slate-600" />
            </div>

            <div>
              <p className="font-semibold text-slate-800">{job.employer}</p>
              <p className="text-sm text-slate-500">Construction & Electrical Services</p>
            </div>
          </div>
        </div>

        {/* MAP (Placeholder) */}
        <div className="mt-12 h-64 bg-slate-200 rounded-3xl flex items-center justify-center text-slate-600">
          📍 Map preview (Google Maps will be added later)
        </div>

        {/* APPLY BUTTON (Desktop) */}
        <div className="mt-10 hidden md:block">
          <button className="w-full py-4 text-lg rounded-2xl bg-gradient-to-r from-purple-600 to-orange-500 text-white font-bold shadow-lg hover:shadow-xl">
            Apply Now
          </button>
        </div>
      </div>

      {/* STICKY APPLY BUTTON (Mobile Only) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white p-4 border-t border-slate-200 shadow-lg md:hidden">
        <button className="w-full py-4 text-lg rounded-xl bg-gradient-to-r from-purple-600 to-orange-500 text-white font-semibold shadow-md">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobDetails;
