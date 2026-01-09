// src/pages/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleLogin() {
    const user = JSON.parse(localStorage.getItem("user"));
    const role = localStorage.getItem("role");

    if (!user || user.email !== form.email) {
      alert("User not found. Please sign up first.");
      return;
    }

    if (user.password !== form.password) {
      alert("Incorrect password.");
      return;
    }

    alert("Login Successful!");

    // REDIRECT BASED ON ROLE
    if (role === "worker") {
      navigate("/worker/dashboard");
    } else if (role === "employer") {
      navigate("/employer/jobs");
    } else {
      navigate("/");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md min-h-[520px] flex flex-col justify-center py-12">

        <h1 className="text-3xl font-extrabold text-slate-900 text-center">
          <h1 className="text-4xl font-extrabold text-slate-900 text-center">Welcome!</h1>
          <br />
          Login to Your Account
        </h1>

        <input
          name="email"
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded-xl border border-slate-300 mt-6"
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
          onClick={handleLogin}
          className="mt-6 w-full py-3 rounded-xl text-white font-semibold 
           bg-gradient-to-r from-purple-600 to-orange-500 shadow-md hover:shadow-lg transition"
        >
          Login
        </button>

        <p className="text-center text-slate-600 mt-4">
          Don't have an account?{" "}
          <span
            className="text-purple-600 cursor-pointer"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </span>
        </p>

      </div>
    </div>
  );
}
