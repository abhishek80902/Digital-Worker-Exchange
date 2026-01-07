import React from "react";
import { MapPin, Star, ArrowLeft, CheckCircle, Briefcase, MessageSquare, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const WorkerProfile = () => {

  // Mock data — replace with backend data later
  const worker = {
    name: "Rajesh Kumar",
    verified: true,
    role: "Electrician",
    experience: "8 years",
    wage: "₹500 - ₹700/day",
    location: "Mumbai, Maharashtra",
    distance: "2.3 km away",
    rating: 4.8,
    completedJobs: 143,
    match: "95% Match",
    avatar: "/images/worker_large.jpg",
    skills: ["Wiring", "Panel Installation", "Troubleshooting", "Safety"],
    bio: "Skilled residential electrician with experience in home wiring, safety compliance, electrical panel installation and maintenance.",
    portfolio: [
      "/images/worker6.webp",
      "/images/worker7.jpg",
      "/images/worker8.webp",
    ],
    reviews: [
      {
        name: "Amit Singh",
        rating: 5,
        comment: "Great work, very professional and completed wiring on time.",
      },
      {
        name: "Sunita Desai",
        rating: 4.5,
        comment: "Quick and reliable. Would hire again!",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white pt-28 pb-20 px-6 lg:px-0">

      {/* Back Button */}
      <div className="max-w-5xl mx-auto mb-6">
        <Link
          to="/postjob"
          className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition"
        >
          <ArrowLeft size={20} /> Back
        </Link>
      </div>

      {/* Main Profile Card */}
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl border border-slate-200 p-8">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          
          {/* Avatar */}
          <div className="w-40 h-40 rounded-3xl overflow-hidden shadow-md">
            <img src={worker.avatar} className="w-full h-full object-cover" alt="Worker" />
          </div>

          {/* Basic Info */}
          <div className="flex-grow">
            <h1 className="text-3xl font-extrabold text-slate-900 flex items-center gap-2">
              {worker.name}
              {worker.verified && (
                <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700 border border-green-300">
                  ✔ Verified
                </span>
              )}
            </h1>

            <p className="text-lg text-slate-600 mt-1">
              {worker.role} • {worker.experience}
            </p>

            {/* Rating, Jobs, Match */}
            <div className="flex items-center gap-5 mt-3">
              <div className="flex items-center gap-1 text-orange-500 font-semibold">
                <Star size={18} /> {worker.rating}
              </div>
              <div className="text-slate-600">{worker.completedJobs} jobs completed</div>
              <span className="px-3 py-1 text-xs bg-purple-100 text-purple-700 rounded-full">
                {worker.match}
              </span>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 text-slate-600 mt-3">
              <MapPin size={18} /> {worker.location}
              <span className="text-xs text-slate-500">({worker.distance})</span>
            </div>

            {/* Wage */}
            <p className="mt-3 font-semibold text-emerald-600 text-lg">{worker.wage}</p>

            {/* Buttons */}
            <div className="mt-6 flex flex-wrap gap-4">
              <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-orange-500 text-white font-semibold shadow-md hover:shadow-lg transition flex items-center gap-2">
                <Briefcase size={18} /> Hire
              </button>

              <button className="px-6 py-3 rounded-xl border border-slate-300 text-slate-700 font-semibold hover:bg-slate-100 transition flex items-center gap-2">
                <MessageSquare size={18} /> Chat
              </button>
            </div>
          </div>
        </div>

        {/* BIO */}
        <div className="mt-12">
          <h2 className="text-xl font-bold text-slate-900">About</h2>
          <p className="text-slate-700 mt-2 leading-relaxed">{worker.bio}</p>
        </div>

        {/* SKILLS */}
        <div className="mt-10">
          <h2 className="text-xl font-bold text-slate-900">Skills</h2>
          <div className="flex flex-wrap gap-2 mt-3">
            {worker.skills.map((skill, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full text-xs bg-slate-200 text-slate-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* PORTFOLIO */}
        <div className="mt-10">
          <h2 className="text-xl font-bold text-slate-900">Portfolio</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            {worker.portfolio.map((img, idx) => (
              <div key={idx} className="w-full h-40 rounded-xl overflow-hidden border">
                <img src={img} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* REVIEWS */}
        <div className="mt-12">
          <h2 className="text-xl font-bold text-slate-900">Reviews</h2>
          
          <div className="mt-4 space-y-5">
            {worker.reviews.map((review, idx) => (
              <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <p className="font-semibold text-slate-900 flex items-center gap-2">
                  {review.name}
                  <span className="text-orange-500 flex items-center gap-1">
                    <Star size={16} /> {review.rating}
                  </span>
                </p>
                <p className="text-slate-700 mt-1">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default WorkerProfile;