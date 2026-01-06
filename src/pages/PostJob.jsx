// src/pages/PostJob.jsx
import React, { useMemo, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

/**
 * PostJob.jsx
 * AI Matching + Job Posting UI
 */

const MOCK_WORKERS = [
  {
    id: "w1",
    name: "Rajesh Kumar",
    avatar: "/images/avatar1.jpg",
    trade: "Electrician",
    skills: ["Wiring", "Panel Installation", "Troubleshooting"],
    experienceYears: 8,
    rating: 4.8,
    verified: true,
    locationKm: 2.3,
    baseAsk: 900,
  },
  {
    id: "w2",
    name: "Suresh Patel",
    avatar: "/images/avatar2.jpg",
    trade: "Electrician",
    skills: ["Maintenance", "Wiring"],
    experienceYears: 6,
    rating: 4.6,
    verified: true,
    locationKm: 5.1,
    baseAsk: 750,
  },
  {
    id: "w3",
    name: "Amit Sharma",
    avatar: "/images/avatar3.jpg",
    trade: "Electrician",
    skills: ["Installation", "Safety Compliance"],
    experienceYears: 10,
    rating: 4.9,
    verified: true,
    locationKm: 8.7,
    baseAsk: 1100,
  },
  {
    id: "w4",
    name: "Vijay Singh",
    avatar: "/images/avatar4.jpg",
    trade: "Plumber",
    skills: ["Pipe Fitting", "Drainage"],
    experienceYears: 5,
    rating: 4.5,
    verified: false,
    locationKm: 3.4,
    baseAsk: 650,
  },
  {
    id: "w5",
    name: "Sunita Devi",
    avatar: "/images/avatar5.jpg",
    trade: "Plumber",
    skills: ["Drainage", "Leak Repair"],
    experienceYears: 7,
    rating: 4.7,
    verified: true,
    locationKm: 4.0,
    baseAsk: 700,
  },
  {
    id: "w6",
    name: "Rakesh Patel",
    avatar: "/images/avatar6.jpg",
    trade: "Driver",
    skills: ["Two-wheeler", "Navigation"],
    experienceYears: 3,
    rating: 4.3,
    verified: false,
    locationKm: 1.8,
    baseAsk: 500,
  },
];

function computeMatchScore(worker, job) {
  const tradeMatch = worker.trade === job.trade ? 1 : 0;

  const text = (job.title + " " + (job.description || "")).toLowerCase();
  const skillMatches = worker.skills.reduce((acc, s) => {
    return acc + (text.includes(s.toLowerCase()) ? 1 : 0);
  }, 0);

  const skillMatch = Math.min(
    1,
    0.5 * tradeMatch +
      0.5 * (skillMatches / Math.max(1, worker.skills.length))
  );

  const min = Number(job.minPay) || 0;
  const max = Number(job.maxPay) || min + 1000;
  const ask = worker.baseAsk;

  let payScore = 0;
  if (ask >= min && ask <= max) payScore = 1;
  else {
    const mid = (min + max) / 2;
    const diff = Math.abs(mid - ask);
    payScore = Math.max(0, 1 - diff / Math.max(1, mid * 0.7));
  }

  const dist = worker.locationKm;
  const distanceScore =
    dist <= 2 ? 1 : dist <= 5 ? 0.8 : dist <= 10 ? 0.5 : 0.2;

  const exp = Math.min(12, worker.experienceYears) / 12;

  const score =
    skillMatch * 0.4 +
    payScore * 0.25 +
    distanceScore * 0.2 +
    exp * 0.15;

  return Math.round(score * 100);
}

function StarRating({ value }) {
  const full = Math.floor(value);
  const half = value - full >= 0.5;
  const stars = [];

  for (let i = 0; i < full; i++) stars.push("full");
  if (half) stars.push("half");

  while (stars.length < 5) stars.push("empty");

  return (
    <div className="flex items-center gap-1 text-orange-500 text-sm">
      {stars.map((s, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={s === "empty" ? "none" : "currentColor"}
          stroke="currentColor"
          strokeWidth="0"
        >
          <path d="M12 .587l3.668 7.431L24 9.748l-6 5.848L19.335 24 12 20.202 4.665 24 6 15.596 0 9.748l8.332-1.73z"></path>
        </svg>
      ))}
      <span className="text-slate-600 ml-2">({value.toFixed(1)})</span>
    </div>
  );
}

const Pill = ({ children }) => (
  <div className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs inline-block">
    {children}
  </div>
);

function getInitials(name = "") {
  const parts = name.trim().split(" ");
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export default function PostJob() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    trade: "Electrician",
    location: "Auto-detected: Mumbai",
    minPay: 800,
    maxPay: 1200,
    duration: "",
    description: "",
  });

  const [topOnly, setTopOnly] = useState(true);
  const [posted, setPosted] = useState(false);

  const matches = useMemo(() => {
    const arr = MOCK_WORKERS.map((w) => ({
      ...w,
      score: computeMatchScore(w, form),
    }));

    arr.sort((a, b) => b.score - a.score || b.rating - a.rating);
    return arr;
  }, [form]);

  const display = topOnly ? matches.slice(0, 5) : matches;

  const formatMatchBadge = (score) => {
    if (score >= 90)
      return {
        label: `${score}% Match`,
        color: "bg-emerald-50 text-emerald-700 border-emerald-100",
      };
    if (score >= 75)
      return {
        label: `${score}% Match`,
        color: "bg-blue-50 text-blue-700 border-blue-100",
      };
    return {
      label: `${score}% Match`,
      color: "bg-slate-50 text-slate-700 border-slate-100",
    };
  };

  function onInputChange(key, val) {
    setForm((s) => ({ ...s, [key]: val }));
  }

  function onPostJob() {
    setPosted(true);

    const el = document.getElementById("ai-matches-panel");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  function onChat(w) {
    navigate(`/chat/${w.id}?from=postjob`);
  }

  function onHire(w) {
    navigate(`/worker/${w.id}?from=postjob&action=hire`);
  }

  useEffect(() => {
    if (!posted) return;
    const t = setTimeout(() => setPosted(false), 2200);
    return () => clearTimeout(t);
  }, [posted]);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 grid lg:grid-cols-12 gap-8 items-start">

        {/* LEFT — FORM */}
        <div className="lg:col-span-4">
          <div className="bg-white rounded-3xl p-6 shadow-md border border-slate-100 sticky top-20">

            <h2 className="text-2xl font-extrabold text-slate-900 mb-4">
              Post a New Job
            </h2>

            <label className="text-sm text-slate-600">Job Title</label>
            <input
              value={form.title}
              onChange={(e) => onInputChange("title", e.target.value)}
              className="w-full mt-2 mb-4 px-4 py-3 rounded-xl bg-slate-50 border border-slate-200"
              placeholder="e.g., Experienced Electrician"
            />

            <label className="text-sm text-slate-600">Trade Type</label>
            <select
              value={form.trade}
              onChange={(e) => onInputChange("trade", e.target.value)}
              className="w-full mt-2 mb-4 px-4 py-3 rounded-xl bg-slate-50 border border-slate-200"
            >
              <option>Electrician</option>
              <option>Plumber</option>
              <option>Driver</option>
              <option>Carpenter</option>
              <option>Cook</option>
            </select>

            <label className="text-sm text-slate-600">Location</label>
            <input
              value={form.location}
              onChange={(e) => onInputChange("location", e.target.value)}
              className="w-full mt-2 mb-4 px-4 py-3 rounded-xl bg-slate-50 border border-slate-200"
              placeholder="Enter location"
            />

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-sm text-slate-600">
                  Min Pay (₹/day)
                </label>
                <input
                  type="number"
                  value={form.minPay}
                  onChange={(e) => onInputChange("minPay", e.target.value)}
                  className="w-full mt-2 mb-4 px-4 py-3 rounded-xl bg-slate-50 border border-slate-200"
                />
              </div>

              <div>
                <label className="text-sm text-slate-600">
                  Max Pay (₹/day)
                </label>
                <input
                  type="number"
                  value={form.maxPay}
                  onChange={(e) => onInputChange("maxPay", e.target.value)}
                  className="w-full mt-2 mb-4 px-4 py-3 rounded-xl bg-slate-50 border border-slate-200"
                />
              </div>
            </div>

            <label className="text-sm text-slate-600">Duration</label>
            <input
              value={form.duration}
              onChange={(e) => onInputChange("duration", e.target.value)}
              className="w-full mt-2 mb-4 px-4 py-3 rounded-xl bg-slate-50 border border-slate-200"
              placeholder="e.g., 2 weeks"
            />

            <label className="text-sm text-slate-600">Job Description</label>
            <textarea
              value={form.description}
              onChange={(e) => onInputChange("description", e.target.value)}
              rows={4}
              className="w-full mt-2 mb-4 px-4 py-3 rounded-xl bg-slate-50 border border-slate-200"
              placeholder="Describe the work..."
            />

            <button
              onClick={onPostJob}
              className="w-full py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-orange-500 text-white font-semibold shadow-lg hover:shadow-xl transition"
            >
              Post Job & Get AI Matches
            </button>

            {posted && (
              <div className="mt-4 text-sm text-emerald-700 font-medium">
                Job posted — AI matches updated ✔
              </div>
            )}
          </div>
        </div>

        {/* RIGHT — MATCHED WORKERS */}
        <div className="lg:col-span-8">
          <div
            id="ai-matches-panel"
            className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100"
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="text-sm text-slate-500">
                  AI-Matched Workers for{" "}
                  <span className="font-semibold text-slate-900">
                    {form.trade}
                  </span>
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 mt-2">
                  Top Matches
                </h3>
                <p className="text-slate-600 mt-1">
                  Smart recommendations based on skills, pay, and proximity.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setTopOnly(!topOnly)}
                  className="px-3 py-1 rounded-full border border-slate-200 text-sm bg-white shadow-sm"
                >
                  {topOnly ? "Top 5" : "Show All"}
                </button>
                <div className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs">
                  Auto
                </div>
              </div>
            </div>

            {/* Worker List */}
            <div className="mt-6 grid gap-4">
              {display.map((w) => {
                const badge = formatMatchBadge(w.score);

                return (
                  <div
                    key={w.id}
                    className="flex items-center gap-4 p-4 rounded-2xl border border-slate-100 shadow-sm"
                  >
                    <div className="w-16 h-16 rounded-full flex items-center justify-center 
                bg-gradient-to-br from-purple-600 to-orange-500 
                text-white font-bold text-xl shadow ring-1 ring-white">
  {getInitials(w.name)}
</div>


                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <div className="text-slate-900 font-semibold">
                              {w.name}
                            </div>
                            {w.verified && (
                              <div className="text-xs px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
                                Verified
                              </div>
                            )}
                          </div>

                          <div className="text-sm text-slate-600">
                            {w.trade} • {w.experienceYears} years exp
                          </div>

                          <div className="text-xs text-slate-500 mt-1">
                            📍 {w.locationKm} km away
                          </div>
                        </div>

                        <div className="text-right">
                          <StarRating value={w.rating} />

                          <div
                            className={`mt-2 inline-block text-xs px-3 py-1 rounded-full border ${badge.color}`}
                          >
                            {badge.label}
                          </div>
                        </div>
                      </div>

                      <div className="mt-3 flex items-center gap-3">
                        <button
                          onClick={() => onChat(w)}
                          className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-slate-200 shadow-sm hover:shadow-md"
                        >
                          💬 Chat
                        </button>

                        <button
                          onClick={() => onHire(w)}
                          className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-orange-500 text-white shadow"
                        >
                          🤝 Hire
                        </button>

                        <div className="ml-auto flex gap-2">
                          {w.skills.slice(0, 3).map((s, i) => (
                            <Pill key={i}>{s}</Pill>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              {display.length === 0 && (
                <div className="p-6 text-center text-slate-600">
                  No matches found. Try adjusting filters.
                </div>
              )}
            </div>

            {/* CTA ROW — FIXED VERSION */}
            <div className="mt-6 flex items-center justify-between">
              <div className="text-sm text-slate-500">
                Showing{" "}
                <span className="font-semibold text-slate-700">
                  {display.length}
                </span>{" "}
                recommended workers
              </div>

              <div className="flex items-center gap-3">

                {/* FIXED BUTTON (NO ERROR) */}
                <button
                  onClick={() => navigate("/matches?view=top5")}
                  className="px-4 py-2 rounded-full border border-slate-200 text-sm"
                >
                  Top 5 Matches
                </button>

                <button
                  onClick={() => navigate("/matches?view=all")}
                  className="px-4 py-2 rounded-full bg-white border border-slate-200 text-sm shadow-sm"
                >
                  View All
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
