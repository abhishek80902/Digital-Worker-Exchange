import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { useNavigate } from "react-router-dom";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

const ZeroCommissionSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative isolate py-28 overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-emerald-50/40 to-blue-50/40 z-0"></div>

      {/* FLOATING BLOBS */}
      <motion.div
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-[-150px] left-[-120px] w-[500px] h-[500px] bg-emerald-200 blur-[140px] opacity-30 z-0"
      />

      <motion.div
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute bottom-[-150px] right-[-120px] w-[500px] h-[500px] bg-blue-200 blur-[140px] opacity-30 z-0"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            A Platform Built for{" "}
            <span className="relative inline-block">

              {/* 🔥 MOVING GRADIENT + TYPEWRITER */}
              <span className="gradient-text">
                <Typewriter
                  options={{
                    strings: ["Fairness", "Efficiency", "Trust"],
                    autoStart: true,
                    loop: true,
                    delay: 60,
                    deleteSpeed: 40,
                  }}
                />
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
                  stroke="url(#grad)"
                  strokeWidth="3"
                />
                <defs>
                  <linearGradient id="grad" x1="0" x2="1">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
              </svg>

            </span>
          </h2>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto text-lg">
            Empowering workers and employers with a transparent and direct ecosystem.
          </p>
        </motion.div>

        {/* CARDS */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="grid md:grid-cols-2 gap-8"
        >

          {/* WORKERS */}
          <motion.div
            variants={item}
            whileHover={{ y: -8, scale: 1.03 }}
            className="group relative p-10 rounded-3xl bg-gradient-to-br from-emerald-50 to-emerald-100 border border-emerald-200 shadow-xl overflow-hidden transition"
          >
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition"></div>
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

          {/* EMPLOYERS */}
          <motion.div
            variants={item}
            whileHover={{ y: -8, scale: 1.03 }}
            className="group relative p-10 rounded-3xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 shadow-xl overflow-hidden transition"
          >
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition"></div>
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

        </motion.div>

        {/* CTA */}
        <motion.div className="text-center mt-20">
          <motion.button
            onClick={() => navigate("/select-role")}
            whileHover={{ scale: 1.05 }}
            animate={{
              boxShadow: [
                "0 0 0px",
                "0 0 25px rgba(16,185,129,0.5)",
                "0 0 0px",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="px-12 py-5 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-semibold shadow-lg hover:shadow-2xl hover:-translate-y-1 transition"
          >
            Join the Platform →
          </motion.button>
        </motion.div>

      </div>

      {/* 🔥 GLOBAL STYLE FOR MOVING GRADIENT */}
      <style jsx>{`
        .gradient-text {
          background: linear-gradient(270deg, #10b981, #14b8a6, #3b82f6);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientMove 4s ease infinite;
          display: inline-block;
        }

        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>

    </section>
  );
};

export default ZeroCommissionSection;