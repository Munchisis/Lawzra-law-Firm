import { MoveLeft, ShieldCheck, Cpu, Globe, Code } from "lucide-react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

const Tech = () => {
  const expertise = [
    { 
      title: "Tech Transactions & SaaS", 
      desc: "Drafting software licenses, SLAs, and complex development agreements.",
      icon: <Code size={18} className="text-green-500" />
    },
    { 
      title: "FinTech & Digital Payments", 
      desc: "Advising on regulatory hurdles for payment gateways and digital banking.",
      icon: <Cpu size={18} className="text-green-500" />
    },
    { 
      title: "Cybersecurity & Data Privacy", 
      desc: "Compliance with NITDA, NDPA, and international data protection standards.",
      icon: <ShieldCheck size={18} className="text-green-500" />
    },
    { 
      title: "Emerging Tech (AI & Web3)", 
      desc: "Guidance on Artificial Intelligence, Blockchain, and Smart Contract law.",
      icon: <Globe size={18} className="text-green-500" />
    },
    { 
      title: "Startup Advisory", 
      desc: "Full-cycle support for formation, venture funding (VC), and growth strategies.",
      icon: <ShieldCheck size={18} className="text-green-500" />
    },
    { 
      title: "Regulatory Compliance", 
      desc: "Liaising with NCC, NITDA, and other tech regulators for operational licensing.",
      icon: <Cpu size={18} className="text-green-500" />
    },
    { 
      title: "Intellectual Property in Tech", 
      desc: "Strategic protection of source code, patents, and digital trademarks.",
      icon: <Code size={18} className="text-green-500" />
    },
    { 
      title: "Cross-Border Tech Law", 
      desc: "Navigating international trade laws for global technology deployments.",
      icon: <Globe size={18} className="text-green-500" />
    }
  ];

  return (
    <>
      {/* Header Hero */}
      <div
        className="relative px-4 bg-no-repeat bg-cover pt-40 pb-24 overflow-hidden"
        style={{ backgroundImage: `url(${assets.aboutUs4})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4 text-white font-serif uppercase tracking-tight">
           Technology
          </h1>
          <div className="h-1 w-20 bg-green-500 mx-auto mb-6"></div>
          <p className="text-center max-w-2xl mx-auto text-slate-200 text-lg md:text-xl font-light">
            Full-service legal expertise tailored to navigate complex regulatory and commercial landscapes.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center px-4 md:px-10 lg:px-20 -mt-10 mb-20 relative z-20">
        <div className="w-full max-w-5xl bg-white dark:bg-slate-900 p-8 md:p-16 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl transition-colors duration-300">
          
          {/* Navigation */}
          <div className="mb-10">
            <Link 
              to="/practice-areas" 
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-green-600 transition-colors group px-4 py-2 bg-slate-50 dark:bg-slate-800 rounded-full border border-slate-100 dark:border-slate-700"
            >
              <MoveLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Back to Practice Areas
            </Link>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white text-center mb-6">
            Technology Law
          </h2>
          
          <p className="text-slate-600 dark:text-slate-300 text-lg md:text-xl leading-relaxed mb-12 text-center max-w-3xl mx-auto italic">
            "Providing forward-thinking legal counsel to startups, scale-ups, and established enterprises navigating the rapidly evolving digital economy."
          </p>

          {/* Expertise Section */}
          <div className="mt-16">
            <div className="flex items-center gap-4 mb-10">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white uppercase tracking-widest">
                Our Expertise
              </h3>
              <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800"></div>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              {expertise.map((item, i) => (
                <li key={i} className="flex gap-4 group">
                  <div className="mt-1 p-2 bg-green-50 dark:bg-green-900/20 rounded-lg group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div className="flex flex-col">
                    <strong className="text-slate-900 dark:text-slate-100 font-bold text-lg">
                      {item.title}
                    </strong>
                    <span className="text-slate-600 dark:text-slate-400 text-sm mt-1 leading-relaxed">
                      {item.desc}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Call to Action */}
          <div className="mt-20 flex flex-col items-center border-t border-slate-100 dark:border-slate-800 pt-12 text-center">
            <h4 className="text-slate-900 dark:text-white font-bold text-xl mb-4">Ready to secure your technology's future?</h4>
            <Link 
              to="/appointment" 
              className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-full font-bold transition-all active:scale-95 shadow-xl shadow-green-600/20 uppercase tracking-widest text-sm"
            >
              Launch Your Tech Venture
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tech;
