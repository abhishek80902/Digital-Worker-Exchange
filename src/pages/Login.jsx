// src/pages/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleLogin() {
  try {
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.message || "Login failed");
      return;
    }

    // ✅ Store token & user
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));

    alert("Login Successful!");

    // ✅ Redirect based on role
    if (data.user.role === "worker") {
      navigate("/worker/dashboard");
    } else {
      navigate("/employer/jobs");
    }
  } catch (err) {
    alert("Server error. Try again.");
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
