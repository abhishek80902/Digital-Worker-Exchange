// src/components/layout/Footer.jsx
import React from "react";

const Footer = () => (
  <footer className="bg-[#020617] text-slate-200 pt-14 pb-8 mt-0">
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-10 mb-10">
        {/* Brand / description */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 rounded-2xl bg-emerald-500 flex items-center justify-center text-white font-bold text-lg">
              D
            </div>
            <div className="font-semibold text-lg">Digital Worker Exchange</div>
          </div>
          <p className="text-sm text-slate-400 max-w-md">
            Empowering India’s workforce by connecting skilled workers with
            verified employers through AI-powered matching and zero
            commission.
          </p>

          <div className="mt-5 space-y-2 text-sm text-slate-400">
            <div>📧 contact@dwe.in</div>
            <div>📞 1800-123-456 (Toll Free)</div>
            <div>📍 New Delhi, India</div>
          </div>

          <div className="mt-5 flex gap-3">
            {["F", "X", "in", "▶"].map((s) => (
              <button
                key={s}
                className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-sm hover:bg-slate-700"
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Columns */}
        <div>
          <h4 className="text-sm font-semibold mb-3">Platform</h4>
          <ul className="space-y-1 text-sm text-slate-400">
            <li>For Workers</li>
            <li>For Employers</li>
            <li>How It Works</li>
            <li>Features</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-3">Company</h4>
          <ul className="space-y-1 text-sm text-slate-400">
            <li>About Us</li>
            <li>Our Mission</li>
            <li>Team</li>
            <li>Careers</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-3">Resources</h4>
          <ul className="space-y-1 text-sm text-slate-400">
            <li>Help Center</li>
            <li>Safety Tips</li>
            <li>Blog</li>
            <li>FAQs</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-3">Legal</h4>
          <ul className="space-y-1 text-sm text-slate-400">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Cookie Policy</li>
            <li>Disclaimer</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800 pt-4 text-xs text-slate-500 flex flex-wrap items-center justify-between gap-2">
        <span>© {new Date().getFullYear()} Digital Worker Exchange. All rights reserved.</span>
        <span>Made for fair and transparent work in India.</span>
      </div>
    </div>
  </footer>
);

export default Footer;
