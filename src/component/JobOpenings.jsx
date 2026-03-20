import { useState } from "react";
import { ChevronDown, MapPin, Briefcase, Clock } from "lucide-react";
import { m, AnimatePresence } from "framer-motion";

const openings = [
  {
    id: 1,
    title: "Senior Associate (Corporate Law)",
    location: "Lagos, NG",
    type: "Full-time",
    experience: "5-7 Years",
    description: "We are seeking a highly experienced Senior Associate to lead corporate transactions, mergers, and acquisitions. You will be responsible for advising high-net-worth clients and managing junior associates.",
  },
  {
    id: 2,
    title: "Legal Intern",
    location: "Abuja / Remote",
    type: "Internship",
    experience: "Entry Level",
    description: "Perfect for recent LL.B graduates. You will assist in legal research, drafting court processes, and attending client meetings under the supervision of our Partners.",
  },
  {
    id: 3,
    title: "Litigation Specialist",
    location: "Umuahia, NG",
    type: "Contract",
    experience: "3+ Years",
    description: "Focusing on civil and commercial litigation. The ideal candidate must have a proven track record in Nigerian courts and exceptional advocacy skills.",
  }
];

const JobOpenings = () => {
  const [activeId, setActiveId] = useState(null);

  const toggleAccordion = (id) => {
  setActiveId(prev => prev === id ? null : id);
};

  return (
    <section className="dark:bg-primary py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold dark:text-white text-slate-700 mb-4">Current Openings</h2>
          <p className="text-slate-500 dark:text-slate-400">Select a role to view requirements. If you don't see a fit, use the form above for a general application.</p>
        </div>

        <div className="space-y-4">
          {openings.map((job) => (
            <div 
              key={job.id} 
              className={`border border-dark-text dark:border-white/10 rounded-2xl overflow-hidden transition-all duration-300 ${activeId === job.id ? 'dark:bg-white/5 dark:border-green-500/50 border-highlight/50  dark:shadow-[0_0_20px_rgba(34,197,94,0.1)]' : 'bg-transparent dark:hover:bg-white/5 hover:bg-gray-100 hover:border-0 shadow-indigo-800'}`}
            >
              {/* Header */}
              <button 
                onClick={() => toggleAccordion(job.id)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <div className="flex-1">
                  <h3 className="{text-xl font-semibold dark:text-white text-slate-600 mb-2}">{job.title}</h3>
                  <div className="flex flex-wrap gap-4 text-xs text-slate-400">
                    <span className="flex items-center gap-1"><MapPin size={14} className="dark:text-green-500"/> {job.location}</span>
                    <span className="flex items-center gap-1"><Briefcase size={14} className="dark:text-green-500"/> {job.type}</span>
                    <span className="flex items-center gap-1"><Clock size={14} className="dark:text-green-500"/> {job.experience}</span>
                  </div>
                </div>
                <m.div
                  animate={{ rotate: activeId === job.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="text-slate-400" />
                </m.div>
              </button>

              {/* Expandable Content */}
              <AnimatePresence>
                {activeId === job.id && (
                  <m.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-8 text-slate-300 text-sm leading-relaxed border-t border-white/5 pt-4">
                      <p className="mb-6">{job.description}</p>
                      <button 
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="text-slate-500 dark:text-green-400 font-semibold hover:text-green-300 transition-colors flex items-center gap-2"
                      >
                        Apply for this position ↑
                      </button>
                    </div>
                  </m.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobOpenings;
