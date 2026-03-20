import { m } from "framer-motion";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const CookiePolicy = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* Hero Header */}
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[45vh] flex items-center justify-center bg-slate-900 overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40 scale-110"
          style={{ backgroundImage: `url(${assets.cookiePolicy})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

        <div className="relative z-10 text-center px-6">
          <m.span
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-green-500 font-bold tracking-[0.3em] uppercase text-xs mb-4 block"
          >
            Legal Transparency
          </m.span>
          <m.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-serif font-bold text-white"
          >
            Cookie Policy
          </m.h1>
        </div>
      </m.div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-8 py-20">
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="prose prose-slate dark:prose-invert max-w-none"
        >
          {/* Introduction */}
          <section className="mb-16">
            <h2 className="text-3xl font-serif font-bold text-slate-800 dark:text-white mb-6">
              1. Introduction
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
              This Cookie Policy explains how{" "}
              <strong>Lawzra Partnership</strong> ("we", "us", and "our") uses
              cookies and similar technologies to recognize you when you visit
              our website. It explains what these technologies are and why we
              use them, as well as your rights to control our use of them.
            </p>
          </section>

          {/* Defining Cookies */}
          <section className="mb-16 group">
            <h2 className="text-3xl font-serif font-bold text-slate-800 dark:text-white mb-6 border-l-4 border-green-500 pl-6">
              2. What Are Cookies?
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Cookies are small data files that are placed on your computer or
              mobile device when you visit a website. Cookies are widely used by
              website owners in order to make their websites work, or to work
              more efficiently, as well as to provide reporting information.
            </p>
            <p className="text-slate-600 dark:text-slate-400 mt-4 leading-relaxed">
              Cookies set by the website owner are called{" "}
              <strong>"first-party cookies"</strong>. Cookies set by parties
              other than the website owner are called{" "}
              <strong>"third-party cookies"</strong>. Third-party cookies enable
              third-party features or functionality to be provided on or through
              the website (e.g., advertising, interactive content, and
              analytics).
            </p>
          </section>

          {/* Breakdown of Cookie Types */}
          <section className="mb-16 bg-slate-50 dark:bg-slate-900/40 p-10 rounded-[2rem] border border-slate-100 dark:border-slate-800">
            <h2 className="text-3xl font-serif font-bold text-slate-800 dark:text-white mb-8">
              3. Types of Cookies We Use
            </h2>

            <div className="space-y-8">
              <div>
                <h4 className="text-green-600 dark:text-green-400 font-bold uppercase text-xs tracking-widest mb-2">
                  Essential Cookies
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  These are strictly necessary to provide you with services
                  available through our Website and to use some of its features,
                  such as access to secure areas. Because these cookies are
                  strictly necessary to deliver the Website to you, you cannot
                  refuse them without impacting how our Website functions.
                </p>
              </div>

              <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
                <h4 className="text-indigo-600 dark:text-indigo-400 font-bold uppercase text-xs tracking-widest mb-2">
                  Performance & Analytics
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  These cookies collect information that is used either in
                  aggregate form to help us understand how our Website is being
                  used or how effective our marketing campaigns are, or to help
                  us customize our Website for you.
                </p>
              </div>

              <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
                <h4 className="text-amber-600 dark:text-amber-400 font-bold uppercase text-xs tracking-widest mb-2">
                  Functionality Cookies
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  These are used to enhance the performance and functionality of
                  our Website but are non-essential to their use. However,
                  without these cookies, certain functionality (like videos or
                  appointment forms) may become unavailable.
                </p>
              </div>
            </div>
          </section>

          {/* Managing Cookies */}
          <section className="mb-16">
            <h2 className="text-3xl font-serif font-bold text-slate-800 dark:text-white mb-6">
              4. How Can I Control Cookies?
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              You have the right to decide whether to accept or reject cookies.
              You can set or amend your web browser controls to accept or refuse
              cookies. If you choose to reject cookies, you may still use our
              website though your access to some functionality and areas of our
              website may be restricted.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-medium">
              <div className="p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 dark:text-gray-400">
                <span className="text-slate-800 dark:text-white">
                  Browser Controls:
                </span>{" "}
                Set preferences via Chrome, Safari, Firefox, etc.
              </div>
              <div className="p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 dark:text-gray-400">
                <span className="text-slate-800 dark:text-white">Opt-out:</span>{" "}
                Use "Do Not Track" headers where available.
              </div>
            </div>
          </section>

          {/* Final Contact */}
          <section className="pt-12 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-2xl font-serif font-bold text-slate-800 dark:text-white mb-4">
              5. Updates to This Policy
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-8 leading-relaxed">
              We may update this Cookie Policy from time to time in order to
              reflect, for example, changes to the cookies we use or for other
              operational, legal, or regulatory reasons. Please therefore
              re-visit this Cookie Policy regularly to stay informed about our
              use of cookies and related technologies.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-slate-900 text-white p-8 rounded-2xl">
              <div>
                <p className="text-xs uppercase tracking-widest font-bold text-green-500">
                  Contact Counsel
                </p>
                <p className="text-lg">Questions regarding this policy?</p>
              </div>
              <button
                onClick={() => navigate("/appointment")}
                className="px-8 py-3 bg-white text-slate-900 rounded-full font-bold hover:bg-green-500 hover:text-white transition-all"
              >
                Contact Legal
              </button>
            </div>
          </section>
        </m.div>
      </div>
    </div>
  );
};

export default CookiePolicy;
