import { m } from "framer-motion";
import { assets } from "../assets/assets";
import { Scale, ShieldAlert, Gavel, Globe } from "lucide-react"; 
const TermsOfService = () => {
  const lastUpdated = "March 12, 2026";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* Hero Header */}
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-64 flex flex-col items-center justify-center bg-slate-900 overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${assets.termsOfService})` }} // Reuse or change asset
        />
        <div className="absolute inset-0 bg-linear-to-t from-slate-950 to-transparent" />
        <m.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="relative z-10 text-4xl md:text-6xl font-serif font-bold text-white text-center"
        >
          Terms of Service
        </m.h1>
      </m.div>

      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Sidebar: Quick Summary (UX Upgrade) */}
          <aside className="lg:w-1/3 order-2 lg:order-1">
            <div className="sticky top-24 space-y-6">
              <div className="p-8 bg-slate-50 dark:bg-slate-900 rounded-4xl border border-slate-100 dark:border-slate-800">
                <h3 className="text-rose-500 font-bold uppercase text-xs tracking-widest mb-6">
                  Terms at a Glance
                </h3>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <Scale className="text-slate-400 shrink-0" size={20} />
                    <p className="text-xs text-slate-500 italic">
                      This is not legal advice and does not create an
                      attorney-client relationship.
                    </p>
                  </li>
                  <li className="flex gap-4">
                    <ShieldAlert
                      className="text-slate-400 shrink-0"
                      size={20}
                    />
                    <p className="text-xs text-slate-500 italic">
                      Content is "As-Is". We aren't liable for site errors or
                      external links.
                    </p>
                  </li>
                  <li className="flex gap-4">
                    <Gavel className="text-slate-400 shrink-0" size={20} />
                    <p className="text-xs text-slate-500 italic">
                      Governed by Nigerian Law. Disputes are settled via
                      Arbitration in Lagos.
                    </p>
                  </li>
                </ul>
                <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800">
                  <a
                    href="/TermsOfService.pdf"
                    target="_blank"
                    className="text-xs font-bold text-rose-500 hover:underline"
                  >
                    Download PDF Copy →
                  </a>
                </div>
              </div>
            </div>
          </aside>

          {/* Right Side: Full Legal Content */}
          <m.main
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:w-2/3 order-1 lg:order-2 space-y-12 text-slate-700 dark:text-slate-300 leading-relaxed"
          >
            <header className="mb-12 border-b border-slate-200 dark:border-slate-800 pb-8">
              <p className="text-xs text-slate-400 mb-2">
                Effective Date: {lastUpdated}
              </p>
              <h2 className="text-slate-900 dark:text-white text-lg font-serif italic">
                Please read these terms carefully before using our digital
                platform.
              </h2>
            </header>

            {/* Sections */}
            {[
              {
                num: "1. Acceptance of Terms",
                content:
                  "By accessing, browsing, or using the Lawzra LP website ('the Site'), you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy.",
              },
              {
                num: "2. No Attorney-Client Relationship",
                content:
                  "The materials on this Site are for informational purposes only. Receipt of information from this Site does not constitute an attorney-client relationship. You should seek licensed professional counsel before acting on any info here.",
                alert:
                  "Warning: Unsolicited emails sent to us do not create a privilege.",
              },
              {
                num: "3. Intellectual Property",
                content:
                  "All text, logos, and graphics are the exclusive property of Lawzra LP. Unauthorized use of our trademarks or content is strictly prohibited under Nigerian Copyright Laws.",
              },
              {
                num: "4. Limitation of Liability",
                content:
                  "THE SITE IS PROVIDED 'AS IS'. In no event shall Lawzra LP be liable for any incidental or consequential damages arising out of your use of the Site.",
                bold: true,
              },
            ].map((section, idx) => (
              <m.section key={idx} variants={sectionVariants} className="group">
                <h3 className="text-2xl font-serif font-bold mb-4 text-slate-900 dark:text-white group-hover:text-rose-500 transition-colors">
                  {section.num}
                </h3>
                <p
                  className={`${section.bold ? "font-bold uppercase text-xs tracking-wide leading-6" : ""}`}
                >
                  {section.content}
                </p>
                {section.alert && (
                  <div className="mt-4 bg-amber-50 dark:bg-amber-900/10 p-4 border-l-4 border-amber-400 text-xs italic text-amber-800 dark:text-amber-200 rounded-r-xl">
                    {section.alert}
                  </div>
                )}
              </m.section>
            ))}

            {/* Arbitration Section (Unique Styling) */}
            <m.section
              variants={sectionVariants}
              className="p-8 bg-slate-900 text-white rounded-4xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <Globe className="text-rose-500" size={24} />
                <h3 className="text-xl font-serif font-bold">
                  5. Governing Law
                </h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                These Terms are governed by the laws of the **Federal Republic
                of Nigeria**. Any dispute arising shall be settled through
                binding arbitration in **Lagos, Nigeria**, in accordance with
                the Arbitration and Conciliation Act.
              </p>
            </m.section>

            <m.footer
              variants={sectionVariants}
              className="pt-10 text-center lg:text-left"
            >
              <p className="text-sm">
                Questions? Contact us:{" "}
                <a
                  href="mailto:info@lawzra.com"
                  className="text-rose-500 font-bold hover:underline"
                >
                  info@lawzra.com
                </a>
              </p>
            </m.footer>
          </m.main>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
