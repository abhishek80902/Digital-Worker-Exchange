// src/pages/Signup.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const [role, setRole] = useState("worker");
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSignup() {
    // Save user role for login redirection
    localStorage.setItem("role", role);
    localStorage.setItem("user", JSON.stringify(form));

    alert("Signup successful!");

    navigate("/login"); // redirect to login
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">

        <h1 className="text-3xl font-extrabold text-slate-900 text-center">
          Create Your Account
        </h1>

        {/* ROLE SELECTOR */}
        <div className="flex mt-6 mb-6 bg-slate-100 rounded-xl p-1">
          <button
            onClick={() => setRole("worker")}
            className={`flex-1 py-3 rounded-xl font-medium transition 
              ${role === "worker" ? "bg-gradient-to-r from-purple-600 to-orange-500 text-white" : "text-slate-700"}`}
          >
            Worker
          </button>
          <button
            onClick={() => setRole("employer")}
            className={`flex-1 py-3 rounded-xl font-medium transition 
              ${role === "employer" ? "bg-gradient-to-r from-purple-600 to-orange-500 text-white" : "text-slate-700"}`}
          >
            Employer
          </button>
        </div>

        {/* FORM */}
        <input
          name="name"
          type="text"
          placeholder="Full Name"
          className="w-full p-3 rounded-xl border border-slate-300 mt-3"
          value={form.name}
          onChange={handleChange}
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded-xl border border-slate-300 mt-3"
          value={form.email}
          onChange={handleChange}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded-xl border border-slate-300 mt-3"
          value={form.password}
          onChange={handleChange}
        />

        <button
          onClick={handleSignup}
          className="mt-6 w-full py-3 rounded-xl text-white font-semibold 
           bg-gradient-to-r from-purple-600 to-orange-500 shadow-md hover:shadow-lg transition"
        >
          Sign Up
        </button>

        <p className="text-center text-slate-600 mt-4">
          Already have an account?{" "}
          <span
            className="text-purple-600 cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}
