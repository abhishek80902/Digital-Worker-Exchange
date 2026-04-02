import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  /* -------------------- AUTH -------------------- */
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const name = localStorage.getItem("name") || "User";
  const isLoggedIn = Boolean(token);

  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  const dashboardPath =
    role === "employer" ? "/employer/jobs" : "/findwork";

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  /* -------------------- UI STATE -------------------- */
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const mobileRef = useRef(null);
  const btnRef = useRef(null);

  /* -------------------- EFFECTS -------------------- */
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  /* -------------------- ACTIVE LINK -------------------- */
  const isActive = (path) =>
    location.pathname === path
      ? "text-indigo-600 font-semibold"
      : "text-gray-700";

  const navLink =
    "px-3 py-2 rounded-md transition relative hover:text-indigo-600";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/70 backdrop-blur-xl border-b border-gray-200 shadow-sm"
          : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/images/dwe-main.jpeg"
            alt="DWE"
            className="h-11 w-11 rounded-full object-cover ring-2 ring-indigo-500/20"
          />
          <div>
            <div className="text-lg font-bold bg-gradient-to-r from-indigo-600 to-orange-500 bg-clip-text text-transparent">
              DWE.
            </div>
            <div className="text-xs text-gray-500 hidden md:block">
              Digital Worker Exchange
            </div>
          </div>
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-6 font-medium">
          <Link to="/" className={`${navLink} ${isActive("/")}`}>Home</Link>
          <Link to="/findwork" className={`${navLink} ${isActive("/findwork")}`}>Find Work</Link>
          <Link to="/postjob" className={`${navLink} ${isActive("/postjob")}`}>Post Job</Link>
          <Link to="/about" className={`${navLink} ${isActive("/about")}`}>About</Link>
          <Link to="/contact" className={`${navLink} ${isActive("/contact")}`}>Contact</Link>
        </div>

        {/* DESKTOP AUTH */}
        <div className="hidden md:flex items-center gap-3">

          {!isLoggedIn ? (
            <>
              <Link
                to="/login"
                className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
              >
                Login
              </Link>

              <Link
                to="/select-role"
                className="px-5 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-orange-500 text-white font-semibold shadow-md hover:shadow-xl hover:-translate-y-0.5 transition"
              >
                Get Started →
              </Link>
            </>
          ) : (
            <div className="relative group">

              {/* AVATAR */}
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-600 to-orange-500 text-white flex items-center justify-center font-bold cursor-pointer shadow-md">
                {initials}
              </div>

              {/* DROPDOWN */}
              <div
                className="absolute right-0 top-12 w-48 bg-white border border-gray-200 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible pointer-events-none group-hover:pointer-events-auto transition duration-200"
              >
                <Link
                  to={dashboardPath}
                  className="block px-4 py-3 text-sm hover:bg-gray-100"
                >
                  Dashboard
                </Link>

                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-3 text-sm text-red-600 hover:bg-red-50"
                >
                  Logout
                </button>
              </div>
            </div>
          )}

        </div>

        {/* MOBILE TOGGLE */}
        <button
          ref={btnRef}
          onClick={() => setIsOpen((s) => !s)}
          className="md:hidden p-2 rounded-md"
        >
          {isOpen ? <X /> : <Menu />}
        </button>

      </div>

      {/* MOBILE MENU */}
      <div
        ref={mobileRef}
        className={`md:hidden transition-all duration-300 ${
          isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="bg-white px-6 py-4 border-t space-y-3">

          <Link to="/" className={navLink}>Home</Link>
          <Link to="/findwork" className={navLink}>Find Work</Link>
          <Link to="/postjob" className={navLink}>Post Job</Link>
          <Link to="/about" className={navLink}>About</Link>
          <Link to="/contact" className={navLink}>Contact</Link>

          {!isLoggedIn ? (
            <>
              <Link to="/login" className="block text-center border py-2 rounded-lg">
                Login
              </Link>

              <Link to="/select-role" className="block text-center bg-gradient-to-r from-indigo-600 to-orange-500 text-white py-2 rounded-lg">
                Get Started
              </Link>
            </>
          ) : (
            <>
              <Link to={dashboardPath} className="block text-center bg-gray-100 py-2 rounded-lg">
                Dashboard
              </Link>

              <button
                onClick={handleLogout}
                className="w-full bg-red-50 text-red-600 py-2 rounded-lg"
              >
                Logout
              </button>
            </>
          )}

        </div>
      </div>
    </nav>
  );
};

export default Navbar;