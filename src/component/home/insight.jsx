import { homeInsightsData } from "../../assets/assets";
import { ArrowRight, Calendar } from "lucide-react"; // Added Calendar icon
import { m } from "framer-motion";
import { Link } from "react-router-dom";

const Insight = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative bg-linear-to-b from-gray-50 to-gray-100 dark:from-slate-950 dark:to-slate-900 py-20 mx-4 md:mx-10 lg:mx-20 rounded-[2.5rem] overflow-hidden shadow-sm border border-white/20">
      
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-indigo-100/50 dark:bg-indigo-100/10 blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto px-8 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between gap-10">
          <div className="max-w-2xl">
            <m.div 
              initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
              className="inline-block px-4 py-1.5 mb-6 text-[11px] font-bold tracking-[0.2em] uppercase bg-indigo-600 text-white dark:bg-indigo-900 rounded-full"
            >
              Latest Research
            </m.div>
            <m.h1
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={textVariants}
              className="text-slate-800 dark:text-white text-3xl md:text-4xl lg:text-6xl font-semibold tracking-tight leading-tight"
            >
              Insights <span className="text-indigo-600">.</span>
            </m.h1>
            <m.p
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={textVariants}
              className="text-slate-500 dark:text-slate-400 mt-6 text-lg leading-relaxed max-w-lg"
            >
              Deep-dive analysis into the legal shifts shaping our world, curated by our global legal experts.
            </m.p>
          </div>

          <m.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={textVariants}>
            <Link
              to="/insights"
              className="group flex items-center gap-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-10 py-5 rounded-full font-bold transition-all hover:shadow-2xl hover:shadow-indigo-500/20 active:scale-95"
            >
              View Archive
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
            </Link>
          </m.div>
        </div>

        {/* Cards Grid */}
        <m.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-16"
        >
          {homeInsightsData.slice(0, 3).map((area, index) => ( // Show first 3 for elegance
            <m.div
              key={area.id || index}
              variants={itemVariants}
              whileHover={{ y: -12 }}
              className="group bg-white dark:bg-slate-900/40 backdrop-blur-sm border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden flex flex-col hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500"
            >
              {/* Image Container with Zoom Effect */}
              <div className="relative h-56 overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src={area.image}
                  alt={area.title}
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors" />
              </div>
              
              <div className="p-7 flex flex-col grow">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] uppercase tracking-widest text-indigo-600 dark:text-highlight font-extrabold px-2.5 py-1 bg-indigo-50 dark:bg-indigo-900/30 rounded-md">
                    {area.title}
                  </span>
                  <span className="flex items-center gap-1.5 text-[11px] text-slate-400 font-medium">
                    <Calendar className="w-3.5 h-3.5" />
                    Jan 20, 2026
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-800 dark:text-light-text mb-3 line-clamp-2 group-hover:text-indigo-600 dark:group-hover:text-white transition-colors">
                  Navigating the Complexities of Global Trade Laws
                </h3>

                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed line-clamp-3 mb-8">
                  {area.description}
                </p>

                <div className="mt-auto pt-5 border-t border-slate-100 dark:border-slate-800">
                  <span className="inline-flex items-center gap-2 text-slate-900 dark:text-white text-xs font-black uppercase tracking-wider group-hover:gap-4 transition-all">
                    Read Full Case
                    <ArrowRight className="w-4 h-4 text-indigo-500" />
                  </span>
                </div>
              </div>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
};

export default Insight;
