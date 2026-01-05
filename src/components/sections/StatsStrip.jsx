// src/components/sections/StatsStrip.jsx
import React from "react";

const items = [
  { label: "Free for Workers", value: "100%" },
  { label: "Verified Profiles", value: "KYC" },
  { label: "Smart Matching", value: "AI" },
  { label: "Platform Access", value: "24/7" },
];

const StatsStrip = () => (
  <section className="bg-white border-y border-slate-100 py-10">
    <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
      {items.map((item) => (
        <div key={item.label}>
          <div className="text-2xl font-bold text-slate-900 mb-1">
            {item.value}
          </div>
          <div className="text-xs uppercase tracking-wide text-slate-500">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default StatsStrip;