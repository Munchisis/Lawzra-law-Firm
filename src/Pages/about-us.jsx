import { assets } from "../assets/assets";
import { companyGoals, aboutSections } from "../data/constants";
import { m, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const AboutUs = () => {
  const containerRef = useRef(null);

  // 1. Track scroll progress specifically for this hero section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // 2. Map scroll progress (0 to 1) to a Y-axis movement (e.g., 0px to 200px)
  // This makes the background move slower than the scroll, creating depth
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <div className="pb-20">
      {/* Hero Header */}
       <div
        ref={containerRef}
        className="relative h-[60vh] overflow-hidden flex flex-col items-center justify-center text-light-text px-4"
      >
      <m.div
        className="absolute inset-0 -z-20 bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${assets.aboutUs4})`, y: backgroundY // Apply the parallax transform here
        }}
      />
         {/* Overlay */}
        {/* Floating Text Content */}
        <m.div style={{ y: textY }} className="text-center z-10">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="max-w-2xl mx-auto text-lg">
            We are a Full-Service Law firm with a depth of proven experience and
            expertise in diverse areas of the law
          </p>
        </m.div>
      </div>
      {/* 1. Vision/Mission/Values Map */}
      <m.section className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20 mt-20 max-w-7xl mx-auto px-6">
        {companyGoals.map((goal, index) => (
          <m.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            // Each card waits 0.2s longer than the previous one
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="text-sm text-slate-600 dark:text-slate-300"
          >
            <h1 className="text-xs font-bold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase">
              {goal.title}
            </h1>
            <h2 className="text-xl font-medium text-slate-800 dark:text-slate-100 mt-1">
              {goal.subtitle}
            </h2>
            <p className="mt-4 border-t border-gray-200 dark:border-gray-700 pt-4 leading-relaxed">
              {goal.description}
            </p>
          </m.div>
        ))}
      </m.section>

      {/* 2. Identity & Awards Sections Map */}
      {aboutSections.map((section, index) => (
        <m.section
          key={section.id}
          initial={{ opacity: 0, x: section.reverse ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          className={`flex flex-col ${section.reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center justify-center gap-16 mb-20 max-w-7xl mx-auto px-6`}
        >
          <div className="text-sm text-slate-600 max-w-lg dark:text-slate-300">
            <h1 className="text-2xl uppercase font-bold text-slate-800 dark:text-slate-100 tracking-wide">
              {section.title}
            </h1>
            <div className="w-20 h-1 mt-2 rounded-full bg-gradient-to-r from-indigo-600 to-[#DDD9FF]"></div>
            <div className="mt-8 space-y-4 leading-relaxed">
              {section.paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
          <div className="relative shadow-2xl shadow-indigo-500/20 rounded-2xl overflow-hidden shrink-0 w-full md:w-1/2">
            <img
              className="w-full h-[400px] object-cover"
              src={section.image}
              alt={section.title}
            />
          </div>
        </m.section>
      ))}
    </div>
  );
};

export default AboutUs;
