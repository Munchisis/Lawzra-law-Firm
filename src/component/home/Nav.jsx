import { MailIcon, MapPin, MenuIcon, PhoneCallIcon, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { m , AnimatePresence } from "motion/react";
import { assets } from "../../assets/assets.js";
import ThemeToggleBtn from "./theme-toggle-btn.jsx";
import MagneticButton from "../MagneticButton.jsx";

const Nav = ({ theme, setTheme }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Practice Areas", path: "/practice-areas" },
    { name: "Our Team", path: "/our-team" },
    { name: "Insights", path: "/insights" },
    { name: "Careers", path: "/careers" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsFixed(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation Variants for Mobile Menu
  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
    opened: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, x: -10 },
    opened: { opacity: 1, x: 0 },
  };

  return (
    <div className="w-full">
      {/* Top Banner */}
      <div className="font-medium py-2 bg-linear-to-r from-gray-900 via-[#3f3544] to-[#62bb9d] text-white">
        <div className="flex flex-wrap gap-4 justify-center items-center text-[10px] md:text-xs">
          <p>Free Consultation Available</p>
          <a href="tel:+2348037333930" className="hover:underline flex items-center gap-1">
            <PhoneCallIcon size={14} /> +234 803 733 3930
          </a>
          <a href="mailto:info@lawzra.com" className="hover:underline flex items-center gap-1">
            <MailIcon size={14} /> info@lawzra.com
          </a>
          <span className="hidden lg:flex items-center gap-1">
            <MapPin size={14} /> Lekki Phase 1, Lagos
          </span>
        </div>
      </div>

      {/* Navbar */}
      <m.nav
        initial={false}
        animate={{
          backgroundColor: isFixed 
            ? (theme === "dark" ? "rgba(15, 23, 42, 0.95)" : "rgba(255, 255, 255, 0.95)") 
            : "#111827",
          boxShadow: isFixed ? "0 4px 6px -1px rgb(0 0 0 / 0.1)" : "none",
        }}
        transition={{ duration: 0.3 }}
        className={`h-20 flex items-center justify-between px-6 md:px-16 lg:px-24 z-50 
        ${isFixed ? "fixed top-0 left-0 w-full backdrop-blur-sm" : "relative bg-gray-900 text-white"}`}
      >
        {/* Logo with Crossfade */}
        <Link to="/">
          <m.img
            key={isFixed ? "fixed" : "static"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            src={isFixed && theme !== "dark" ? assets.logo_02 : assets.logo_WB}
            alt="Lawzra Logo"
            className="h-10 md:h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-10">
          {navLinks.map((link, i) => (
            <NavLink
              key={i}
              to={link.path}
              className={({ isActive }) => (
                `text-sm font-semibold transition-colors duration-300 ${
                  isActive
                    ? "text-rose-500"
                    : isFixed
                      ? "text-gray-700 dark:text-gray-200 hover:text-rose-500"
                      : "text-gray-300 hover:text-highlight"
                }`)
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <ThemeToggleBtn theme={theme} setTheme={setTheme} />

          <MagneticButton strength={0.4}>
            <button
              onClick={() => navigate("/contact-us")}
              className="hidden relative overflow-hidden group md:block px-6 py-2 rounded-full text-xs font-bold border border-rose-500 text-rose-500 hover:bg-rose-500 hover:text-white transition-all active:scale-95"
            >
              <span className="relative z-10">Get in touch</span>
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity blur-xl -translate-x-full group-hover:translate-x-full duration-700 pointer-events-none" />
            </button>
          </MagneticButton>

          {/* Mobile Toggle */}
          <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
            <m.div
              animate={{ rotate: open ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {open ? (
                <X className={isFixed ? "text-gray-800 dark:text-white" : "text-white"} />
              ) : (
                <MenuIcon className={isFixed ? "text-gray-800 dark:text-white" : "text-white"} />
              )}
            </m.div>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {open && (
            <m.div
              variants={menuVariants}
              initial="closed"
              animate="opened"
              exit="closed"
              className="absolute top-20 left-0 w-full flex flex-col bg-white dark:bg-slate-900 p-6 shadow-xl border-t dark:border-slate-800 md:hidden z-50 overflow-hidden"
            >
              {navLinks.map((link, i) => (
                <m.div variants={itemVariants} key={i}>
                  <NavLink
                    to={link.path}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block py-3 text-lg font-medium border-b border-gray-100 dark:border-slate-800 ${
                        isActive ? "text-rose-600" : "text-gray-700 dark:text-gray-300 "
                      }`
                    }
                  >
                    {link.name}
                    
                  </NavLink>
                </m.div>
              ))}
              <m.button
                variants={itemVariants}
                onClick={() => {
                  navigate("/contact-us");
                  setOpen(false);
                }}
                className="mt-6 w-full py-3 bg-rose-500 text-white rounded-full font-bold"
              >
                Get in touch
              </m.button>
            </m.div>
          )}
        </AnimatePresence>
      </m.nav>

      {/* Spacer */}
      {isFixed && <div className="h-20"></div>}
    </div>
  );
};

export default Nav;
