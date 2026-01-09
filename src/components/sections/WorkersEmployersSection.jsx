// src/components/sections/WorkersEmployersSection.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const WorkersEmployersSection = () => {
  const navigate = useNavigate();

  return (
    <section
      id="workers-employers"
      className="bg-[#fffaf2] py-20"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">
            Built for Workers and Employers
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            One platform designed for both sides of the workforce — fair wages
            for workers and reliable hiring for employers.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Worker Card */}
          <div className="bg-white rounded-3xl border border-emerald-100 shadow-sm p-8 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 text-xl mb-4">
                👷
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                For Workers
              </h3>

              <p className="text-slate-600 mb-5">
                Find verified jobs, earn fair wages, and grow your career with
                zero middlemen taking your hard-earned money.
              </p>

              <ul className="space-y-2 text-sm text-slate-700">
                <li>✅ Zero registration fees</li>
                <li>✅ 100% of your earnings</li>
                <li>✅ AI-powered job matching</li>
                <li>✅ Voice support in local languages</li>
              </ul>
            </div>

            <button
              onClick={() => navigate("/signup?role=worker")}
              className="mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold px-6 py-2.5 shadow-md hover:shadow-lg transition"
            >
              Register as Worker
              <span className="ml-2 text-lg">→</span>
            </button>
          </div>

          {/* Employer Card */}
          <div className="bg-white rounded-3xl border border-amber-100 shadow-sm p-8 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600 text-xl mb-4">
                👜
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                For Employers
              </h3>

              <p className="text-slate-600 mb-5">
                Hire verified, skilled workers quickly and efficiently with
                full transparency and rating-based profiles.
              </p>

              <ul className="space-y-2 text-sm text-slate-700">
                <li>✅ Verified worker profiles</li>
                <li>✅ Quick hiring process</li>
                <li>✅ Rating & review system</li>
                <li>✅ Affordable subscription options</li>
              </ul>
            </div>

            <button
              onClick={() => navigate("/signup?role=employer")}
              className="mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold px-6 py-2.5 shadow-md hover:shadow-lg transition"
            >
              Register as Employer
              <span className="ml-2 text-lg">→</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WorkersEmployersSection;
