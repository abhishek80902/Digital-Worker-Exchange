import React from "react";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white pt-30 pb-20">

      {/* HERO */}
      <section className="px-6 py-28 bg-gradient-to-br from-purple-600/10 to-orange-500/10">
  <div className="max-w-6xl mx-auto text-center flex flex-col items-center justify-center">
    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">
      Contact Us
    </h1>
    <p className="mt-4 text-lg text-slate-700 max-w-3xl mx-auto">
      Have questions or need help? We’re here for you 7 days a week.
    </p>
  </div>
</section>


      {/* CONTACT FORM + INFO */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 pt-10">

        {/* FORM */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-lg p-8">
          <h2 className="text-2xl font-bold text-slate-900">Send a Message</h2>

          <div className="mt-6 space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 outline-none"
            />

            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 outline-none"
            ></textarea>

            <button className="w-full py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-orange-500 text-white font-semibold shadow-md hover:shadow-lg transition">
              Send Message
            </button>
          </div>
        </div>

        {/* CONTACT INFO */}
        <div className="space-y-6">
          
          {/* OFFICE */}
          <div className="p-8 bg-white border border-slate-200 rounded-3xl shadow-md">
            <div className="flex items-center gap-3 text-purple-600">
              <MapPin size={24} />
              <h3 className="text-xl font-semibold text-slate-900">Office Location</h3>
            </div>
            <p className="mt-3 text-slate-700">
              Andheri East, Mumbai <br />
              Maharashtra, India
            </p>
          </div>

          {/* EMAIL */}
          <div className="p-8 bg-white border border-slate-200 rounded-3xl shadow-md">
            <div className="flex items-center gap-3 text-purple-600">
              <Mail size={24} />
              <h3 className="text-xl font-semibold text-slate-900">Email Support</h3>
            </div>
            <p className="mt-3 text-slate-700">support@dwe.com</p>
          </div>

          {/* PHONE */}
          <div className="p-8 bg-white border border-slate-200 rounded-3xl shadow-md">
            <div className="flex items-center gap-3 text-purple-600">
              <Phone size={24} />
              <h3 className="text-xl font-semibold text-slate-900">Phone Support</h3>
            </div>
            <p className="mt-3 text-slate-700">+91 98765 43210</p>
          </div>

          {/* WHATSAPP */}
          <div className="p-8 bg-white border border-slate-200 rounded-3xl shadow-md">
            <div className="flex items-center gap-3 text-purple-600">
              <MessageSquare size={24} />
              <h3 className="text-xl font-semibold text-slate-900">WhatsApp</h3>
            </div>
            <p className="mt-3 text-slate-700">+91 98765 43210</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
