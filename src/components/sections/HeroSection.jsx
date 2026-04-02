import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const HeroSection = () => {
  return (
    <section className="relative bg-white overflow-hidden">

      {/* 🔲 LIGHT SUBTLE GRID BACKGROUND */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "30px 30px",
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">

        {/* TOP TAG */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block px-5 py-1 mb-6 rounded-full bg-blue-100 text-blue-700 text-sm font-medium"
        >
          Smart Worker–Employer Platform
        </motion.div>

        {/* MAIN HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-extrabold text-gray-900"
        >
          Find Work Faster. Hire Smarter.
        </motion.h1>

        {/* TYPING EFFECT */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-3xl md:text-5xl font-extrabold text-blue-600"
        >
          <Typewriter
            options={{
              strings: [
                "Without Middlemen.",
                "With Verified Employers.",
                "With Trusted Workers.",
              ],
              autoStart: true,
              loop: true,
              delay: 60,
              deleteSpeed: 40,
              cursor: "",
            }}
          />
        </motion.h2>

        {/* DESCRIPTION */}
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          A digital platform that directly connects workers and employers —
          removing middlemen, ensuring trust, and creating fair opportunities.
        </p>

        {/* PROFESSIONAL TAGS */}
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {[
            "Instant Matching",
            "Verified Profiles",
            "Zero Commission",
            "Location Based",
            "Direct Communication",
          ].map((tag, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-gray-300 text-sm text-gray-700 shadow-sm hover:shadow-md transition"
            >
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              {tag}
            </motion.div>
          ))}
        </div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-16"
        >
          <div className="mx-auto max-w-5xl rounded-3xl overflow-hidden shadow-2xl border">
            <img
              src="/images/poland65df15668f317.jpg"
              alt="workers"
              className="w-full h-[420px] md:h-[520px] object-cover"
            />
          </div>
        </motion.div>

        {/* 🔥 BOTH CTA BUTTONS HIGHLIGHTED */}
        <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5 }}
  className="mt-12 flex justify-center gap-5 flex-wrap"
>
  {/* FIND JOBS */}
  <button className="relative px-10 py-4 rounded-full font-semibold text-white overflow-hidden transition-all duration-300 bg-gradient-to-r from-blue-600 to-teal-500 shadow-md hover:shadow-xl hover:-translate-y-1">
    
    {/* subtle shine */}
    <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition"></span>

    <span className="relative flex items-center gap-2">
      Find Jobs →
    </span>
  </button>

  {/* POST JOB */}
  <button className="relative px-10 py-4 rounded-full font-semibold text-white overflow-hidden transition-all duration-300 bg-gradient-to-r from-teal-500 to-emerald-500 shadow-md hover:shadow-xl hover:-translate-y-1">
  <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition"></span>

  <span className="relative flex items-center gap-2">
    Post a job +
  </span>
</button>
</motion.div>

        {/* TRUST TEXT */}
        <p className="mt-6 text-sm text-gray-500">
          Trusted by thousands across India
        </p>

      </div>
    </section>
  );
};

export default HeroSection;