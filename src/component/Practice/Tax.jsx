import { MoveLeft, Banknote, Landmark, ShieldCheck, Globe, Scale, FileText, TrendingDown, CheckCircle2, Gavel } from "lucide-react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

const Tax = () => {
  const expertise = [
    {
      title: "Tax Planning & Optimization",
      desc: "Developing effective strategies to minimize liabilities and enhance financial efficiency.",
      icon: <TrendingDown size={18} className="text-green-500" />,
    },
    {
      title: "Regulatory Compliance",
      desc: "Ensuring adherence to FIRS/SIRS requirements and statutory reporting.",
      icon: <CheckCircle2 size={18} className="text-green-500" />,
    },
    {
      title: "Tax Dispute Resolution",
      desc: "Representing clients in audits, appeals, and litigation before Tax Appeal Tribunals.",
      icon: <Gavel size={18} className="text-green-500" />,
    },
    {
      title: "International Taxation",
      desc: "Advising on transfer pricing, double taxation treaties, and cross-border compliance.",
      icon: <Globe size={18} className="text-green-500" />,
    },
    {
      title: "Corporate Tax Advisory",
      desc: "Strategic support for M&A, restructuring, and tax-efficient operations.",
      icon: <Landmark size={18} className="text-green-500" />,
    },
    {
      title: "Individual & Estate Tax",
      desc: "Personalized wealth management and generational estate tax compliance.",
      icon: <Banknote size={18} className="text-green-500" />,
    },
    {
      title: "Incentives & Credits",
      desc: "Securing pioneer status, tax holidays, and available industry-specific credits.",
      icon: <ShieldCheck size={18} className="text-green-500" />,
    },
    {
      title: "Policy & Legislative Analysis",
      desc: "Monitoring Finance Act updates to provide proactive advice on evolving laws.",
      icon: <FileText size={18} className="text-green-500" />,
    },
  ];

  return (
    <>
      {/* Header Hero */}
      <div
        className="relative px-4 bg-no-repeat bg-cover pt-40 pb-24 overflow-hidden"
        style={{ backgroundImage: `url(${assets.tax2 || assets.aboutUs4})` }}
      >
        <div className="absolute inset-0 bg-black/75"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white font-serif uppercase tracking-tight">
           Taxation
          </h1>
          <div className="h-1 w-20 bg-green-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-slate-200 text-lg md:text-xl font-light">
            Sophisticated legal counsel ensuring total compliance while optimizing financial outcomes through strategic planning.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center px-4 md:px-10 lg:px-20 -mt-10 mb-20 relative z-20">
        <div className="w-full max-w-6xl bg-white dark:bg-slate-900 p-8 md:p-16 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl transition-colors duration-300">
          
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
            Taxation Law
          </h2>

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-16 leading-relaxed text-center max-w-4xl mx-auto">
            Navigating the complexities of fiscal policy requires precision. We provide corporations and individuals with the clarity needed to manage tax risks effectively.
          </p>

          {/* Expertise Grid */}
          <div className="mt-8">
            <div className="flex items-center gap-4 mb-12">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white uppercase tracking-widest">
                Our Expertise
              </h3>
              <div className="flex-1 h-px bg-slate-100 dark:bg-slate-800"></div>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              {expertise.map((item, i) => (
                <li key={i} className="flex gap-4 group">
                  <div className="mt-1 p-2 bg-green-50 dark:bg-green-900/20 rounded-lg group-hover:scale-110 transition-transform h-fit">
                    {item.icon}
                  </div>
                  <div className="flex flex-col">
                    <strong className="text-slate-900 dark:text-slate-100 font-bold text-lg leading-tight">
                      {item.title}
                    </strong>
                    <span className="text-slate-600 dark:text-slate-400 text-sm mt-2 leading-relaxed">
                      {item.desc}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Call to Action */}
          <div className="mt-20 text-center border-t border-slate-100 dark:border-slate-800 pt-12">
            <h4 className="text-slate-900 dark:text-white font-bold text-xl mb-6">Need a strategic review of your tax position?</h4>
            <Link
              to="/appointment"
              className="inline-block bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-full font-bold transition-all active:scale-95 shadow-xl shadow-green-600/20 uppercase tracking-widest text-sm"
            >
              Optimize Your Tax Strategy
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tax;
