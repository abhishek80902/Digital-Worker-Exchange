// src/components/sections/ZeroCommissionSection.jsx
import React from "react";
import { motion } from "framer-motion";

const ZeroCommissionSection = () => {
  return (
    <section className="relative isolate py-28 overflow-hidden">

      {/* 🔥 PREMIUM BASE BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-emerald-50/40 to-blue-50/40 z-0"></div>

      {/* 🌈 BIG LEFT GLOW */}
      <div className="absolute top-[-150px] left-[-120px] w-[500px] h-[500px] bg-emerald-200 blur-[140px] opacity-30 z-0"></div>

      {/* 🌈 BIG RIGHT GLOW */}
      <div className="absolute bottom-[-150px] right-[-120px] w-[500px] h-[500px] bg-blue-200 blur-[140px] opacity-30 z-0"></div>

      {/* 🌈 CENTER SOFT BLEND (NEW → MAKES IT PREMIUM) */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-gradient-to-r from-emerald-100 to-blue-100 blur-[160px] opacity-20 -translate-x-1/2 -translate-y-1/2 z-0"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* 🔥 HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            A Platform Built for{" "}
            <span className="bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent">
              Fairness & Efficiency
            </span>
          </h2>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto text-lg">
            Empowering workers and employers with a transparent and direct ecosystem.
          </p>
        </div>

        {/* 🔥 SPLIT SECTION */}
        <div className="grid md:grid-cols-2 gap-8 relative">

          {/* WORKERS SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative p-10 rounded-3xl bg-gradient-to-br from-emerald-50 to-emerald-100 border border-emerald-200 shadow-xl overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-300 rounded-full blur-2xl opacity-30"></div>

            <span className="text-sm text-emerald-600 font-medium">
              For Workers
            </span>

            <h3 className="mt-3 text-2xl font-bold text-gray-900">
              Keep What You Earn
            </h3>

            <p className="mt-3 text-gray-600 text-sm">
              No cuts. No intermediaries. Every rupee you earn goes directly to you.
            </p>

            <div className="mt-6 space-y-3 text-sm text-gray-700">
              <div>✔ Full payment with zero deductions</div>
              <div>✔ Verified job opportunities</div>
              <div>✔ Direct employer communication</div>
            </div>

            <div className="mt-8 text-sm text-emerald-600 flex items-center gap-1 font-medium">
              Start earning →
            </div>
          </motion.div>

          {/* EMPLOYERS SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative p-10 rounded-3xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 shadow-xl overflow-hidden"
          >
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-300 rounded-full blur-2xl opacity-30"></div>

            <span className="text-sm text-blue-600 font-medium">
              For Employers
            </span>

            <h3 className="mt-3 text-2xl font-bold text-gray-900">
              Hire Without Barriers
            </h3>

            <p className="mt-3 text-gray-600 text-sm">
              Connect directly with skilled workers and hire faster with complete transparency.
            </p>

            <div className="mt-6 space-y-3 text-sm text-gray-700">
              <div>✔ Direct access to skilled workers</div>
              <div>✔ No commission or hidden costs</div>
              <div>✔ Faster hiring with AI matching</div>
            </div>

            <div className="mt-8 text-sm text-blue-600 flex items-center gap-1 font-medium">
              Start hiring →
            </div>
          </motion.div>

        </div>

        {/* 🔥 CTA */}
        <div className="text-center mt-20">
          <button className="px-12 py-5 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-semibold shadow-lg hover:shadow-2xl hover:-translate-y-1 transition">
            Join the Platform →
          </button>
        </div>

      </div>
    </section>
  );
};

export default ZeroCommissionSection;