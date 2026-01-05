import React from "react";
import { useNavigate } from "react-router-dom";

export default function SelectRole() {
  const navigate = useNavigate();

  const chooseRole = (role) => {
    navigate(`/signup?role=${role}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-6">
      <div className="bg-white w-full max-w-lg rounded-3xl shadow-xl p-10 border border-slate-200">
        <h1 className="text-3xl font-extrabold text-slate-900 text-center">
          Choose Your Role
        </h1>
        <p className="text-slate-600 text-center mt-2">
          Select how you want to use Digital Worker Exchange.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Worker */}
          <button
            onClick={() => chooseRole("worker")}
            className="p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md bg-white text-center transition"
          >
            <div className="text-4xl mb-3">👷</div>
            <p className="font-bold text-slate-800 text-lg">Worker</p>
            <p className="text-slate-500 text-sm mt-1">
              Find verified jobs near you
            </p>
          </button>

          {/* Employer */}
          <button
            onClick={() => chooseRole("employer")}
            className="p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md bg-white text-center transition"
          >
            <div className="text-4xl mb-3">🏢</div>
            <p className="font-bold text-slate-800 text-lg">Employer</p>
            <p className="text-slate-500 text-sm mt-1">
              Hire skilled workers instantly
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
