// src/pages/employer/EmployerJobApplicants.jsx
import React from "react";
import { ArrowLeft, User, Star, Phone, MessageSquare } from "lucide-react";
import { Link, useParams } from "react-router-dom";

export default function EmployerJobApplicants() {
  const { id } = useParams();

  const applicants = [
    {
      id: "w1",
      name: "Rajesh Kumar",
      role: "Electrician",
      experience: "8 years",
      rating: 4.8,
      distance: "2.3 km",
      avatar: "/images/worker_large.jpg",
    },
    {
      id: "w2",
      name: "Amit Sharma",
      role: "Electrician",
      experience: "10 years",
      rating: 4.9,
      distance: "4.2 km",
      avatar: "/images/avatar2.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-28 px-6 pb-20 max-w-5xl mx-auto">

      {/* BACK */}
      <Link to="/employer/dashboard" className="flex items-center gap-2 text-slate-600 mb-4">
        <ArrowLeft /> Back
      </Link>

      <h1 className="text-3xl font-extrabold text-slate-900">
        Applicants for Job #{id}
      </h1>
      <p className="text-slate-600 mt-1">Review and select the best worker</p>

      <div className="mt-8 space-y-5">
        {applicants.map((w) => (
          <div key={w.id} className="p-5 rounded-2xl border shadow-sm flex gap-4 items-center">
            <img src={w.avatar} alt="" className="w-20 h-20 rounded-xl object-cover" />

            <div className="flex-1">
              <h3 className="text-xl font-bold">{w.name}</h3>
              <p className="text-slate-600 text-sm">
                {w.role} • {w.experience}
              </p>
              <p className="text-slate-500 text-sm">{w.distance} away</p>

              <div className="flex items-center gap-1 text-orange-500 mt-1">
                <Star size={16} /> {w.rating}
              </div>

              <div className="mt-4 flex gap-3">
                <Link
                  to={`/chat/${w.id}`}
                  className="px-4 py-2 bg-white border rounded-xl shadow-sm flex items-center gap-2"
                >
                  <MessageSquare size={16} /> Chat
                </Link>

                <Link
                  to={`/worker/${w.id}?action=hire`}
                  className="px-4 py-2 bg-gradient-to-r from-purple-600 to-orange-500 text-white rounded-xl"
                >
                  Hire Worker
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
