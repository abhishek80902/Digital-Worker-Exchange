// src/components/sections/HeroSection.jsx
import React from "react";
import Typewriter from "typewriter-effect";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* background gradient + soft curve at bottom */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle at 10% 0%, #ede9fe 0, #ffffff 40%), radial-gradient(circle at 80% 0%, #ffedd5 0, #ffffff 40%)",
        }}
      />
      <div className="absolute inset-x-0 bottom-[-80px] h-40 bg-gradient-to-b from-transparent to-[#f5f7fb] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-20 grid lg:grid-cols-12 gap-12 items-center">
        {/* LEFT */}
        <div className="lg:col-span-6">
          {/* top indicator chips */}
          <div className="flex flex-wrap items-center gap-3 mb-7">
            <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-purple-50 text-purple-700 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-purple-500" />
              India’s #1 Worker–Employer Platform
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-green-50 text-green-700 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              Trusted & Verified
            </span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
  Empowering{" "}
  <span className="relative inline-block w-[220px] lg:w-[260px]">
    <span className="invisible absolute">Careers</span>
    <span className="absolute bottom-0 left-0 text-teal-600 drop-shadow-sm">
      <Typewriter
        options={{
          strings: ["Workers", "Hands", "Careers"],
          autoStart: true,
          loop: true,
          delay: 75,
          deleteSpeed: 40,
        }}
      />
    </span>
  </span>
  <br />
  with <span className="drop-shadow-sm">Verified Employers</span>
</h1>


          <p className="mt-5 text-lg text-slate-600 max-w-xl">
            A digital platform removing middlemen, ensuring fair wages, and
            connecting skilled workers with verified employers across India
            through AI-powered job matching.
          </p>

          {/* big stats like “20M+ …” */}
          <div className="mt-8 flex flex-wrap gap-8">
            <div>
              <div className="text-2xl font-bold text-slate-900">20M+</div>
              <div className="text-sm text-slate-500">
                Workers migrate yearly
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-900">85%</div>
              <div className="text-sm text-slate-500">
                Unorganised sector
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-900">0%</div>
              <div className="text-sm text-slate-500">Commission fee</div>
            </div>
          </div>

          {/* primary CTAs */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#workers-employers"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-emerald-500 to-teal-500 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition"
            >
              I’m a Worker
              <span className="ml-2 text-lg">→</span>
            </a>
            <a
              href="#workers-employers"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-slate-300 text-slate-800 font-semibold bg-white/70 hover:bg-slate-50 transition"
            >
              I’m an Employer
              <span className="ml-2 text-lg">→</span>
            </a>
          </div>

          {/* trust row */}
          <div className="mt-8 flex items-center gap-4 text-sm text-slate-500">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-br from-emerald-400 to-teal-500"
                />
              ))}
            </div>
            <span>Trusted by thousands of workers and employers</span>
          </div>
        </div>

        {/* RIGHT: Image + floating cards */}
        <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
          <div
            className="absolute w-[440px] h-[440px] rounded-[32px] -z-10"
            style={{
              background:
                "radial-gradient(circle at 0 0, rgba(16,185,129,0.18), transparent 60%), radial-gradient(circle at 100% 100%, rgba(59,130,246,0.18), transparent 60%)",
              boxShadow: "0 30px 80px rgba(15,23,42,0.18)",
            }}
          />

          <div className="overflow-hidden rounded-[32px] bg-slate-900/5 border border-white/80 shadow-2xl -mt-20">
            <img
              src="/images/poland65df15668f317.jpg"
              alt="Skilled workers"
              className="w-[420px] h-[420px] md:w-[460px] md:h-[460px] object-cover"
            />
          </div>

          {/* top-right: small “5,000+ active today” pill */}
          <div className="hidden md:flex items-center gap-2 absolute -top-20 -mt-12 right-10 bg-white rounded-full shadow-lg px-4 py-2 border border-slate-100">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span className="text-xs font-medium text-slate-700">
              5,000+ Active Today
            </span>
          </div>

          {/* top-left: AI Matching card */}
          <div className="hidden md:block absolute bottom-[-75px] -left-0.1">
            <div className="bg-white rounded-2xl shadow-xl border border-slate-100 px-4 py-3 flex items-center gap-3 min-w-[210px]">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white text-xl">
                ✨
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  AI Matching
                </p>
                <p className="text-xs text-slate-500">Smart jobs</p>
              </div>
            </div>
          </div>

          {/* bottom-left: Verified profiles card */}
          <div className="hidden md:block absolute bottom-[-75px] left-24">
            <div className="bg-white rounded-2xl shadow-xl border border-slate-100 px-4 py-3 flex items-center gap-3 min-w-[220px]">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 text-xl">
                ✓
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  Verified Profiles
                </p>
                <p className="text-xs text-slate-500">KYC & Ratings</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
