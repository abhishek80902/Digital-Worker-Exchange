import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const EmployerApplications = () => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token || role !== "employer") {
      setLoading(false);
      return;
    }

    const fetchApplications = async () => {
      const res = await fetch(
        "https://digital-worker-exchange.onrender.com/api/applications/employer",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await res.json();
      setApplications(data);
      setLoading(false);
    };

    fetchApplications();
  }, [token, role]);

  if (!token) return <Navigate to="/login" replace />;
  if (role !== "employer") return <Navigate to="/findwork" replace />;

  if (loading) {
    return <p className="text-center mt-20">Loading applications...</p>;
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-6">
          Job Applications
        </h1>

        {applications.length === 0 ? (
          <p className="text-slate-600">
            No applications received yet.
          </p>
        ) : (
          <div className="space-y-6">
            {applications.map((app) => (
              <ApplicationCard
                key={app._id}
                application={app}
                token={token}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const ApplicationCard = ({ application, token }) => {
  const [hired, setHired] = useState(application.status === "hired");
  const [phone, setPhone] = useState(null);

  const handleHire = async () => {
    const res = await fetch(
      `http://localhost:5000/api/applications/${application._id}/hire`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await res.json();

    if (res.ok) {
      setHired(true);
      setPhone(data.application.worker.phone);
    } else {
      alert(data.message || "Failed to hire");
    }
  };

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
      <h2 className="text-lg font-bold text-slate-900">
        {application.job.title}
      </h2>

      <p className="text-slate-600 mt-1">
        Worker: <span className="font-medium">{application.worker.name}</span>
      </p>

      <p className="text-sm text-slate-500 mt-1">
        Status:{" "}
        <span className="font-semibold capitalize">
          {application.status}
        </span>
      </p>

      {hired && phone && (
        <p className="mt-3 text-emerald-600 font-semibold">
          📞 {phone}
        </p>
      )}

      {!hired && (
        <button
          onClick={handleHire}
          className="mt-4 px-6 py-3 rounded-xl 
          bg-gradient-to-r from-purple-600 to-orange-500 
          text-white font-semibold shadow-md"
        >
          Hire Worker
        </button>
      )}
    </div>
  );
};

export default EmployerApplications;
