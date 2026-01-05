// src/components/sections/ZeroCommissionRibbon.jsx
import React from "react";

const ZeroCommissionRibbon = () => {
  return (
    <section className="relative py-12">
      
      {/* Gradient Background */}
      <div
        className="absolute inset-0 -z-10 opacity-90"
        style={{
          background:
            "linear-gradient(135deg, rgba(16,185,129,0.15), rgba(59,130,246,0.15))",
        }}
      />

      {/* Main Ribbon */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative rounded-3xl p-10 md:p-14 shadow-xl overflow-hidden bg-white border border-green-100">

          {/* Soft Glow at Corners */}
          <div className="absolute -top-10 -left-10 w-56 h-56 bg-emerald-200 rounded-full blur-[120px] opacity-40" />
          <div className="absolute -bottom-10 -right-10 w-56 h-56 bg-sky-200 rounded-full blur-[120px] opacity-40" />

          {/* Gradient Line at Top */}
          <div className="absolute left-0 top-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-sky-500 opacity-70" />

          {/* Ribbon Content */}
          <div className="relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              100% of Wages Go Directly to Workers
            </h2>

            <p className="mt-4 text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
              No commission, no middlemen, no hidden deductions. Workers receive fair 
              and full payment for their labor — ensuring dignity, transparency, and empowerment.
            </p>

            {/* Icons Row */}
            <div className="mt-8 flex flex-wrap justify-center gap-6 md:gap-10">
              <div className="flex items-center gap-2">
                <span className="text-emerald-600 text-2xl">💰</span>
                <span className="font-medium text-slate-700">Zero Commission</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-blue-600 text-2xl">🔒</span>
                <span className="font-medium text-slate-700">100% Secure Payments</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-amber-600 text-2xl">⚡</span>
                <span className="font-medium text-slate-700">
                  Fast & Transparent
                </span>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10">
              <a
                href="#workers-employers"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-transform"
              >
                Learn More
                <span className="text-lg">→</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ZeroCommissionRibbon;