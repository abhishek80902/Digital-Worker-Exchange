import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-white pt-18 pb-20">

      {/* HERO */}
      <section className="px-6 pb-20 pt-32 bg-gradient-to-br from-purple-600/10 to-orange-500/10">
  <div className="max-w-6xl mx-auto text-center flex flex-col justify-center items-center">
    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">
      About <span className="text-purple-600">Digital Worker Exchange</span>
    </h1>
    <p className="mt-4 text-lg text-slate-700 max-w-3xl mx-auto">
      Building India’s most trusted platform to connect skilled workers and verified employers — 
      with zero commission, AI-driven matching, and voice-enabled access for everyone.
    </p>
  </div>
</section>


      {/* OUR MISSION */}
      <section className="px-6 max-w-6xl mx-auto pt-10">
        <div className="bg-white p-10 rounded-3xl shadow-xl border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900">Our Mission</h2>
          <p className="mt-4 text-slate-700 leading-relaxed text-lg">
            Digital Worker Exchange (DWE) aims to empower India’s workforce by providing equal, fair,
            and transparent access to job opportunities. Our mission is to eliminate middlemen,
            ensure fair wages, enable verified hiring, and introduce AI automation for faster,
            smarter and safer job matching.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-6 max-w-6xl mx-auto mt-20">
        <h2 className="text-3xl font-bold text-slate-900 text-center">How DWE Works</h2>

        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {/* STEP 1 */}
          <div className="bg-white border border-slate-200 p-8 rounded-3xl shadow-sm text-center hover:shadow-xl transition">
            <div className="text-4xl">🔍</div>
            <h3 className="text-xl font-semibold text-slate-900 mt-4">1. Search or Post a Job</h3>
            <p className="text-slate-600 mt-2">
              Workers search for jobs near them. Employers post job requirements in minutes.
            </p>
          </div>

          {/* STEP 2 */}
          <div className="bg-white border border-slate-200 p-8 rounded-3xl shadow-sm text-center hover:shadow-xl transition">
            <div className="text-4xl">🤖</div>
            <h3 className="text-xl font-semibold text-slate-900 mt-4">2. AI Matching</h3>
            <p className="text-slate-600 mt-2">
              Our AI suggests the best workers or jobs using skills, ratings, distance, and wage fit.
            </p>
          </div>

          {/* STEP 3 */}
          <div className="bg-white border border-slate-200 p-8 rounded-3xl shadow-sm text-center hover:shadow-xl transition">
            <div className="text-4xl">🤝</div>
            <h3 className="text-xl font-semibold text-slate-900 mt-4">3. Chat & Hire</h3>
            <p className="text-slate-600 mt-2">
              Connect instantly via chat, schedule work, and complete hiring with trust.
            </p>
          </div>
        </div>
      </section>

      {/* OUR USP */}
      <section className="mt-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 text-center">Why We're Different</h2>

        <div className="grid md:grid-cols-3 gap-8 mt-10">
          <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-xl">
            <h3 className="font-semibold text-xl text-slate-900">Zero Commission</h3>
            <p className="mt-2 text-slate-600">Workers keep 100% of their earnings.</p>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-xl">
            <h3 className="font-semibold text-xl text-slate-900">Verified Jobs & Workers</h3>
            <p className="mt-2 text-slate-600">Every profile passes security checks and KYC.</p>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-xl">
            <h3 className="font-semibold text-xl text-slate-900">Voice Accessibility</h3>
            <p className="mt-2 text-slate-600">Workers with low literacy can register using voice.</p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="mt-24 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10">
          <div className="text-center">
            <p className="text-4xl font-bold text-purple-600">10,000+</p>
            <p className="text-slate-600 mt-1">Workers Connected</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-orange-500">98%</p>
            <p className="text-slate-600 mt-1">Verified Profiles</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-emerald-600">4.8 ★</p>
            <p className="text-slate-600 mt-1">Average Worker Rating</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
