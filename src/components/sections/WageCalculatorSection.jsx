// src/components/sections/WageCalculatorSection.jsx
import React, { useState } from "react";

const WageCalculatorSection = () => {
  const [rateType] = useState("Daily Rate");
  const [dailyRate, setDailyRate] = useState(600);
  const [daysPerWeek, setDaysPerWeek] = useState(6);

  const daily = dailyRate || 0;
  const weekly = daily * daysPerWeek;
  const monthly = weekly * 4;

  return (
    <section className="bg-[#f7fafc] py-20" id="wage-calculator">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-flex items-center px-4 py-1 rounded-full bg-amber-50 text-amber-700 text-sm font-medium mb-4">
            💰 Wage Calculator
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">
            Calculate Your Earnings
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Estimate your daily, weekly, and monthly earnings so you always know
            your worth before accepting a job.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* form */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
            <div className="mb-5">
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Rate Type
              </label>
              <div className="relative">
                <select
                  value={rateType}
                  disabled
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-slate-600 text-sm"
                >
                  <option>Daily Rate</option>
                </select>
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs">
                  (more types later)
                </span>
              </div>
            </div>

            <div className="mb-5">
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Daily Rate (₹)
              </label>
              <input
                type="number"
                min={0}
                value={dailyRate}
                onChange={(e) => setDailyRate(Number(e.target.value) || 0)}
                className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div className="mb-5">
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Working Days per Week
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
                className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div className="flex flex-wrap gap-3 mt-6">
              <button
                type="button"
                className="flex-1 min-w-[140px] inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold py-2.5 shadow-md hover:shadow-lg transition"
              >
                Calculate
              </button>
              <button
                type="button"
                onClick={() => {
                  setDailyRate(600);
                  setDaysPerWeek(6);
                }}
                className="px-4 py-2 rounded-xl border border-slate-200 text-sm font-medium text-slate-700 bg-white hover:bg-slate-50"
              >
                Reset
              </button>
            </div>

            <p className="mt-4 text-xs text-slate-500">
              Remember: With DWE, 100% of your wages go directly to you with no
              middlemen commission.
            </p>
          </div>

          {/* results */}
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-sky-50 to-teal-50 rounded-2xl border border-sky-100 p-5 flex justify-between items-center">
              <div>
                <p className="text-sm text-slate-500">Daily Earnings</p>
                <p className="text-2xl font-bold text-slate-900">₹{daily}</p>
                <p className="text-xs text-slate-500 mt-1">Per working day</p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-sky-100 flex items-center justify-center text-sky-600 text-xl">
                ₹
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border border-amber-100 p-5 flex justify-between items-center">
              <div>
                <p className="text-sm text-slate-500">Weekly Earnings</p>
                <p className="text-2xl font-bold text-slate-900">₹{weekly}</p>
                <p className="text-xs text-slate-500 mt-1">
                  Based on {daysPerWeek} working days
                </p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600 text-xl">
                📆
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl border border-emerald-100 p-5 flex justify-between items-center">
              <div>
                <p className="text-sm text-slate-500">Monthly Earnings</p>
                <p className="text-2xl font-bold text-slate-900">₹{monthly}</p>
                <p className="text-xs text-slate-500 mt-1">
                  Estimated for 4 weeks
                </p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 text-xl">
                📈
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WageCalculatorSection;