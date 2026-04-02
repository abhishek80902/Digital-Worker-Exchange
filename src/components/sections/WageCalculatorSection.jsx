import React, { useState } from "react";
import { motion } from "framer-motion";

const WageCalculatorSection = () => {
  const [dailyRate, setDailyRate] = useState(600);
  const [daysPerWeek, setDaysPerWeek] = useState(6);

  const daily = dailyRate || 0;
  const weekly = daily * daysPerWeek;
  const monthly = weekly * 4;

  const withPlatform = monthly;
  const withoutPlatform = Math.floor(monthly * 0.75);
  const extraEarned = withPlatform - withoutPlatform;

  return (
    <section className="relative isolate py-28 overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white z-0"></div>

      {/* GLOWS */}
      <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-gradient-to-r from-emerald-100 to-blue-100 blur-[160px] opacity-30 -translate-x-1/2 -translate-y-1/2 z-0"></div>
      <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-emerald-200 blur-[120px] opacity-20 z-0"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-blue-200 blur-[120px] opacity-20 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1 text-xs font-medium bg-emerald-100 text-emerald-700 rounded-full mb-4">
            Smart Earnings Tool
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Calculate Your{" "}
            <span className="relative inline-block">

              {/* TEXT */}
              <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-500 bg-clip-text text-transparent">
                True Earnings
              </span>

              {/* 🔥 CURVY UNDERLINE */}
              <svg
                viewBox="0 0 200 20"
                className="absolute left-0 -bottom-3 w-full h-[10px]"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,10 Q50,20 100,10 T200,10"
                  fill="none"
                  stroke="url(#grad2)"
                  strokeWidth="3"
                />
                <defs>
                  <linearGradient id="grad2" x1="0" x2="1">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="50%" stopColor="#14b8a6" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
              </svg>

            </span>
          </h2>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto text-lg">
            Understand your real income and see how much you save without middlemen.
          </p>
        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT PANEL */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.01 }}
            className="relative p-8 rounded-3xl bg-white/70 backdrop-blur-xl border border-white/40 shadow-2xl overflow-hidden"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-emerald-500 to-teal-500 opacity-5"></div>

            <div className="space-y-5">
              <div>
                <label className="text-sm text-gray-600">
                  Daily Rate (₹)
                </label>
                <input
                  type="number"
                  value={dailyRate}
                  onChange={(e) => setDailyRate(Number(e.target.value) || 0)}
                  className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-200 bg-white/80 focus:ring-2 focus:ring-emerald-500 outline-none transition"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">
                  Days per Week
                </label>
                <input
                  type="number"
                  min={1}
                  max={7}
                  value={daysPerWeek}
                  onChange={(e) =>
                    setDaysPerWeek(
                      Math.min(7, Math.max(1, Number(e.target.value) || 1))
                    )
                  }
                  className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-200 bg-white/80 focus:ring-2 focus:ring-blue-500 outline-none transition"
                />
              </div>
            </div>

            <div className="mt-6 flex gap-3 flex-wrap">
              {[500, 800, 1200].map((val) => (
                <button
                  key={val}
                  onClick={() => setDailyRate(val)}
                  className="px-4 py-2 text-sm rounded-full bg-gray-100 hover:bg-gray-200 hover:scale-105 transition"
                >
                  ₹{val}
                </button>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              className="mt-8 w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold shadow-md hover:shadow-xl hover:-translate-y-1 transition"
            >
              Calculate Earnings →
            </motion.button>

            <div className="mt-6 p-4 rounded-xl bg-emerald-50 border border-emerald-100 text-sm text-gray-700">
              💡 You earn{" "}
              <span className="font-semibold text-emerald-600">
                ₹{extraEarned}
              </span>{" "}
              more every month with zero commission.
            </div>
          </motion.div>

          {/* RIGHT PANEL */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >

            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100 shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 opacity-5 rounded-3xl"></div>

              <p className="text-sm text-gray-500">Monthly Earnings</p>
              <h3 className="text-4xl font-extrabold text-gray-900 mt-2">
                ₹{monthly}
              </h3>
              <p className="text-xs text-gray-500 mt-1">Based on your inputs</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200">
                <p className="text-xs text-gray-500">Without Platform</p>
                <p className="text-xl font-bold text-gray-700 mt-1">
                  ₹{withoutPlatform}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-green-50 border border-green-200">
                <p className="text-xs text-gray-500">With Platform</p>
                <p className="text-xl font-bold text-green-600 mt-1">
                  ₹{withPlatform}
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-100">
              <p className="text-sm text-gray-600">
                Extra earnings saved:
              </p>
              <p className="text-2xl font-bold text-blue-600 mt-1">
                ₹{extraEarned}
              </p>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WageCalculatorSection;