import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { practiceAreasData } from "../../data/practiceAreas"; // Ensure your data structure matches { title, description, expertise: [], image, path }
import { assets } from "../../assets/assets";
import { MoveLeft, CheckCircle2, Calendar } from "lucide-react";
import { m } from "framer-motion";
import AnimatedPage from "../AnimatedPage";

const PracticeAreaDetail = () => {
  const { areaPath } = useParams();
  const navigate = useNavigate();

  // Find data or fallback
  const initialArea = practiceAreasData.find((a) => a.path === areaPath) || practiceAreasData[0];
  const [active, setActive] = useState(initialArea);

  useEffect(() => {
    const newArea = practiceAreasData.find((a) => a.path === areaPath);
    if (newArea) {
      setActive(newArea);
    }
  }, [areaPath]);

  if (!active) return null;

  return (
    <AnimatedPage>
      <div className="bg-white dark:bg-primary min-h-screen pb-20">
        {/* Dynamic Hero Header */}
        <div
          className="relative px-4 bg-no-repeat bg-cover pt-40 pb-24 overflow-hidden transition-all duration-700"
          style={{ 
            backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${active.image || assets.aboutUs4})` 
          }}
        >
          <div className="relative z-10 text-center">
            <m.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-4xl md:text-6xl font-bold mb-4 text-white font-serif uppercase tracking-tight"
            >
              Banking & Finance
            </m.h1>
            <div className="h-1 w-20 bg-green-500 mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-slate-200 text-lg md:text-xl font-light">
              Specialized legal advocacy tailored for the evolving commercial landscape.
            </p>
          </div>
        </div>

        {/* Content Container */}
        <div className="max-w-6xl mx-auto px-6 -mt-10 relative z-20">
          <main className="w-full bg-white dark:bg-slate-900 p-8 md:p-16 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl">
            
            {/* Back Button */}
            <div className="mb-10">
              <Link 
                to="/practice-areas" 
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-green-600 transition-colors group px-4 py-2 bg-slate-50 dark:bg-slate-800 rounded-full border border-slate-100 dark:border-slate-700"
              >
                <MoveLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                BACK TO PRACTICE AREAS
              </Link>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              {active.title}
            </h2>
            
            <p className="text-slate-600 dark:text-slate-300 text-lg md:text-xl leading-relaxed mb-12 italic">
              {active.description}
            </p>

            {/* Expertise Grid */}
            <div className="mt-16">
              <div className="flex items-center gap-4 mb-10">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white uppercase tracking-widest text-sm">
                  Core Expertise
                </h3>
                <div className="flex-1 h-px bg-slate-100 dark:bg-slate-800"></div>
              </div>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                {active.expertise?.map((item, index) => (
                  <m.li 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    key={index} 
                    className="flex items-start gap-3 group"
                  >
                    <CheckCircle2 size={20} className="text-green-500 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-slate-700 dark:text-slate-400 font-medium group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                      {item}
                    </span>
                  </m.li>
                ))}
              </ul>
            </div>
            
            {/* Context-Aware CTA */}
            <m.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="mt-20 p-8 md:p-12 bg-slate-900 dark:bg-slate-800/50 rounded-3xl text-center shadow-2xl relative overflow-hidden border border-slate-800"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-500/10 blur-3xl rounded-full"></div>
              <h4 className="text-white mb-4 font-bold text-2xl relative z-10">
                Ready to secure your interests in <span className="text-green-400">{active.title}</span>?
              </h4>
              <p className="text-slate-400 mb-8 max-w-lg mx-auto relative z-10">
                Schedule a private session with our specialists to discuss your unique legal requirements.
              </p>
              <button 
                onClick={() => navigate('/appointment')}
                className="relative z-10 inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-full font-bold transition-all transform active:scale-95 shadow-xl shadow-green-600/20 uppercase tracking-widest text-sm"
              >
                <Calendar size={18} />
                Book Private Consultation
              </button>
            </m.div>
          </main>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default PracticeAreaDetail;
