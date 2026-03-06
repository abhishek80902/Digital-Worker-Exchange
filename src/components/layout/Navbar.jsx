import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  /* -------------------- AUTH -------------------- */
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role"); // worker | employer
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

  /* -------------------- CLASSES -------------------- */
  const navLink =
    "block px-3 py-2 rounded-md transition hover:text-indigo-600";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition ${
        isScrolled
          ? "bg-white/70 backdrop-blur-md shadow-md"
          : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/images/dwe-main.jpeg"
            alt="DWE"
            className="h-11 w-11 rounded-full object-cover"
          />
          <div>
            <div className="text-lg font-semibold text-indigo-600">
              DWE.
            </div>
            <div className="text-xs text-gray-500 hidden md:block">
              Digital Worker Exchange
            </div>
          </div>
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          <Link to="/" className={navLink}>Home</Link>
          <Link to="/findwork" className={navLink}>Find Work</Link>
          <Link to="/postjob" className={navLink}>Post Job</Link>
          <Link to="/about" className={navLink}>About</Link>
          <Link to="/contact" className={navLink}>Contact</Link>
        </div>

        {/* DESKTOP AUTH */}
        <div className="hidden md:flex items-center gap-3">
          {!isLoggedIn ? (
            <>
              <Link
                to="/login"
                className="px-4 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50"
              >
                Login
              </Link>
              <Link
                to="/select-role"
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                Sign Up
              </Link>
            </>
          ) : (
            /* PROFILE DROPDOWN (FIXED) */
            <div className="relative">
              <div className="group">
                {/* Avatar */}
                <div
                  className="w-10 h-10 rounded-full bg-gradient-to-br 
                  from-indigo-600 to-orange-500 text-white 
                  flex items-center justify-center font-bold cursor-pointer"
                >
                  {initials}
                </div>

                {/* Dropdown */}
                <div
                  className="absolute right-0 top-12 w-44 bg-white 
                  border rounded-xl shadow-lg 
                  opacity-0 invisible 
                  group-hover:opacity-100 group-hover:visible 
                  pointer-events-none group-hover:pointer-events-auto
                  transition"
                >
                  <Link
                    to={dashboardPath}
                    className="block px-4 py-3 text-sm hover:bg-slate-100"
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
        className={`md:hidden transition-all ${
          isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="bg-white px-6 py-4 border-t space-y-2">
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
              <Link to="/select-role" className="block text-center bg-indigo-600 text-white py-2 rounded-lg">
                Sign Up
              </Link>
            </>
          ) : (
            <>
              <Link to={dashboardPath} className="block text-center bg-slate-100 py-2 rounded-lg">
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
