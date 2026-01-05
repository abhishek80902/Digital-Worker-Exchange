import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const mobileRef = useRef(null);
  const btnRef = useRef(null);
  const location = useLocation();

  // close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Background blur on scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close on Escape and click outside
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    const handleClickOutside = (e) => {
      if (
        isOpen &&
        mobileRef.current &&
        !mobileRef.current.contains(e.target) &&
        btnRef.current &&
        !btnRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKey);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Auto-close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Nav link class helper
  const navLink =
    "block px-3 py-2 rounded-md transition-colors duration-150 hover:text-indigo-600";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/70 backdrop-blur-md shadow-md" : "bg-white"
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 py-3 md:py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/images/dwe-main.jpeg" 
            alt="DWE — Digital Worker Exchange"
            className="h-12 w-12 rounded-full object-cover border border-gray-100 shadow-sm"
            width={48}
            height={48}
            loading="eager"
          />
          <div className="leading-tight">
            <span className="block text-lg md:text-xl font-semibold text-indigo-600">
              DWE.
            </span>
            <span className="block text-xs text-gray-500 hidden md:block">
              Digital Worker Exchange
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-base font-medium">
          <Link to="/" className={navLink}>
            Home
          </Link>
          <Link to="/findwork" className={navLink}>
            Find Work
          </Link>
          <Link to="/postjob" className={navLink}>
            Post Job
          </Link>
          <Link to="/about" className={navLink}>
            About
          </Link>
          <Link to="/contact" className={navLink}>
            Contact
          </Link>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/login"
            className="px-4 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition"
          >
            Login
          </Link>
          <Link
            to="/select-role"
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          ref={btnRef}
          onClick={() => setIsOpen((s) => !s)}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu (animated) */}
      <div
        ref={mobileRef}
        className={`md:hidden overflow-hidden transition-[max-height,opacity,transform] duration-300 ${
          isOpen ? "max-h-[600px] opacity-100 transform-none" : "max-h-0 opacity-0 -translate-y-2"
        }`}
      >
        <div className="bg-white px-6 pb-6 pt-2 shadow border-t">
          <nav className="flex flex-col gap-2 text-lg font-medium">
            <Link to="/" className="px-2 py-2 rounded-md hover:text-indigo-600" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link to="/findwork" className="px-2 py-2 rounded-md hover:text-indigo-600" onClick={() => setIsOpen(false)}>
              Find Work
            </Link>
            <Link to="/postjob" className="px-2 py-2 rounded-md hover:text-indigo-600" onClick={() => setIsOpen(false)}>
              Post Job
            </Link>
            <Link to="/about" className="px-2 py-2 rounded-md hover:text-indigo-600" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link to="/contact" className="px-2 py-2 rounded-md hover:text-indigo-600" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </nav>

          <div className="mt-4 flex gap-3">
            <Link
              to="/login"
              className="flex-1 text-center px-4 py-2 border border-indigo-600 text-indigo-600 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
            <Link
              to="/register"
              className="flex-1 text-center px-4 py-2 bg-indigo-600 text-white rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
