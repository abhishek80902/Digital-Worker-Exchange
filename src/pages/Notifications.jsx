// src/pages/Notifications.jsx
import React from "react";
import { Bell, Briefcase, MessageSquare } from "lucide-react";

export default function Notifications() {
  const notifications = [
    { type: "job", text: "Your job 'Electrician Needed' received 3 new applicants.", time: "2h ago" },
    { type: "chat", text: "Rajesh Kumar sent you a new message.", time: "5h ago" },
    { type: "job", text: "Worker Amit Sharma accepted your hire request.", time: "1d ago" },
  ];

  return (
    <div className="min-h-screen bg-white pt-28 px-6 pb-20 max-w-4xl mx-auto">

      <h1 className="text-3xl font-extrabold text-slate-900">Notifications</h1>

      <div className="mt-6 space-y-4">
        {notifications.map((n, i) => (
          <div key={i} className="p-5 rounded-2xl border shadow-sm bg-white flex items-start gap-4">

            {n.type === "job" ? (
              <Briefcase className="text-purple-600 mt-1" />
            ) : (
              <MessageSquare className="text-orange-500 mt-1" />
            )}

            <div>
              <p className="text-slate-800 font-medium">{n.text}</p>
              <p className="text-slate-500 text-sm">{n.time}</p>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}