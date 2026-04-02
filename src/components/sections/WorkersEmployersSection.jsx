// src/components/sections/SocialProofSection.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

/* 🔥 COUNT-UP HOOK */
const useCountUp = (end, duration = 1500) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return count;
};

const testimonials = [
  {
    name: "Ravi Kumar",
    role: "Electrician",
    text: "I finally receive full payment without any deductions. This platform truly changed how I work.",
  },
  {
    name: "Anita Sharma",
    role: "Employer",
    text: "Hiring is faster and more reliable. I can directly connect with skilled workers.",
  },
  {
    name: "Suresh Yadav",
    role: "Plumber",
    text: "No middlemen, no confusion. Just work and get paid fairly.",
  },
];

const faqs = [
  {
    question: "Is there any commission charged?",
    answer: "No. Workers receive 100% of their wages with zero commission.",
  },
  {
    question: "Are the workers verified?",
    answer: "Yes, all workers go through profile verification and ratings.",
  },
  {
    question: "How fast can I hire someone?",
    answer: "You can connect with workers instantly and hire within minutes.",
  },
  {
    question: "Is this platform safe?",
    answer: "Yes, secure payments and verified interactions ensure safety.",
  },
];

const SocialProofSection = () => {
  const [active, setActive] = useState(0);
  const [openFAQ, setOpenFAQ] = useState(null);

  /* 🔥 STATS */
  const workers = useCountUp(10000);
  const jobs = useCountUp(5000);
  const rating = 4.9;

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative isolate py-28 overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/60 via-white to-slate-50/60 z-0"></div>
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-blue-100 blur-[160px] opacity-20 -translate-x-1/2 -translate-y-1/2 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Loved by{" "}
            <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              Real Users
            </span>
          </h2>
        </div>

        {/* 🔥 ANIMATED STATS */}
        <div className="grid md:grid-cols-3 gap-6 text-center mb-20">
          {[
            { value: workers, suffix: "+", label: "Workers Joined" },
            { value: jobs, suffix: "+", label: "Jobs Completed" },
            { value: rating, suffix: "★", label: "Average Rating" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="p-6 rounded-2xl bg-white/70 backdrop-blur border border-gray-200 shadow-md"
            >
              <p className="text-3xl font-extrabold text-gray-900">
                {stat.value}
                {stat.suffix}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* 🔥 TESTIMONIAL */}
        <div className="relative h-[280px] flex items-center justify-center mb-20">

          {testimonials.map((t, i) => {
            const isActive = i === active;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: isActive ? 1 : 0.4,
                  scale: isActive ? 1 : 0.9,
                  y: isActive ? 0 : 20,
                }}
                transition={{ duration: 0.5 }}
                className={`absolute w-full max-w-xl p-8 rounded-3xl backdrop-blur-xl border shadow-xl
                  ${
                    isActive
                      ? "bg-white border-gray-200 z-20"
                      : "bg-white/60 border-gray-100 z-10"
                  }`}
              >
                <div className="flex gap-1 text-yellow-400 mb-3">
                  ★★★★★
                </div>

                <p className="text-gray-700 text-lg leading-relaxed">
                  “{t.text}”
                </p>

                <div className="mt-6">
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-400">{t.role}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* DOTS */}
        <div className="flex justify-center gap-2 mb-20">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-3 h-3 rounded-full transition ${
                i === active ? "bg-blue-500 scale-110" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* TRUST STRIP */}
        <div className="text-center mb-20 text-sm text-gray-500">
          Trusted by workers and employers across multiple industries
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Frequently Asked Questions
          </h3>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-2xl border border-gray-200 bg-white shadow-md"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                  className="w-full px-5 py-4 flex justify-between items-center text-left"
                >
                  <span className="font-medium text-gray-900">
                    {faq.question}
                  </span>
                  <span className="text-gray-400 text-lg">
                    {openFAQ === i ? "−" : "+"}
                  </span>
                </button>

                {openFAQ === i && (
                  <div className="px-5 pb-4 text-sm text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default SocialProofSection;