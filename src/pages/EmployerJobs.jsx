import React from "react";
import { Briefcase, Users, Clock, CheckCircle, ArrowRight, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const EmployerJobs = () => {
  // Temporary mock jobs — later fetched from backend
  const jobs = [
    {
      id: "j1",
      title: "Electrician Needed for Home Wiring",
      location: "Mumbai, Maharashtra",
      pay: "₹800 - ₹1200/day",
      posted: "2 days ago",
      status: "Open",
      applicants: 3,
      matches: 5,
    },
    {
      id: "j2",
      title: "Plumber for Pipe Fitting",
      location: "Delhi NCR",
      pay: "₹500 - ₹700/day",
      posted: "1 week ago",
      status: "In Progress",
      applicants: 1,
      matches: 2,
    },
    {
      id: "j3",
      title: "Driver for Delivery Work",
      location: "Bangalore",
      pay: "₹400 - ₹600/day",
      posted: "5 days ago",
      status: "Completed",
      applicants: 0,
      matches: 0,
    },
  ];

  const statusColors = {
    Open: "bg-green-100 text-green-700 border-green-200",
    "In Progress": "bg-blue-100 text-blue-700 border-blue-200",
    Completed: "bg-slate-200 text-slate-700 border-slate-300",
  };

  return (
    <div className="min-h-screen bg-white pt-28 pb-20 px-6">
      
      {/* HEADER */}
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-slate-900">My Posted Jobs</h1>
        <p className="text-lg text-slate-600 mt-2">
          Manage all your job posts, track applicants, and review AI matches.
        </p>

        <div className="mt-6">
          <Link
            to="/postjob"
            className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-orange-500 text-white font-semibold shadow-lg hover:shadow-xl"
          >
            + Post New Job
          </Link>
        </div>
      </div>

      {/* JOB LIST GRID */}
      <div className="max-w-7xl mx-auto mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 hover:shadow-xl transition"
          >
            <h3 className="text-xl font-bold text-slate-900">{job.title}</h3>
            <p className="text-slate-600 text-sm mt-1">{job.location}</p>
            <p className="text-emerald-600 font-semibold mt-2">{job.pay}</p>

            <div className="mt-3 text-xs text-slate-500 flex items-center gap-2">
              <Clock size={14} /> Posted {job.posted}
            </div>

            <span
              className={`inline-block mt-3 px-3 py-1 rounded-full text-xs border ${statusColors[job.status]}`}
            >
              {job.status}
            </span>

            <div className="mt-5 flex items-center justify-between text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <Users size={16} className="text-purple-600" /> {job.applicants} Applicants
              </div>
              <div className="flex items-center gap-2">
                <Briefcase size={16} className="text-orange-600" /> {job.matches} Matches
              </div>
            </div>

            {/* ACTIONS */}
            <div className="mt-6 flex items-center justify-between gap-3">
              <Link
                to={`/job/${job.id}`}
                className="w-full py-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 text-center font-medium"
              >
                View Job
              </Link>

              <Link
                to={`/job/${job.id}/matches`}
                className="w-full py-2 rounded-xl bg-gradient-to-r from-purple-600 to-orange-500 text-white text-center font-medium"
              >
                AI Matches
              </Link>
            </div>

            <button className="mt-4 flex items-center gap-2 text-sm text-slate-500 hover:text-slate-700">
              <MessageSquare size={16} /> Open Chat
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployerJobs;