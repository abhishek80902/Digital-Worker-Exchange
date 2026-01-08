import React from "react";
import { CheckCircle, MessageSquare, ArrowLeft } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import MOCK_WORKERS from "../utils/mockWorkers";

const HireSuccess = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const worker = MOCK_WORKERS.find((w) => w.id === id);

  if (!worker) {
    return <div className="pt-32 text-center">Worker not found</div>;
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-32 px-6">
      <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl border border-slate-200 p-10 text-center">

        <CheckCircle size={56} className="mx-auto text-emerald-600" />

        <h1 className="text-2xl font-extrabold text-slate-900 mt-4">
          Hire Request Sent
        </h1>

        <p className="text-slate-600 mt-2">
          Your hire request has been sent to{" "}
          <span className="font-semibold">{worker.name}</span>.
        </p>

        <p className="text-sm text-slate-500 mt-1">
          You’ll be notified once the worker confirms availability.
        </p>

        {/* Actions */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">

          <button
            onClick={() => navigate(`/chat/${worker.id}`)}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-orange-500 text-white font-semibold flex items-center justify-center gap-2"
          >
            <MessageSquare size={18} /> Chat Worker
          </button>

          <button
            onClick={() => navigate(`/worker/${worker.id}`)}
            className="px-6 py-3 rounded-xl border border-slate-300 text-slate-700 font-semibold flex items-center justify-center gap-2"
          >
            <ArrowLeft size={18} /> Back to Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default HireSuccess;
