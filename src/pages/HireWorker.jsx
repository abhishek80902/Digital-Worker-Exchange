import React, { useState } from "react";
import { ArrowLeft, CheckCircle, Briefcase } from "lucide-react";
import { Link, useParams, useNavigate } from "react-router-dom";
import MOCK_WORKERS from "../utils/mockWorkers";

const HireWorker = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const worker = MOCK_WORKERS.find((w) => w.id === id);

  const [message, setMessage] = useState(
    "Hi, I’d like to hire you for work. Please confirm availability."
  );

  if (!worker) {
    return <div className="pt-32 text-center">Worker not found</div>;
  }

  const confirmHire = () => {
    // later → API call
    navigate(`/hire-success/${worker.id}`);
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-28 px-6 pb-20">
      <div className="max-w-3xl mx-auto">

        {/* Back */}
        <Link
          to={`/worker/${worker.id}`}
          className="flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-6"
        >
          <ArrowLeft size={18} /> Back to Profile
        </Link>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8">

          <h1 className="text-2xl font-extrabold text-slate-900">
            Confirm Hiring
          </h1>

          {/* Worker Summary */}
          <div className="mt-6 flex items-center gap-5">
            <img
              src={worker.avatar}
              alt={worker.name}
              className="w-20 h-20 rounded-2xl object-cover"
            />

            <div>
              <p className="text-lg font-semibold text-slate-900">
                {worker.name}
              </p>
              <p className="text-slate-600">
                {worker.trade} • {worker.experienceYears} yrs experience
              </p>
              <p className="text-emerald-600 font-semibold mt-1">
                ₹{worker.baseAsk}/day
              </p>
            </div>
          </div>

          {/* Message */}
          <div className="mt-8">
            <label className="text-sm text-slate-600">
              Message to worker
            </label>
            <textarea
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full mt-2 px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Trust Notice */}
          <div className="mt-6 bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex items-start gap-3">
            <CheckCircle className="text-emerald-600 mt-0.5" />
            <p className="text-sm text-emerald-700">
              No commission charged. 100% wages go directly to the worker.
            </p>
          </div>

          {/* CTA */}
          <button
            onClick={confirmHire}
            className="mt-8 w-full py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-orange-500 text-white font-bold shadow-lg hover:shadow-xl transition flex items-center justify-center gap-2"
          >
            <Briefcase size={20} /> Confirm Hire
          </button>
        </div>
      </div>
    </div>
  );
};

export default HireWorker;