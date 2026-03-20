import { useState } from "react";
import toast from "react-hot-toast";
import { m } from "framer-motion";
import JobOpenings from "../component/JobOpenings";
import LifeAtLawzra from "../component/LifeAtLawzra";
import AnimatedPage from "../component/AnimatedPage";
import { assets } from "../assets/assets";

const Careers = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const file = formData.get("attachment");

    // --- File Validation ---
    if (file && file.size > 0) {
      const maxSize = 5 * 1024 * 1024; // 5MB limit for Web3Forms
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];

      if (file.size > maxSize) {
        toast.error("File is too large! Maximum size is 5MB.");
        return;
      }

      if (!allowedTypes.includes(file.type)) {
        toast.error("Invalid file type. Please upload a PDF or Word document.");
        return;
      }
    }

    setIsSubmitting(true);
    formData.append("access_key", "c3237d9e-4d82-4d94-99c6-2f80c95d5f60");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        toast.success("Application submitted successfully!");
        event.target.reset();
      } else {
        toast.error(data.message || "Submission failed.");
      }
    } catch (error) {
      toast.error(error.message || "An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };
  const clientAvatars = [
    assets.profile3, 
    assets.profile2, 
    assets.profile
  ];

  return (
    <AnimatedPage>
      {/* Visual Header Section */}
      <m.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <LifeAtLawzra />
      </m.section>

      <section className="relative dark:bg-primary min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-10 gap-12 lg:gap-20 overflow-hidden">
        {/* Pulsing Background Glow */}
        <m.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none w-[500px] h-[500px] dark:bg-green-500/20 rounded-full blur-[120px]"
        />

        {/* Left Content */}
        <m.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center md:text-left z-10"
        >
          <div className="flex items-center p-1.5 rounded-full border border-gray-500 dark:border-green-900/50 dark:bg-green-900/10 bg-gray-700 mb-6 text-xs w-fit mx-auto md:mx-0">
            <div className="flex items-center -space-x-3 mr-4">
              {clientAvatars.map((imgSrc, index) => (
                <img
                  key={index}
                  className="size-8 rounded-full border-2 dark:border-black border-white object-cover"
                  src={imgSrc}
                  alt="Team member"
                />
              ))}
            </div>
            <p className="text-slate-200 pr-2">
              Join community of legal professionals
            </p>
          </div>

          <h1 className="font-medium text-4xl md:text-5xl bg-gradient-to-r max-md:mx-auto dark:from-white to-green-200 bg-clip-text dark:text-transparent text-slate-700 max-w-xl leading-tight">
            INTERESTED IN JOINING THE LAWZRA TEAM?
          </h1>

          <div className="mt-8 space-y-4 dark:text-slate-300 text-slate-500 max-w-md mx-auto md:mx-0">
            <p className="text-sm leading-relaxed">
              Thank you for your interest in joining our organisation. Please
              complete the form and upload your CV and cover letter.
            </p>
            <p className="text-sm border-l-2 border-highlight dark:border-green-600 pl-4 italic">
              Issues submitting? Email us at{" "}
              <span className="text-highlight dark:text-green-400 font-semibold">
                careers@lawzra.com
              </span>
            </p>
          </div>
        </m.div>

        {/* Right Form */}
        <m.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full max-w-lg z-10 bg-white dark:bg-white/5 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-2xl p-8 shadow-2xl"
        >
          <form onSubmit={onSubmit} className="space-y-6">
            <div>
              <label className="block dark:text-light-text text-slate-500 text-sm mb-2 tracking-widest uppercase">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Ola Oluwajayi"
                className="w-full bg-slate-50 dark:bg-white/5 border dark:border-white/10 border-slate-300 rounded-lg px-4 py-3 dark:text-white text-slate-700 focus:ring-2 focus:ring-green-500 outline-none transition"
              />
            </div>

            <div>
              <label className="block dark:text-light-text text-slate-500 text-sm mb-2 tracking-widest uppercase">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="oluwajayi@example.com"
                className="w-full bg-slate-50 dark:bg-white/5 border dark:border-white/10 border-slate-300 rounded-lg px-4 py-3 dark:text-white text-slate-700 focus:ring-2 focus:ring-green-500 outline-none transition"
              />
            </div>

            <div>
              <label className="block dark:text-light-text text-slate-500 text-sm mb-2 tracking-widest uppercase">
                Upload CV (PDF, DOC)
              </label>
              <input
                type="file"
                name="attachment"
                accept=".pdf,.doc,.docx"
                required
                className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100 cursor-pointer"
              />
            </div>

            <div>
              <label className="block dark:text-light-text text-slate-500 text-sm mb-2 tracking-widest uppercase">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Tell us about yourself..."
                rows="3"
                required
                className="w-full bg-slate-50 dark:bg-white/5 border dark:border-white/10 border-slate-300 rounded-lg px-4 py-3 dark:text-white text-slate-700 focus:ring-2 focus:ring-green-500 outline-none transition resize-none"
              ></textarea>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
              <p className="text-xs text-slate-400">
                By applying, you agree to our{" "}
                <span className="underline cursor-pointer">Privacy Policy</span>
                .
              </p>
              <m.button
                whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                type="submit"
                disabled={isSubmitting}
                className="flex items-center justify-center gap-2 w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-bold px-10 py-3 rounded-full transition-all disabled:opacity-70 shadow-lg disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <span>Sending...</span>
                  </>
                ) : (
                  "Apply Now"
                )}
              </m.button>
            </div>
          </form>
        </m.div>
      </section>

      <m.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="w-1/2 ml-25 rounded-3xl shadow-lg dark:shadow-indigo-900/80 mb-20">
          <JobOpenings />
        </div>
      </m.div>
    </AnimatedPage>
  );
};

export default Careers;
