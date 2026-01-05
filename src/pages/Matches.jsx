// src/pages/Matches.jsx
import React, { useMemo } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Search } from "lucide-react";

import MOCK_WORKERS from "../utils/mockWorkers"; // you can move the array here or import

import computeMatchScore from "../utils/matchAlgorithm"; // same code as PostJob

const Matches = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Read query params from PostJob.jsx
  const params = new URLSearchParams(location.search);
  const trade = params.get("trade") || "Electrician";
  const minPay = Number(params.get("minPay")) || 800;
  const maxPay = Number(params.get("maxPay")) || 1200;
  const title = params.get("title") || "";

  const job = { trade, minPay, maxPay, title };

  // Compute matches again
  const matches = useMemo(() => {
    const arr = MOCK_WORKERS.map((w) => ({
      ...w,
      score: computeMatchScore(w, job),
    }));
    arr.sort((a, b) => b.score - a.score || b.rating - a.rating);
    return arr;
  }, [trade, minPay, maxPay, title]);

  return (
    <div className="min-h-screen bg-white pt-28 pb-20 px-6">
      
      {/* BACK BUTTON */}
      <div className="max-w-7xl mx-auto mb-6">
        <Link
          to="/postjob"
          className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition"
        >
          <ArrowLeft size={20} /> Back to Post Job
        </Link>
      </div>

      {/* HEADER */}
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">
          AI Matched Workers
        </h1>
        <p className="text-slate-600 mt-1 text-lg">
          Based on your job details — Smart recommendations for “{trade}”.
        </p>

        {/* Search within matches */}
        <div className="mt-6 flex items-center gap-3 bg-slate-50 px-4 py-3 rounded-2xl border border-slate-200 max-w-md">
          <Search size={20} className="text-slate-500" />
          <input
            placeholder="Search worker by name or skill..."
            className="bg-transparent w-full outline-none"
          />
        </div>
      </div>

      {/* WORKER GRID */}
      <div className="max-w-7xl mx-auto mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {matches.map((w) => (
          <div
            key={w.id}
            className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-xl transition"
          >
            {/* Avatar */}
            <div className="w-full h-48 rounded-2xl overflow-hidden mb-4">
              <img
                src={w.avatar}
                alt={w.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name */}
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              {w.name}
              {w.verified && (
                <span className="px-2 py-0.5 text-xs rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200">
                  ✔ Verified
                </span>
              )}
            </h2>

            <p className="text-slate-600 text-sm mt-1">
              {w.trade} • {w.experienceYears} yrs exp
            </p>

            {/* Rating + Match */}
            <div className="mt-3 flex items-center justify-between">
              <span className="text-orange-500 font-semibold">
                ⭐ {w.rating}
              </span>
              <span className="px-3 py-1 text-xs rounded-full bg-purple-100 text-purple-700">
                {w.score}% Match
              </span>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 mt-4">
              {w.skills.slice(0, 3).map((s, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs"
                >
                  {s}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-5 flex gap-3">
              <button
                onClick={() => navigate(`/chat/${w.id}?from=matches`)}
                className="flex-1 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 shadow-sm hover:shadow-md"
              >
                Chat
              </button>

              <button
                onClick={() => navigate(`/worker/${w.id}?from=matches`)}
                className="flex-1 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-orange-500 text-white shadow"
              >
                Hire
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Matches;