// src/pages/Contact.jsx
import React from "react";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="min-h-screen pt-2 pb-20 bg-white">

      {/* 🔥 HERO */}
      <section className="relative isolate px-6 py-28 overflow-hidden">

        {/* background */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-purple-50/40 to-orange-50/40 z-0"></div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">

          <span className="inline-block px-4 py-1 text-sm bg-purple-100 text-purple-600 rounded-full mb-4">
            Get in Touch
          </span>

          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900">
            We’re Here to{" "}
            <span className="bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
              Help You
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Whether you’re a worker or employer, our team is ready to assist you.
            Reach out anytime — we usually respond within a few hours.
          </p>

        </div>
      </section>

      {/* 🔥 MAIN SECTION */}
      <section className="px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* 💎 FORM */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="relative p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-gray-200 shadow-xl"
        >
          {/* top accent */}
          <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-purple-500 to-orange-500 rounded-t-3xl"></div>

          <h2 className="text-2xl font-bold text-gray-900">
            Send a Message
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Our team will get back to you quickly.
          </p>

          <div className="mt-6 space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-purple-500 outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-purple-500 outline-none"
            />

            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-purple-500 outline-none"
            ></textarea>

            <button className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-orange-500 text-white font-semibold shadow-md hover:shadow-xl hover:-translate-y-1 transition">
              Send Message →
            </button>

          </div>

          {/* 🔥 TRUST LINE */}
          <p className="text-xs text-gray-400 mt-4">
            🔒 Your information is secure and will never be shared.
          </p>

        </motion.div>

        {/* 📞 CONTACT INFO */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >

          {[
            {
              icon: <MapPin size={22} />,
              title: "Office Location",
              value: "New Delhi\nDelhi, India",
              color: "from-purple-500 to-pink-500",
            },
            {
              icon: <Mail size={22} />,
              title: "Email Support",
              value: "support@dwe.com",
              color: "from-blue-500 to-cyan-500",
            },
            {
              icon: <Phone size={22} />,
              title: "Phone Support",
              value: "+91 98765 43210",
              color: "from-green-500 to-emerald-500",
            },
            {
              icon: <MessageSquare size={22} />,
              title: "WhatsApp",
              value: "+91 98765 43210",
              color: "from-orange-500 to-red-500",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-3xl bg-white border border-gray-200 shadow-md hover:shadow-xl transition flex items-start gap-4"
            >
              <div
                className={`w-10 h-10 rounded-xl bg-gradient-to-r ${item.color} text-white flex items-center justify-center`}
              >
                {item.icon}
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 whitespace-pre-line mt-1">
                  {item.value}
                </p>
              </div>
            </div>
          ))}

        </motion.div>

      </section>

      {/* 🔥 FINAL CTA */}
      <section className="mt-28 px-6 text-center">

        <div className="max-w-3xl mx-auto p-10 rounded-3xl bg-gradient-to-r from-purple-600 to-orange-500 text-white shadow-xl">

          <h2 className="text-3xl font-bold">
            Need Immediate Assistance?
          </h2>

          <p className="mt-3 text-white/90">
            Our support team is available 7 days a week to help you.
          </p>

          <button className="mt-6 px-8 py-3 rounded-full bg-white text-purple-600 font-semibold hover:scale-105 transition">
            Chat Now →
          </button>

        </div>

      </section>

    </div>
  );
};

export default Contact;