import { useNavigate } from "react-router-dom";
import { ArrowRight, Scale } from "lucide-react";
import { practiceAreasCard, assets } from "../assets/assets";
import { m } from "framer-motion";
import AnimatedPage from "../component/AnimatedPage";

const PracticeAreas = () => {
  const navigate = useNavigate();

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <AnimatedPage>
      <div className="pb-24 bg-slate-50 dark:bg-slate-950 min-h-screen">
        {/* Hero Section */}
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${assets.aboutUs4})`,
          }}
          className="bg-cover bg-center h-80 flex flex-col items-center justify-center px-6"
        >
          <m.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative z-10 text-center"
          >
            <h1 className="text-white text-5xl md:text-7xl font-serif font-medium mb-4">
              Practice Areas
            </h1>
            <p className="text-slate-200 mt-2 max-w-2xl mx-auto text-lg leading-relaxed">
              Explore our diverse practice areas where our legal experts provide
              tailored solutions to meet your needs.
            </p>
          </m.div>
        </div>

        {/* Grid Cards with Staggered Animation */}
        <div className="max-w-7xl mx-auto px-6 mt-20">
          <m.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {practiceAreasCard.map((area) => (
              <m.div
                variants={item}
                key={area.path}
                onClick={() => navigate(`/practice-areas/${area.path}`)}
                className="group flex flex-col bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border border-slate-200 dark:border-slate-800 cursor-pointer"
              >
                {/* Image with Zoom */}
                <div className="h-48 overflow-hidden relative">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    src={area.image}
                    alt={area.title}
                  />
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-800/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <Scale
                      size={16}
                      className="text-indigo-600 dark:text-green-500"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg text-slate-900 dark:text-slate-100 font-bold mb-4 line-clamp-2">
                    {area.title}
                  </h3>
                  <div className="mt-auto">
                    <span className="flex items-center gap-2 text-sm font-semibold text-indigo-600 dark:text-green-500 group-hover:gap-4 transition-all">
                      View Expertise <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </m.div>
            ))}
          </m.div>
        </div>

        {/* Call to Action Section */}
        <section className="max-w-5xl mx-auto px-6 mt-32 text-center bg-slate-900 dark:bg-slate-800 p-12 rounded-3xl text-white">
          <h2 className="text-3xl font-serif mb-4">
            Need Specialized Legal Counsel?
          </h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Our partners are ready to discuss your specific requirements and
            develop a strategic approach to your case.
          </p>
          <button
            onClick={() => navigate("/appointment")}
            className="bg-green-600 hover:bg-green-500 text-white px-10 py-4 rounded-full font-bold transition-all active:scale-95 shadow-lg cursor-pointer"
          >
            Book a Consultation
          </button>
        </section>
      </div>
    </AnimatedPage>
  );
};

export default PracticeAreas;
