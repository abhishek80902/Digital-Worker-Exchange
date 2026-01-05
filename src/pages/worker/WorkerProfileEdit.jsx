// src/pages/worker/WorkerProfileEdit.jsx
import React, { useState } from "react";

export default function WorkerProfileEdit() {
  const [form, setForm] = useState({
    name: "Rajesh Kumar",
    bio: "Experienced electrician...",
    wage: "600/day",
    skills: ["Wiring", "Repair"],
  });

  function update(key, val) {
    setForm({ ...form, [key]: val });
  }

  return (
    <div className="min-h-screen bg-white pt-28 px-6 pb-20 max-w-3xl mx-auto">

      <h1 className="text-3xl font-extrabold text-slate-900">Edit Profile</h1>
      <p className="text-slate-600 mt-1">Update your details</p>

      <div className="mt-8 bg-white p-6 rounded-2xl border shadow">

        <label className="text-sm text-slate-600">Full Name</label>
        <input
          className="w-full mt-2 p-3 border rounded-xl bg-slate-50"
          value={form.name}
          onChange={(e) => update("name", e.target.value)}
        />

        <label className="text-sm text-slate-600 mt-4">Bio</label>
        <textarea
          rows={3}
          className="w-full mt-2 p-3 border rounded-xl bg-slate-50"
          value={form.bio}
          onChange={(e) => update("bio", e.target.value)}
        />

        <label className="text-sm text-slate-600 mt-4">Daily Wage</label>
        <input
          className="w-full mt-2 p-3 border rounded-xl bg-slate-50"
          value={form.wage}
          onChange={(e) => update("wage", e.target.value)}
        />

        <label className="text-sm text-slate-600 mt-4">Skills</label>
        <input
          className="w-full mt-2 p-3 border rounded-xl bg-slate-50"
          value={form.skills.join(", ")}
          onChange={(e) => update("skills", e.target.value.split(","))}
        />

        <button className="mt-8 w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-orange-500 text-white font-semibold">
          Save Changes
        </button>
      </div>
    </div>
  );
}
