import React from "react";
import { MapPin, Briefcase, Heart, Star, Bell, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const WorkerDashboard = () => {
  // Mock worker data (replace with backend later)
  const worker = {
    name: "Rajesh Kumar",
    role: "Electrician",
    rating: 4.8,
    verified: true,
    location: "Mumbai, Maharashtra",
    avatar: "/images/worker_large.jpg",
    completedJobs: 143,
    earnings: "₹12,500",
  };

  const recommendedJobs = [
    {
      id: "j1",
      title: "Home Wiring Electrician",
      salary: "₹900/day",
      employer: "Sharma Electricals",
      distance: "2.3 km",
    },
    {
      id: "j2",
      title: "Electric Panel Installation",
      salary: "₹1100/day",
      employer: "BuildPro Co.",
      distance: "5.0 km",
    },
    {
      id: "j3",
      title: "Maintenance Electrician",
      salary: "₹800/day",
      employer: "UrbanFix Services",
      distance: "1.4 km",
    },
  ];

  const savedJobs = [
    { id: "s1", title: "House Cleaning", employer: "UrbanHome", pay: "₹700/day" },
    { id: "s2", title: "Delivery Partner", employer: "QuickShip", pay: "₹1200/day" },
  ];

  const applications = [
    { id: "a1", title: "Electrician Maintenance Job", status: "Pending" },
    { id: "a2", title: "Panel Wiring Work", status: "Shortlisted" },
  ];

  return (
    <div className="min-h-screen bg-white pt-28 pb-20 px-6">

      {/* HEADER */}
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-slate-900">
          Welcome, {worker.name.split(" ")[0]} 👋
        </h1>
        <p className="text-lg text-slate-600 mt-1">
          Let’s find your next job opportunity.
        </p>
      </div>

      {/* TOP SECTION — PROFILE + QUICK STATS */}
      <div className="max-w-7xl mx-auto mt-10 grid lg:grid-cols-12 gap-10">

        {/* Profile Card */}
       {/* LEFT COLUMN (Profile + Skills + Availability) */}
<div className="lg:col-span-4 space-y-6">

  {/* PROFILE CARD */}
  <div className="bg-white rounded-3xl border border-slate-200 shadow-md p-6">
    <div className="flex items-center gap-4">
      <img
        src={worker.avatar}
        className="w-20 h-20 rounded-2xl object-cover border"
        alt="Worker"
      />
      <div>
        <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          {worker.name}
          {worker.verified && (
            <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-700 border border-green-300">
              ✔ Verified
            </span>
          )}
        </h2>
        <p className="text-slate-600">{worker.role}</p>
      </div>
    </div>

    <div className="mt-6 flex items-center gap-6">
      <div>
        <p className="text-xs text-slate-500">Completed Jobs</p>
        <p className="text-xl font-bold text-purple-600">{worker.completedJobs}</p>
      </div>
      <div>
        <p className="text-xs text-slate-500">Rating</p>
        <p className="text-xl font-bold text-orange-500">{worker.rating} ★</p>
      </div>
      <div>
        <p className="text-xs text-slate-500">Earnings</p>
        <p className="text-xl font-bold text-emerald-600">{worker.earnings}</p>
      </div>
    </div>

    <div className="mt-6 grid grid-cols-2 gap-3">
      <Link
        to="/worker/profile"
        className="px-4 py-3 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 font-semibold text-center"
      >
        View Profile
      </Link>

      <Link
        to="/findwork"
        className="px-4 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-orange-500 text-white text-center font-semibold shadow-md hover:shadow-lg"
      >
        Find Jobs
      </Link>
    </div>
  </div>

  {/* SKILLS SECTION */}
  <div className="bg-white rounded-3xl border border-slate-200 shadow-md p-6">
    <h3 className="text-lg font-semibold text-slate-900">Your Skills</h3>
    <div className="mt-4 flex flex-wrap gap-2">
      {["Wiring", "Maintenance", "Troubleshooting", "Installation"].map((skill, idx) => (
        <span
          key={idx}
          className="px-3 py-1 text-xs bg-slate-100 text-slate-700 rounded-full"
        >
          {skill}
        </span>
      ))}
    </div>
    <Link
      to="/worker/edit"
      className="text-purple-600 text-sm font-semibold mt-3 inline-block"
    >
      + Add / Edit Skills
    </Link>
  </div>

  {/* AVAILABILITY SECTION */}
  <div className="bg-white rounded-3xl border border-slate-200 shadow-md p-6">
    <h3 className="text-lg font-semibold text-slate-900">Availability</h3>
    <p className="text-slate-600 mt-2">Status: <span className="text-emerald-600 font-semibold">Available</span></p>
    <button className="mt-4 w-full py-2 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-700 font-semibold">
      Update Availability
    </button>
  </div>

</div>


        {/* AI Recommended Jobs */}
        <div className="lg:col-span-8 bg-white rounded-3xl border border-slate-200 shadow-md p-6">
          <h2 className="text-2xl font-bold text-slate-900">
            🔥 AI Recommended Jobs
          </h2>
          <p className="text-slate-600 mt-1">Based on your skills and experience.</p>

          <div className="mt-5 grid md:grid-cols-2 gap-6">
            {recommendedJobs.map((job) => (
              <div
                key={job.id}
                className="p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition"
              >
                <h3 className="text-lg font-bold text-slate-900">{job.title}</h3>
                <p className="text-slate-600 text-sm">{job.employer}</p>
                <p className="text-emerald-600 font-semibold mt-2">{job.salary}</p>
                <p className="text-xs text-slate-500 mt-1">📍 {job.distance}</p>

                <Link
                  to={`/job/${job.id}`}
                  className="mt-4 inline-block w-full py-2 text-center text-white rounded-xl bg-gradient-to-r from-purple-600 to-orange-500 font-semibold"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>

          <Link
            to="/findwork"
            className="mt-4 inline-flex items-center gap-2 text-purple-600 font-semibold"
          >
            View All Jobs <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      {/* SAVED JOBS + APPLICATIONS */}
      <div className="max-w-7xl mx-auto mt-12 grid md:grid-cols-2 gap-8">

        {/* Saved Jobs */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-md p-6">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <Heart size={20} className="text-red-500" /> Saved Jobs
          </h2>

          <div className="mt-4 space-y-4">
            {savedJobs.map((job) => (
              <div key={job.id} className="p-4 border rounded-xl bg-slate-50">
                <p className="font-semibold text-slate-900">{job.title}</p>
                <p className="text-slate-600 text-sm">{job.employer}</p>
                <p className="text-emerald-600 font-medium">{job.pay}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Applications */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-md p-6">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <Briefcase size={20} className="text-purple-600" /> My Applications
          </h2>

          <div className="mt-4 space-y-4">
            {applications.map((app) => (
              <div key={app.id} className="p-4 border rounded-xl bg-slate-50">
                <p className="font-semibold text-slate-900">{app.title}</p>
                <p className="text-slate-600 text-sm">
                  Status:{" "}
                  <span className="font-semibold text-purple-600">{app.status}</span>
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};

export default WorkerDashboard;