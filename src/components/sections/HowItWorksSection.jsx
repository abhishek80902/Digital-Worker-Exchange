import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Register & Verify",
    text: "Workers register with skills and complete KYC.",
  },
  {
    title: "AI Job Matching",
    text: "Smart system suggests jobs based on skills & location.",
  },
  {
    title: "Connect",
    text: "Workers and employers interact directly via chat or calls.",
  },
  {
    title: "Work & Get Paid",
    text: "Complete work and receive direct payment securely.",
  },
];

// 🔥 STAGGER
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.18 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const HowItWorksSection = () => {
  return (
    <section className="relative isolate py-24 overflow-hidden">

      {/* 🔥 BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50 z-0"></div>

      {/* 🌈 FLOATING GLOWS */}
      <motion.div
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-blue-200 blur-[120px] opacity-25 z-0"
      />

      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-teal-200 blur-[120px] opacity-25 z-0"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* 🔥 HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            How It{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                Works
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
                  stroke="url(#gradient)"
                  strokeWidth="3"
                />
                <defs>
                  <linearGradient id="gradient" x1="0" x2="1">
                    <stop offset="0%" stopColor="#2563eb" />
                    <stop offset="100%" stopColor="#14b8a6" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            A simple and transparent process designed for speed and efficiency.
          </p>
        </motion.div>

        {/* 🔥 FLOW */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="relative"
        >

          {/* 🔥 ANIMATED LINE */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1 }}
            className="origin-left absolute top-8 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 to-teal-500"
          />

          <div className="grid md:grid-cols-4 gap-10 relative">

            {steps.map((step, i) => (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ y: -6, scale: 1.03 }}
                className="text-center relative transition"
              >

                {/* STEP CIRCLE */}
                <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-teal-500 text-white flex items-center justify-center text-lg font-semibold shadow-lg relative z-10">
                  {i + 1}
                </div>

                {/* TITLE */}
                <h3 className="mt-6 font-semibold text-gray-900">
                  {step.title}
                </h3>

                {/* TEXT */}
                <p className="text-sm text-gray-600 mt-2">
                  {step.text}
                </p>

                {/* CTA */}
                <div className="mt-3 text-sm text-blue-600 flex justify-center items-center gap-1">
                  Learn more →
                </div>

              </motion.div>
            ))}

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HowItWorksSection;