import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { m } from "framer-motion";
import { assets } from "../../assets/assets";

const Hero = () => {
  const navigate = useNavigate();
  const clientAvatars = [assets.profile, assets.profile1, assets.profile2]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden bg-linear-to-b from-black to-[#6f25b5] py-24 px-4 text-white dark:from-primary dark:to-gray-900">
      <m.div 
        variants={container} 
        initial="hidden" 
        animate="show" 
        className="flex flex-col items-center z-10"
      >
        {/* Client Badge */}
        <m.div variants={item} className="flex items-center gap-3 rounded-full border border-white/20 bg-white/5 p-1 pr-4 backdrop-blur-sm">
          <div className="flex -space-x-3">
            {clientAvatars.map((imgSrc, index) => (
              <img
                key={index}
                className="size-8 rounded-full border-2 border-indigo-900 object-cover"
                src={imgSrc}
                alt="Client"
              />
            ))}
          </div>
          <span className="text-xs font-medium tracking-wide">Over 10k cases settled</span>
        </m.div>

        {/* Headline */}
        <m.h1 variants={item} className="mt-8 max-w-4xl text-center text-4xl font-bold leading-tight tracking-tight md:text-7xl">
          Empower Your Legal Journey with <span className="text-indigo-400">Expert Guidance</span>
        </m.h1>

        {/* Subtext */}
        <m.p variants={item} className="mt-6 max-w-2xl text-center text-sm leading-relaxed text-slate-300 md:text-lg">
          Join thousands of satisfied clients who have successfully navigated their legal challenges with our dedicated team by their side.
        </m.p>

        {/* Buttons */}
        <m.div variants={item} className="mt-10 flex flex-wrap justify-center gap-4">
          <m.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate("/Appointment")}
            className="flex cursor-pointer items-center gap-2 rounded-lg bg-indigo-600 px-8 py-4 font-semibold text-white transition-colors duration-500 hover:bg-indigo-500 dark:border dark:border-indigo-400 dark:bg-transparent"
          >
            Get an Appointment
            <ArrowRight size={18} />
          </m.button>

          <m.button
            whileHover={{ scale: 1.03 }}
            className="group flex cursor-pointer items-center gap-3 rounded-lg px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all"
          >
            <span>Free Consultation</span>
            <span className="relative flex size-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex size-3 rounded-full bg-green-500"></span>
            </span>
          </m.button>
        </m.div>

        {/* Hero Image */}
        <m.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 w-full max-w-5xl px-4"
        >
          <img
            className="rounded-2xl border border-white/10 shadow-2xl shadow-indigo-500/20"
            src="https://assets.prebuiltui.com/images/components/hero-section/hero-meeting-image.png"
            alt="Legal Consultation"
          />
        </m.div>
      </m.div>
    </section>
  );
};

export default Hero;
