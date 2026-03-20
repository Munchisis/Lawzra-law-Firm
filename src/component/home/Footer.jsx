import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import { m } from "framer-motion";
import { Github, Linkedin, Instagram, Send, XIcon } from "lucide-react";

const Footer = ({ theme }) => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <footer className="border-t border-slate-300 dark:border-slate-800 bg-slate-50 dark:bg-[#0f172a] transition-colors duration-300">
      <m.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="px-6 md:px-16 lg:px-24 xl:px-32 w-full text-sm text-slate-500 pt-16 dark:text-slate-400"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 mb-16">
          {/* Column 1: Brand & Socials */}
          <m.div
            variants={itemVariants}
            className="sm:col-span-2 lg:col-span-1"
          >
            <Link to="/" className="flex items-center gap-4 mb-6 group">
              <m.img
                whileHover={{ rotate: 8, scale: 1.1 }}
                src={theme === "dark" ? assets.logo_WB : assets.logo_02}
                alt="Lawzra Logo"
                className="w-14 h-14 object-contain transition-transform"
              />
              <div className="font-bold text-2xl tracking-tight text-slate-800 dark:text-white group-hover:text-indigo-600 transition-colors">
                LAWZRA LP
              </div>
            </Link>
            <p className="leading-relaxed max-w-sm">
              Leading the way in legal excellence, we are committed to providing
              unparalleled legal services with integrity, expertise, and
              personalized attention to every client.
            </p>

            <div className="flex gap-5 mt-8">
              {[
                {
                  icon: <XIcon size={18} />,
                  href: "https://x.com",
                  color: "hover:text-black dark:hover:text-white",
                },
                {
                  icon: <Github size={18} />,
                  href: "https://github.com",
                  color: "hover:text-slate-900 dark:hover:text-white",
                },
                {
                  icon: <Linkedin size={18} />,
                  href: "https://linkedin.com",
                  color: "hover:text-blue-700",
                },
                {
                  icon: <Instagram size={18} />,
                  href: "https://instagram.com",
                  color: "hover:text-pink-600",
                },
              ].map((social, i) => (
                <m.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, scale: 1.1 }}
                  className={`p-2 rounded-full bg-slate-200/50 dark:bg-slate-800/50 transition-colors ${social.color}`}
                >
                  {social.icon}
                </m.a>
              ))}
            </div>
          </m.div>

          {/* Column 2: Quick Links */}
          <m.div
            variants={itemVariants}
            className="flex flex-col lg:items-center"
          >
            <div className="flex flex-col space-y-4">
              <h2 className="font-bold text-slate-900 dark:text-white uppercase tracking-widest text-xs mb-2">
                Company
              </h2>
              <FooterLink to="/about-us">About us</FooterLink>
              <FooterLink to="/careers">Careers</FooterLink>
              <FooterLink to="/contact-us">Contact us</FooterLink>
              <FooterLink to="/cookie-policy">Cookie Policy</FooterLink>
              <FooterLink to="/privacy-policy">Privacy Policy</FooterLink>
              <FooterLink to="/terms-of-service">Terms of Service</FooterLink>
            </div>
          </m.div>

          {/* Column 3: Newsletter */}
          <m.div variants={itemVariants}>
            <h2 className="font-bold text-slate-900 dark:text-white uppercase tracking-widest text-xs mb-5">
              Subscribe to Insights
            </h2>
            <div className="space-y-5 max-w-sm">
              <p className="text-slate-500 dark:text-slate-400">
                Stay updated with the latest legal developments and firm news.
              </p>
              <div className="relative group">
                <input
                  className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl h-12 px-4 pr-12 outline-none focus:border-indigo-500 dark:focus:border-indigo-500 transition-all shadow-sm"
                  type="email"
                  placeholder="Your email address"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors cursor-pointer group-hover:scale-105 active:scale-95">
                  <Send size={18} />
                </button>
              </div>
            </div>
          </m.div>
        </div>

        {/* Bottom Copyright */}
        <m.div
          variants={itemVariants}
          className="border-t border-slate-200 dark:border-slate-800 py-10 flex flex-col md:flex-row justify-between items-center gap-4 text-center text-[11px] font-medium uppercase tracking-widest text-slate-400"
        >
          <p>© {new Date().getFullYear()} Lawzra LP. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="cursor-default">Lagos</span>
            <span className="cursor-default">Abuja</span>
            <span className="cursor-default">Umuahia</span>
          </div>
        </m.div>
      </m.div>
    </footer>
  );
};

// Helper Component for consistency
const FooterLink = ({ to, children }) => (
  <Link
    to={to}
    className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-all hover:translate-x-1 inline-block"
  >
    {children}
  </Link>
);

export default Footer;
