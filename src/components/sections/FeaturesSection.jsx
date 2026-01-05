// src/components/sections/FeaturesSection.jsx
import React from "react";

const features = [
  {
    icon: "🔍",
    title: "Simple Job Search",
    text: "Clean UI for workers to register skills and search verified job opportunities across all sectors.",
    color: "from-teal-500 to-emerald-500",
  },
  {
    icon: "✨",
    title: "AI Skill Matching",
    text: "Smart recommendations based on skills, experience, ratings, and distance for optimal job fits.",
    color: "from-amber-400 to-orange-500",
  },
  {
    icon: "🎙️",
    title: "Voice Support",
    text: "Local language audio guidance and voice-based navigation for workers with low digital literacy.",
    color: "from-fuchsia-500 to-purple-500",
  },
  {
    icon: "🛡️",
    title: "Verified Profiles",
    text: "KYC verification, community ratings, and skill proof system ensure trust and safety for all users.",
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: "💳",
    title: "Transparent Payments",
    text: "Direct payments with zero commission so 100% of wages reach workers without middlemen.",
    color: "from-sky-500 to-cyan-500",
  },
  {
    icon: "📍",
    title: "Location-Based",
    text: "Find nearby jobs and workers using geographic proximity for quick connections.",
    color: "from-orange-500 to-rose-500",
  },
  {
    icon: "💬",
    title: "Direct Communication",
    text: "In-platform chat and call options to discuss job details, timing, and expectations.",
    color: "from-violet-500 to-indigo-500",
  },
  {
    icon: "⭐",
    title: "Rating System",
    text: "Mutual feedback builds trust and helps improve service quality over time.",
    color: "from-yellow-400 to-amber-500",
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-[#f7fafc] py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-flex items-center px-4 py-1 rounded-full bg-emerald-50 text-emerald-700 text-sm font-medium mb-4">
            ⚙️ Powerful Features
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">
            Everything You Need for Fair Employment
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A comprehensive platform to empower workers and connect them with
            verified employers using cutting-edge technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg border border-slate-100 p-6 flex flex-col gap-3 transition-transform hover:-translate-y-0.5"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center text-white text-xl mb-1`}
              >
                {f.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-900">
                {f.title}
              </h3>
              <p className="text-sm text-slate-600">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
