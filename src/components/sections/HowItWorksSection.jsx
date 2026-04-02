// src/components/sections/HowItWorksSection.jsx
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

const HowItWorksSection = () => {
  return (
    <section className="relative isolate py-24 overflow-hidden">

      {/* 🔥 PREMIUM BACKGROUND (NO GRID) */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50 z-0"></div>

      {/* 🌈 SOFT TOP GLOW */}
      <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-blue-200 blur-[120px] opacity-25 z-0"></div>

      {/* 🌈 SOFT BOTTOM GLOW */}
      <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-teal-200 blur-[120px] opacity-25 z-0"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            How It{" "}
            <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              Works
            </span>
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            A simple and transparent process designed for speed and efficiency.
          </p>
        </div>

        {/* 🔥 HORIZONTAL FLOW */}
        <div className="relative">

          {/* LINE */}
          <div className="absolute top-8 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 to-teal-500"></div>

          <div className="grid md:grid-cols-4 gap-10 relative">

            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="text-center relative"
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
        </div>

      </div>
    </section>
  );
};

export default HowItWorksSection;