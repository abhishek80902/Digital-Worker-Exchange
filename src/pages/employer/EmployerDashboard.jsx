// src/pages/employer/EmployerDashboard.jsx
import React from "react";
import { Briefcase, PlusCircle, Users, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function EmployerDashboard() {
  const stats = {
    totalJobs: 12,
    activeJobs: 3,
    applicants: 48,
    avgRating: 4.7,
  };

  const recentJobs = [
    { id: 1, title: "Electrician Needed for Home Wiring", applicants: 14, status: "Active" },
    { id: 2, title: "House Cleaning Work", applicants: 5, status: "Completed" },
    { id: 3, title: "Driver for Office", applicants: 8, status: "Active" },
  ];

  return (
    <div className="min-h-screen bg-white pt-28 px-6 pb-20 max-w-7xl mx-auto">

      {/* HEADER */}
      <h1 className="text-3xl font-extrabold text-slate-900">Employer Dashboard</h1>
      <p className="text-slate-600 mt-1">Track your job postings and manage applications easily.</p>

      {/* METRIC CARDS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
        <div className="p-6 rounded-2xl bg-slate-50 border text-center">
          <Briefcase size={26} className="mx-auto text-purple-600" />
          <p className="mt-2 text-2xl font-bold">{stats.totalJobs}</p>
          <p className="text-slate-600 text-sm">Total Jobs Posted</p>
        </div>

        <div className="p-6 rounded-2xl bg-slate-50 border text-center">
          <Users size={26} className="mx-auto text-orange-500" />
          <p className="mt-2 text-2xl font-bold">{stats.activeJobs}</p>
          <p className="text-slate-600 text-sm">Active Jobs</p>
        </div>

        <div className="p-6 rounded-2xl bg-slate-50 border text-center">
          <Users size={26} className="mx-auto text-emerald-600" />
          <p className="mt-2 text-2xl font-bold">{stats.applicants}</p>
          <p className="text-slate-600 text-sm">Applicants</p>
        </div>

        <div className="p-6 rounded-2xl bg-slate-50 border text-center">
          <Star size={26} className="mx-auto text-yellow-500" />
          <p className="mt-2 text-2xl font-bold">{stats.avgRating}</p>
          <p className="text-slate-600 text-sm">Average Rating</p>
        </div>
      </div>

      {/* ACTIONS */}
      <div className="flex justify-end mt-8">
        <Link
          to="/postjob"
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-orange-500 text-white shadow hover:shadow-lg"
        >
          <PlusCircle size={20} /> Post a New Job
        </Link>
      </div>

      {/* RECENT JOBS */}
      <h2 className="text-2xl font-bold mt-10">Recent Job Posts</h2>

      <div className="mt-6 space-y-4">
        {recentJobs.map((job) => (
          <Link
            to={`/employer/job/${job.id}`}
            key={job.id}
            className="block p-5 rounded-2xl border bg-white shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">{job.title}</h3>
                <p className="text-slate-500 text-sm">{job.applicants} applicants</p>
              </div>
              <ArrowRight size={22} className="text-slate-500" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
