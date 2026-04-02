import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
} from "lucide-react";

const Footer = () => (
  <footer className="relative bg-[#020617] text-slate-200 pt-16 pb-8 overflow-hidden">

    {/* 🔥 SUBTLE TOP GRADIENT LINE */}
    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-indigo-500 via-emerald-400 to-orange-500 opacity-70"></div>

    {/* 🌈 BACKGROUND GLOW */}
    <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-indigo-500/10 blur-[120px]"></div>
    <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-emerald-500/10 blur-[120px]"></div>

    <div className="relative z-10 max-w-6xl mx-auto px-6">

      {/* 🔥 TOP GRID */}
      <div className="grid md:grid-cols-4 gap-10 mb-12">

        {/* BRAND */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-600 to-orange-500 flex items-center justify-center text-white font-bold text-lg shadow-md">
              D
            </div>
            <div className="font-semibold text-lg">
              Digital Worker Exchange
            </div>
          </div>

          <p className="text-sm text-slate-400 max-w-md leading-relaxed">
            Empowering India’s workforce by connecting skilled workers with
            verified employers through AI-powered matching and zero
            commission.
          </p>

          {/* CONTACT */}
          <div className="mt-6 space-y-3 text-sm text-slate-400">

            <div className="flex items-center gap-2">
              <Mail size={16} />
              contact@dwe.in
            </div>

            <div className="flex items-center gap-2">
              <Phone size={16} />
              1800-123-456 (Toll Free)
            </div>

            <div className="flex items-center gap-2">
              <MapPin size={16} />
              New Delhi, India
            </div>

          </div>

          {/* SOCIAL */}
          <div className="mt-6 flex gap-3">
            {[Facebook, Twitter, Linkedin, Youtube].map((Icon, i) => (
              <button
                key={i}
                className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-gradient-to-r hover:from-indigo-500 hover:to-orange-500 transition"
              >
                <Icon size={16} />
              </button>
            ))}
          </div>
        </div>

        {/* LINKS */}
        <div>
          <h4 className="text-sm font-semibold mb-4 text-white">
            Platform
          </h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li className="hover:text-white transition cursor-pointer">For Workers</li>
            <li className="hover:text-white transition cursor-pointer">For Employers</li>
            <li className="hover:text-white transition cursor-pointer">How It Works</li>
            <li className="hover:text-white transition cursor-pointer">Features</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4 text-white">
            Company
          </h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li className="hover:text-white transition cursor-pointer">About Us</li>
            <li className="hover:text-white transition cursor-pointer">Our Mission</li>
            <li className="hover:text-white transition cursor-pointer">Team</li>
            <li className="hover:text-white transition cursor-pointer">Careers</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4 text-white">
            Resources
          </h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li className="hover:text-white transition cursor-pointer">Help Center</li>
            <li className="hover:text-white transition cursor-pointer">Safety Tips</li>
            <li className="hover:text-white transition cursor-pointer">Blog</li>
            <li className="hover:text-white transition cursor-pointer">FAQs</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4 text-white">
            Legal
          </h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li className="hover:text-white transition cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white transition cursor-pointer">Terms of Service</li>
            <li className="hover:text-white transition cursor-pointer">Cookie Policy</li>
            <li className="hover:text-white transition cursor-pointer">Disclaimer</li>
          </ul>
        </div>

      </div>

      {/* 🔥 BOTTOM BAR */}
      <div className="border-t border-slate-800 pt-5 text-xs text-slate-500 flex flex-wrap items-center justify-between gap-2">
        <span>
          © {new Date().getFullYear()} Digital Worker Exchange. All rights reserved.
        </span>
        <span className="text-slate-400">
          Built for fair, transparent and modern work ecosystem.
        </span>
      </div>

    </div>
  </footer>
);

export default Footer;