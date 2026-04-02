// src/pages/About.jsx
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen pt-2 pb-20 bg-white">

      {/* 🔥 HERO */}
      <section className="relative isolate px-6 py-28 overflow-hidden">

        {/* background */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/40 to-white z-0"></div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">

          <span className="inline-block px-4 py-1 text-sm bg-blue-100 text-blue-600 rounded-full mb-4">
            About Digital Worker Exchange
          </span>

          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Building a{" "}
            <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              Fair Workforce Ecosystem
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Digital Worker Exchange is redefining how workers and employers connect —
            eliminating middlemen, ensuring fair wages, and using AI to create faster,
            smarter, and more transparent hiring.
          </p>

        </div>
      </section>

      {/* 🔥 MISSION + VISION */}
      <section className="px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        <div className="p-10 rounded-3xl bg-white border border-gray-200 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
          <p className="mt-4 text-gray-600">
            To empower every worker with fair access to opportunities, remove exploitation,
            and ensure that every individual receives the full value of their work.
          </p>
        </div>

        <div className="p-10 rounded-3xl bg-gradient-to-br from-blue-50 to-teal-50 border border-blue-100 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
          <p className="mt-4 text-gray-600">
            To become India’s most trusted workforce platform, connecting millions of
            workers and employers through technology, trust, and transparency.
          </p>
        </div>

      </section>

      {/* 🔥 HOW IT WORKS */}
      <section className="px-6 max-w-6xl mx-auto mt-24">

        <h2 className="text-3xl font-bold text-gray-900 text-center">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">

          {[
            {
              title: "Post or Find Jobs",
              text: "Employers post jobs and workers explore opportunities nearby.",
            },
            {
              title: "AI Matching",
              text: "Our AI connects the best workers and jobs instantly.",
            },
            {
              title: "Connect & Work",
              text: "Chat, hire, and complete work with full transparency.",
            },
          ].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="p-8 rounded-3xl bg-white border border-gray-200 shadow-md hover:shadow-xl transition"
            >
              <div className="text-3xl font-bold text-blue-600">
                {i + 1}
              </div>

              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                {step.title}
              </h3>

              <p className="mt-2 text-gray-600 text-sm">
                {step.text}
              </p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* 🔥 WHY DIFFERENT */}
      <section className="mt-24 px-6 max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold text-gray-900 text-center">
          Why Choose DWE
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">

          {[
            {
              title: "Zero Commission",
              text: "Workers keep 100% of their earnings.",
            },
            {
              title: "Verified Ecosystem",
              text: "All users go through strict verification.",
            },
            {
              title: "AI Powered",
              text: "Smart matching for faster hiring.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-8 rounded-3xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 shadow-sm hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-2 text-gray-600 text-sm">
                {item.text}
              </p>
            </div>
          ))}

        </div>

      </section>

      {/* 🔥 STATS */}
      <section className="mt-24 px-6 max-w-6xl mx-auto">

        <div className="grid md:grid-cols-3 gap-10 text-center">

          {[
            { value: "10K+", label: "Workers Connected" },
            { value: "98%", label: "Verified Profiles" },
            { value: "4.8★", label: "Average Rating" },
          ].map((stat, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white border border-gray-200 shadow-md"
            >
              <p className="text-4xl font-bold text-blue-600">
                {stat.value}
              </p>
              <p className="text-gray-600 mt-1">
                {stat.label}
              </p>
            </div>
          ))}

        </div>

      </section>

      {/* 🔥 FINAL CTA */}
      <section className="mt-28 px-6 text-center">

        <div className="max-w-3xl mx-auto p-10 rounded-3xl bg-gradient-to-r from-blue-600 to-teal-500 text-white shadow-xl">

          <h2 className="text-3xl font-bold">
            Join the Future of Work
          </h2>

          <p className="mt-3 text-white/90">
            Whether you are a worker or an employer — start your journey today.
          </p>

          <button className="mt-6 px-8 py-3 rounded-full bg-white text-blue-600 font-semibold hover:scale-105 transition">
            Get Started →
          </button>

        </div>

      </section>

    </div>
  );
};

export default About;