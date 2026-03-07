import React, { useEffect, useState } from "react";
import { MapPin, Building, ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const JobDetails = () => {
  const { id } = useParams();

  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [applied, setApplied] = useState(false);
  const [checking, setChecking] = useState(true);

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  /* ---------------- FETCH JOB (PUBLIC) ---------------- */
  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await fetch(`https://digital-worker-exchange.onrender.com/api/jobs/${id}`);
        if (!res.ok) throw new Error("Failed to load job");

        const data = await res.json();
        setJob(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [id]);

  /* ---------------- CHECK ALREADY APPLIED ---------------- */
  useEffect(() => {
    const checkApplied = async () => {
      if (!token || role !== "worker" || !job?._id) {
        setChecking(false);
        return;
      }

      try {
        const res = await fetch(
          `https://digital-worker-exchange.onrender.com/api/applications/check/${job._id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (res.ok) {
          const data = await res.json();
          setApplied(data.applied);
        }
      } catch {
        // silent fail
      } finally {
        setChecking(false);
      }
    };

    checkApplied();
  }, [job, token, role]);

  /* ---------------- APPLY HANDLER ---------------- */
  const handleApply = async () => {
    if (!token) {
      alert("Please login to apply for this job");
      return;
    }

    if (role !== "worker") {
      alert("Only workers can apply for jobs");
      return;
    }

    try {
      const res = await fetch(
        "https://digital-worker-exchange.onrender.com/api/applications/apply",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ jobId: job._id }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Failed to apply");
        return;
      }

      setApplied(true);
      alert("Applied successfully ✅");
    } catch {
      alert("Something went wrong");
    }
  };

  /* ---------------- STATES ---------------- */
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-600">
        Loading job details...
      </div>
    );
  }

  if (error || !job) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        Unable to load job details
      </div>
    );
  }

  /* ---------------- BUTTON LABEL ---------------- */
  const buttonText = checking
    ? "Checking..."
    : applied
    ? "Already Applied"
    : role !== "worker"
    ? "Only workers can apply"
    : "Apply Now";

  const buttonDisabled = checking || applied || role !== "worker";

  /* ---------------- UI ---------------- */
  return (
    <div className="min-h-screen bg-white pt-24 pb-28 px-6 lg:px-0">
      {/* BACK */}
      <div className="max-w-5xl mx-auto mb-6">
        <Link
          to="/findwork"
          className="flex items-center gap-2 text-slate-600 hover:text-slate-900"
        >
          <ArrowLeft size={20} /> Back to jobs
        </Link>
      </div>

      {/* CARD */}
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl border border-slate-200 p-8">
        {/* TITLE */}
        <h1 className="text-3xl font-extrabold text-slate-900">
          {job.title}
        </h1>

        <div className="flex items-center gap-3 mt-2">
          <span className="text-slate-600 text-lg">
            {job.employer?.name || "Employer"}
          </span>
          <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700">
            ✔ Verified
          </span>
        </div>

        {/* INFO */}
        <div className="grid sm:grid-cols-3 gap-4 mt-8">
          <div className="p-4 rounded-2xl bg-slate-50 border">
            <p className="text-xs text-slate-500">Daily Wage</p>
            <p className="text-xl font-semibold text-emerald-600">
              ₹{job.minPay} – ₹{job.maxPay}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border">
            <p className="text-xs text-slate-500">Location</p>
            <p className="flex items-center gap-1 text-slate-700">
              <MapPin size={16} /> {job.location}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border">
            <p className="text-xs text-slate-500">Job Type</p>
            <p className="text-slate-700">Daily wage · Immediate</p>
          </div>
        </div>

        {/* TAG */}
        <div className="mt-6">
          <span className="px-3 py-1 rounded-full text-xs bg-slate-200">
            {job.trade}
          </span>
        </div>

        {/* DESCRIPTION */}
        <div className="mt-10">
          <h2 className="text-xl font-bold text-slate-900">
            Job Description
          </h2>
          <p className="text-slate-700 mt-2">
            This job requires a skilled {job.trade}. Full details will be
            shared after application.
          </p>
        </div>

        {/* EMPLOYER */}
        <div className="mt-12 p-6 rounded-3xl bg-slate-50 border">
          <h2 className="text-xl font-bold mb-3">About Employer</h2>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-white border flex items-center justify-center">
              <Building size={24} />
            </div>
            <div>
              <p className="font-semibold">
                {job.employer?.name || "Employer"}
              </p>
              <p className="text-sm text-slate-500">
                Verified hiring partner
              </p>
            </div>
          </div>
        </div>

        {/* APPLY BUTTON */}
        <button
          onClick={handleApply}
          disabled={buttonDisabled}
          className={`mt-10 w-full py-4 text-lg rounded-2xl font-bold shadow-lg
            ${
              applied
                ? "bg-slate-300 text-slate-600 cursor-not-allowed"
                : role !== "worker"
                ? "bg-slate-200 text-slate-500 cursor-not-allowed"
                : "bg-gradient-to-r from-purple-600 to-orange-500 text-white"
            }`}
        >
          {buttonText}
        </button>
      </div>

      {/* MOBILE STICKY */}
      <div className="fixed bottom-0 left-0 right-0 bg-white p-4 border-t md:hidden">
        <button
          onClick={handleApply}
          disabled={buttonDisabled}
          className={`w-full py-4 text-lg rounded-xl font-semibold
            ${
              applied
                ? "bg-slate-300 text-slate-600"
                : role !== "worker"
                ? "bg-slate-200 text-slate-500"
                : "bg-gradient-to-r from-purple-600 to-orange-500 text-white"
            }`}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default JobDetails;
