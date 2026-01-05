// src/components/sections/HowItWorksSection.jsx
import React from "react";

const steps = [
  {
    number: "01",
    title: "Register & Verify",
    text: "Workers register with skills and complete KYC. Employers create verified profiles.",
    icon: "👤",
  },
  {
    number: "02",
    title: "AI Job Matching",
    text: "Our AI engine analyses skills, experience, location, and ratings to recommend the best jobs.",
    icon: "🔍",
  },
  {
    number: "03",
    title: "Connect & Communicate",
    text: "Direct chat or calls between worker and employer to discuss all job details.",
    icon: "💬",
  },
  {
    number: "04",
    title: "Work & Get Paid",
    text: "Complete the job and receive direct payment with zero commission and full transparency.",
    icon: "✅",
  },
];

const HowItWorksSection = () => (
  <section className="bg-white py-20">
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">
          How Digital Worker Exchange Works
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Four simple steps to connect skilled workers with verified employers
          and ensure fair, transparent employment.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((s, idx) => (
          <div
            key={s.number}
            className="relative bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg p-6 pt-10 transition-transform hover:-translate-y-0.5"
          >
            {/* step badge */}
            <div className="absolute -top-4 left-6 w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center text-sm font-semibold shadow-lg">
              {s.number}
            </div>
            <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-xl mb-3">
              {s.icon}
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              {s.title}
            </h3>
            <p className="text-sm text-slate-600">{s.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
