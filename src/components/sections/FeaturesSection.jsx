import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Verified Profiles",
    text: "KYC verification and rating system ensures trusted connections.",
    category: "Security",
  },
  {
    title: "Zero Commission",
    text: "Workers receive 100% of earnings without middlemen cuts.",
    category: "Payments",
  },
  {
    title: "Location Based",
    text: "Find jobs and workers nearby for faster hiring.",
    category: "Discovery",
  },
  {
    title: "Direct Communication",
    text: "Chat and call directly without third-party involvement.",
    category: "Communication",
  },
  {
    title: "Secure Payments",
    text: "Safe and transparent payment system for both sides.",
    category: "Finance",
  },
];

// 🔥 STAGGER CONTAINER
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

// 🔥 ITEM ANIMATION
const item = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const FeaturesSection = () => {
  return (
    <section className="relative isolate py-24 overflow-hidden">

      {/* 🔥 BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white z-0"></div>

      {/* 🌈 FLOATING GLOWS */}
      <motion.div
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] bg-blue-200 blur-[140px] opacity-30 z-0"
      />

      <motion.div
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-emerald-200 blur-[140px] opacity-30 z-0"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* 🔥 HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 relative inline-block">
            Built for{" "}
            <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              Speed, Trust & Simplicity
            </span>

            {/* 🔥 GRADIENT UNDERLINE */}
            <span className="absolute left-0 -bottom-2 w-full h-[3px] bg-gradient-to-r from-blue-600 to-teal-500 rounded-full opacity-70"></span>
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            Everything you need to connect workers and employers seamlessly.
          </p>
        </motion.div>

        {/* 🔥 MAIN GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="grid lg:grid-cols-3 gap-8"
        >

          {/* ⭐ CORE FEATURE */}
          <motion.div
            variants={item}
            className="lg:col-span-2 p-8 rounded-2xl bg-gradient-to-br from-blue-600 to-teal-500 text-white shadow-lg relative overflow-hidden hover:scale-[1.01] transition"
          >
            <span className="text-xs uppercase tracking-wide text-white/70">
              Core Feature
            </span>

            <h3 className="mt-2 text-xl font-bold">
              AI Powered Job Matching
            </h3>

            <p className="mt-3 text-white/90 max-w-md">
              Intelligent system connects workers and employers instantly based
              on skills, experience, and location.
            </p>

            <div className="flex flex-wrap gap-2 mt-5">
              {["Smart Matching", "Real-time", "Accurate"].map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs bg-white/20 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* ✅ COUNTING (UNCHANGED) */}
            <div className="flex gap-6 mt-6 text-sm">
              <div>
                <p className="font-semibold text-white">95%</p>
                <p className="text-white/70 text-xs">Match Accuracy</p>
              </div>
              <div>
                <p className="font-semibold text-white">2x</p>
                <p className="text-white/70 text-xs">Faster Hiring</p>
              </div>
            </div>

            <div className="mt-6 text-sm text-white/80 flex items-center gap-1">
              Learn more →
            </div>

            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          </motion.div>

          {/* SIDE CARDS */}
          <div className="flex flex-col gap-6">
            {features.slice(0, 2).map((f, i) => (
              <motion.div
                key={i}
                variants={item}
                className="group relative p-6 rounded-2xl bg-white shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] transition duration-300"
              >
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 to-teal-500 rounded-t-2xl opacity-70"></div>

                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-400 uppercase">
                    {f.category}
                  </span>

                  <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-semibold">
                    {i + 1}
                  </div>
                </div>

                <h3 className="mt-3 font-semibold text-gray-900">
                  {f.title}
                </h3>

                <p className="text-sm text-gray-600 mt-1">
                  {f.text}
                </p>

                <div className="mt-4 text-sm text-blue-600 flex items-center gap-1">
                  Learn more →
                </div>

                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-teal-500 opacity-5 group-hover:opacity-10 transition"></div>
              </motion.div>
            ))}
          </div>

          {/* BOTTOM CARDS */}
          <div className="lg:col-span-3 grid md:grid-cols-3 gap-6">
            {features.slice(2).map((f, i) => (
              <motion.div
                key={i}
                variants={item}
                className="group relative p-6 rounded-2xl bg-white shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] transition duration-300"
              >
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 to-teal-500 rounded-t-2xl opacity-70"></div>

                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-400 uppercase">
                    {f.category}
                  </span>

                  <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-semibold">
                    {i + 3}
                  </div>
                </div>

                <h3 className="mt-3 font-semibold text-gray-900">
                  {f.title}
                </h3>

                <p className="text-sm text-gray-600 mt-1">
                  {f.text}
                </p>

                <div className="mt-4 text-sm text-blue-600 flex items-center gap-1">
                  Learn more →
                </div>

                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-teal-500 opacity-5 group-hover:opacity-10 transition"></div>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;